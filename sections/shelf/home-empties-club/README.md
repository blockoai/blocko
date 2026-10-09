# Visit and book split

Two cards: find a store and book a service.

- Category: split
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/shelf/sections/split--home-empties-club.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Visit and book split" (id `home-empties-club`, theme `shelf`; live demo: https://demo.blocko.ai/html/shelf/sections/split--home-empties-club.html; Shopify bundle: sections/shelf/home-empties-club/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-home-empties-club.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `store_image` | image_picker | Store image |  |
| `store_image_alt` | text | Store image alt text | Close view of a pump top beside a leaf |
| `store_eyebrow` | text | Store eyebrow | Empties program |
| `store_heading` | text | Store heading | Where your empty bottles go next |
| `store_text` | textarea | Store text | Pumps, tubes and caps that curbside bins refuse are collected at our boutiques a |
| `store_url` | url | Store url |  |
| `store_label` | text | Store label | How it works |
| `service_image` | image_picker | Service image |  |
| `service_image_alt` | text | Service image alt text | Smiling woman in a yellow dress on a salt flat |
| `service_eyebrow` | text | Service eyebrow | Shelf Club |
| `service_heading` | text | Service heading | Membership pays you back |
| `service_text` | textarea | Service text | Collect points on orders, reviews and returned empties, then spend them on produ |
| `service_url` | url | Service url |  |
| `service_label` | text | Service label | Join free |

## Blocks

_No blocks._

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
