# Refreshed not-found page

Editorial missing-page recovery with search and popular routes.

- Category: 404-page
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/isle/sections/404-page--cart-checkout-not-found.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Refreshed not-found page" (id `cart-checkout-not-found`, theme `isle`; live demo: https://demo.blocko.ai/html/isle/sections/404-page--cart-checkout-not-found.html; Shopify bundle: sections/isle/cart-checkout-not-found/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-cart-checkout-not-found.liquid`
- `assets/blko-cart-checkout.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | 404 |
| `heading` | text | Heading | This page went to the beach. |
| `text` | textarea | Text | Search for what you need, or head back to a favorite spot. |
| `search_label` | text | Search label | Search the shop |
| `search_placeholder` | text | Search placeholder | Search the shop |
| `search_button_label` | text | Search button label | Search |
| `nav_label` | text | Nav label | Popular destinations |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Empty beach chair under a palm tree |

## Blocks

### Destination link (`link`, max 6)

| id | type | label | default |
| --- | --- | --- | --- |
| `url` | url | Url |  |
| `label` | text | Label | Shop all |

## Dependencies

- Assets: `blko-cart-checkout.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
