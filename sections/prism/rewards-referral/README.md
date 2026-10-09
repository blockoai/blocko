# Brand commitments

Four proof points behind a considered beauty approach.

- Category: multicolumn
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/prism/sections/multicolumn--rewards-referral.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Brand commitments" (id `rewards-referral`, theme `prism`; live demo: https://demo.blocko.ai/html/prism/sections/multicolumn--rewards-referral.html; Shopify bundle: sections/prism/rewards-referral/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-rewards-referral.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Two gift boxes side by side |
| `eyebrow` | text | Eyebrow | Refer a friend |
| `heading` | text | Heading | Give $10, get 1,000 points. |
| `text` | textarea | Text | Share your personal link. When a friend places a first order over $35, you both  |
| `button_label` | text | Button label | Get my link |
| `button_url` | url | Button url |  |

## Blocks

_No blocks._

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
