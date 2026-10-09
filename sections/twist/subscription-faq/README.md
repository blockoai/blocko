# FAQ

Expandable answers for common service questions.

- Category: faq
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/twist/sections/faq--subscription-faq.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "FAQ" (id `subscription-faq`, theme `twist`; live demo: https://demo.blocko.ai/html/twist/sections/faq--subscription-faq.html; Shopify bundle: sections/twist/subscription-faq/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-subscription-faq.liquid`
- `assets/blko-accordion.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | billing and changes |
| `heading` | text | Heading | Auto-ship questions |

## Blocks

### Question (`question`)

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | How do I choose a clip size? |
| `text` | textarea | Text | Clear product info, so you can shop with confidence. |

## Dependencies

- Assets: `blko-accordion.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
