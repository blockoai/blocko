# Routine set product

Set-focused product layout with included-item cards.

- Category: main-product
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm/sections/main-product--main-product-bundle.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Routine set product" (id `main-product-bundle`, theme `balm`; live demo: https://demo.blocko.ai/html/balm/sections/main-product--main-product-bundle.html; Shopify bundle: sections/balm/main-product-bundle/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-main-product-bundle.liquid`
- `assets/blko-accordion.js`
- `assets/blko-variant-picker.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `product` | product | Product |  |
| `button_label` | text | Button label | Add to bag |
| `legend` | text | Legend | Choose a shade |

## Blocks

### Accordion (`accordion`)

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | Benefits |
| `text` | textarea | Text | Thoughtful, clear product information for everyday routines. |

## Dependencies

- Assets: `blko-accordion.js`, `blko-variant-picker.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
