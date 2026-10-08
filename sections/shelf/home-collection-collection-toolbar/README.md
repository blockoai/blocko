# Collection filters and sorting

Responsive collection controls with active filter states and a mobile drawer.

- Category: collection-toolbar
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/shelf/sections/collection-toolbar--home-collection-collection-toolbar.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Collection filters and sorting" (id `home-collection-collection-toolbar`, theme `shelf`; live demo: https://demo.blocko.ai/html/shelf/sections/collection-toolbar--home-collection-collection-toolbar.html; Shopify bundle: sections/shelf/home-collection-collection-toolbar/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-home-collection-collection-toolbar.liquid`
- `assets/blko-tabs.js`
- `assets/blko-home-collection.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `collection` | collection | Collection |  |
| `close_filters` | text | Close filters | Close filters |
| `filter_eyebrow` | text | Filter eyebrow | Refine results |
| `filter_heading` | text | Filter heading | Filters |
| `apply_label` | text | Apply label | View results |
| `home_label` | text | Home label | Home |
| `breadcrumb` | text | Breadcrumb | Shop |
| `filters_label` | text | Filters label | Filters |
| `sort_label` | text | Sort label | Sort |
| `sort_aria` | text | Sort aria | Sort products |
| `sort_apply` | text | Sort apply | Apply |
| `price_from` | text | Price from | From |
| `price_to` | text | Price to | To |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-tabs.js`, `blko-home-collection.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
