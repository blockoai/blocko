# Account address form

Responsive add and edit address form, hidden until a customer action opens it.

- Category: customer-account
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/twist/sections/customer-account--account-address-form.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Account address form" (id `account-address-form`, theme `twist`; live demo: https://demo.blocko.ai/html/twist/sections/customer-account--account-address-form.html; Shopify bundle: sections/twist/account-address-form/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-account-address-form.liquid`
- `assets/blko-account.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `form_kicker` | text | Form kicker | Delivery details |
| `title` | text | Title | Add an address |
| `close_label` | text | Close label | close |
| `first_label` | text | First label | First name |
| `last_label` | text | Last label | Last name |
| `company_label` | text | Company label | Company (optional) |
| `line_label` | text | Line label | Address |
| `city_label` | text | City label | City |
| `region_label` | text | Region label | Region |
| `postal_label` | text | Postal label | Postal code |
| `country_label` | text | Country label | Country |
| `submit_label` | text | Submit label | Save address |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-account.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
