# Brand imagery

Photography direction with a three-image moodboard.

- Category: brand-guidelines
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/tint/sections/brand-guidelines--brand-imagery.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Brand imagery" (id `brand-imagery`, theme `tint`; live demo: https://demo.blocko.ai/html/tint/sections/brand-guidelines--brand-imagery.html; Shopify bundle: sections/tint/brand-imagery/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-brand-imagery.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `eyebrow` | text | Eyebrow | Imagery |
| `heading` | text | Heading | Photography |
| `image_1` | image_picker | Moodboard image 1 |  |
| `image_1_alt` | text | Moodboard image 1 alt text | Tint imagery 1 |
| `image_2` | image_picker | Moodboard image 2 |  |
| `image_2_alt` | text | Moodboard image 2 alt text | Tint imagery 2 |
| `image_3` | image_picker | Moodboard image 3 |  |
| `image_3_alt` | text | Moodboard image 3 alt text | Tint imagery 3 |

## Blocks

### Direction (`direction`, max 6)

| id | type | label | default |
| --- | --- | --- | --- |
| `title` | text | Title | Natural light |
| `text` | textarea | Text | Soft daylight, real skin. |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
