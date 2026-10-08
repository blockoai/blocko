# Build-your-routine bundle

Choose three products and receive a dynamically priced set.

- Category: bundle-builder
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/stubble/sections/bundle-builder--pdp-bundle-builder.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Build-your-routine bundle" (id `pdp-bundle-builder`, theme `stubble`; live demo: https://demo.blocko.ai/html/stubble/sections/bundle-builder--pdp-bundle-builder.html; Shopify bundle: sections/stubble/pdp-bundle-builder/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-pdp-bundle-builder.liquid`
- `assets/blko-pdp.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `collection` | collection | Collection |  |
| `add_label` | text | Add label | Add 3 items to bag |
| `eyebrow` | text | Eyebrow | Build your kit |
| `heading` | text | Heading | Make your starter kit. |
| `text` | text | Text | Choose any three essentials and save 15%. Your kit, your pace, your skin. |
| `summary_eyebrow` | text | Summary eyebrow | Your kit |
| `summary_empty` | text | Summary empty | Choose 3 items to unlock your kit |
| `saving_text` | text | Saving text | Save 15% when your three picks are ready. |
| `price_note` | text | Price note | Bundle price |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-pdp.js`
- Locale keys: `blko.pdp.add`, `blko.pdp.remove` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
