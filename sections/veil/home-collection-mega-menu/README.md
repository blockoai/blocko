# Editorial mega menu

Desktop shop dropdown with image-led routine tiles.

- Category: navigation
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/veil/sections/navigation--home-collection-mega-menu.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Editorial mega menu" (id `home-collection-mega-menu`, theme `veil`; live demo: https://demo.blocko.ai/html/veil/sections/navigation--home-collection-mega-menu.html; Shopify bundle: sections/veil/home-collection-mega-menu/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-home-collection-mega-menu.liquid`
- `assets/blko-home-collection.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `trigger_href` | text | Header link URL that opens this menu | #shop |
| `eyebrow` | text | Eyebrow | Shop by routine |
| `heading` | text | Heading | Start where you are. |

## Blocks

### Menu link (`link`, max 8)

| id | type | label | default |
| --- | --- | --- | --- |
| `url` | url | Url |  |
| `label` | text | Label | Complexion |

### Image tile (`tile`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `url` | url | Url |  |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Complexion routine |
| `label` | text | Label | Complexion |

## Dependencies

- Assets: `blko-home-collection.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
