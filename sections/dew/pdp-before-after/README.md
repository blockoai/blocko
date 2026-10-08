# Before and after comparison

Accessible range-controlled result comparison with proof points.

- Category: before-after
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/dew/sections/before-after--pdp-before-after.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Before and after comparison" (id `pdp-before-after`, theme `dew`; live demo: https://demo.blocko.ai/html/dew/sections/before-after--pdp-before-after.html; Shopify bundle: sections/dew/pdp-before-after/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-pdp-before-after.liquid`
- `assets/blko-pdp.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Real results |
| `heading` | text | Heading | your skin, softly lit. |
| `text` | textarea | Text | A natural-looking glow that lets your skin do the talking. |
| `stat_1_value` | text | Stat 1 value | 94% |
| `stat_1_label` | text | Stat 1 label | said it felt weightless |
| `stat_2_value` | text | Stat 2 value | 91% |
| `stat_2_label` | text | Stat 2 label | said it absorbed quickly |
| `after_image` | image_picker | After image |  |
| `after_image_alt` | text | After image alt text | Skin after glow serum |
| `before_image` | image_picker | Before image |  |
| `before_image_alt` | text | Before image alt text | Skin before glow serum |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-pdp.js`
- Locale keys: `blko.pdp.after`, `blko.pdp.before`, `blko.pdp.reveal_comparison` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
