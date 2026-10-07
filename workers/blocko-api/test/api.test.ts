import { env } from "cloudflare:workers";
import { SELF } from "cloudflare:test";
import { beforeEach, describe, expect, it } from "vitest";
import { proxyMessage, signParams, verifyProxySignature } from "../src/signature";

const SECRET = "test-secret";
const SHOP = "demo.myshopify.com";
const DB = (env as any).DB as D1Database;

async function call(path: string, params: Record<string, string> = {}, init: RequestInit = {}, sign = true) {
  const qs = sign ? await signParams(SECRET, { shop: SHOP, ...params }) : new URLSearchParams({ shop: SHOP, ...params }).toString();
  return SELF.fetch(`https://x.test${path}?${qs}`, init);
}
const post = (body: unknown, ip = "1.1.1.1") => ({
  method: "POST",
  headers: { "content-type": "application/json", "CF-Connecting-IP": ip },
  body: JSON.stringify(body),
});
const review = (o: Record<string, unknown> = {}) => ({ product_id: "p1", rating: 5, title: "t", body: "great stuff", author: "Ann", email: "a@b.co", ...o });

beforeEach(async () => {
  await DB.batch([
    DB.prepare("DELETE FROM reviews"), DB.prepare("DELETE FROM wishlist"), DB.prepare("DELETE FROM rate_limits"), DB.prepare("DELETE FROM stockists"),
  ]);
});

describe("signature", () => {
  it("matches Shopify's documented algorithm", () => {
    const p = new URLSearchParams("extra=1&extra=2&shop=a.myshopify.com&path_prefix=%2Fapps%2Fb&timestamp=1&signature=zzz");
    expect(proxyMessage(p)).toBe("extra=1,2path_prefix=/apps/bshop=a.myshopify.comtimestamp=1");
  });
  it("verifies valid, rejects tampered/missing", async () => {
    const qs = await signParams(SECRET, { shop: SHOP, a: "1" });
    expect(await verifyProxySignature(new URLSearchParams(qs), SECRET)).toBe(true);
    expect(await verifyProxySignature(new URLSearchParams(qs.replace("a=1", "a=2")), SECRET)).toBe(false);
    expect(await verifyProxySignature(new URLSearchParams("shop=x"), SECRET)).toBe(false);
    expect(await verifyProxySignature(new URLSearchParams(qs), undefined)).toBe(false);
  });
  it("http: 401 on bad or missing signature, health is open", async () => {
    expect((await SELF.fetch(`https://x.test/reviews?shop=${SHOP}&product_id=p1`)).status).toBe(401);
    expect((await SELF.fetch(`https://x.test/reviews?shop=${SHOP}&product_id=p1&signature=deadbeef`)).status).toBe(401);
    expect((await SELF.fetch("https://x.test/health")).status).toBe(200);
  });
  it("accepts the /apps/blocko prefix", async () => {
    expect((await call("/apps/blocko/reviews", { product_id: "p1" })).status).toBe(200);
  });
});

