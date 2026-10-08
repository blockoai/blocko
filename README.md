# Blocko sections

Blocko is a library of Shopify Online Store 2.0 sections and complete themes, generated from one typed specification
and rendered twice: as production Liquid and as a plain static HTML demo. This repository is generated output. It is
published one-way; do not edit files here, open an issue instead.

- Website and library browser: https://blocko.ai (browse at https://blocko.ai/browse/, agents guide at https://blocko.ai/agents/, `llms.txt` at https://blocko.ai/llms.txt)
- Live demos: https://demo.blocko.ai/html/
- License: MIT (see [LICENSE](LICENSE)). Open source and free.

## Quick start (Claude Code)

One line installs the Blocko plugin (marketplace `blocko`, plugin `blocko-sections`):

```bash
claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko
```

Or inside a Claude Code session: `/plugin marketplace add blockoai/blocko`, then `/plugin install blocko-sections@blocko`.

Update: `claude plugin marketplace update blocko && claude plugin update blocko-sections@blocko`
Uninstall: `claude plugin uninstall blocko-sections@blocko && claude plugin marketplace remove blocko`

Connect via MCP (any agent, read-only, no sign-in): `claude mcp add --transport http blocko https://blocko.ai/mcp`. Setup for other clients: https://blocko.ai/agents/. The server source is in `workers/blocko-mcp/`.

Then just ask. The plugin has four skills:

| Skill | What it does | Example ask |
| --- | --- | --- |
| `blocko-catalog` | Finds sections, blocks and pages in `catalog.json` | "Which Blocko section fits an FAQ?" |
| `blocko-install-section` | Asks where it should go, then copies one section or block into your project | "Add the Blocko account sign in to my theme" |
| `blocko-install-theme` | Pushes a full theme to your store as an unpublished theme | "Push veil to my dev store" |
| `blocko-deploy-worker` | Deploys the optional API Worker | "Set up the Blocko API worker" |

Without the plugin: every item in the live catalog (https://blocko.ai/browse/) and in `catalog.json` has a one-line `prompt`. Paste it into any coding agent (Claude Code, Codex, Cursor); the agent reads `AGENTS.md`, asks where the item should go, and installs it.

## Themes

- `balm`: 197 sections/blocks as Liquid, 10 gaps (see `catalog.json`). Demo: `demo/balm/`.
- `bare`: 197 sections/blocks as Liquid, 10 gaps (see `catalog.json`). Demo: `demo/bare/`.
- `blush`: 197 sections/blocks as Liquid, 10 gaps (see `catalog.json`). Demo: `demo/blush/`.
- `clip`: 195 sections/blocks as Liquid, 10 gaps (see `catalog.json`). Demo: `demo/clip/`.
- `dew`: 197 sections/blocks as Liquid, 10 gaps (see `catalog.json`). Demo: `demo/dew/`.
- `isle`: 193 sections/blocks as Liquid, 10 gaps (see `catalog.json`). Demo: `demo/isle/`.
- `lather`: 197 sections/blocks as Liquid, 10 gaps (see `catalog.json`). Demo: `demo/lather/`.
- `prism`: 197 sections/blocks as Liquid, 10 gaps (see `catalog.json`). Demo: `demo/prism/`.
- `shelf`: 196 sections/blocks as Liquid, 10 gaps (see `catalog.json`). Demo: `demo/shelf/`.
- `stubble`: 194 sections/blocks as Liquid, 10 gaps (see `catalog.json`). Demo: `demo/stubble/`.
- `tide`: 197 sections/blocks as Liquid, 10 gaps (see `catalog.json`). Demo: `demo/tide/`.
- `tint`: 195 sections/blocks as Liquid, 10 gaps (see `catalog.json`). Demo: `demo/tint/`.
- `tress`: HTML demo only (126 sections/blocks, 39 pages; port to Liquid with the agent prompts in `catalog.json`) (see `catalog.json`). Demo: `demo/tress/`.
- `twist`: 194 sections/blocks as Liquid, 10 gaps (see `catalog.json`). Demo: `demo/twist/`.
- `veil`: 193 sections/blocks as Liquid, 10 gaps (see `catalog.json`). Demo: `demo/veil/`.

Each theme lives in `themes/<theme>/` and is a complete OS2 theme folder (layout, templates, sections, blocks, snippets,
assets, config, locales). Sections that are not yet available as Liquid are listed as gaps in `catalog.json`
(`targets.shopify`); nothing is faked or silently dropped.

## Install a full theme

With the Shopify CLI, as an unpublished theme (safe, does not touch your live store):

```bash
shopify theme push --path themes/<theme> --store <your-store>.myshopify.com --unpublished
```

Or zip `themes/<theme>/` (the folders `layout`, `templates`, ... must be at the zip root) and upload it in
Online Store > Themes > Add theme > Upload zip file. Then open the theme in the Theme Editor.

## Drop one section into Dawn or any OS2 theme

Every section has a standalone bundle in `sections/<theme>/<section-id>/` that mirrors a theme folder layout:

1. Copy `sections/blko-*.liquid` into your theme `sections/`, any `blocks/`, `snippets/` and `assets/` files into the matching folders.
2. Merge `locales/en.default.blko.json` into your theme `locales/en.default.json` if the bundle has one.
3. Run `shopify theme check`, then add the section from the Theme Editor (Add section).

Sections are self-contained: scoped `blko-` CSS with token fallbacks, no jQuery or framework, and 0 KB JavaScript unless the
section needs interaction. They pick up your theme tokens when present and fall back to their own values otherwise.

## Optional API Worker

`workers/blocko-api/` is a small Cloudflare Worker (D1 database) that backs the interactive sections (for example reviews,
wishlists or quizzes) through a Shopify App Proxy. Setup summary: create the D1 database, run the migrations, set the
`SHOPIFY_API_SECRET` secret with wrangler, deploy, point an App Proxy at the Worker, then set the theme setting
`blocko_api_base`. See `workers/blocko-api/README.md`.

## Gaps policy

If a section cannot yet be expressed as Liquid, the catalog says so (`gap: ...`). Parity between the HTML demo and the Shopify
output (visual, responsive, accessibility) is a rule of the generator, not a goal.

## For agents

Claude Code users: see Quick start above.
Other agents: read `AGENTS.md` and `catalog.json`; every entry has a ready-to-paste `prompt`.
