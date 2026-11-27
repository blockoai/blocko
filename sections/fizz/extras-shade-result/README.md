# Scent finder result

Recommended shade cards and add-to-cart action.

- Category: quiz
- Kind: section
- Shopify target: ok
- HTML target: gap: no static HTML demo for this theme yet

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Scent finder result" (id `extras-shade-result`, theme `fizz`; Shopify bundle: sections/fizz/extras-shade-result/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-extras-shade-result.liquid`
- `assets/blko-extras.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `collection` | collection | Recommended flavors |  |
| `add_label` | text | Add label | Add to cart |
| `eyebrow` | text | Eyebrow | Your starting point |
| `heading` | text | Heading | Two flavors to try first. |
| `text` | textarea | Text | Based on your picks, these two flavors are a tasty place to start. Use the swatc |
| `button_label` | text | Button label | Add suggested flavor |
| `card_eyebrow` | text | Card eyebrow | Crowd pleaser |
| `card_detail` | text | Card detail | 9g fiber · 2g sugar · 35 cal |

## Blocks

### Swatch (`swatch`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `tone` | select | Swatch color | light |
| `label` | text | Label | Citrus flavor |

## Dependencies

- Assets: `blko-extras.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
