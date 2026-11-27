# Soda collection tabs

Tabbed product carousel (classics, fruit punch, minis, limited, variety) with hover image and quick add.

- Category: featured-collection
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/fizz/sections/featured-collection--soda-collection-tabs.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Soda collection tabs" (id `soda-collection-tabs`, theme `fizz`; live demo: https://demo.blocko.ai/html/fizz/sections/featured-collection--soda-collection-tabs.html; Shopify bundle: sections/fizz/soda-collection-tabs/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-soda-collection-tabs.liquid`
- `snippets/blko-soda-product-card.liquid`
- `assets/blko-soda.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `heading` | text | Heading | Shop our flavors |
| `bg` | color | Background | #f3e8cd |
| `heading_color` | color | Heading color | #0f3b2e |
| `add_label` | text | Quick add label | Quick add |
| `view_label` | text | Card button label | Shop now |
| `sale_label` | text | Sale badge | Sale |
| `empty_text` | text | Empty text | Flavors coming soon. |

## Blocks

### Collection tab (`collection`)

| id | type | label | default |
| --- | --- | --- | --- |
| `tab_label` | text | Tab label | Classics |
| `collection` | text | Collection handle | drinks |
| `note` | text | Note | 2g sugar. Ice cold or room temp. |
| `cta_label` | text | Button label | Shop all |
| `limit` | range | Products | 12 |


## Dependencies

- Assets: `blko-soda.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): `collection`, `cta_label`, `limit`, `note`, `tab_label`

Generated file: do not edit; open an issue instead.
