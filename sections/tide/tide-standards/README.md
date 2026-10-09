# Clean standards trio

Three rounded seafoam panels with a numbered badge: vegan, reef-safe, recyclable.

- Category: commitments
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/tide/sections/commitments--tide-standards.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Clean standards trio" (id `tide-standards`, theme `tide`; live demo: https://demo.blocko.ai/html/tide/sections/commitments--tide-standards.html; Shopify bundle: sections/tide/tide-standards/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-tide-standards.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-2 |
| `eyebrow` | text | Eyebrow | Our commitments |
| `heading` | text | Heading | Good for skin. Kind to the sea. |

## Blocks

### Standard (`standard`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `number` | text | Number | 01 |
| `title` | text | Title | Vegan and cruelty-free |
| `text` | textarea | Text | Plant and mineral formulas, never tested on animals. |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
