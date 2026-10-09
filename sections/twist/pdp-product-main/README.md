# Rice Shampoo Bar product detail

Gallery, shade and size choices, flexible purchase option, quantity, and sticky purchase bar.

- Category: main-product
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/twist/sections/main-product--pdp-product-main.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Rice Shampoo Bar product detail" (id `pdp-product-main`, theme `twist`; live demo: https://demo.blocko.ai/html/twist/sections/main-product--pdp-product-main.html; Shopify bundle: sections/twist/pdp-product-main/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
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
| `button_label` | text | Button label | add to bag |
| `one_time_label` | text | One time label | one-time purchase |
| `breadcrumb_shop` | text | Breadcrumb shop | shop |
| `breadcrumb_category_url` | url | Breadcrumb category url |  |
| `breadcrumb_category` | text | Breadcrumb category | Hair care |
| `price_note` | text | Price note | bar, about 100 washes |
| `shade_help_url` | url | Shade help url |  |
| `shade_help_label` | text | Shade help label | Not sure which formula? Take the quiz. |
| `plan_legend` | text | Plan legend | Purchase option |
| `ship_note` | text | Ship note | Free shipping over $35 · Free gift at $60 · 90-day money-back guarantee |

## Blocks

### Accordion (`accordion`, max 6)

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | details |
| `text` | textarea | Text | Clear product info, so you can shop with confidence. |

## Dependencies

- Assets: `blko-accordion.js`, `blko-quantity.js`, `blko-pdp.js`
- Locale keys: `blko.pdp.decrease_quantity`, `blko.pdp.increase_quantity`, `blko.pdp.product_images`, `blko.pdp.sold_out`, `blko.pdp.zoom`, `blko.pdp.zoom_image` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
