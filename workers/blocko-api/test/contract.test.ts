import { env } from "cloudflare:workers";
import { SELF } from "cloudflare:test";
import { beforeAll, describe, expect, it } from "vitest";
import contract from "../contract.json";
import { signParams } from "../src/signature";

const SECRET = "test-secret";
const SHOP = "demo.myshopify.com";
const DB = (env as any).DB as D1Database;
const ep = (id: string) => contract.endpoints.find((e) => e.id === id)!;

async function call(path: string, params: Record<string, string> = {}, init: RequestInit = {}) {
  return SELF.fetch(`https://x.test${path}?${await signParams(SECRET, { shop: SHOP, ...params })}`, init);
}
const keys = (o: object) => Object.keys(o).sort();

beforeAll(async () => {
  await DB.batch([DB.prepare("DELETE FROM reviews"), DB.prepare("DELETE FROM wishlist"), DB.prepare("DELETE FROM stockists"), DB.prepare("DELETE FROM rate_limits"),
    DB.prepare("INSERT INTO reviews (shop,product_id,rating,title,body,author,email_hash,verified,status) VALUES ('demo.myshopify.com','p1',5,'T','B body','Ann','h',1,'approved')"),
    DB.prepare("INSERT INTO stockists (shop,name,address,city,country,lat,lng,phone) VALUES ('*','S','A','C','GB',51.5,-0.1,'1')"),
    DB.prepare("INSERT INTO wishlist (shop,customer_id,item) VALUES ('demo.myshopify.com','7','serum')")]);
});

describe("contract.json is what the Worker really serves", () => {
  it("reviews.list", async () => {
    const e = ep("reviews.list") as any;
    const g: any = await (await call(e.path, { product_id: "p1", page: "1", sort: "newest" })).json();
    expect(keys(g)).toEqual(expect.arrayContaining(keys(e.response)));
    for (const f of e.response.summary) expect(g.summary).toHaveProperty(f);
    for (const f of e.response.items) expect(g.items[0]).toHaveProperty(f);
  });
  it("wishlist.list / add / remove", async () => {
    const c = { logged_in_customer_id: "7" };
    const l: any = await (await call(ep("wishlist.list").path, c)).json();
    expect(Array.isArray(l.items)).toBe(true);
    const post = { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(Object.fromEntries((ep("wishlist.add") as any).body.map((k: string) => [k, "balm"]))) };
    expect((await call(ep("wishlist.add").path, c, post)).status).toBe(201);
    const q = Object.fromEntries((ep("wishlist.remove") as any).query.map((k: string) => [k, "balm"]));
    expect((await call(ep("wishlist.remove").path, { ...c, ...q }, { method: "DELETE" })).status).toBe(200);
    expect(((await (await call("/wishlist", c)).json()) as any).items).not.toContain("balm");
  });
  it("stockists.list", async () => {
    const e = ep("stockists.list") as any;
    const g: any = await (await call(e.path, { lat: "51.5", lng: "-0.1", radius: "50", q: "s" })).json();
    for (const f of e.response.items) expect(g.items[0]).toHaveProperty(f);
  });
  it("order-tracking.get declares 501 when unconfigured", async () => {
    const e = ep("order-tracking.get") as any;
    const r = await call(e.path, { order: "1001", email: "a@b.co" });
    expect(r.status).toBe(e.notConfigured.status);
    expect(((await r.json()) as any).error).toBe(e.notConfigured.error);
  });
});
