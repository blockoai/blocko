# Empty search state

No-results recovery state with spelling and browsing suggestions.

- Category: main-search
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/main-search--search-blog-search-empty.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Empty search state" (id `search-blog-search-empty`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/main-search--search-blog-search-empty.html; Shopify bundle: sections/lather/search-blog-search-empty/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-search-blog-search-empty.liquid`
- `assets/blko-predictive-search.js`
- `assets/blko-search-blog.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Search |
| `heading` | text | Heading | Nothing smells like that yet. |
| `text` | text | Text | Check the spelling, try a scent family name or head to one of these. |
| `search_label` | text | Search label | Search the journal and shop |
| `placeholder` | text | Placeholder | Search products, routines, and journal notes |
| `submit_label` | text | Submit label | Search |
| `dropdown_heading` | text | Dropdown heading | Suggested results |
| `view_all_label` | text | View all label | View all results |
| `tip_1` | text | Tip 1 | Try broader words like “soap”, “stick” or “cologne”. |
| `tip_2_prefix` | text | Tip 2 prefix | Shop the |
| `tip_2_link` | text | Tip 2 link | limited drops |
| `tip_3_prefix` | text | Tip 3 prefix | Read the |
| `journal_url` | url | Journal url |  |
| `tip_3_link` | text | Tip 3 link | latest guides |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Pine needles on a dark forest floor |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-predictive-search.js`, `blko-search-blog.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
