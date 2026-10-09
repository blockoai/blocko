# Three-step ritual

Numbered three-step skincare ritual beside a product photograph.

- Category: image-with-text
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm/sections/image-with-text--pdp-how-to-apply.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Three-step ritual" (id `pdp-how-to-apply`, theme `balm`; live demo: https://demo.blocko.ai/html/balm/sections/image-with-text--pdp-how-to-apply.html; Shopify bundle: sections/balm/pdp-how-to-apply/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-pdp-how-to-apply.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Skincare ritual products |
| `eyebrow` | text | Eyebrow | Application map |
| `heading` | text | Heading | Base, correct, set |
| `button_label` | text | Button label | Take the shade quiz |
| `button_url` | url | Button url |  |

## Blocks

### Step (`step`, max 5)

| id | type | label | default |
| --- | --- | --- | --- |
| `title` | text | Title | Cleanse |
| `text` | text | Text | Melt away the day with a plant-rich cleansing cream. |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
