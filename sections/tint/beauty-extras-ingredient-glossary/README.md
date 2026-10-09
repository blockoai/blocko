# Ingredient glossary

A–Z ingredient search, filters, and detail panel.

- Category: ingredients
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/tint/sections/ingredients--beauty-extras-ingredient-glossary.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Ingredient glossary" (id `beauty-extras-ingredient-glossary`, theme `tint`; live demo: https://demo.blocko.ai/html/tint/sections/ingredients--beauty-extras-ingredient-glossary.html; Shopify bundle: sections/tint/beauty-extras-ingredient-glossary/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-beauty-extras-ingredient-glossary.liquid`
- `assets/blko-tabs.js`
- `assets/blko-beauty-extras.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Ingredient index |
| `heading` | text | Heading | Every formula, every ingredient. |
| `text` | textarea | Text | Choose a product, read its full ingredient list and see what each active does. L |
| `search_label` | text | Search label | Search ingredients |
| `search_placeholder` | text | Search placeholder | Try “vitamin C” |
| `note_label` | text | Note label | Read note ↗ |
| `detail_eyebrow` | text | Detail eyebrow | Ingredient detail |
| `detail_heading` | text | Detail heading | Stabilised vitamin C |
| `detail_text` | textarea | Detail text | A brightening ingredient in a gentle, stable form. It helps shadows and dullness |
| `best_for_label` | text | Best for label | Best for |
| `best_for` | text | Best for | Dark circles and dullness |
| `found_in_label` | text | Found in label | Found in |
| `found_in` | text | Found in | Concealer, serum mist |

## Blocks

### Filter (`filter`, max 8)

| id | type | label | default |
| --- | --- | --- | --- |
| `active` | checkbox | Active by default | false |
| `key` | text | Filter key (matches ingredient tags) | all |
| `label` | text | Label | All |

### Ingredient (`ingredient`)

| id | type | label | default |
| --- | --- | --- | --- |
| `tags` | text | Tags (space separated) | soothing hydration |
| `letter` | text | Letter | A |
| `name` | text | Name | Aloe leaf juice |
| `detail` | textarea | Detail | Calms and cushions skin |

## Dependencies

- Assets: `blko-tabs.js`, `blko-beauty-extras.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
