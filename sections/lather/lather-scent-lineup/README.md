# Scent line-up

Tabbed carousel of tall scent cards, filtered by scent family.

- Category: product-list
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/product-list--lather-scent-lineup.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Scent line-up" (id `lather-scent-lineup`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/product-list--lather-scent-lineup.html; Shopify bundle: sections/lather/lather-scent-lineup/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-lather-scent-lineup.liquid`
- `assets/blko-lather-signature.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Five families, one for every nose |
| `heading` | text | Heading | Find your vibe |
| `all_label` | text | All label | Every scent |

## Blocks

### Scent family (`family`, max 6)

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | Wood & Musk |

### Scent card (`scent`, max 12)

| id | type | label | default |
| --- | --- | --- | --- |
| `url` | url | Url |  |
| `family` | text | Family | Wood & Musk |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Bar of natural soap |
| `name` | text | Name | Cabin Cedar |
| `note` | text | Note | Cedar, smoke, suede |
| `price` | text | Price | $9.00 |

## Dependencies

- Assets: `blko-lather-signature.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
