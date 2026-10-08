# Brand typography

Type scale specimen set in the theme fonts.

- Category: brand-guidelines
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/twist/sections/brand-guidelines--brand-typography.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Brand typography" (id `brand-typography`, theme `twist`; live demo: https://demo.blocko.ai/html/twist/sections/brand-guidelines--brand-typography.html; Shopify bundle: sections/twist/brand-typography/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-brand-typography.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `eyebrow` | text | Eyebrow | Typography |
| `heading` | text | Heading | Type |
| `lede` | textarea | Lede | The scale below is set in the live theme fonts and sizes. |
| `heading_label` | text | Heading font label | Heading |
| `heading_font` | text | Heading font name | Fraunces |
| `heading_glyphs` | text | Heading specimen | ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 |
| `body_label` | text | Body font label | Body |
| `body_font` | text | Body font name | Figtree |
| `body_glyphs` | text | Body specimen | ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 |
| `name_display` | text | Display name | Display |
| `sample_display` | text | Display sample | Made with care |
| `name_h1` | text | Heading 1 name | Heading 1 |
| `sample_h1` | text | Heading 1 sample | A page headline |
| `name_h2` | text | Heading 2 name | Heading 2 |
| `sample_h2` | text | Heading 2 sample | A section headline |
| `name_h3` | text | Heading 3 name | Heading 3 |
| `sample_h3` | text | Heading 3 sample | A card or block title |
| `name_body` | text | Body name | Body |
| `sample_body` | text | Body sample | Body copy stays quiet and easy to read, with generous line height and a calm mea |
| `name_label` | text | Label name | Label |
| `sample_label` | text | Label sample | Shop the edit |

## Blocks

_No blocks._

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
