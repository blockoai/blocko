# Stockist locator

Country-filtered stockist list and illustrative map.

- Category: store-locator
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/tide/sections/store-locator--beauty-extras-stockist-locator.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Stockist locator" (id `beauty-extras-stockist-locator`, theme `tide`; live demo: https://demo.blocko.ai/html/tide/sections/store-locator--beauty-extras-stockist-locator.html; Shopify bundle: sections/tide/beauty-extras-stockist-locator/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-beauty-extras-stockist-locator.liquid`
- `assets/blko-beauty-extras.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Store locator |
| `heading` | text | Heading | Find a shelf near you. |
| `text` | textarea | Text | Search spas, department stores and boutiques that carry our full range, and ask  |
| `country_label` | text | Country label | Country |
| `map_label` | text | Map label | Illustrative store map |
| `map_text` | text | Map text | Store map |
| `directions_label` | text | Directions label | Get directions |

## Blocks

### Country (`country`, max 12)

| id | type | label | default |
| --- | --- | --- | --- |
| `value` | text | Country code (matches store country) | all |
| `label` | text | Label | All countries |

### Stockist (`store`, max 24)

| id | type | label | default |
| --- | --- | --- | --- |
| `country` | text | Country code | us |
| `name` | text | Name | Harbor Wellness |
| `place` | text | Place | New York, NY |
| `directions_url` | url | Directions url |  |

## Dependencies

- Assets: `blko-beauty-extras.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): `settings.blocko_api_base`

Generated file: do not edit; open an issue instead.
