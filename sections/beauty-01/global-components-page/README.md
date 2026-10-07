# Utility components demo

Interactive playground for storewide utility blocks.

- Category: page
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://blocko.avada.net/html/beauty-01/sections/page--global-components-page.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Utility components demo" (id `global-components-page`, theme `beauty-01`; live demo: https://blocko.avada.net/html/beauty-01/sections/page--global-components-page.html; Shopify bundle: sections/beauty-01/global-components-page/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-global-components-page.liquid`
- `assets/blko-global.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Kicker | Utility components |
| `heading` | text | Heading | Small moments that make a store feel considered. |
| `text` | textarea | Text | Use the controls below to test the interaction states. |
| `rotate_message_1` | text | Rotate message 1 | Shipping is complimentary over $50. |
| `rotate_message_2` | text | Rotate message 2 | A small sample is included with every order. |
| `rotate_message_3` | text | Rotate message 3 | Easy returns, within 30 days. |
| `countdown_deadline` | text | Deadline (YYYY-MM-DDTHH:MM:SS) | 2026-12-31T23:59:59 |
| `countdown_prefix` | text | Countdown prefix | Small seasonal gift ends in |
| `countdown_link_url` | url | Countdown link url |  |
| `countdown_link_label` | text | Countdown link label | See details |
| `inline_kicker` | text | Inline kicker | Stay close |
| `inline_heading` | text | Inline heading | A calmer kind of inbox. |
| `inline_inline_email_label` | text | Inline inline email label | Email address |
| `inline_inline_email_placeholder` | text | Inline inline email placeholder | you@example.com |
| `inline_inline_submit_label` | text | Inline inline submit label | Subscribe |
| `inline_inline_success_message` | text | Inline inline success message | You’re signed up. Keep an eye on your inbox. |
| `inline_inline_error_message` | text | Inline inline error message | Please enter a valid email address. |
| `inline_inline_message` | text | Inline inline message | A few thoughtful notes, from time to time. |
| `locale_country_label` | text | Locale country label | Country |
| `locale_language_label` | text | Locale language label | Language |
| `locale_currency_label` | text | Locale currency label | Currency |
| `locale_kicker` | text | Locale kicker | Your store settings |
| `locale_update_label` | text | Locale update label | Update |
| `toast_saved_message` | text | Toast saved message | Saved to your routine. |
| `toast_saved_label` | text | Toast saved label | Show saved toast |
| `toast_sample_message` | text | Toast sample message | Your sample has been added. |
| `toast_sample_label` | text | Toast sample label | Show sample toast |
| `popup_trigger_label` | text | Popup trigger label | Preview newsletter popup |
| `popup_kicker` | text | Popup kicker | A small note |
| `popup_heading` | text | Popup heading | Make room for good things. |
| `popup_text` | textarea | Popup text | Receive routine ideas, new arrivals, and an occasional little extra. |
| `popup_popup_email_label` | text | Popup popup email label | Email address |
| `popup_popup_email_placeholder` | text | Popup popup email placeholder | you@example.com |
| `popup_popup_submit_label` | text | Popup popup submit label | Sign me up |
| `popup_popup_success_message` | text | Popup popup success message | You’re signed up. Keep an eye on your inbox. |
| `popup_popup_error_message` | text | Popup popup error message | Please enter a valid email address. |
| `popup_popup_message` | text | Popup popup message | A few thoughtful notes, from time to time. |
| `cookie_heading` | text | Cookie heading | Cookies, with care. |
| `cookie_text` | textarea | Cookie text | We use essential cookies to keep this demonstration running smoothly. |
| `cookie_reject_label` | text | Cookie reject label | Only essential |
| `cookie_accept_label` | text | Cookie accept label | Accept all |
| `region_kicker` | text | Region kicker | A quick check |
| `region_heading` | text | Region heading | Is this your region? |
| `region_text` | textarea | Region text | Prices and availability may vary by location. |
| `region_confirm_label` | text | Region confirm label | Continue shopping |
| `region_change_label` | text | Region change label | Change region |
| `top_label` | text | Top label | Top |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-global.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
