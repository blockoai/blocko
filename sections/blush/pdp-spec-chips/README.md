# Campaign proof

Community proof and clear service reassurance.

- Category: landing
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/blush/sections/landing--pdp-spec-chips.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Campaign proof" (id `pdp-spec-chips`, theme `blush`; live demo: https://demo.blocko.ai/html/blush/sections/landing--pdp-spec-chips.html; Shopify bundle: sections/blush/pdp-spec-chips/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-pdp-spec-chips.liquid`
- `assets/blko-content.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Kicker | At a glance |
| `quote` | text | Quote | “Looks like a flush, not like makeup.” |
| `author` | text | Author | — Customer review |

## Blocks

### Reassurance (`point`, max 5)

| id | type | label | default |
| --- | --- | --- | --- |
| `title` | text | Title | Simple to build |
| `text` | text | Text | Layer at your own pace |

## Dependencies

- Assets: `blko-content.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
