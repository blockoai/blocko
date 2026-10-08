# Cart drawer preview

Expanded drawer composition with a threshold bar and concise recommendation.

- Category: cart-drawer
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/prism/sections/cart-drawer--cart-checkout-drawer-preview.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Cart drawer preview" (id `cart-checkout-drawer-preview`, theme `prism`; live demo: https://demo.blocko.ai/html/prism/sections/cart-drawer--cart-checkout-drawer-preview.html; Shopify bundle: sections/prism/cart-checkout-drawer-preview/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-cart-checkout-drawer-preview.liquid`
- `assets/blko-cart-drawer.js`
- `assets/blko-cart-checkout.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `product` | product | Upsell product |  |
| `checkout_label` | text | Checkout label | Checkout |
| `eyebrow` | text | Eyebrow | Cart drawer |
| `heading` | text | Heading | your bag |
| `threshold` | range | Free-shipping threshold | 50 |
| `progress_label` | text | Progress label | Shipping progress |
| `before` | text | Before | Only |
| `after` | text | After | away from complimentary shipping. |
| `unlocked` | text | Unlocked | You have unlocked complimentary shipping. |
| `upsell_text` | text | Upsell text | Add a finishing touch |
| `upsell_eyebrow` | text | Upsell eyebrow | Pairs well with |
| `upsell_button` | text | Upsell button | Add |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-cart-drawer.js`, `blko-cart-checkout.js`
- Locale keys: `blko.cart.decrease`, `blko.cart.increase`, `blko.cart.line_total`, `blko.cart.remove` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
