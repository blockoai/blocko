# Scent quiz banner

Full-width banner inviting visitors to take a scent quiz for a discount.

- Category: promo
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/promo--lather-quiz-banner.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Scent quiz banner" (id `lather-quiz-banner`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/promo--lather-quiz-banner.html; Shopify bundle: sections/lather/lather-quiz-banner/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-lather-quiz-banner.liquid`
- `assets/blko-lather-signature.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | 60 seconds. 5 questions. |
| `heading` | text | Heading | Not sure what you smell like? |
| `text` | textarea | Text | Take the scent quiz and get matched with your family, plus 20% off your first or |
| `button_url` | url | Button url |  |
| `button_label` | text | Button label | Take the quiz |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-lather-signature.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
