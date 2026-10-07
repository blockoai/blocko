# Store locator

Local stockist address card.

- Category: stockists
- Kind: block
- Shopify target: ok
- HTML target: ok
- Live demo: https://blocko.avada.net/html/beauty-01/blocks/stockists--beauty-extras-store-card.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "Store locator" (id `beauty-extras-store-card`, theme `beauty-01`; live demo: https://blocko.avada.net/html/beauty-01/blocks/stockists--beauty-extras-store-card.html; Shopify bundle: sections/beauty-01/beauty-extras-store-card/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

This is a theme block: copy it into `blocks/`, then add it inside a section that accepts theme blocks (`@theme`).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `blocks/blko-beauty-extras-store-card.liquid`
- `assets/blko-beauty-extras.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `country` | text | Country | US |
| `name` | text | Name | Harbor Beauty |
| `place` | text | Place | New York, NY |
| `directions_label` | text | Directions label | Directions |
| `directions_url` | url | Directions url |  |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-beauty-extras.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
