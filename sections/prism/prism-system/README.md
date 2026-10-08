# Three-step system

Numbered three-step regimen with an image, copy and link per step.

- Category: feature
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/prism/sections/feature--prism-system.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Three-step system" (id `prism-system`, theme `prism`; live demo: https://demo.blocko.ai/html/prism/sections/feature--prism-system.html; Shopify bundle: sections/prism/prism-system/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-prism-system.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | The system |
| `heading` | text | Heading | 3 steps to save your color |
| `text` | textarea | Text | Cleanse, rebuild, seal. One routine that keeps vivid shades vivid between salon  |

## Blocks

### Step (`step`, max 3)

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Hair care product |
| `number` | text | Number | 1 |
| `title` | text | Title | lock it in |
| `text` | textarea | Text | A sulfate-free cleanse that keeps pigment where it belongs. |
| `link_url` | url | Link url |  |
| `link_label` | text | Link label | Shop shampoo |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
