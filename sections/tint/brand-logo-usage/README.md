# Brand logo usage

Logo variants, clear space, minimum size, downloads, dos and don'ts.

- Category: brand-guidelines
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/tint/sections/brand-guidelines--brand-logo-usage.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Brand logo usage" (id `brand-logo-usage`, theme `tint`; live demo: https://demo.blocko.ai/html/tint/sections/brand-guidelines--brand-logo-usage.html; Shopify bundle: sections/tint/brand-logo-usage/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-brand-logo-usage.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `eyebrow` | text | Eyebrow | Logo |
| `heading` | text | Heading | Logo and usage |
| `lede` | textarea | Lede | Four heavy, square-cut capitals with the I drawn as a swatch in the accent colou |
| `primary_name` | text | Primary wordmark name | Primary wordmark |
| `primary_note` | text | Primary wordmark note | Default on light surfaces. |
| `inverse_name` | text | Inverse wordmark name | Inverse wordmark |
| `inverse_note` | text | Inverse wordmark note | On dark photography and the footer colour. |
| `mark_name` | text | Mark name | Mark |
| `mark_note` | text | Mark note | Favicon, avatar and small spaces. |
| `accent_name` | text | Mark on accent name | Mark on accent |
| `accent_note` | text | Mark on accent note | Stickers, packaging, social. |
| `clear_title` | text | Clear title | Clear space |
| `clearspace` | text | Clear space rule | Keep a margin equal to the width of the letter I on every side. Nothing, includi |
| `min_title` | text | Min title | Minimum size |
| `minsize` | text | Minimum size rule | Wordmark: 88 px wide on screen, 22 mm in print. Mark: 24 px, 8 mm. Below that, u |
| `dl_logo_svg` | text | Wordmark SVG link label | Wordmark SVG |
| `dl_logo_png` | text | Wordmark PNG link label | Wordmark PNG |
| `dl_logo_webp` | text | Wordmark WebP link label | Wordmark WebP |
| `dl_inverse_svg` | text | Inverse SVG link label | Inverse SVG |
| `dl_inverse_png` | text | Inverse PNG link label | Inverse PNG |
| `dl_mark_svg` | text | Mark SVG link label | Mark SVG |
| `dl_mark_png` | text | Mark PNG link label | Mark PNG |
| `dl_mark_webp` | text | Mark WebP link label | Mark WebP |
| `do_title` | text | Do title | Do |
| `dont_title` | text | Dont title | Don't |

## Blocks

### Do (`do`, max 8)

| id | type | label | default |
| --- | --- | --- | --- |
| `text` | text | Text | Keep the clear space. |

### Don't (`dont`, max 8)

| id | type | label | default |
| --- | --- | --- | --- |
| `text` | text | Text | Stretch or recolour the logo. |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
