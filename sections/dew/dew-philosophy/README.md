# Philosophy panel

Text laid over a soft image with a ghost pill call to action.

- Category: image-with-text
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/dew/sections/image-with-text--dew-philosophy.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Philosophy panel" (id `dew-philosophy`, theme `dew`; live demo: https://demo.blocko.ai/html/dew/sections/image-with-text--dew-philosophy.html; Shopify bundle: sections/dew/dew-philosophy/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-dew-philosophy.liquid`
- `assets/blko-signature.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Neutral skincare products arranged on a soft surface |
| `eyebrow` | text | Eyebrow | why the shelf is small |
| `heading` | text | Heading | a short list, every item pulling its weight. |
| `text` | textarea | Text | We would rather make one cleanser we love than five we shrug at. Each formula no |
| `button_url` | url | Button url |  |
| `button_label` | text | Button label | see the shelf |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-signature.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
