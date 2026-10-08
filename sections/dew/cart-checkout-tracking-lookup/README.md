# Order tracking lookup

Lookup form for email and order number with a status timeline.

- Category: order-tracking
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/dew/sections/order-tracking--cart-checkout-tracking-lookup.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Order tracking lookup" (id `cart-checkout-tracking-lookup`, theme `dew`; live demo: https://demo.blocko.ai/html/dew/sections/order-tracking--cart-checkout-tracking-lookup.html; Shopify bundle: sections/dew/cart-checkout-tracking-lookup/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-cart-checkout-tracking-lookup.liquid`
- `assets/blko-cart-drawer.js`
- `assets/blko-cart-checkout.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Order tracking |
| `heading` | text | Heading | Follow your delivery. |
| `text` | textarea | Text | Enter the details from your confirmation email to see the latest status. |
| `found_message` | text | Found message | Your latest shipment status is shown. |
| `error_message` | text | Error message | We could not find that order. Check the details and try again. |
| `unavailable_message` | text | Unavailable message | Order tracking is not available for this store yet. Please use the link in your  |
| `order_label` | text | Order label | Order number |
| `order_placeholder` | text | Order placeholder | e.g. B-10482 |
| `email_label` | text | Email label | Email address |
| `email_placeholder` | text | Email placeholder | you@example.com |
| `button_label` | text | Button label | Track order |

## Blocks

### Timeline step (`step`, max 6)

| id | type | label | default |
| --- | --- | --- | --- |
| `title` | text | Title | Order confirmed |
| `text` | text | Text | We received your order. |

## Dependencies

- Assets: `blko-cart-drawer.js`, `blko-cart-checkout.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): `settings.blocko_api_base`

Generated file: do not edit; open an issue instead.
