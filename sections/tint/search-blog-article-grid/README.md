# Filterable article grid

Journal card grid with category controls and a clear mobile layout.

- Category: blog
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/tint/sections/blog--search-blog-article-grid.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Filterable article grid" (id `search-blog-article-grid`, theme `tint`; live demo: https://demo.blocko.ai/html/tint/sections/blog--search-blog-article-grid.html; Shopify bundle: sections/tint/search-blog-article-grid/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-search-blog-article-grid.liquid`
- `assets/blko-predictive-search.js`
- `assets/blko-search-blog.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `blog` | blog | Blog |  |
| `page_size` | range | Stories per page | 6 |
| `all_label` | text | All label | All |
| `eyebrow` | text | Eyebrow | More looks |
| `heading` | text | Heading | Latest from the journal |
| `filter_label` | text | Filter label | Filter journal stories |
| `link_label` | text | Link label | Read the story |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-predictive-search.js`, `blko-search-blog.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
