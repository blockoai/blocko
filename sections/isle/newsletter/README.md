# Newsletter

Two-column email signup panel.

- Category: newsletter-signup
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/isle/sections/newsletter-signup--newsletter.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Newsletter" (id `newsletter`, theme `isle`; live demo: https://demo.blocko.ai/html/isle/sections/newsletter-signup--newsletter.html; Shopify bundle: sections/isle/newsletter/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-newsletter.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `button_label` | text | Button label | Subscribe |
| `placeholder` | text | Placeholder | you@example.com |
| `eyebrow` | text | Eyebrow | 10% off your first order |
| `heading` | text | Heading | Join the island list |
| `email_label` | text | Email label | Email address |
| `success_message` | text | Success message | Thanks for subscribing. See you on the sand. |
| `message` | text | Message | New scents, early access to launches and sun-care tips. Leave whenever you want. |

## Blocks

_No blocks._

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
