# Contact form fields

Accessible name, email, and message field collection.

- Category: contact
- Kind: block
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/blocks/contact--content-contact-form-fields.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "Contact form fields" (id `content-contact-form-fields`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/blocks/contact--content-contact-form-fields.html; Shopify bundle: sections/lather/content-contact-form-fields/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

This is a theme block: copy it into `blocks/`, then add it inside a section that accepts theme blocks (`@theme`).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `blocks/blko-content-contact-form-fields.liquid`
- `assets/blko-content.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `name_label` | text | Name label | Name |
| `email_label` | text | Email label | Email |
| `message_label` | text | Message label | Message |
| `button_label` | text | Button label | Send message |
| `success_message` | text | Success message | Thanks — your message is on its way. |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-content.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
