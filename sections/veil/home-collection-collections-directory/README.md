# Collection directory

Image-led directory of the main beauty collection families.

- Category: collection-list
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/veil/sections/collection-list--home-collection-collections-directory.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Collection directory" (id `home-collection-collections-directory`, theme `veil`; live demo: https://demo.blocko.ai/html/veil/sections/collection-list--home-collection-collections-directory.html; Shopify bundle: sections/veil/home-collection-collections-directory/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-home-collection-collections-directory.liquid`
- `assets/blko-home-collection.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `collections_per_page` | range | Collections per page | 6 |
| `eyebrow` | text | Eyebrow | Shop by department |
| `heading` | text | Heading | Everything for a five-minute face |
| `text` | textarea | Text | Complexion, eye, lip and skincare, plus tools and gift sets, all tested on sensi |
| `link_label` | text | Link label | Explore |
| `pager_label` | text | Pager label | Pagination |
| `previous_label` | text | Previous label | Previous |
| `next_label` | text | Next label | Next |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-home-collection.js`
- Locale keys: `blko.collection.of`, `blko.collection.page` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
