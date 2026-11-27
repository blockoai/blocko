# Routine builder

Three-step routine picker with a running total.

- Category: routine-builder
- Kind: section
- Shopify target: ok
- HTML target: gap: no static HTML demo for this theme yet

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Routine builder" (id `extras-routine-builder`, theme `fizz`; Shopify bundle: sections/fizz/extras-routine-builder/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-extras-routine-builder.liquid`
- `assets/blko-extras.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `collection` | collection | Pack products (one per step) |  |
| `pick_label` | text | Pick label | Crowd favorite |
| `alternate_label` | text | Alternate label | Switch it up |
| `eyebrow` | text | Eyebrow | Build your pack |
| `heading` | text | Heading | Pick, pair, sip. |
| `text` | textarea | Text | Choose three cans that share a flavor family, and the total updates as you pick. |
| `step_text` | text | Step text | A solid choice for this step. |
| `summary_eyebrow` | text | Summary eyebrow | Your pack |
| `total_label` | text | Total label | Total |
| `add_label` | text | Add label | Add the pack to my cart |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-extras.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
