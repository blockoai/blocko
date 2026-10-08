# Tint chip row

Row of circular tint chips with a live label and a pill call to action.

- Category: featured-collection
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/dew/sections/featured-collection--dew-shade-row.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Tint chip row" (id `dew-shade-row`, theme `dew`; live demo: https://demo.blocko.ai/html/dew/sections/featured-collection--dew-shade-row.html; Shopify bundle: sections/dew/dew-shade-row/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-dew-shade-row.liquid`
- `assets/blko-signature.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Six tints |
| `heading` | text | Heading | find the one that melts in. |
| `default_label` | text | Default label | pick a tint to preview |
| `button_url` | url | Button url |  |
| `button_label` | text | Button label | Shop the tints |

## Blocks

### Tint chip (`tint`, max 8)

| id | type | label | default |
| --- | --- | --- | --- |
| `tone` | text | Tone handle (swatch name) | blush |
| `label` | text | Label | blush |

## Dependencies

- Assets: `blko-signature.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
