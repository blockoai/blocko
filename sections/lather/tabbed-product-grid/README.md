# Tabbed product grid

Best sellers and new arrivals with interactive tabs.

- Category: featured-collection
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/featured-collection--tabbed-product-grid.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Tabbed product grid" (id `tabbed-product-grid`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/featured-collection--tabbed-product-grid.html; Shopify bundle: sections/lather/tabbed-product-grid/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-tabbed-product-grid.liquid`
- `assets/blko-tabs.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `collection` | collection | Collection |  |
| `eyebrow` | text | Eyebrow | What's hot |
| `heading` | text | Heading | The bars everyone grabs first |

## Blocks

### Tab (`tab`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `key` | text | Tab key | best |
| `label` | text | Label | Best sellers |

## Dependencies

- Assets: `blko-tabs.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
