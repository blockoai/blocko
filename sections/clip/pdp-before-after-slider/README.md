# Before and after slider

Range-input controlled before and after image comparison.

- Category: social-proof
- Kind: block
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/clip/blocks/social-proof--pdp-before-after-slider.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "Before and after slider" (id `pdp-before-after-slider`, theme `clip`; live demo: https://demo.blocko.ai/html/clip/blocks/social-proof--pdp-before-after-slider.html; Shopify bundle: sections/clip/pdp-before-after-slider/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

This is a theme block: copy it into `blocks/`, then add it inside a section that accepts theme blocks (`@theme`).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `blocks/blko-pdp-before-after-slider.liquid`
- `assets/blko-pdp.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Worn by you |
| `heading` | text | Heading | Your hair, happily held. |
| `text` | textarea | Text | A soft, no-snag hold that keeps every strand where you want it. |
| `stat_1_value` | text | Stat 1 value | 94% |
| `stat_1_label` | text | Stat 1 label | said it held all day |
| `stat_2_value` | text | Stat 2 value | 91% |
| `stat_2_label` | text | Stat 2 label | said it was snag-free |
| `after_image` | image_picker | After image |  |
| `after_image_alt` | text | After image alt text | Hair up with a claw clip |
| `before_image` | image_picker | Before image |  |
| `before_image_alt` | text | Before image alt text | Hair down before styling |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-pdp.js`
- Locale keys: `blko.pdp.after`, `blko.pdp.before`, `blko.pdp.reveal_comparison` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
