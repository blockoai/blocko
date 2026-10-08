# Collection filters

Filter chips and a sort selector for product discovery.

- Category: faceted-filters-sort
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/bare/sections/faceted-filters-sort--faceted-filters.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Collection filters" (id `faceted-filters`, theme `bare`; live demo: https://demo.blocko.ai/html/bare/sections/faceted-filters-sort--faceted-filters.html; Shopify bundle: sections/bare/faceted-filters/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-faceted-filters.liquid`
- `assets/blko-tabs.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `collection` | collection | Collection |  |

## Blocks

### Filter chip (`chip`, max 8)

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | All |

## Dependencies

- Assets: `blko-tabs.js`
- Locale keys: `blko.collection.sort` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
