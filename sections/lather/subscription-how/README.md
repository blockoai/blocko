# Subscribe and save

Three-step subscription explainer with a call to action.

- Category: feature
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/feature--subscription-how.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Subscribe and save" (id `subscription-how`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/feature--subscription-how.html; Shopify bundle: sections/lather/subscription-how/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-subscription-how.liquid`
- `assets/blko-lather-signature.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | How the box works |
| `heading` | text | Heading | Set it. Forget it. Change it. |
| `button_url` | url | Button url |  |
| `button_label` | text | Button label | Start my box |

## Blocks

### Step (`step`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `number` | text | Number | 01 |
| `title` | text | Title | Pick your bundle |
| `text` | textarea | Text | Choose your soap, deodorant or cologne. |

## Dependencies

- Assets: `blko-lather-signature.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
