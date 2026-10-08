# Shade grid

Nine-swatch shade grid beside a serif headline and a quiz call to action.

- Category: shade-finder
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/bare/sections/shade-finder--bare-shade-grid.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Shade grid" (id `bare-shade-grid`, theme `bare`; live demo: https://demo.blocko.ai/html/bare/sections/shade-finder--bare-shade-grid.html; Shopify bundle: sections/bare/bare-shade-grid/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-bare-shade-grid.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Shade matching |
| `heading` | text | Heading | Skin tone, not a shade number. |
| `text` | textarea | Text | Fifteen shades, each tuned to undertone as well as depth. Take the two-minute qu |
| `button_label` | text | Button label | Find your shade |
| `button_url` | url | Button url |  |

## Blocks

### Swatch (`swatch`, max 12)

| id | type | label | default |
| --- | --- | --- | --- |
| `tone` | select | Tone | light |
| `label` | text | Label | 01 |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
