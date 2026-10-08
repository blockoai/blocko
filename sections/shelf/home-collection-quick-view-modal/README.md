# Quick view modal

Accessible product preview modal opened from a catalog card.

- Category: product
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/shelf/sections/product--home-collection-quick-view-modal.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Quick view modal" (id `home-collection-quick-view-modal`, theme `shelf`; live demo: https://demo.blocko.ai/html/shelf/sections/product--home-collection-quick-view-modal.html; Shopify bundle: sections/shelf/home-collection-quick-view-modal/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-home-collection-quick-view-modal.liquid`
- `assets/blko-cart-drawer.js`
- `assets/blko-home-collection.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `close_label` | text | Close label | Close quick view |
| `eyebrow` | text | Eyebrow | Quick view |
| `add_label` | text | Add label | Add to bag |
| `details_label` | text | Details label | View full details |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-cart-drawer.js`, `blko-home-collection.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
