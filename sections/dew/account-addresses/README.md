# Account addresses

Saved delivery-address list with add, edit, and remove demo controls.

- Category: customer-account
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/dew/sections/customer-account--account-addresses.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Account addresses" (id `account-addresses`, theme `dew`; live demo: https://demo.blocko.ai/html/dew/sections/customer-account--account-addresses.html; Shopify bundle: sections/dew/account-addresses/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-account-addresses.liquid`
- `assets/blko-account.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Kicker | Saved details |
| `heading` | text | Heading | Addresses |
| `add_label` | text | Add label | Add a new address |
| `default_label` | text | Default label | Default |
| `edit_label` | text | Edit label | Edit |
| `remove_label` | text | Remove label | Remove |
| `form_kicker` | text | Form kicker | Delivery details |
| `edit_title` | text | Edit title | Edit address |
| `close_label` | text | Close label | Close |
| `first_label` | text | First label | First name |
| `last_label` | text | Last label | Last name |
| `company_label` | text | Company label | Company (optional) |
| `line_label` | text | Line label | Address |
| `city_label` | text | City label | City |
| `region_label` | text | Region label | Region |
| `postal_label` | text | Postal label | Postal code |
| `country_label` | text | Country label | Country |
| `save_label` | text | Save label | Save address |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-account.js`
- Locale keys: `blko.account.address` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
