# Ingredient callout

Formula transparency callout with ingredient-focused image.

- Category: image-with-text
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/shelf/sections/image-with-text--about-collective.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Ingredient callout" (id `about-collective`, theme `shelf`; live demo: https://demo.blocko.ai/html/shelf/sections/image-with-text--about-collective.html; Shopify bundle: sections/shelf/about-collective/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-about-collective.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Close view of a pump top beside a leaf |
| `eyebrow` | text | Eyebrow | Packaging collective |
| `heading` | text | Heading | Helping hard-to-recycle packaging find a second life. |
| `text` | textarea | Text | We co-founded a non-profit that collects the small pieces curbside programs turn |
| `button_label` | text | Button label | See the empties program |
| `button_url` | url | Button url |  |

## Blocks

_No blocks._

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
