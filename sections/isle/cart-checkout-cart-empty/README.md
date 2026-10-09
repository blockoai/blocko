# Empty cart

A calm empty-state recovery with product discovery link.

- Category: cart
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/isle/sections/cart--cart-checkout-cart-empty.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Empty cart" (id `cart-checkout-cart-empty`, theme `isle`; live demo: https://demo.blocko.ai/html/isle/sections/cart--cart-checkout-cart-empty.html; Shopify bundle: sections/isle/cart-checkout-cart-empty/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-cart-checkout-cart-empty.liquid`
- `assets/blko-cart-checkout.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | My bag |
| `heading` | text | Heading | Nothing here yet. |
| `text` | textarea | Text | Sun mists, butters and scents are waiting whenever you are. |
| `button_label` | text | Button label | Start shopping |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Beach tote with body care products |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-cart-checkout.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
