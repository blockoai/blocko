# Bundle steps

Three concise steps explaining a flexible routine set.

- Category: multicolumn
- Kind: section
- Shopify target: ok
- HTML target: gap: no static HTML demo for this theme yet

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Bundle steps" (id `pdp-bundle-explainer`, theme `fizz`; Shopify bundle: sections/fizz/pdp-bundle-explainer/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-pdp-bundle-explainer.liquid`
- `assets/blko-pdp.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | What is in the pack |
| `heading` | text | Heading | Twelve cans, three flavors and a few freebies. |

## Blocks

### Step (`step`, max 6)

| id | type | label | default |
| --- | --- | --- | --- |
| `number` | text | Number | 01 |
| `heading` | text | Heading | Choose your flavors |
| `text` | textarea | Text | Select any three flavors made for your fridge. |

## Dependencies

- Assets: `blko-pdp.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
