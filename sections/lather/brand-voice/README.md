# Brand voice

Voice principles with what to write and what to avoid.

- Category: brand-guidelines
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/brand-guidelines--brand-voice.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Brand voice" (id `brand-voice`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/brand-guidelines--brand-voice.html; Shopify bundle: sections/lather/brand-voice/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-brand-voice.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-6 |
| `eyebrow` | text | Eyebrow | Voice |
| `heading` | text | Heading | How we sound |
| `write_title` | text | Write title | We write |
| `avoid_title` | text | Avoid title | We avoid |

## Blocks

### Principle (`principle`, max 6)

| id | type | label | default |
| --- | --- | --- | --- |
| `title` | text | Title | Plain and kind |
| `text` | textarea | Text | Say it simply. |

### We write (`write`, max 8)

| id | type | label | default |
| --- | --- | --- | --- |
| `text` | text | Text | Short, warm sentences. |

### We avoid (`avoid`, max 8)

| id | type | label | default |
| --- | --- | --- | --- |
| `text` | text | Text | Hype and exclamation marks. |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
