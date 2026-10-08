# Statement band

Full-bleed pastel band with a two-line statement and a short paragraph.

- Category: statement
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/tint/sections/statement--tint-statement.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Statement band" (id `tint-statement`, theme `tint`; live demo: https://demo.blocko.ai/html/tint/sections/statement--tint-statement.html; Shopify bundle: sections/tint/tint-statement/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-tint-statement.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `line_1` | text | Line 1 | 100% makeup. |
| `line_2` | text | Line 2 | 100% good for skin. |
| `text` | textarea | Text | Cream blush, glossy balm and skin tints in juicy colors that feel like nothing a |
| `button_url` | url | Button url |  |
| `button_label` | text | Button label | Shop the colors |

## Blocks

_No blocks._

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
