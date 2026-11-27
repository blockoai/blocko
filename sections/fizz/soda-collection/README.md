# Soda collection

Collection hero, filter tabs and product grid with hover and quick add.

- Category: main-collection-product-grid
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/fizz/sections/main-collection-product-grid--soda-collection.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Soda collection" (id `soda-collection`, theme `fizz`; live demo: https://demo.blocko.ai/html/fizz/sections/main-collection-product-grid--soda-collection.html; Shopify bundle: sections/fizz/soda-collection/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-soda-collection.liquid`
- `snippets/blko-soda-product-card.liquid`
- `assets/blko-soda.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `bg` | color | Hero background | #b9e4f7 |
| `fallback_intro` | textarea | Intro (when the collection has no description) | Prebiotic soda with real fruit flavor. Pick a flavor, a pack size, or build your own case. |
| `tab_all` | text | All tab label | All flavors |
| `handle_all` | text | All tab collection handle | drinks |
| `add_label` | text | Quick add label | Quick add |
| `view_label` | text | Card button label | Shop now |
| `sale_label` | text | Sale badge | Sale |
| `empty_text` | text | Empty text | No products found. |
| `per_page` | range | Products per page | 24 |

## Blocks

### Filter tab (`filter`)

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | Classics |
| `handle` | text | Collection handle | drinks |


## Dependencies

- Assets: `blko-soda.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): `handle`, `label`

Generated file: do not edit; open an issue instead.
