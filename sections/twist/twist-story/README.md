# Story split

Large image on the left, founder-style story text on the right.

- Category: image-with-text
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/twist/sections/image-with-text--twist-story.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Story split" (id `twist-story`, theme `twist`; live demo: https://demo.blocko.ai/html/twist/sections/image-with-text--twist-story.html; Shopify bundle: sections/twist/twist-story/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-twist-story.liquid`
- `assets/blko-twist-signature.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Hair routine in the morning light |
| `heading` | text | Heading | from one hair tie to your whole routine |
| `text` | textarea | Text | It began with a single hair tie and a stubborn founder who sold it door to door. |
| `button_url` | url | Button url |  |
| `button_label` | text | Button label | read our story |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-twist-signature.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
