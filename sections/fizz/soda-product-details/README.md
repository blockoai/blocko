# Soda product details

Benefit icons, fiber and nutrition facts panel, and FAQ accordion.

- Category: product-information
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/fizz/sections/product-information--soda-product-details.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Soda product details" (id `soda-product-details`, theme `fizz`; live demo: https://demo.blocko.ai/html/fizz/sections/product-information--soda-product-details.html; Shopify bundle: sections/fizz/soda-product-details/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-soda-product-details.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `nutrition_heading` | text | Nutrition heading | What's inside |
| `fiber` | text | Fiber grams (product metafield custom.fiber overrides) | 9 |
| `fiber_caption` | text | Fiber caption | grams of prebiotic fiber per can |
| `serving` | text | Serving size | 1 can (355 mL) |
| `calories` | text | Calories | 35 |
| `fat` | text | Total fat | 0g (0%) |
| `sodium` | text | Sodium | 15mg (1%) |
| `carbs` | text | Total carbohydrate | 11g (4%) |
| `sugars` | text | Total sugars | 2g |
| `added_sugars` | text | Added sugars | 0g (0%) |
| `protein` | text | Protein | 0g |
| `faq_heading` | text | FAQ heading | Questions? Answers. |

## Blocks

### Benefit icon (`benefit`)

| id | type | label | default |
| --- | --- | --- | --- |
| `icon` | select | Icon | leaf |
| `title` | text | Title | Plant fiber |
| `text` | text | Text | Prebiotic fiber from plants |

### FAQ (`faq`)

| id | type | label | default |
| --- | --- | --- | --- |
| `question` | text | Question | Question |
| `answer` | richtext | Answer | <p>Answer</p> |


## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): `answer`, `icon`, `question`, `text`, `title`

Generated file: do not edit; open an issue instead.
