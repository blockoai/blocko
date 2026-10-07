# FAQ accordion item

Independent accessible FAQ disclosure row.

- Category: faq
- Kind: block
- Shopify target: ok
- HTML target: ok
- Live demo: https://blocko.avada.net/html/veil/blocks/faq--content-faq-accordion-item.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "FAQ accordion item" (id `content-faq-accordion-item`, theme `veil`; live demo: https://blocko.avada.net/html/veil/blocks/faq--content-faq-accordion-item.html; Shopify bundle: sections/veil/content-faq-accordion-item/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

This is a theme block: copy it into `blocks/`, then add it inside a section that accepts theme blocks (`@theme`).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `blocks/blko-content-faq-accordion-item.liquid`
- `assets/blko-content.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `category` | text | Category key | products |
| `question` | text | Question | How do I choose a formula? |
| `answer` | textarea | Answer | Start with the finish and level of coverage you enjoy most, then build from ther |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-content.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
