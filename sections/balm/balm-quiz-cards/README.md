# Quiz cards

Three tall portrait cards with quiz call-to-action overlays.

- Category: collection-list
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm/sections/collection-list--balm-quiz-cards.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Quiz cards" (id `balm-quiz-cards`, theme `balm`; live demo: https://demo.blocko.ai/html/balm/sections/collection-list--balm-quiz-cards.html; Shopify bundle: sections/balm/balm-quiz-cards/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-balm-quiz-cards.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | About two minutes each |
| `heading` | text | Heading | Let a quiz pick the shade or the step. |

## Blocks

### Quiz card (`card`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `url` | url | Url |  |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Skin concern portrait |
| `title` | text | Title | Dry or tight skin |
| `cta` | text | Cta | Take the quiz |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
