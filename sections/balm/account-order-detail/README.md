# Account order detail

Dawn-style order detail with line items, totals, and generic delivery details.

- Category: customer-account
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm/sections/customer-account--account-order-detail.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Account order detail" (id `account-order-detail`, theme `balm`; live demo: https://demo.blocko.ai/html/balm/sections/customer-account--account-order-detail.html; Shopify bundle: sections/balm/account-order-detail/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-account-order-detail.liquid`
- `assets/blko-account.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `back_label` | text | Back label | ← Back to orders |
| `kicker_label` | text | Kicker label | Order No. |
| `heading` | text | Heading | Order details |
| `placed_label` | text | Placed label | Placed |
| `items_heading` | text | Items heading | Items |
| `summary_heading` | text | Summary heading | Order summary |
| `subtotal_label` | text | Subtotal label | Subtotal |
| `shipping_label` | text | Shipping label | Shipping |
| `free_label` | text | Free label | Free |
| `total_label` | text | Total label | Total |
| `address_heading` | text | Address heading | Delivery address |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-account.js`
- Locale keys: `blko.account.quantity` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
