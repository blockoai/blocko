# Reviews with filters

Rating breakdown, photo reviews, and client-side review filters.

- Category: reviews
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/stubble/sections/reviews--pdp-reviews.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Reviews with filters" (id `pdp-reviews`, theme `stubble`; live demo: https://demo.blocko.ai/html/stubble/sections/reviews--pdp-reviews.html; Shopify bundle: sections/stubble/pdp-reviews/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-pdp-reviews.liquid`
- `assets/blko-pdp.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `product` | product | Product |  |
| `eyebrow` | text | Eyebrow | Customer reviews |
| `average` | text | Average | 4.8 |
| `stars` | text | Stars | ★★★★★ |
| `summary` | text | Summary | Based on 1,248 verified reviews |
| `list_heading` | text | List heading | Featured reviews |
| `empty` | text | Empty | No reviews match this filter yet. |

## Blocks

### Rating row (`bar`, max 5)

| id | type | label | default |
| --- | --- | --- | --- |
| `percent` | range | Percent | 82 |
| `label` | text | Label | 5 stars |

### Review filter (`filter`, max 5)

| id | type | label | default |
| --- | --- | --- | --- |
| `key` | text | Filter key | all |
| `label` | text | Label | All |

### Review (`review`)

| id | type | label | default |
| --- | --- | --- | --- |
| `photo` | image_picker | Photo |  |
| `tags` | text | Filter tags | photos shave |
| `rating` | range | Rating | 5 |
| `badge` | text | Badge | Verified buyer |
| `title` | text | Title | A closer shave |
| `text` | textarea | Text | I get a close shave with no irritation. |
| `caption` | text | Caption | Verified · photo review |
| `footer` | text | Footer | Jordan R. · 2 weeks ago |

## Dependencies

- Assets: `blko-pdp.js`
- Locale keys: `blko.pdp.rating_breakdown` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): `settings.blocko_api_base`

Generated file: do not edit; open an issue instead.
