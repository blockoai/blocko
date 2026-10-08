# Choose your tool

Two-up razor comparison tiles with product image, badge, price and link.

- Category: featured-collection
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/stubble/sections/featured-collection--stubble-tool-chooser.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Choose your tool" (id `stubble-tool-chooser`, theme `stubble`; live demo: https://demo.blocko.ai/html/stubble/sections/featured-collection--stubble-tool-chooser.html; Shopify bundle: sections/stubble/stubble-tool-chooser/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-stubble-tool-chooser.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Start here |
| `heading` | text | Heading | Choose your tool. |
| `text` | textarea | Text | Two razors, one goal: a close, comfortable shave. Pick the handle that suits you |

## Blocks

### Tool (`tool`, max 3)

| id | type | label | default |
| --- | --- | --- | --- |
| `badge` | text | Badge | Most popular |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Weighted razor handle |
| `name` | text | Name | Weighted Razor |
| `note` | textarea | Note | Balanced metal handle with a 5-blade cartridge for a close, steady shave. |
| `price` | text | Price | From $9 |
| `label` | text | Label | Shop the razor |
| `url` | url | Url |  |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
