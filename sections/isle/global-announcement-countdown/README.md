# Countdown announcement bar

Timed promotion announcement with a live remaining-time display.

- Category: announcement
- Kind: block
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/isle/blocks/announcement--global-announcement-countdown.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "Countdown announcement bar" (id `global-announcement-countdown`, theme `isle`; live demo: https://demo.blocko.ai/html/isle/blocks/announcement--global-announcement-countdown.html; Shopify bundle: sections/isle/global-announcement-countdown/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

This is a theme block: copy it into `blocks/`, then add it inside a section that accepts theme blocks (`@theme`).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `blocks/blko-global-announcement-countdown.liquid`
- `assets/blko-global.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `deadline` | text | Deadline (YYYY-MM-DDTHH:MM:SS) | 2026-12-31T23:59:59 |
| `prefix` | text | Prefix | Small seasonal gift ends in |
| `link_url` | url | Link url |  |
| `link_label` | text | Link label | See details |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-global.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
