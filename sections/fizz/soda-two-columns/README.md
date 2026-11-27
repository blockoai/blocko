# Soda two columns

Image and copy side by side.

- Category: image-with-text
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/fizz/sections/image-with-text--soda-two-columns.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Soda two columns" (id `soda-two-columns`, theme `fizz`; live demo: https://demo.blocko.ai/html/fizz/sections/image-with-text--soda-two-columns.html; Shopify bundle: sections/fizz/soda-two-columns/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-soda-two-columns.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `bg` | color | Background | #ffc9d6 |
| `text_color` | color | Text | #0f3b2e |
| `button_bg` | color | Button | #0f3b2e |
| `reverse` | checkbox | Image on the right | True |
| `image` | image_picker | Image |  |
| `image_url` | text | Fallback image URL (Unsplash) | https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1000&q=80 |
| `heading` | text | Heading | Real fruit. Real short label. |
| `text` | textarea | Text | Fizz is built from fruit juice, prebiotic fiber and sparkling water. No fake colors, no sugar bomb, no ingredient you need to Google. |
| `button_label` | text | Button label | What's in Fizz? |
| `button_url` | url | Button link |  |

## Blocks

_No blocks._

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
