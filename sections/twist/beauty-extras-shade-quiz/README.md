# Hair quiz quiz

Three-step tools matching quiz with recommendations.

- Category: quiz
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/twist/sections/quiz--beauty-extras-shade-quiz.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Hair quiz quiz" (id `beauty-extras-shade-quiz`, theme `twist`; live demo: https://demo.blocko.ai/html/twist/sections/quiz--beauty-extras-shade-quiz.html; Shopify bundle: sections/twist/beauty-extras-shade-quiz/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-beauty-extras-shade-quiz.liquid`
- `assets/blko-beauty-extras.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `back_label` | text | Back label | Back |
| `continue_label` | text | Continue label | Continue |
| `eyebrow_1` | text | Eyebrow 1 | question 1 of 3 |
| `heading_1` | text | Heading 1 | What is your natural hair type? |
| `text_1` | textarea | Text 1 | Think about how your hair dries when you leave it alone. |
| `eyebrow_2` | text | Eyebrow 2 | question 2 of 3 |
| `heading_2` | text | Heading 2 | What bothers you most? |
| `eyebrow_3` | text | Eyebrow 3 | question 3 of 3 |
| `heading_3` | text | Heading 3 | What would you like hair to do? |
| `finish_label` | text | Finish label | show my routine |

## Blocks

### Complexion (`tone`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `tone` | select | Swatch tone | tone-0 |
| `label` | text | Label | Fair to light |
| `selected` | checkbox | Selected by default | false |

### Undertone (`undertone`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `selected` | checkbox | Selected by default | false |
| `label` | text | Label | Cool |
| `hint` | text | Hint | Rosy or blue tones |

### Coverage (`coverage`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `selected` | checkbox | Selected by default | false |
| `label` | text | Label | Cool |
| `hint` | text | Hint | Rosy or blue tones |

## Dependencies

- Assets: `blko-beauty-extras.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
