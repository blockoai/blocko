# Newsletter popup

Delayed or exit-intent signup dialog with confirmation state.

- Category: newsletter
- Kind: block
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/prism/blocks/newsletter--global-newsletter-popup.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "Newsletter popup" (id `global-newsletter-popup`, theme `prism`; live demo: https://demo.blocko.ai/html/prism/blocks/newsletter--global-newsletter-popup.html; Shopify bundle: sections/prism/global-newsletter-popup/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

This is a theme block: copy it into `blocks/`, then add it inside a section that accepts theme blocks (`@theme`).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `blocks/blko-global-newsletter-popup.liquid`
- `assets/blko-global.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `trigger_label` | text | Trigger label | Preview newsletter popup |
| `kicker` | text | Kicker | A small note |
| `heading` | text | Heading | Make room for good things. |
| `text` | textarea | Text | Receive routine ideas, new arrivals, and an occasional little extra. |
| `popup_email_label` | text | Popup email label | Email address |
| `popup_email_placeholder` | text | Popup email placeholder | you@example.com |
| `popup_submit_label` | text | Popup submit label | Sign me up |
| `popup_success_message` | text | Popup success message | You’re signed up. Keep an eye on your inbox. |
| `popup_error_message` | text | Popup error message | Please enter a valid email address. |
| `popup_message` | text | Popup message | A few bright notes, from time to time. |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-global.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
