# Product detail accordions

Details, ingredients, and application accordions.

- Category: product-information
- Kind: block
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/stubble/blocks/product-information--pdp-detail-accordions.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "Product detail accordions" (id `pdp-detail-accordions`, theme `stubble`; live demo: https://demo.blocko.ai/html/stubble/blocks/product-information--pdp-detail-accordions.html; Shopify bundle: sections/stubble/pdp-detail-accordions/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

This is a theme block: copy it into `blocks/`, then add it inside a section that accepts theme blocks (`@theme`).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `blocks/blko-pdp-detail-accordions.liquid`
- `assets/blko-accordion.js`
- `assets/blko-pdp.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label_1` | text | Label 1 | Details |
| `text_1` | textarea | Text 1 | Clear product information for everyday routines. |
| `label_2` | text | Label 2 | Ingredients |
| `text_2` | textarea | Text 2 | Clear product information for everyday routines. |
| `label_3` | text | Label 3 | How to use |
| `text_3` | textarea | Text 3 | Clear product information for everyday routines. |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-accordion.js`, `blko-pdp.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
