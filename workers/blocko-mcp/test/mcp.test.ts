import { afterEach, describe, expect, it, vi } from "vitest";
import worker from "../src/index";
import { itemSource, searchItems, type Catalog } from "../src/catalog";

const item = (o: Record<string, unknown>) => ({ targets: { html: "ok", shopify: "ok" }, ...o });
const catalog = {
  themes: [
    { id: "t1", path: "themes/t1", shopify: true, demo: "demo/t1", industry: "beauty", sections: [
      item({ id: "hero", name: "Hero banner", kind: "section", category: "hero", demo: "demo/t1/sections/hero.html", demoUrl: "https://blocko.avada.net/hero", prompt: "P", bundle: "sections/t1/hero", files: ["sections/t1/hero/sections/hero.liquid"] }),
      item({ id: "faq", name: "FAQ", kind: "block", category: "faq", targets: { html: "ok", shopify: "gap" }, demo: "demo/t1/blocks/faq.html" }),
    ], pages: [item({ id: "home", name: "Home", kind: "page", sections: ["hero"], demo: "demo/t1/templates/home.html" })] },
  ],
} as unknown as Catalog;

const files: Record<string, string> = {
  "catalog.json": JSON.stringify(catalog),
  "sections/t1/hero/sections/hero.liquid": "<section>{{ section.settings.title }}</section>",
  "demo/t1/sections/hero.html": "x".repeat(70_000),
};
const mockFetch = () => vi.stubGlobal("fetch", vi.fn(async (url: string) => {
  const path = String(url).replace("https://raw.githubusercontent.com/blockoai/blocko/main/", "");
  return path in files ? new Response(files[path]) : new Response("nope", { status: 404 });
}));
afterEach(() => vi.unstubAllGlobals());

const rpc = async (method: string, params: unknown = {}, id = 1) => {
  const res = await worker.fetch(new Request("https://blocko.avada.net/mcp", {
    method: "POST",
    headers: { "content-type": "application/json", accept: "application/json, text/event-stream" },
    body: JSON.stringify({ jsonrpc: "2.0", id, method, params }),
  }), {}, { waitUntil() {}, passThroughOnException() {} } as unknown as ExecutionContext);
  const body = await res.text();
  const data = body.startsWith("event:") || body.includes("\ndata:") ? body.split("\n").find((l) => l.startsWith("data:"))!.slice(5) : body;
  return JSON.parse(data);
};

describe("search", () => {
  it("filters and ranks", () => {
    expect(searchItems(catalog, { query: "hero" }).results.map((r) => r.id)).toEqual(["hero"]);
    expect(searchItems(catalog, { shopify_ready: false }).results.map((r) => r.id)).toEqual(["faq"]);
    expect(searchItems(catalog, { kind: "page" }).total).toBe(1);
    expect(searchItems(catalog, { industry: "beauty", theme: "t1" }).total).toBe(3);
    expect(searchItems(catalog, { query: "nothing-here" }).total).toBe(0);
  });
  it("truncates oversize source", async () => {
    mockFetch();
    const r = await itemSource(catalog.themes[0], catalog.themes[0].sections[0], "html");
    expect("files" in r && r.truncated).toBe(true);
  });
});

describe("MCP over HTTP", () => {
  it("initializes and lists tools", async () => {
    const init = await rpc("initialize", { protocolVersion: "2025-06-18", capabilities: {}, clientInfo: { name: "t", version: "1" } });
    expect(init.result.serverInfo.name).toBe("blocko");
    const list = await rpc("tools/list", {}, 2);
    expect(list.result.tools.map((t: { name: string }) => t.name).sort()).toEqual(["get_install_guide", "get_item", "get_item_source", "list_themes", "search_items"]);
  });
  it("calls tools", async () => {
    mockFetch();
    const s = await rpc("tools/call", { name: "search_items", arguments: { query: "hero" } });
    expect(JSON.parse(s.result.content[0].text).results[0].id).toBe("hero");
    const g = await rpc("tools/call", { name: "get_item", arguments: { theme: "t1", kind: "page", id: "home" } }, 2);
    expect(JSON.parse(g.result.content[0].text).sections_in_order).toEqual(["hero"]);
    const src = await rpc("tools/call", { name: "get_item_source", arguments: { theme: "t1", kind: "section", id: "hero", format: "liquid" } }, 3);
    expect(src.result.content[0].text).toContain("section.settings.title");
    const bad = await rpc("tools/call", { name: "get_item", arguments: { theme: "zz", kind: "page", id: "home" } }, 4);
    expect(bad.result.isError).toBe(true);
  });
});