describe("reviews + moderation", () => {
  it("POST creates pending; GET hides it until approved", async () => {
    const r = await call("/reviews", {}, post(review()));
    expect(r.status).toBe(201);
    const id = ((await r.json()) as any).id;
    let g: any = await (await call("/reviews", { product_id: "p1" })).json();
    expect(g.items).toHaveLength(0);
    expect(g.summary.count).toBe(0);
    await DB.prepare("UPDATE reviews SET status='approved' WHERE id=?").bind(id).run();
    g = await (await call("/reviews", { product_id: "p1" })).json();
    expect(g.items).toHaveLength(1);
    expect(g.items[0]).toMatchObject({ rating: 5, author: "Ann", verified: false });
    expect(g.summary).toMatchObject({ avg: 5, count: 1 });
    expect(g.summary.histogram["5"]).toBe(1);
  });
  it("does not store email in clear", async () => {
    await call("/reviews", {}, post(review({ email: "secret@mail.com" })));
    const row = await DB.prepare("SELECT * FROM reviews").first<any>();
    expect(JSON.stringify(row)).not.toContain("secret@mail.com");
    expect(row.email_hash).toMatch(/^[0-9a-f]{64}$/);
  });
  it("validates input", async () => {
    expect((await call("/reviews", {}, post(review({ rating: 6 })))).status).toBe(400);
    expect((await call("/reviews", {}, post(review({ email: "nope" })))).status).toBe(400);
    expect((await call("/reviews", {}, post(review({ body: "" })))).status).toBe(400);
    expect((await call("/reviews", { product_id: "bad id!" })).status).toBe(400);
    expect((await call("/reviews", { product_id: "p1", sort: "x" })).status).toBe(400);
  });
  it("honeypot stores nothing", async () => {
    const r = await call("/reviews", {}, post(review({ website: "http://spam" })));
    expect(r.status).toBe(202);
    expect((await DB.prepare("SELECT COUNT(*) n FROM reviews").first<any>()).n).toBe(0);
  });
  it("rate limits per IP", async () => {
    const codes: number[] = [];
    for (let i = 0; i < 7; i++) codes.push((await call("/reviews", {}, post(review(), "9.9.9.9"))).status);
    expect(codes.slice(0, 5)).toEqual([201, 201, 201, 201, 201]);
    expect(codes.slice(5)).toEqual([429, 429]);
    expect((await call("/reviews", {}, post(review(), "8.8.8.8"))).status).toBe(201);
  });
  it("isolates shops", async () => {
    await DB.prepare("INSERT INTO reviews (shop,product_id,rating,body,author,email_hash,status) VALUES ('other.myshopify.com','p1',5,'b','a','h','approved')").run();
    const g: any = await (await call("/reviews", { product_id: "p1" })).json();
    expect(g.items).toHaveLength(0);
  });
});

describe("wishlist", () => {
  it("anonymous -> 401", async () => {
    expect((await call("/wishlist")).status).toBe(401);
  });
  it("add / list / dedupe / delete", async () => {
    const c = { logged_in_customer_id: "42" };
    expect((await call("/wishlist", c, post({ item: "serum" }))).status).toBe(201);
    expect((await call("/wishlist", c, post({ item: "serum" }))).status).toBe(201);
    expect((await call("/wishlist", c, post({ item: "balm" }))).status).toBe(201);
    expect(((await (await call("/wishlist", c)).json()) as any).items.sort()).toEqual(["balm", "serum"]);
    expect((await call("/wishlist", { ...c, item: "serum" }, { method: "DELETE" })).status).toBe(200);
    expect(((await (await call("/wishlist", c)).json()) as any).items).toEqual(["balm"]);
    expect(((await (await call("/wishlist", { logged_in_customer_id: "43" })).json()) as any).items).toEqual([]);
  });
});

describe("stockists", () => {
  beforeEach(async () => {
    await DB.exec("INSERT INTO stockists (shop,name,city,country,lat,lng) VALUES ('*','Stockist 1','London','GB',51.5,-0.12),('*','Stockist 2','Paris','FR',48.85,2.35),('*','Stockist 3','Sydney','AU',-33.87,151.2)");
  });
  it("sorts by distance and filters by radius", async () => {
    const g: any = await (await call("/stockists", { lat: "51.5", lng: "-0.1" })).json();
    expect(g.items.map((s: any) => s.name)).toEqual(["Stockist 1", "Stockist 2", "Stockist 3"]);
    const near: any = await (await call("/stockists", { lat: "51.5", lng: "-0.1", radius: "500" })).json();
    expect(near.items.map((s: any) => s.name)).toEqual(["Stockist 1", "Stockist 2"]);
  });
  it("text search and validation", async () => {
    const g: any = await (await call("/stockists", { q: "syd" })).json();
    expect(g.items).toHaveLength(1);
    expect((await call("/stockists", { lat: "999", lng: "0" })).status).toBe(400);
  });
});

