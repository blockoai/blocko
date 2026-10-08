# Collection catalog grid

Product grid with a promotional tile and progressive load-more behavior.

- Category: main-collection-product-grid
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/tide/sections/main-collection-product-grid--home-collection-collection-grid.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Collection catalog grid" (id `home-collection-collection-grid`, theme `tide`; live demo: https://demo.blocko.ai/html/tide/sections/main-collection-product-grid--home-collection-collection-grid.html; Shopify bundle: sections/tide/home-collection-collection-grid/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-home-collection-collection-grid.liquid`
- `assets/blko-cart-drawer.js`
- `assets/blko-home-collection.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `collection` | collection | Collection |  |
| `products_per_page` | range | Products per page | 4 |
| `empty_text` | text | Empty text | No products match these filters. |
| `quick_label` | text | Quick label | Quick view |
| `promo_image` | image_picker | Promo image |  |
| `promo_image_alt` | text | Promo image alt text | Person applying sun lotion on the beach |
| `promo_eyebrow` | text | Promo eyebrow | Build your ritual |
| `promo_heading` | text | Promo heading | Sea meets skin. |
| `promo_url` | url | Promo url |  |
| `promo_label` | text | Promo label | Explore body care |
| `load_more_label` | text | Load more label | Load more |
| `previous_label` | text | Previous label | Previous page |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-cart-drawer.js`, `blko-home-collection.js`
- Locale keys: `blko.collection.of`, `blko.collection.products`, `blko.collection.products_shown`, `blko.collection.showing` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
