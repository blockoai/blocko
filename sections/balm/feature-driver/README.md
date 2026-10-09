# Feature driver

Editorial split panel pairing product copy and imagery.

- Category: image-with-text
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm/sections/image-with-text--feature-driver.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Feature driver" (id `feature-driver`, theme `balm`; live demo: https://demo.blocko.ai/html/balm/sections/image-with-text--feature-driver.html; Shopify bundle: sections/balm/feature-driver/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-feature-driver.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Hand blending a cream stick into the cheek |
| `eyebrow` | text | Eyebrow | Skincare inside the color |
| `heading` | text | Heading | Nearly nine in ten ingredients come from skincare. |
| `text` | textarea | Text | Each stick melts in with the warmth of your fingers, cushions skin with botanica |
| `button_label` | text | Button label | Shop the sticks |
| `button_url` | url | Button url |  |

## Blocks

_No blocks._

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