describe("order-tracking", () => {
  const q = { order: "#1001", email: "Buyer@Example.com" };
  const node = (o: Record<string, unknown> = {}) => ({ name: "#1001", email: "buyer@example.com", cancelledAt: null, displayFulfillmentStatus: "UNFULFILLED", fulfillments: [], ...o });
  const withAdmin = async (nodes: unknown[], run: (calls: { url: string; init: RequestInit }[]) => Promise<void>, status = 200) => {
    const calls: { url: string; init: RequestInit }[] = [];
    const real = globalThis.fetch;
    (env as any).SHOPIFY_ADMIN_TOKEN = "shpat_test";
    globalThis.fetch = (async (url: any, init: any) => { calls.push({ url: String(url), init }); return new Response(JSON.stringify({ data: { orders: { nodes } } }), { status }); }) as typeof fetch;
    try { await run(calls); } finally { globalThis.fetch = real; delete (env as any).SHOPIFY_ADMIN_TOKEN; }
  };

  it("501 when not configured", async () => {
    const r = await call("/order-tracking", q);
    expect(r.status).toBe(501);
    expect(await r.json()).toEqual({ error: "order_tracking_not_configured" });
  });
  it("looks up via Admin GraphQL and returns only status fields", async () => {
    await withAdmin([node({ displayFulfillmentStatus: "FULFILLED", fulfillments: [{ displayStatus: "IN_TRANSIT", trackingInfo: [{ company: "UPS", number: "1Z", url: "https://t/1Z" }] }], email: "buyer@example.com", shippingAddress: "SECRET" })], async (calls) => {
      const r = await call("/order-tracking", q);
      expect(r.status).toBe(200);
      const d: any = await r.json();
      expect(d).toEqual({ step: 3, status: "in_transit", fulfillment: "fulfilled", tracking: [{ company: "UPS", number: "1Z", url: "https://t/1Z" }] });
      expect(JSON.stringify(d)).not.toContain("SECRET");
      expect(calls).toHaveLength(1);
      expect(calls[0].url).toBe("https://demo.myshopify.com/admin/api/2025-07/graphql.json");
      expect((calls[0].init.headers as any)["X-Shopify-Access-Token"]).toBe("shpat_test");
      expect(JSON.parse(calls[0].init.body as string).variables.q).toBe("name:1001");
    });
  });
  it("step 4 when every fulfillment is delivered, step 2 when unfulfilled", async () => {
    await withAdmin([node({ displayFulfillmentStatus: "FULFILLED", fulfillments: [{ displayStatus: "DELIVERED", trackingInfo: [] }] })], async () => {
      expect(((await (await call("/order-tracking", q)).json()) as any).step).toBe(4);
    });
    await withAdmin([node()], async () => {
      expect(((await (await call("/order-tracking", q)).json()) as any).step).toBe(2);
    });
  });
  it("404 on email mismatch or missing order (indistinguishable)", async () => {
    await withAdmin([node({ email: "other@example.com" })], async () => {
      expect((await call("/order-tracking", q)).status).toBe(404);
    });
    await withAdmin([], async () => {
      expect((await call("/order-tracking", q)).status).toBe(404);
    });
  });
  it("validates input, 502 on upstream failure, rate limits", async () => {
    await withAdmin([node()], async () => {
      expect((await call("/order-tracking", { order: "1;drop", email: "a@b.co" })).status).toBe(400);
      expect((await call("/order-tracking", { order: "1001", email: "nope" })).status).toBe(400);
    });
    await withAdmin([], async () => {
      expect((await call("/order-tracking", q)).status).toBe(502);
    }, 500);
    await withAdmin([node()], async () => {
      const codes: number[] = [];
      for (let i = 0; i < 12; i++) codes.push((await call("/order-tracking", q, { headers: { "CF-Connecting-IP": "5.5.5.5" } })).status);
      expect(codes.slice(0, 10).every((c) => c === 200)).toBe(true);
      expect(codes.slice(10)).toEqual([429, 429]);
    });
  });
  it("never sends the token to a different shop when SHOPIFY_ADMIN_SHOP is set", async () => {
    (env as any).SHOPIFY_ADMIN_SHOP = "other.myshopify.com";
    try {
      await withAdmin([node()], async (calls) => {
        expect((await call("/order-tracking", q)).status).toBe(501);
        expect(calls).toHaveLength(0);
      });
    } finally { delete (env as any).SHOPIFY_ADMIN_SHOP; }
  });
});

describe("dev-only CORS", () => {
  it("is not emitted when DEV_SKIP_SIGNATURE is off", async () => {
    expect((await call("/stockists")).headers.get("access-control-allow-origin")).toBeNull();
  });
});
