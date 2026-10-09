# Populated cart

Cart with line items, quantity controls, note, threshold progress and checkout.

- Category: cart
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/isle/sections/cart--cart-checkout-cart-main.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Populated cart" (id `cart-checkout-cart-main`, theme `isle`; live demo: https://demo.blocko.ai/html/isle/sections/cart--cart-checkout-cart-main.html; Shopify bundle: sections/isle/cart-checkout-cart-main/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-cart-checkout-cart-main.liquid`
- `assets/blko-cart-drawer.js`
- `assets/blko-cart-checkout.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `collection` | collection | Upsell collection |  |
| `note_summary` | text | Note summary | Add a gift note |
| `note_label` | text | Note label | Your message |
| `note_placeholder` | text | Note placeholder | Write a short note for your recipient. |
| `upsell_kicker` | text | Upsell kicker | Complete the beach bag |
| `upsell_heading` | text | Upsell heading | Quick add-ons |
| `upsell_eyebrow` | text | Upsell eyebrow | You may also like |
| `upsell_button` | text | Upsell button | Add |
| `summary_heading` | text | Summary heading | Order summary |
| `subtotal_label` | text | Subtotal label | Subtotal |
| `shipping_label` | text | Shipping label | Shipping |
| `shipping_text` | text | Shipping text | Calculated at checkout |
| `total_label` | text | Total label | Total |
| `checkout_label` | text | Checkout label | Secure checkout |
| `summary_note` | textarea | Summary note | Taxes and shipping are calculated at checkout. |
| `eyebrow` | text | Eyebrow | My bag |
| `heading` | text | Heading | Your bag |
| `threshold` | range | Free-shipping threshold | 39 |
| `progress_label` | text | Progress label | Free shipping progress |
| `before` | text | Before | You are only |
| `after` | text | After | away from free shipping. |
| `unlocked` | text | Unlocked | Free shipping unlocked. |
| `empty_eyebrow` | text | Empty eyebrow | Your bag |
| `empty_heading` | text | Empty heading | Your bag is empty. |
| `empty_text` | textarea | Empty text | Sunscreen, butters and scent mists are waiting. |
| `empty_button_label` | text | Empty button label | Start shopping |
| `empty_image` | image_picker | Empty image |  |
| `empty_image_alt` | text | Empty image alt text | Beach tote with body care products |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-cart-drawer.js`, `blko-cart-checkout.js`
- Locale keys: `blko.cart.decrease`, `blko.cart.increase`, `blko.cart.line_total`, `blko.cart.remove` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
