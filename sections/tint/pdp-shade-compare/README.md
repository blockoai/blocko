# Shade finder strip

Horizontally scrolling shade chips with a skin-tone pill.

- Category: shade-finder
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/tint/sections/shade-finder--pdp-shade-compare.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Shade finder strip" (id `pdp-shade-compare`, theme `tint`; live demo: https://demo.blocko.ai/html/tint/sections/shade-finder--pdp-shade-compare.html; Shopify bundle: sections/tint/pdp-shade-compare/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-pdp-shade-compare.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Compare by skin tone |
| `heading` | text | Heading | Find your depth |
| `pill_url` | url | Pill url |  |
| `pill_label` | text | Pill label | Take the shade quiz |

## Blocks

### Shade (`shade`, max 12)

| id | type | label | default |
| --- | --- | --- | --- |
| `tone` | select | Shade colour | rose-beige |
| `name` | text | Name | Rose Beige |
| `count` | text | Count | 38 shades |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
