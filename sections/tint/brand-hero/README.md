# Brand guideline hero

The logo on the brand colour with tagline and intro.

- Category: brand-guidelines
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/tint/sections/brand-guidelines--brand-hero.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Brand guideline hero" (id `brand-hero`, theme `tint`; live demo: https://demo.blocko.ai/html/tint/sections/brand-guidelines--brand-hero.html; Shopify bundle: sections/tint/brand-hero/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-brand-hero.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `tone` | select | Background | ink |
| `eyebrow` | text | Eyebrow | Brand guidelines |
| `tagline` | text | Tagline | Colour that plays well with you. |
| `intro` | textarea | Intro | Tint is playful, clean makeup built around shades you can try, mix and own. This |

## Blocks

_No blocks._

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): `settings.brand_logo`, `settings.brand_logo_inverse`

Generated file: do not edit; open an issue instead.
