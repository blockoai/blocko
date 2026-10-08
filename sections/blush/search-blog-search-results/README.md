# Search results

Search interface with predictive suggestions, result types, filters, and responsive results.

- Category: main-search
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/blush/sections/main-search--search-blog-search-results.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Search results" (id `search-blog-search-results`, theme `blush`; live demo: https://demo.blocko.ai/html/blush/sections/main-search--search-blog-search-results.html; Shopify bundle: sections/blush/search-blog-search-results/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-search-blog-search-results.liquid`
- `assets/blko-predictive-search.js`
- `assets/blko-search-blog.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `page_size` | range | Results per page | 12 |
| `home_label` | text | Home label | Home |
| `crumb` | text | Crumb | Search |
| `heading` | text | Heading | Find your next ritual. |
| `text` | text | Text | Search products, journal notes, and helpful pages. |
| `search_label` | text | Search label | Search the journal and shop |
| `placeholder` | text | Placeholder | Search products, routines, and journal notes |
| `submit_label` | text | Submit label | Search |
| `dropdown_heading` | text | Dropdown heading | Suggested results |
| `view_all_label` | text | View all label | View all results |
| `results_label` | text | Results label | results for |
| `all_label` | text | All label | everything |
| `tabs_label` | text | Tabs label | Result types |
| `filters_label` | text | Filters label | Search filters |
| `refine_label` | text | Refine label | Refine |
| `product_label` | text | Product label | Product |
| `product_link` | text | Product link | View product |
| `article_label` | text | Article label | Article |
| `article_link` | text | Article link | Read note |
| `page_label` | text | Page label | Page |
| `page_link` | text | Page link | Visit page |
| `nav_label` | text | Nav label | Notes pages |
| `previous_label` | text | Previous label | Previous page |
| `next_label` | text | Next label | Next page |

## Blocks

### Result tab (`tab`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `type` | text | Search type | all |
| `label` | text | Label | All |
| `key` | text | Tab key | all |

### Filter (`filter`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `type` | text | Search type | all |
| `label` | text | Label | All |
| `key` | text | Filter key | all |

## Dependencies

- Assets: `blko-predictive-search.js`, `blko-search-blog.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
