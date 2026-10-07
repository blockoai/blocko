import { sha256Hex, verifyProxySignature } from "./signature";

export interface Env {
  DB: D1Database;
  SHOPIFY_API_SECRET?: string;
  DEV_SKIP_SIGNATURE?: string;
  SHOPIFY_ADMIN_TOKEN?: string;
  /** Optional: restrict Admin API calls to this shop (recommended; the token belongs to one store). */
  SHOPIFY_ADMIN_SHOP?: string;
  SHOPIFY_ADMIN_API_VERSION?: string;
}

const PAGE_SIZE = 10;
const REVIEW_LIMIT = { max: 5, windowSec: 600 };
const SHOP_RE = /^[a-z0-9][a-z0-9-]*\.myshopify\.com$/i;
const ID_RE = /^[A-Za-z0-9_.:\-\/]{1,128}$/;
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}$/;

const json = (data: unknown, status = 200, extra: HeadersInit = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...extra },
  });
const err = (status: number, error: string) => json({ error }, status);

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "").trim().slice(0, max) : "";
}

async function rateLimit(env: Env, key: string, max: number, windowSec: number): Promise<boolean> {
  const bucket = Math.floor(Date.now() / 1000 / windowSec);
  await env.DB.prepare(
    "INSERT INTO rate_limits (key, bucket, count) VALUES (?1, ?2, 1) ON CONFLICT(key, bucket) DO UPDATE SET count = count + 1",
  ).bind(key, bucket).run();
  const row = await env.DB.prepare("SELECT count FROM rate_limits WHERE key = ?1 AND bucket = ?2").bind(key, bucket).first<{ count: number }>();
  if (Math.random() < 0.02) await env.DB.prepare("DELETE FROM rate_limits WHERE bucket < ?1").bind(bucket - 1).run();
  return (row?.count ?? 0) <= max;
}

// ---- reviews ----
async function getReviews(env: Env, shop: string, q: URLSearchParams) {
  const productId = q.get("product_id") ?? "";
  if (!ID_RE.test(productId)) return err(400, "invalid product_id");
  const page = Math.max(1, Math.min(1000, parseInt(q.get("page") ?? "1", 10) || 1));
  const sort = q.get("sort") ?? "newest";
  const order = { newest: "created_at DESC", oldest: "created_at ASC", highest: "rating DESC, created_at DESC", lowest: "rating ASC, created_at DESC" }[sort];
  if (!order) return err(400, "invalid sort");

  const hist = await env.DB.prepare(
    "SELECT rating, COUNT(*) AS n FROM reviews WHERE shop=?1 AND product_id=?2 AND status='approved' GROUP BY rating",
  ).bind(shop, productId).all<{ rating: number; n: number }>();
  const histogram: Record<string, number> = { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 };
  let count = 0, sum = 0;
  for (const r of hist.results) { histogram[String(r.rating)] = r.n; count += r.n; sum += r.rating * r.n; }

  const rows = await env.DB.prepare(
    `SELECT id, rating, title, body, author, verified, created_at FROM reviews
     WHERE shop=?1 AND product_id=?2 AND status='approved' ORDER BY ${order} LIMIT ?3 OFFSET ?4`,
  ).bind(shop, productId, PAGE_SIZE, (page - 1) * PAGE_SIZE).all<Record<string, unknown>>();

  return json({
    summary: { avg: count ? Math.round((sum / count) * 100) / 100 : 0, count, histogram },
    page,
    page_size: PAGE_SIZE,
    items: rows.results.map((r) => ({ ...r, verified: !!r.verified })),
  });
}

async function postReviews(env: Env, shop: string, req: Request) {
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return err(400, "invalid json"); }
  if (!b || typeof b !== "object") return err(400, "invalid json");
  // Honeypot: bots fill the hidden field. Pretend success, store nothing.
  if (clean(b.website, 200)) return json({ status: "pending" }, 202);

  const ip = req.headers.get("CF-Connecting-IP") ?? "unknown";
  if (!(await rateLimit(env, `rev:${shop}:${ip}`, REVIEW_LIMIT.max, REVIEW_LIMIT.windowSec))) return err(429, "rate limited");

  const productId = clean(b.product_id, 128);
  const rating = Number(b.rating);
  const body = clean(b.body, 4000);
  const author = clean(b.author, 80);
  const title = clean(b.title, 200);
  const email = clean(b.email, 320).toLowerCase();
  if (!ID_RE.test(productId)) return err(400, "invalid product_id");
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return err(400, "rating must be 1-5");
  if (body.length < 3) return err(400, "body required");
  if (!author) return err(400, "author required");
  if (!EMAIL_RE.test(email)) return err(400, "valid email required");

  const emailHash = await sha256Hex(`${shop}:${email}`);
  const res = await env.DB.prepare(
    "INSERT INTO reviews (shop, product_id, rating, title, body, author, email_hash, status) VALUES (?1,?2,?3,?4,?5,?6,?7,'pending')",
  ).bind(shop, productId, rating, title, body, author, emailHash).run();
  return json({ id: res.meta.last_row_id, status: "pending" }, 201);
}

