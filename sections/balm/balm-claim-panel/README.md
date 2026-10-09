# Claim panel

Blush panel with a serif claim and proof statistics over a portrait.

- Category: image-with-text
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm/sections/image-with-text--balm-claim-panel.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Claim panel" (id `balm-claim-panel`, theme `balm`; live demo: https://demo.blocko.ai/html/balm/sections/image-with-text--balm-claim-panel.html; Shopify bundle: sections/balm/balm-claim-panel/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-balm-claim-panel.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Portrait with glowing skin |
| `eyebrow` | text | Eyebrow | New: liquid lid color |
| `heading` | text | Heading | An eye color that treats the lid while it colors. |
| `note` | text | Note | Wear and crease results come from a four-week in-use panel of thirty adults. Org |

## Blocks

### Statistic (`stat`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `value` | text | Value | 88% |
| `label` | text | Label | saw a visible glow |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
