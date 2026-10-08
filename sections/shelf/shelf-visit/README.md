# Visit and book split

Two cards: find a store and book a service.

- Category: split
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/shelf/sections/split--shelf-visit.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Visit and book split" (id `shelf-visit`, theme `shelf`; live demo: https://demo.blocko.ai/html/shelf/sections/split--shelf-visit.html; Shopify bundle: sections/shelf/shelf-visit/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-shelf-visit.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `store_image` | image_picker | Store image |  |
| `store_image_alt` | text | Store image alt text | Beauty boutique with curated shelves |
| `store_eyebrow` | text | Store eyebrow | In store |
| `store_heading` | text | Store heading | Find a store near you |
| `store_text` | textarea | Store text | Try before you buy with help from our in-store advisors. |
| `store_url` | url | Store url |  |
| `store_label` | text | Store label | Store finder |
| `service_image` | image_picker | Service image |  |
| `service_image_alt` | text | Service image alt text | Skin consultation at a mirror |
| `service_eyebrow` | text | Service eyebrow | Services |
| `service_heading` | text | Service heading | Book a skin consultation |
| `service_text` | textarea | Service text | Twenty minutes with an advisor to build a routine that fits. |
| `service_url` | url | Service url |  |
| `service_label` | text | Service label | Book now |

## Blocks

_No blocks._

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
