# Soda press slider

Rotating press quotes with dot navigation.

- Category: as-seen-in
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/fizz/sections/as-seen-in--soda-press-slider.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Soda press slider" (id `soda-press-slider`, theme `fizz`; live demo: https://demo.blocko.ai/html/fizz/sections/as-seen-in--soda-press-slider.html; Shopify bundle: sections/fizz/soda-press-slider/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-soda-press-slider.liquid`
- `assets/blko-soda.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `bg` | color | Background | #0f3b2e |
| `text_color` | color | Text | #f3e8cd |

## Blocks

### Quote (`quote`)

| id | type | label | default |
| --- | --- | --- | --- |
| `quote` | textarea | Quote | Tastes like the soda you remember, minus the crash. |
| `source` | text | Source | Soda Daily |


## Dependencies

- Assets: `blko-soda.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): `quote`, `source`

Generated file: do not edit; open an issue instead.
