# Contact form

Accessible support form with client-side confirmation state.

- Category: contact
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/prism/sections/contact--content-contact-form.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Contact form" (id `content-contact-form`, theme `prism`; live demo: https://demo.blocko.ai/html/prism/sections/contact--content-contact-form.html; Shopify bundle: sections/prism/content-contact-form/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-content-contact-form.liquid`
- `assets/blko-content.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Kicker | Send a note |
| `heading` | text | Heading | Tell us what you need. |
| `text` | textarea | Text | We’ll respond during the support hours below. Fields marked with an asterisk are |
| `name_label` | text | Name label | Name |
| `email_label` | text | Email label | Email |
| `topic_label` | text | Topic label | Topic |
| `message_label` | text | Message label | Message |
| `button_label` | text | Button label | Send message |
| `success_message` | text | Success message | Thanks — your message is on its way. |
| `error_message` | text | Error message | Please complete the required fields before sending your message. |

## Blocks

### Topic (`topic`, max 8)

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | Order support |

## Dependencies

- Assets: `blko-content.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
