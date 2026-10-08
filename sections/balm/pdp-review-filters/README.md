# Review filters

Client-side filters for all, photo, and coverage reviews.

- Category: reviews
- Kind: block
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm/blocks/reviews--pdp-review-filters.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "Review filters" (id `pdp-review-filters`, theme `balm`; live demo: https://demo.blocko.ai/html/balm/blocks/reviews--pdp-review-filters.html; Shopify bundle: sections/balm/pdp-review-filters/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

This is a theme block: copy it into `blocks/`, then add it inside a section that accepts theme blocks (`@theme`).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `blocks/blko-pdp-review-filters.liquid`
- `assets/blko-pdp.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `key_1` | text | Filter key 1 | all |
| `label_1` | text | Label 1 | All |
| `key_2` | text | Filter key 2 | photos |
| `label_2` | text | Label 2 | With photos |
| `key_3` | text | Filter key 3 | coverage |
| `label_3` | text | Label 3 | Texture |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-pdp.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
