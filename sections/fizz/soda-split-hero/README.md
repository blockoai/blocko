# Soda split hero

Split hero with copy on one side and a full-bleed image on the other.

- Category: hero-banner
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/fizz/sections/hero-banner--soda-split-hero.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Soda split hero" (id `soda-split-hero`, theme `fizz`; live demo: https://demo.blocko.ai/html/fizz/sections/hero-banner--soda-split-hero.html; Shopify bundle: sections/fizz/soda-split-hero/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-soda-split-hero.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `bg` | color | Background | #ff6b8b |
| `text_color` | color | Text | #14433d |
| `eyebrow` | text | Eyebrow | New: Cherry Pop |
| `heading` | text | Heading | Big fizz. Small sugar. |
| `subtext` | textarea | Subtext | Prebiotic soda with real fruit flavor, 2g of sugar and a lot of attitude. Stock up and save on every case. |
| `button_label` | text | Button label | Shop flavors |
| `button_url` | url | Button link |  |
| `button_bg` | color | Button background | #d4f23c |
| `button_color` | color | Button text | #14433d |
| `image` | image_picker | Image |  |
| `image_url` | text | Fallback image URL (Unsplash) | https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=1400&q=80 |
| `image_alt` | text | Image alt text | Two glossy cherries on a mint background |

## Blocks

_No blocks._

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
