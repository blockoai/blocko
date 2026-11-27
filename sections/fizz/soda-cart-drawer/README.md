# Soda cart drawer

Slide-out cart with a free-shipping progress bar, quantity controls and subscription lines.

- Category: cart-drawer
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/fizz/sections/cart-drawer--soda-cart-drawer.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Soda cart drawer" (id `soda-cart-drawer`, theme `fizz`; live demo: https://demo.blocko.ai/html/fizz/sections/cart-drawer--soda-cart-drawer.html; Shopify bundle: sections/fizz/soda-cart-drawer/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-soda-cart-drawer.liquid`
- `assets/blko-soda.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `title` | text | Title | Your cart |
| `free_shipping_threshold` | number | Free shipping threshold (store currency, 0 hides the bar) | 35 |
| `ship_away` | text | Free shipping progress text | You are [amount] away from free shipping! |
| `ship_done` | text | Free shipping unlocked text | You unlocked free shipping! |
| `subscription_label` | text | Subscription label | Subscription |
| `remove_label` | text | Remove label | Remove |
| `empty_text` | text | Empty cart text | Your cart is empty. Let's fix that. |
| `continue_label` | text | Continue shopping label | Shop flavors |
| `subtotal_label` | text | Subtotal label | Subtotal |
| `checkout_label` | text | Checkout label | Check out |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-soda.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
