# Journal hero

Editorial journal introduction with an image-led feature story.

- Category: blog
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/clip/sections/blog--search-blog-journal-hero.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Journal hero" (id `search-blog-journal-hero`, theme `clip`; live demo: https://demo.blocko.ai/html/clip/sections/blog--search-blog-journal-hero.html; Shopify bundle: sections/clip/search-blog-journal-hero/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-search-blog-journal-hero.liquid`
- `assets/blko-search-blog.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `home_label` | text | Home label | Home |
| `crumb` | text | Crumb | Lookbooks |
| `eyebrow` | text | Eyebrow | Lookbooks + community |
| `heading` | text | Heading | Style stories, ambassador chats and pop-up recaps. |
| `text` | text | Text | Seasonal lookbooks with a shop-the-look strip, short interviews with the people  |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Friends in matching pastel clips on a sofa |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-search-blog.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
