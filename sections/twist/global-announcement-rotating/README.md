# Rotating announcement bar

Cycleable store announcement messages.

- Category: announcement
- Kind: block
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/twist/blocks/announcement--global-announcement-rotating.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "Rotating announcement bar" (id `global-announcement-rotating`, theme `twist`; live demo: https://demo.blocko.ai/html/twist/blocks/announcement--global-announcement-rotating.html; Shopify bundle: sections/twist/global-announcement-rotating/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

This is a theme block: copy it into `blocks/`, then add it inside a section that accepts theme blocks (`@theme`).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `blocks/blko-global-announcement-rotating.liquid`
- `assets/blko-global.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `message_1` | text | Message 1 | Shipping is complimentary over $50. |
| `message_2` | text | Message 2 | A small sample is included with every order. |
| `message_3` | text | Message 3 | Easy returns, within 30 days. |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-global.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
