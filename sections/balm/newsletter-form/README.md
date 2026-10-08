# Newsletter form

Email collection form with status message.

- Category: form
- Kind: block
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm/blocks/form--newsletter-form.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "Newsletter form" (id `newsletter-form`, theme `balm`; live demo: https://demo.blocko.ai/html/balm/blocks/form--newsletter-form.html; Shopify bundle: sections/balm/newsletter-form/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

This is a theme block: copy it into `blocks/`, then add it inside a section that accepts theme blocks (`@theme`).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `blocks/blko-newsletter-form.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `button_label` | text | Button label | Sign up |
| `email_label` | text | Email label | Email address |
| `success_message` | text | Success message | Thanks for subscribing. |
| `message` | text | Message | Stay in the know. |

## Blocks

_No blocks._

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
