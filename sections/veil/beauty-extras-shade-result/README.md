# Shade finder result

Recommended shade cards and add-to-cart action.

- Category: quiz
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/veil/sections/quiz--beauty-extras-shade-result.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Shade finder result" (id `beauty-extras-shade-result`, theme `veil`; live demo: https://demo.blocko.ai/html/veil/sections/quiz--beauty-extras-shade-result.html; Shopify bundle: sections/veil/beauty-extras-shade-result/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-beauty-extras-shade-result.liquid`
- `assets/blko-beauty-extras.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `collection` | collection | Recommended tints |  |
| `add_label` | text | Add label | Add to bag |
| `eyebrow` | text | Eyebrow | Your matches |
| `heading` | text | Heading | Try these two shades first. |
| `text` | textarea | Text | Compare them on your jawline in daylight. If neither is quite right, exchanges a |
| `button_label` | text | Button label | Add my match to bag |
| `card_eyebrow` | text | Card eyebrow | Tinted serum |
| `card_detail` | text | Card detail | Light to medium · SPF 40 |

## Blocks

### Swatch (`swatch`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `tone` | select | Swatch tone | light |
| `label` | text | Label | Light neutral shade |

## Dependencies

- Assets: `blko-beauty-extras.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
