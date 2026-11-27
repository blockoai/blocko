# Benefit trio

Three line-icon benefits on a topographic contour panel.

- Category: feature
- Kind: section
- Shopify target: ok
- HTML target: gap: no static HTML demo for this theme yet

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Benefit trio" (id `fizz-benefit-trio`, theme `fizz`; Shopify bundle: sections/fizz/fizz-benefit-trio/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-fizz-benefit-trio.liquid`
- `assets/blko-fizz-signature.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | What is in the can |
| `heading` | text | Heading | Three rules we do not bend |

## Blocks

### Benefit (`benefit`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `icon` | select | Icon | leaf |
| `title` | text | Title | Natural ingredients |
| `text` | textarea | Text | Plant fiber, real fruit and nothing you need a chemistry degree to pronounce. |

## Dependencies

- Assets: `blko-fizz-signature.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
