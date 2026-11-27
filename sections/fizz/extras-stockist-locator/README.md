# Stockist locator

Country-filtered stockist list and illustrative map.

- Category: store-locator
- Kind: section
- Shopify target: ok
- HTML target: gap: no static HTML demo for this theme yet

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Stockist locator" (id `extras-stockist-locator`, theme `fizz`; Shopify bundle: sections/fizz/extras-stockist-locator/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-extras-stockist-locator.liquid`
- `assets/blko-extras.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Find Fizz near you |
| `heading` | text | Heading | Grab one cold before you stock up. |
| `text` | textarea | Text | Search by country to see shelves that carry our cans and variety packs. Nothing  |
| `country_label` | text | Country label | Country |
| `map_label` | text | Map label | Illustrative store map |
| `map_text` | text | Map text | Store map |
| `directions_label` | text | Directions label | Directions |

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
| `name` | text | Name | Harbor Market |
| `place` | text | Place | New York, NY |
| `directions_url` | url | Directions url |  |

## Dependencies

- Assets: `blko-extras.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): `settings.blocko_api_base`

Generated file: do not edit; open an issue instead.
