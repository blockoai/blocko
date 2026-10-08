# Free-shipping progress

Cart threshold message and progress bar.

- Category: cart
- Kind: block
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/stubble/blocks/cart--cart-checkout-free-shipping.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "Free-shipping progress" (id `cart-checkout-free-shipping`, theme `stubble`; live demo: https://demo.blocko.ai/html/stubble/blocks/cart--cart-checkout-free-shipping.html; Shopify bundle: sections/stubble/cart-checkout-free-shipping/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

This is a theme block: copy it into `blocks/`, then add it inside a section that accepts theme blocks (`@theme`).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `blocks/blko-cart-checkout-free-shipping.liquid`
- `assets/blko-cart-drawer.js`
- `assets/blko-cart-checkout.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `threshold` | range | Free-shipping threshold | 50 |
| `progress_label` | text | Progress label | Shipping progress |
| `before` | text | Before | Only |
| `after` | text | After | away from complimentary shipping. |
| `unlocked` | text | Unlocked | You have unlocked complimentary shipping. |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-cart-drawer.js`, `blko-cart-checkout.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
