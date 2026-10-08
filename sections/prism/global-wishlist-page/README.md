# Wishlist

Saved product grid that transitions to a useful empty state.

- Category: page
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/prism/sections/page--global-wishlist-page.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Wishlist" (id `global-wishlist-page`, theme `prism`; live demo: https://demo.blocko.ai/html/prism/sections/page--global-wishlist-page.html; Shopify bundle: sections/prism/global-wishlist-page/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-global-wishlist-page.liquid`
- `assets/blko-global.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `collection` | collection | Fallback collection |  |
| `kicker` | text | Kicker | Your saved items |
| `heading` | text | Heading | Keep an eye on these. |
| `text` | textarea | Text | Save products you want to return to later. |
| `remove_label` | text | Remove label | Remove |
| `empty_kicker` | text | Empty kicker | Nothing saved yet |
| `empty_heading` | text | Empty heading | Start with what catches your eye. |
| `button_label` | text | Button label | Browse products |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-global.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): `settings.blocko_api_base`

Generated file: do not edit; open an issue instead.
