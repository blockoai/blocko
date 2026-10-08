# Video review cards

Tall 9:16 review cards with quote, shade and an add button.

- Category: reviews
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/tint/sections/reviews--tint-reels.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Video review cards" (id `tint-reels`, theme `tint`; live demo: https://demo.blocko.ai/html/tint/sections/reviews--tint-reels.html; Shopify bundle: sections/tint/tint-reels/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-tint-reels.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `heading` | text | Heading | Real people, real shades |
| `link_url` | url | Link url |  |
| `link_label` | text | Link label | Read reviews |

## Blocks

### Review card (`reel`, max 8)

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text |  |
| `quote` | text | Quote | Blends in seconds. |
| `name` | text | Name | Maya |
| `shade` | text | Shade | Rose Beige |
| `url` | url | Url |  |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
