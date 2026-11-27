# Soda announcement

Rotating announcement bar with arrows.

- Category: announcement
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/fizz/sections/announcement--soda-announcement.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Soda announcement" (id `soda-announcement`, theme `fizz`; live demo: https://demo.blocko.ai/html/fizz/sections/announcement--soda-announcement.html; Shopify bundle: sections/fizz/soda-announcement/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-soda-announcement.liquid`
- `assets/blko-soda.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `bg` | color | Background | #cdf26b |
| `text_color` | color | Text | #0f3b2e |

## Blocks

### Message (`message`)

| id | type | label | default |
| --- | --- | --- | --- |
| `text` | text | Text | Free shipping on orders over $35. |
| `link_label` | text | Link label | Shop now |
| `link_url` | url | Link |  |


## Dependencies

- Assets: `blko-soda.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): `link_label`, `link_url`, `text`

Generated file: do not edit; open an issue instead.
