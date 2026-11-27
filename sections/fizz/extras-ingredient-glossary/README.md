# Ingredient glossary

A–Z ingredient search, filters, and detail panel.

- Category: ingredients
- Kind: section
- Shopify target: ok
- HTML target: gap: no static HTML demo for this theme yet

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Ingredient glossary" (id `extras-ingredient-glossary`, theme `fizz`; Shopify bundle: sections/fizz/extras-ingredient-glossary/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-extras-ingredient-glossary.liquid`
- `assets/blko-tabs.js`
- `assets/blko-extras.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | What’s inside |
| `heading` | text | Heading | Twelve things we put in. |
| `text` | textarea | Text | Each entry says what it is, what it does and why it earned a spot in your can. |
| `search_label` | text | Search label | Search ingredients |
| `search_placeholder` | text | Search placeholder | Try “ginger” |
| `note_label` | text | Note label | Read note ↗ |
| `detail_eyebrow` | text | Detail eyebrow | Why it is in |
| `detail_heading` | text | Detail heading | Chicory root fiber |
| `detail_text` | textarea | Detail text | A prebiotic fiber from chicory root. It brings most of the 9g of fiber in every  |
| `best_for_label` | text | Best for label | Where you will find it |
| `best_for` | text | Best for | Every Fizz flavor |
| `found_in_label` | text | Found in label | Pairs well with |
| `found_in` | text | Found in | Citrus and berry flavors |

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
| `tags` | text | Tags (space separated) | fiber |
| `letter` | text | Letter | G |
| `name` | text | Name | Ginger root |
| `detail` | textarea | Detail | A warm, zippy botanical kick |

## Dependencies

- Assets: `blko-tabs.js`, `blko-extras.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
