# Newsletter

Two-column email signup panel.

- Category: newsletter-signup
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/dew/sections/newsletter-signup--newsletter.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Newsletter" (id `newsletter`, theme `dew`; live demo: https://demo.blocko.ai/html/dew/sections/newsletter-signup--newsletter.html; Shopify bundle: sections/dew/newsletter/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-newsletter.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `button_label` | text | Button label | Sign up |
| `placeholder` | text | Placeholder | you@example.com |
| `eyebrow` | text | Eyebrow | A note from the founder |
| `heading` | text | Heading | tips and first looks, straight to your inbox. |
| `email_label` | text | Email label | Email address |
| `success_message` | text | Success message | Thanks for subscribing. |
| `message` | text | Message | Routine ideas, shade drops and early access before the public sees them. |

## Blocks

_No blocks._

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
