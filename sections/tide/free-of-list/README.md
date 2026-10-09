# FAQ

Expandable answers for common service questions.

- Category: faq
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/tide/sections/faq--free-of-list.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "FAQ" (id `free-of-list`, theme `tide`; live demo: https://demo.blocko.ai/html/tide/sections/faq--free-of-list.html; Shopify bundle: sections/tide/free-of-list/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-free-of-list.liquid`
- `assets/blko-accordion.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Our exclusions |
| `heading` | text | Heading | What we leave out |

## Blocks

### Question (`question`)

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | How do I choose a ritual? |
| `text` | textarea | Text | Clear, honest product information for everyday rituals. |

## Dependencies

- Assets: `blko-accordion.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