// ---- wishlist ----
async function wishlist(env: Env, shop: string, q: URLSearchParams, req: Request) {
  const customer = q.get("logged_in_customer_id");
  if (!customer || !/^\d{1,32}$/.test(customer)) return err(401, "login required");

  if (req.method === "GET") {
    const r = await env.DB.prepare("SELECT item FROM wishlist WHERE shop=?1 AND customer_id=?2 ORDER BY created_at DESC LIMIT 500").bind(shop, customer).all<{ item: string }>();
    return json({ items: r.results.map((x) => x.item) });
  }
  let item = q.get("item") ?? "";
  if (req.method === "POST") {
    try { item = clean(((await req.json()) as Record<string, unknown>).item, 128) || item; } catch { /* fall back to query */ }
  }
  if (!ID_RE.test(item)) return err(400, "invalid item");
  if (req.method === "POST") {
    if (!(await rateLimit(env, `wl:${shop}:${customer}`, 120, 600))) return err(429, "rate limited");
    const n = await env.DB.prepare("SELECT COUNT(*) AS n FROM wishlist WHERE shop=?1 AND customer_id=?2").bind(shop, customer).first<{ n: number }>();
    if ((n?.n ?? 0) >= 500) return err(409, "wishlist full");
    await env.DB.prepare("INSERT OR IGNORE INTO wishlist (shop, customer_id, item) VALUES (?1,?2,?3)").bind(shop, customer, item).run();
    return json({ ok: true, item }, 201);
  }
  await env.DB.prepare("DELETE FROM wishlist WHERE shop=?1 AND customer_id=?2 AND item=?3").bind(shop, customer, item).run();
  return json({ ok: true, item });
}

// ---- stockists ----
const haversineKm = (lat1: number, lng1: number, lat2: number, lng2: number) => {
  const r = Math.PI / 180, dLat = (lat2 - lat1) * r, dLng = (lng2 - lng1) * r;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * r) * Math.cos(lat2 * r) * Math.sin(dLng / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(a));
};

