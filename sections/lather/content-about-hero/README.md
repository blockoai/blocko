# Story hero

Editorial opening for a considered beauty story.

- Category: about
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/about--content-about-hero.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Story hero" (id `content-about-hero`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/about--content-about-hero.html; Shopify bundle: sections/lather/content-about-hero/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-content-about-hero.liquid`
- `assets/blko-content.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Kicker | Our story |
| `heading` | text | Heading | Cleaning up the shower shelf. |
| `lede` | textarea | Lede | Most grooming products are a list of things you cannot pronounce. We wanted a ba |
| `button_url` | url | Button url |  |
| `button_label` | text | Button label | Meet the founder |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | A bearded man holding a stack of soap bars |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-content.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
