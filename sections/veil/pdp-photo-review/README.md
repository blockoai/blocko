# Photo review card

Verified review with a customer-result image.

- Category: reviews
- Kind: block
- Shopify target: ok
- HTML target: ok
- Live demo: https://blocko.avada.net/html/veil/blocks/reviews--pdp-photo-review.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "Photo review card" (id `pdp-photo-review`, theme `veil`; live demo: https://blocko.avada.net/html/veil/blocks/reviews--pdp-photo-review.html; Shopify bundle: sections/veil/pdp-photo-review/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

This is a theme block: copy it into `blocks/`, then add it inside a section that accepts theme blocks (`@theme`).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `blocks/blko-pdp-photo-review.liquid`
- `assets/blko-pdp.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `rating` | range | Rating | 5 |
| `badge` | text | Badge | Verified buyer |
| `title` | text | Title | Just enough coverage |
| `text` | textarea | Text | It evens out my complexion while looking natural. |
| `photo` | image_picker | Photo |  |
| `photo_alt` | text | Photo alt text | Customer makeup result |
| `caption` | text | Caption | Warm medium · photo review |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-pdp.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
