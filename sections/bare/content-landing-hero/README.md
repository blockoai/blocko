# Campaign landing hero

Editorial campaign opener with a focused product story.

- Category: landing
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/bare/sections/landing--content-landing-hero.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Campaign landing hero" (id `content-landing-hero`, theme `bare`; live demo: https://demo.blocko.ai/html/bare/sections/landing--content-landing-hero.html; Shopify bundle: sections/bare/content-landing-hero/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-content-landing-hero.liquid`
- `assets/blko-content.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Face with a bright flush and soft lids |
| `kicker` | text | Kicker | Five reasons |
| `heading` | text | Heading | Why one cream balm replaces your whole blush drawer. |
| `text` | textarea | Text | A short guide for anyone who wants a quick routine and a lighter bag. |
| `button_url` | url | Button url |  |
| `button_label` | text | Button label | See the reasons |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-content.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
