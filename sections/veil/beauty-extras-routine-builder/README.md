# Routine builder

Three-step routine picker with a running total.

- Category: routine-builder
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/veil/sections/routine-builder--beauty-extras-routine-builder.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Routine builder" (id `beauty-extras-routine-builder`, theme `veil`; live demo: https://demo.blocko.ai/html/veil/sections/routine-builder--beauty-extras-routine-builder.html; Shopify bundle: sections/veil/beauty-extras-routine-builder/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-beauty-extras-routine-builder.liquid`
- `assets/blko-beauty-extras.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `collection` | collection | Routine products (one per step) |  |
| `pick_label` | text | Pick label | Everyday choice |
| `alternate_label` | text | Alternate label | Upgrade |
| `eyebrow` | text | Eyebrow | Your five-minute face |
| `heading` | text | Heading | Choose a product for each step. |
| `text` | textarea | Text | Pick prep, tint and eye products, and watch the total update. |
| `step_text` | text | Step text | A reliable essential for this step. |
| `summary_eyebrow` | text | Summary eyebrow | Your routine |
| `total_label` | text | Total label | Total |
| `add_label` | text | Add label | Add all three to bag |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-beauty-extras.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
