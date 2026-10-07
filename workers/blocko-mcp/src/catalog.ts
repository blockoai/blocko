export const REPO = "blockoai/blocko";
export const RAW = `https://raw.githubusercontent.com/${REPO}/main/`;
export const REPO_URL = `https://github.com/${REPO}`;
export const SOURCE_CAP = 60_000;

export type Kind = "page" | "section" | "block";
export type Item = {
  id: string; name: string; kind: Kind; category?: string; description?: string; industry?: string;
  targets: { html?: string; shopify?: string }; demo?: string; demoUrl?: string; prompt?: string;
  bundle?: string; files?: string[]; sections?: string[];
};
export type Theme = { id: string; path: string | null; shopify: boolean; demo: string; industry?: string; sections: Item[]; pages: Item[] };
export type Catalog = { generated?: string; themes: Theme[] };

const TTL = 300;

/** Fetch a repo file through the Cache API (5 minutes). */
export async function fetchRepoText(path: string): Promise<string | null> {
  const url = RAW + path.replace(/^\/+/, "");
  const cache = (globalThis as { caches?: { default?: Cache } }).caches?.default;
  const key = new Request(url);
  const hit = await cache?.match(key);
  if (hit) return hit.text();
  const res = await fetch(url);
  if (!res.ok) return null;
  const text = await res.text();
  if (cache) await cache.put(key, new Response(text, { headers: { "cache-control": `public, max-age=${TTL}` } }));
  return text;
}

export async function loadCatalog(): Promise<Catalog> {
  const text = await fetchRepoText("catalog.json");
  if (!text) throw new Error("catalog.json could not be fetched from the public repo");
  return JSON.parse(text) as Catalog;
}

export const allItems = (catalog: Catalog) =>
  catalog.themes.flatMap((theme) => [...theme.pages, ...theme.sections].map((item) => ({ theme, item })));

const industryOf = (theme: Theme, item: Item) => item.industry ?? theme.industry;

export type SearchArgs = { query?: string; kind?: Kind; theme?: string; industry?: string; category?: string; shopify_ready?: boolean; limit?: number };

export function searchItems(catalog: Catalog, args: SearchArgs) {
  const words = (args.query ?? "").toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  const eq = (a: string | undefined, b: string | undefined) => !b || (a ?? "").toLowerCase() === b.toLowerCase();
  const scored = allItems(catalog)
    .filter(({ theme, item }) => (!args.kind || item.kind === args.kind) && eq(theme.id, args.theme) && eq(industryOf(theme, item), args.industry) && eq(item.category, args.category)
      && (args.shopify_ready === undefined || (item.targets?.shopify === "ok") === args.shopify_ready))
    .map(({ theme, item }) => {
      const hay = [item.id, item.name, item.category, item.description, industryOf(theme, item), theme.id].join(" ").toLowerCase();
      const name = `${item.id} ${item.name}`.toLowerCase();
      const score = words.reduce((n, w) => n + (hay.includes(w) ? (name.includes(w) ? 3 : 1) : -100), 0);
      return { theme, item, score };
    })
    .filter((r) => !words.length || r.score > 0)
    .sort((a, b) => b.score - a.score);
  const limit = Math.min(Math.max(args.limit ?? 20, 1), 50);
  return { total: scored.length, results: scored.slice(0, limit).map(({ theme, item }) => summary(theme, item)) };
}

export const summary = (theme: Theme, item: Item) => ({
  theme: theme.id, kind: item.kind, id: item.id, name: item.name, category: item.category, industry: industryOf(theme, item),
  description: item.description, shopify_ready: item.targets?.shopify === "ok", demo_url: item.demoUrl,
});

type Err = { error: string; theme?: undefined; item?: undefined; files?: undefined; truncated?: undefined };
export function findItem(catalog: Catalog, themeId: string, kind: Kind, id: string): Err | { error?: undefined; theme: Theme; item: Item } {
  const theme = catalog.themes.find((t) => t.id === themeId);
  if (!theme) return { error: `Unknown theme "${themeId}". Known themes: ${catalog.themes.map((t) => t.id).join(", ")}.` };
  const list = kind === "page" ? theme.pages : theme.sections.filter((s) => s.kind === kind);
  const item = list.find((i) => i.id === id);
  if (!item) return { error: `No ${kind} "${id}" in theme ${themeId}. Use search_items to find valid ids.` };
  return { theme, item };
}

export function itemDetails(theme: Theme, item: Item) {
  return {
    ...summary(theme, item),
    targets: item.targets,
    prompt: item.prompt,
    repo: REPO_URL,
    repo_paths: {
      shopify_bundle: item.bundle, shopify_files: item.files,
      html_demo: item.demo,
      ...(item.kind === "page" ? { section_bundles: (item.sections ?? []).map((s) => `sections/${theme.id}/${s}`) } : {}),
    },
    ...(item.kind === "page" ? { sections_in_order: item.sections ?? [] } : {}),
  };
}

export type SourceFile = { path: string; content: string };
export async function itemSource(theme: Theme, item: Item, format: "liquid" | "html"): Promise<Err | { error?: undefined; files: SourceFile[]; truncated: boolean }> {
  let paths: string[] = [];
  if (format === "html") paths = item.demo ? [item.demo] : [];
  else if (item.kind === "page") {
    for (const sid of item.sections ?? []) {
      const s = theme.sections.find((x) => x.id === sid && x.kind === "section");
      paths.push(...(s?.files ?? []));
    }
  } else paths = item.files ?? [];
  if (!paths.length) return { error: format === "liquid" ? `No Liquid output for ${item.kind} "${item.id}" in ${theme.id} (Shopify target: ${item.targets?.shopify ?? "none"}). Use format "html" instead.` : "No HTML demo available." };
  const files: SourceFile[] = [];
  let budget = SOURCE_CAP, truncated = false;
  for (const path of [...new Set(paths)]) {
    const text = await fetchRepoText(path);
    if (text === null) { files.push({ path, content: "(file could not be fetched)" }); continue; }
    if (budget <= 0) { truncated = true; files.push({ path, content: "(omitted: size cap reached; fetch from the repo)" }); continue; }
    if (text.length > budget) { files.push({ path, content: text.slice(0, budget) }); truncated = true; budget = 0; } else { files.push({ path, content: text }); budget -= text.length; }
  }
  return { files, truncated };
}

export const INSTALL_GUIDE = `Blocko is a library of Shopify-ready sections, blocks and pages (plus HTML demos).

Install the Claude Code plugin (one line):
  claude plugin marketplace add ${REPO} && claude plugin install blocko-sections@blocko

Other agents: read ${REPO_URL} (catalog.json, AGENTS.md, sections/<theme>/<id>/ Liquid bundles, demo/<theme>/ HTML).

How to use an item:
  1. search_items to find a page/section/block, get_item for its details.
  2. get_item returns a ready-made "prompt": give it to your coding agent as the task, or follow it yourself.
  3. get_item_source returns the Liquid bundle (format "liquid") or demo HTML (format "html") to copy.
  4. Ask the user which project/theme, page and position before editing; keep the blko- class prefix and CSS tokens, keep custom elements idempotent, run \`shopify theme check\` for Shopify targets.

Browse visually: https://blocko.ai/browse/`;
