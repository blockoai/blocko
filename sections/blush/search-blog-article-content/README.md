# Long-form article content

Long-form editorial typography with pull quote, inline product cards, and sharing controls.

- Category: article
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/blush/sections/article--search-blog-article-content.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Long-form article content" (id `search-blog-article-content`, theme `blush`; live demo: https://demo.blocko.ai/html/blush/sections/article--search-blog-article-content.html; Shopify bundle: sections/blush/search-blog-article-content/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-search-blog-article-content.liquid`
- `assets/blko-predictive-search.js`
- `assets/blko-search-blog.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `article` | article | Article |  |
| `product_a` | product | First product |  |
| `product_b` | product | Second product |  |
| `products_heading` | text | Products heading | Try these together |
| `share_label` | text | Share label | Share this note |
| `copy_label` | text | Copy label | Copy link |
| `email_label` | text | Email label | Email |
| `save_url` | url | Save url |  |
| `save_label` | text | Save label | Save |
| `comments_heading` | text | Comments heading | Comments |
| `success_message` | text | Success message | Thanks for your comment. |
| `error_message` | text | Error message | Please complete the required fields. |
| `author_label` | text | Author label | Name |
| `body_label` | text | Body label | Comment |
| `submit_label` | text | Submit label | Post comment |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-predictive-search.js`, `blko-search-blog.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
