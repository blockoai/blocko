# Brand palette

Swatches read live from the theme colour settings.

- Category: brand-guidelines
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/twist/sections/brand-guidelines--brand-palette.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Brand palette" (id `brand-palette`, theme `twist`; live demo: https://demo.blocko.ai/html/twist/sections/brand-guidelines--brand-palette.html; Shopify bundle: sections/twist/brand-palette/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-brand-palette.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `eyebrow` | text | Eyebrow | Colour |
| `heading` | text | Heading | Palette |
| `lede` | textarea | Lede | Swatches show the live colour settings. Change a colour in Theme settings, Desig |
| `name_bg` | text | Background name | Background |
| `role_bg` | text | Background role | Page and card surfaces. |
| `name_bg_alt` | text | Background alt name | Background alt |
| `role_bg_alt` | text | Background alt role | Quiet panels and alternating bands. |
| `name_text` | text | Text name | Text |
| `role_text` | text | Text role | Headlines and body copy. |
| `name_text_muted` | text | Text muted name | Text muted |
| `role_text_muted` | text | Text muted role | Captions and secondary copy. |
| `name_border` | text | Border name | Border |
| `role_border` | text | Border role | Hairlines and dividers. |
| `name_button` | text | Button name | Button |
| `role_button` | text | Button role | Primary actions. |
| `name_accent` | text | Accent name | Accent |
| `role_accent` | text | Accent role | The brand colour: highlights, ratings, links. |
| `name_sale` | text | Sale name | Sale |
| `role_sale` | text | Sale role | Price drops and urgent notices. |
| `name_announcement_bg` | text | Announcement name | Announcement |
| `role_announcement_bg` | text | Announcement role | The top bar. |
| `name_footer_bg` | text | Footer name | Footer |
| `role_footer_bg` | text | Footer role | The footer band and inverse surfaces. |
| `name_success` | text | Success name | Success |
| `role_success` | text | Success role | Confirmations. |
| `name_error` | text | Error name | Error |
| `role_error` | text | Error role | Form and stock errors. |

## Blocks

_No blocks._

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): `settings.color_accent`, `settings.color_announcement_bg`, `settings.color_bg`, `settings.color_bg_alt`, `settings.color_border`, `settings.color_button`, `settings.color_error`, `settings.color_footer_bg`, `settings.color_sale`, `settings.color_success`, `settings.color_text`, `settings.color_text_muted`

Generated file: do not edit; open an issue instead.
