# Soda contact

Contact channels and a message form.

- Category: contact
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/fizz/sections/contact--soda-contact.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Soda contact" (id `soda-contact`, theme `fizz`; live demo: https://demo.blocko.ai/html/fizz/sections/contact--soda-contact.html; Shopify bundle: sections/fizz/soda-contact/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-soda-contact.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `bg` | color | Background | #ffdcc2 |
| `text_color` | color | Text | #0f3b2e |
| `heading` | text | Heading | Say hi. |
| `text` | textarea | Intro | Order question, flavor idea or a stockist inquiry? A real person reads every message. |
| `name_label` | text | Name label | Your name |
| `email_label` | text | Email label | Email |
| `topic_label` | text | Topic label | Topic |
| `topics` | text | Topics (comma separated) | My order, Flavors, Subscriptions, Wholesale, Something else |
| `message_label` | text | Message label | Message |
| `button_label` | text | Button label | Send message |
| `success_text` | text | Success message | Thanks! We will reply within one business day. |

## Blocks

### Channel (`channel`)

| id | type | label | default |
| --- | --- | --- | --- |
| `title` | text | Title | Help desk |
| `text` | text | Text | Orders, returns and flavor questions. |
| `url` | url | Link |  |
| `link_label` | text | Link label | help@example.com |


## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): `link_label`, `text`, `title`, `url`

Generated file: do not edit; open an issue instead.
