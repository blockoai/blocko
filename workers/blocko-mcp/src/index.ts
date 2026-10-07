import { McpServer } from "@modelcontextprotocol/server";
import { createMcpHandler } from "agents/mcp/server";
import { z } from "zod";
import { findItem, INSTALL_GUIDE, itemDetails, itemSource, loadCatalog, searchItems } from "./catalog";

const text = (value: unknown) => ({ content: [{ type: "text" as const, text: typeof value === "string" ? value : JSON.stringify(value, null, 2) }] });
const fail = (message: string) => ({ ...text(message), isError: true });
const kind = z.enum(["page", "section", "block"]);

export function createServer() {
  const server = new McpServer({ name: "blocko", version: "1.0.0" });

  server.registerTool("list_themes", {
    description: "List Blocko themes with their industry, whether they have Shopify Liquid output, and item counts (pages, sections, blocks). Start here to learn valid theme ids.",
    inputSchema: {},
  }, async () => {
    const catalog = await loadCatalog();
    return text(catalog.themes.map((t) => ({
      id: t.id, industry: t.industry, shopify: t.shopify, demo: `https://demo.blocko.ai/html/${t.id}/`,
      pages: t.pages.length, sections: t.sections.filter((s) => s.kind === "section").length, blocks: t.sections.filter((s) => s.kind === "block").length,
    })));
  });

  server.registerTool("search_items", {
    description: "Search Blocko pages, sections and blocks across all themes. Free-text query matches id, name, category, description and industry. All filters are optional and combine with AND. Returns compact summaries; call get_item for the full details.",
    inputSchema: {
      query: z.string().optional().describe('Free text, e.g. "hair care product" or "faq accordion"'),
      kind: kind.optional().describe("Restrict to pages, sections or blocks"),
      theme: z.string().optional().describe("Theme id, e.g. veil"),
      industry: z.string().optional().describe("Industry name, exact match, e.g. beauty"),
      category: z.string().optional().describe("Category, exact match, e.g. customer-account"),
      shopify_ready: z.boolean().optional().describe("true = only items that have Shopify Liquid output; false = only HTML-only items"),
      limit: z.number().int().min(1).max(50).optional().describe("Max results (default 20)"),
    },
  }, async (args) => text(searchItems(await loadCatalog(), args)));

  server.registerTool("get_item", {
    description: "Get full details for one page, section or block: metadata, targets, live demo URL, repo paths, the ready-made agent prompt, and (for pages) the ordered list of sections.",
    inputSchema: { theme: z.string().describe("Theme id"), kind, id: z.string().describe("Item id") },
  }, async ({ theme, kind, id }) => {
    const found = findItem(await loadCatalog(), theme, kind, id);
    return found.error !== undefined ? fail(found.error) : text(itemDetails(found.theme, found.item));
  });

  server.registerTool("get_item_source", {
    description: "Get the source code of an item: format \"liquid\" returns the Shopify bundle files (section/block .liquid plus assets; for a page, the files of all its sections in order); format \"html\" returns the standalone demo HTML. Output is capped at about 60 KB and says when truncated.",
    inputSchema: { theme: z.string(), kind, id: z.string(), format: z.enum(["liquid", "html"]).describe("liquid = Shopify bundle, html = demo page") },
  }, async ({ theme, kind, id, format }) => {
    const found = findItem(await loadCatalog(), theme, kind, id);
    if (found.error !== undefined) return fail(found.error);
    const source = await itemSource(found.theme, found.item, format);
    if (source.error !== undefined) return fail(source.error);
    const body = source.files.map((f) => `=== ${f.path} ===\n${f.content}`).join("\n\n");
    return text(source.truncated ? `${body}\n\n[TRUNCATED: output capped; fetch the remaining files from https://github.com/blockoai/blocko]` : body);
  });

  server.registerTool("get_install_guide", {
    description: "How to install the Blocko Claude Code plugin and how to use Blocko prompts and sources in a project.",
    inputSchema: {},
  }, async () => text(INSTALL_GUIDE));

  return server;
}

export default {
  fetch(request: Request, env: unknown, ctx: ExecutionContext) {
    const url = new URL(request.url);
    if (url.pathname === "/" || url.pathname === "/health") return Response.json({ name: "blocko-mcp", mcp: "/mcp" });
    if (url.pathname !== "/mcp") return new Response("Not found", { status: 404 });
    return createMcpHandler(createServer, { route: "/mcp" })(request, env as never, ctx);
  },
};
