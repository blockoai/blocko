# Icon claim row

Heading with a row of five line-icon claims.

- Category: multicolumn
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/isle/sections/multicolumn--isle-claims.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Icon claim row" (id `isle-claims`, theme `isle`; live demo: https://demo.blocko.ai/html/isle/sections/multicolumn--isle-claims.html; Shopify bundle: sections/isle/isle-claims/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-isle-claims.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `heading` | text | Heading | Gentle on skin and just as gentle on the planet. |

## Blocks

### Claim (`claim`, max 6)

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | Clean |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
