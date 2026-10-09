# Complete the look

Three-step routine recommendation grid for a product page.

- Category: product-recommendations
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/clip/sections/product-recommendations--pdp-works-with.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Complete the look" (id `pdp-works-with`, theme `clip`; live demo: https://demo.blocko.ai/html/clip/sections/product-recommendations--pdp-works-with.html; Shopify bundle: sections/clip/pdp-works-with/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-pdp-works-with.liquid`
- `assets/blko-pdp.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `product` | product | Product |  |
| `collection` | collection | Fallback collection |  |
| `eyebrow` | text | Eyebrow | Works well with |
| `heading` | text | Heading | Finish the style |
| `text` | text | Text | A brush, a scrunchie and a spritz of scent round out the look. |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-pdp.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
