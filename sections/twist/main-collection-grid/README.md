# Collection product grid

Responsive product listing with generic product names and prices.

- Category: main-collection-product-grid
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/twist/sections/main-collection-product-grid--main-collection-grid.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Collection product grid" (id `main-collection-grid`, theme `twist`; live demo: https://demo.blocko.ai/html/twist/sections/main-collection-product-grid--main-collection-grid.html; Shopify bundle: sections/twist/main-collection-grid/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-main-collection-grid.liquid`
- `assets/blko-tabs.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `collection` | collection | Collection |  |
| `eyebrow` | text | Eyebrow | fan favorites |
| `heading` | text | Heading | best sellers |

## Blocks

### Tab (`tab`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `key` | text | Tab key | best |
| `label` | text | Label | best sellers |

## Dependencies

- Assets: `blko-tabs.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
