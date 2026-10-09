# Complexion Stick product detail

Gallery, shade and size choices, flexible purchase option, quantity, and sticky purchase bar.

- Category: main-product
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm/sections/main-product--pdp-product-main.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Complexion Stick product detail" (id `pdp-product-main`, theme `balm`; live demo: https://demo.blocko.ai/html/balm/sections/main-product--pdp-product-main.html; Shopify bundle: sections/balm/pdp-product-main/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-pdp-product-main.liquid`
- `assets/blko-accordion.js`
- `assets/blko-quantity.js`
- `assets/blko-pdp.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `product` | product | Product |  |
| `button_label` | text | Button label | Add to bag |
| `one_time_label` | text | One time label | One-time purchase |
| `breadcrumb_shop` | text | Breadcrumb shop | Shop |
| `breadcrumb_category_url` | url | Breadcrumb category url |  |
| `breadcrumb_category` | text | Breadcrumb category | Face |
| `price_note` | text | Price note | 0.3 oz / 9 g stick |
| `shade_help_url` | url | Shade help url |  |
| `shade_help_label` | text | Shade help label | Not sure of your shade? Take the finder. |
| `plan_legend` | text | Plan legend | Purchase option |
| `ship_note` | text | Ship note | Free US shipping from $75 · 30-day guarantee |

## Blocks

### Accordion (`accordion`, max 6)

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | Details |
| `text` | textarea | Text | Thoughtful, clear product information for everyday routines. |

## Dependencies

- Assets: `blko-accordion.js`, `blko-quantity.js`, `blko-pdp.js`
- Locale keys: `blko.pdp.decrease_quantity`, `blko.pdp.increase_quantity`, `blko.pdp.product_images`, `blko.pdp.sold_out`, `blko.pdp.zoom`, `blko.pdp.zoom_image` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