async function stockists(env: Env, shop: string, q: URLSearchParams) {
  const rows = await env.DB.prepare("SELECT id, name, address, city, country, lat, lng, phone FROM stockists WHERE shop IN (?1, '*') LIMIT 2000")
    .bind(shop).all<{ id: number; name: string; address: string; city: string; country: string; lat: number; lng: number; phone: string }>();
  const lat = q.has("lat") ? Number(q.get("lat")) : NaN;
  const lng = q.has("lng") ? Number(q.get("lng")) : NaN;
  const hasPos = Number.isFinite(lat) && Number.isFinite(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180;
  if ((q.has("lat") || q.has("lng")) && !hasPos) return err(400, "invalid lat/lng");
  const radius = q.has("radius") ? Number(q.get("radius")) : Infinity;
  if (!(radius > 0)) return err(400, "invalid radius");
  const text = clean(q.get("q"), 80).toLowerCase();

  let items = rows.results
    .filter((s) => !text || `${s.name} ${s.city} ${s.country} ${s.address}`.toLowerCase().includes(text))
    .map((s) => ({ ...s, distance_km: hasPos ? Math.round(haversineKm(lat, lng, s.lat, s.lng) * 10) / 10 : null }));
  if (hasPos) items = items.filter((s) => s.distance_km! <= radius).sort((a, b) => a.distance_km! - b.distance_km!);
  return json({ items: items.slice(0, 50) });
}

// ---- order tracking ----
const TRACK_LIMIT = { max: 10, windowSec: 600 };
const ORDER_RE = /^#?[A-Za-z0-9-]{1,32}$/;
const ORDER_QUERY = `query($q:String!){orders(first:1,query:$q){nodes{name email cancelledAt displayFulfillmentStatus fulfillments(first:10){displayStatus trackingInfo{company number url}}}}}`;

interface AdminOrder {
  name: string; email: string | null; cancelledAt: string | null; displayFulfillmentStatus: string;
  fulfillments: { displayStatus: string | null; trackingInfo: { company: string | null; number: string | null; url: string | null }[] }[];
}

async function orderTracking(env: Env, shop: string, q: URLSearchParams, req: Request) {
  const notConfigured = () => err(501, "order_tracking_not_configured");
  if (!env.SHOPIFY_ADMIN_TOKEN || (env.SHOPIFY_ADMIN_SHOP && env.SHOPIFY_ADMIN_SHOP.toLowerCase() !== shop.toLowerCase())) return notConfigured();
  const ip = req.headers.get("CF-Connecting-IP") ?? "unknown";
  if (!(await rateLimit(env, `trk:${shop}:${ip}`, TRACK_LIMIT.max, TRACK_LIMIT.windowSec))) return err(429, "rate limited");

  const order = clean(q.get("order"), 40);
  const email = clean(q.get("email"), 320).toLowerCase();
  if (!ORDER_RE.test(order)) return err(400, "invalid order");
  if (!EMAIL_RE.test(email)) return err(400, "valid email required");
  const number = order.replace(/^#/, "");

  let node: AdminOrder | undefined;
  try {
    const res = await fetch(`https://${shop}/admin/api/${env.SHOPIFY_ADMIN_API_VERSION || "2025-07"}/graphql.json`, {
      method: "POST",
      headers: { "content-type": "application/json", "X-Shopify-Access-Token": env.SHOPIFY_ADMIN_TOKEN },
      body: JSON.stringify({ query: ORDER_QUERY, variables: { q: `name:${number}` } }),
    });
    if (!res.ok) return err(502, "upstream_error");
    const body = (await res.json()) as { data?: { orders?: { nodes?: AdminOrder[] } }; errors?: unknown };
    if (body.errors || !body.data) return err(502, "upstream_error");
    node = body.data.orders?.nodes?.[0];
  } catch { return err(502, "upstream_error"); }

  // Same 404 for "no such order" and "email mismatch": do not reveal which orders exist.
  if (!node || node.name.replace(/^#/, "").toLowerCase() !== number.toLowerCase() || (node.email ?? "").toLowerCase() !== email) return err(404, "order_not_found");

  const fulfillments = node.fulfillments ?? [];
  const delivered = fulfillments.length > 0 && fulfillments.every((f) => f.displayStatus === "DELIVERED");
  const fulfillment = node.displayFulfillmentStatus.toLowerCase();
  const step = node.cancelledAt ? 1 : delivered ? 4 : fulfillments.length > 0 ? 3 : 2;
  return json({
    step,
    status: node.cancelledAt ? "cancelled" : ["confirmed", "preparing", "in_transit", "delivered"][step - 1],
    fulfillment,
    tracking: fulfillments.flatMap((f) => f.trackingInfo ?? []).map((t) => ({ company: t.company ?? "", number: t.number ?? "", url: t.url ?? "" })),
  });
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const res = await handle(req, env);
    // Dev only: lets a locally rendered theme on another origin call `wrangler dev`. Production goes through the same-origin App Proxy.
    if (env.DEV_SKIP_SIGNATURE === "1") {
      const out = new Response(res.body, res);
      out.headers.set("access-control-allow-origin", "*");
      out.headers.set("access-control-allow-methods", "GET,POST,DELETE,OPTIONS");
      out.headers.set("access-control-allow-headers", "content-type,accept");
      return out;
    }
    return res;
  },
} satisfies ExportedHandler<Env>;

async function handle(req: Request, env: Env): Promise<Response> {
    if (req.method === "OPTIONS" && env.DEV_SKIP_SIGNATURE === "1") return new Response(null, { status: 204 });
    const url = new URL(req.url);
    // Accept both direct paths and the App Proxy prefix (/apps/blocko/...).
    const path = url.pathname.replace(/^\/apps\/[^/]+/, "").replace(/\/+$/, "") || "/";
    if (path === "/health") return json({ ok: true });

    const q = url.searchParams;
    if (env.DEV_SKIP_SIGNATURE !== "1" && !(await verifyProxySignature(q, env.SHOPIFY_API_SECRET))) return err(401, "invalid signature");
    const shop = q.get("shop") ?? "";
    if (!SHOP_RE.test(shop)) return err(400, "invalid shop");

    try {
      if (path === "/reviews" && req.method === "GET") return await getReviews(env, shop, q);
      if (path === "/reviews" && req.method === "POST") return await postReviews(env, shop, req);
      if (path === "/wishlist" && ["GET", "POST", "DELETE"].includes(req.method)) return await wishlist(env, shop, q, req);
      if (path === "/stockists" && req.method === "GET") return await stockists(env, shop, q);
      if (path === "/order-tracking" && req.method === "GET") return await orderTracking(env, shop, q, req);
      return err(404, "not found");
    } catch (e) {
      console.error("unhandled", e instanceof Error ? e.message : "error");
      return err(500, "internal error");
    }
}
