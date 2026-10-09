# Campaign routine

Three-step editorial routine with practical product guidance.

- Category: landing
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/clip/sections/landing--content-landing-routine.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Campaign routine" (id `content-landing-routine`, theme `clip`; live demo: https://demo.blocko.ai/html/clip/sections/landing--content-landing-routine.html; Shopify bundle: sections/clip/content-landing-routine/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-content-landing-routine.liquid`
- `assets/blko-content.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Kicker | Scent notes |
| `heading` | text | Heading | Top, heart, base |

## Blocks

### Step (`step`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Satin texture |
| `label` | text | Label | Step one |
| `title` | text | Title | Start with a clip |
| `text` | textarea | Text | Start with clean, dry hair and a gentle brush-through. |

## Dependencies

- Assets: `blko-content.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
