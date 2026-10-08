# Promo hero

Rounded peach promo banner with a starburst badge, pill tag, serif headline and one button.

- Category: hero-banner
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/twist/sections/hero-banner--twist-promo-hero.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Promo hero" (id `twist-promo-hero`, theme `twist`; live demo: https://demo.blocko.ai/html/twist/sections/hero-banner--twist-promo-hero.html; Shopify bundle: sections/twist/twist-promo-hero/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-twist-promo-hero.liquid`
- `assets/blko-twist-signature.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `burst` | text | Burst | limited edition |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Person smiling with bouncy curls |
| `tag` | text | Tag | just in |
| `heading` | text | Heading | holiday collab is here |
| `text` | textarea | Text | Giftable sets, sweet scents and playful hair tools for everyone on your list. |
| `button_url` | url | Button url |  |
| `button_label` | text | Button label | shop the collab |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-twist-signature.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
