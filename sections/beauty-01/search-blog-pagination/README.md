# Journal pagination

Accessible pagination controls that retain the selected page state.

- Category: pagination
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://blocko.avada.net/html/beauty-01/sections/pagination--search-blog-pagination.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Journal pagination" (id `search-blog-pagination`, theme `beauty-01`; live demo: https://blocko.avada.net/html/beauty-01/sections/pagination--search-blog-pagination.html; Shopify bundle: sections/beauty-01/search-blog-pagination/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-search-blog-pagination.liquid`
- `assets/blko-search-blog.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `blog` | blog | Blog |  |
| `page_size` | range | Stories per page | 6 |
| `nav_label` | text | Nav label | Journal pages |
| `previous_label` | text | Previous label | Previous page |
| `next_label` | text | Next label | Next page |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-search-blog.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
