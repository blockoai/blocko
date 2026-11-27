# Soda 2-up

Two product-line cards with image, copy and button.

- Category: image-with-text
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/fizz/sections/image-with-text--soda-two-up.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Soda 2-up" (id `soda-two-up`, theme `fizz`; live demo: https://demo.blocko.ai/html/fizz/sections/image-with-text--soda-two-up.html; Shopify bundle: sections/fizz/soda-two-up/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-soda-two-up.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `bg` | color | Background | #e3f5fd |
| `text_color` | color | Text | #14433d |

## Blocks

### Item (`item`, max 2)

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Image |  |
| `image_url` | text | Fallback image URL (Unsplash) |  |
| `title` | text | Title | Classic cans |
| `text` | textarea | Text | The original lineup: bright fruit, 2g of sugar and fiber that keeps up. |
| `button_label` | text | Button label | Shop classics |
| `button_url` | url | Button link |  |


## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): `button_label`, `button_url`, `image`, `image_url`, `text`, `title`

Generated file: do not edit; open an issue instead.
