# Newsletter inline success

Inline email signup with an accessible confirmation message.

- Category: newsletter
- Kind: block
- Shopify target: ok
- HTML target: ok
- Live demo: https://blocko.avada.net/html/beauty-01/blocks/newsletter--global-newsletter-inline-success.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "Newsletter inline success" (id `global-newsletter-inline-success`, theme `beauty-01`; live demo: https://blocko.avada.net/html/beauty-01/blocks/newsletter--global-newsletter-inline-success.html; Shopify bundle: sections/beauty-01/global-newsletter-inline-success/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

This is a theme block: copy it into `blocks/`, then add it inside a section that accepts theme blocks (`@theme`).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `blocks/blko-global-newsletter-inline-success.liquid`
- `assets/blko-global.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Kicker | Stay close |
| `heading` | text | Heading | A calmer kind of inbox. |
| `inline_email_label` | text | Inline email label | Email address |
| `inline_email_placeholder` | text | Inline email placeholder | you@example.com |
| `inline_submit_label` | text | Inline submit label | Subscribe |
| `inline_success_message` | text | Inline success message | You’re signed up. Keep an eye on your inbox. |
| `inline_error_message` | text | Inline error message | Please enter a valid email address. |
| `inline_message` | text | Inline message | A few thoughtful notes, from time to time. |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-global.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
