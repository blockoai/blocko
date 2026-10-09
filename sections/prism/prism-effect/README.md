# Results strip

Before and after pair with three big result stats.

- Category: feature
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/prism/sections/feature--prism-effect.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Results strip" (id `prism-effect`, theme `prism`; live demo: https://demo.blocko.ai/html/prism/sections/feature--prism-effect.html; Shopify bundle: sections/prism/prism-effect/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-prism-effect.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | The proof |
| `heading` | text | Heading | colour that stays put |
| `before_image` | image_picker | Before image |  |
| `before_image_alt` | text | Before image alt text | Faded hair color before treatment |
| `before_label` | text | Before label | Week 0 |
| `after_image` | image_picker | After image |  |
| `after_image_alt` | text | After image alt text | Vivid hair color after treatment |
| `after_label` | text | After label | Week 6 |

## Blocks

### Stat (`stat`, max 4)

| id | type | label | default |
| --- | --- | --- | --- |
| `value` | text | Value | 92% |
| `label` | text | Label | said color stayed vivid for longer |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
