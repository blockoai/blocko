# Shade picker

Card with a portrait and a row of colour chips for picking a shade.

- Category: featured-product
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/blush/sections/featured-product--blush-shades.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Shade picker" (id `blush-shades`, theme `blush`; live demo: https://demo.blocko.ai/html/blush/sections/featured-product--blush-shades.html; Shopify bundle: sections/blush/blush-shades/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-blush-shades.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Soft pink cheek colour on bare skin |
| `eyebrow` | text | Eyebrow | Find your colour |
| `heading` | text | Heading | Pick a pink that looks like you. |
| `text` | textarea | Text | Five buildable shades, one easy formula. Tap a chip to preview the tone, then ad |
| `chips_label` | text | Chips label | Shades |
| `button_label` | text | Button label | Shop shades |
| `button_url` | url | Button url |  |

## Blocks

### Shade (`chip`, max 8)

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | Petal |
| `selected` | checkbox | Selected by default | false |
| `tone` | select | Shade | petal |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
