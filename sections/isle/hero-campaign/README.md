# Campaign hero

Full-bleed editorial campaign image with centered CTA.

- Category: hero-banner
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/isle/sections/hero-banner--hero-campaign.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Campaign hero" (id `hero-campaign`, theme `isle`; live demo: https://demo.blocko.ai/html/isle/sections/hero-banner--hero-campaign.html; Shopify bundle: sections/isle/hero-campaign/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-hero-campaign.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Glowing shoulders in warm light next to a jumbo body butter |
| `eyebrow` | text | Eyebrow | Limited edition scent |
| `heading` | text | Heading | Wrap yourself in toasted-sugar warmth. |
| `text` | textarea | Text | A seasonal body collection in a cozy new scent, with jumbo sizes that make shari |
| `button_label` | text | Button label | Shop the collection |
| `button_url` | url | Button url |  |
| `image_2` | image_picker | Collage image 2 |  |
| `image_2_alt` | text | Collage image 2 alt text |  |
| `image_3` | image_picker | Collage image 3 |  |
| `image_3_alt` | text | Collage image 3 alt text |  |

## Blocks

_No blocks._

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
