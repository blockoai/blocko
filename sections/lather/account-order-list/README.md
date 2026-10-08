# Account order list

Responsive order history table for a signed-in customer.

- Category: customer-account
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/customer-account--account-order-list.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Account order list" (id `account-order-list`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/customer-account--account-order-list.html; Shopify bundle: sections/lather/account-order-list/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-account-order-list.liquid`
- `assets/blko-account.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Kicker | Order history |
| `heading` | text | Heading | Recent orders |
| `view_all_url` | url | View all url |  |
| `view_all_label` | text | View all label | View all |
| `col_order` | text | Col order | Order |
| `col_date` | text | Col date | Date |
| `col_status` | text | Col status | Status |
| `col_total` | text | Col total | Total |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-account.js`
- Locale keys: `blko.account.order_prefix` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
