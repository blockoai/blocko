# Frequently bought together

Checkbox bundle with a live total and a single add-all button.

- Category: product-recommendations
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/twist/sections/product-recommendations--twist-fbt.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Frequently bought together" (id `twist-fbt`, theme `twist`; live demo: https://demo.blocko.ai/html/twist/sections/product-recommendations--twist-fbt.html; Shopify bundle: sections/twist/twist-fbt/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-twist-fbt.liquid`
- `assets/blko-variant-picker.js`
- `assets/blko-cart-drawer.js`
- `assets/blko-twist-signature.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `collection` | collection | Collection |  |
| `heading` | text | Heading | frequently bought together |
| `total_label` | text | Total label | total |
| `button_label` | text | Button label | add all to bag |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-variant-picker.js`, `blko-cart-drawer.js`, `blko-twist-signature.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
