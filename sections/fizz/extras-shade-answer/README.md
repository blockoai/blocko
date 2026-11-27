# Scent answer

Selectable quiz-answer tile.

- Category: quiz
- Kind: block
- Shopify target: ok
- HTML target: gap: no static HTML demo for this theme yet

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "Scent answer" (id `extras-shade-answer`, theme `fizz`; Shopify bundle: sections/fizz/extras-shade-answer/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

This is a theme block: copy it into `blocks/`, then add it inside a section that accepts theme blocks (`@theme`).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `blocks/blko-extras-shade-answer.liquid`
- `assets/blko-extras.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `selected` | checkbox | Selected by default | false |
| `label` | text | Label | Fruity and bright |
| `hint` | text | Hint | A balanced mix of fruit and fizz |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-extras.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
