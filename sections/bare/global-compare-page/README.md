# Product comparison

Responsive product comparison table with removable columns.

- Category: page
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/bare/sections/page--global-compare-page.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Product comparison" (id `global-compare-page`, theme `bare`; live demo: https://demo.blocko.ai/html/bare/sections/page--global-compare-page.html; Shopify bundle: sections/bare/global-compare-page/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-global-compare-page.liquid`
- `assets/blko-global.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Kicker | Compare formulas |
| `heading` | text | Heading | Find the feel that fits. |
| `text` | textarea | Text | Compare the essentials side by side, then choose the one that suits your routine |
| `details_label` | text | Details label | Details |
| `remove_label` | text | Remove label | Remove |
| `finish_label` | text | Finish label | Finish |
| `coverage_label` | text | Coverage label | Coverage |
| `best_for_label` | text | Best for label | Best for |
| `price_label` | text | Price label | Price |
| `empty_kicker` | text | Empty kicker | No products to compare |
| `empty_heading` | text | Empty heading | Add a few essentials to see them side by side. |
| `button_label` | text | Button label | Browse products |

## Blocks

### Product column (`column`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `name` | text | Name | Sheer tint |
| `finish` | text | Finish | Natural |
| `coverage` | text | Coverage | Sheer |
| `best_for` | text | Best for | Everyday complexion |
| `price` | text | Price | $48 |

## Dependencies

- Assets: `blko-global.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
