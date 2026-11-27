# Reviews hub

Rating summary, filters, UGC grid, and review list.

- Category: reviews
- Kind: section
- Shopify target: ok
- HTML target: gap: no static HTML demo for this theme yet

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Reviews hub" (id `extras-reviews-hub`, theme `fizz`; Shopify bundle: sections/fizz/extras-reviews-hub/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-extras-reviews-hub.liquid`
- `assets/blko-tabs.js`
- `assets/blko-extras.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `product` | product | Product (optional, store-wide reviews when empty) |  |
| `eyebrow` | text | Eyebrow | Real reviews |
| `heading` | text | Heading | 100,000+ fans have weighed in. |
| `average` | text | Average | 4.5 |
| `stars_label` | text | Stars label | Four and a half out of five stars |
| `count_text` | text | Count text | Based on 100,000+ verified reviews |

## Blocks

### Rating bar (`bar`, max 5)

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | 5 stars |
| `percent` | range | Share of reviews | 92 |

### Filter (`filter`, max 6)

| id | type | label | default |
| --- | --- | --- | --- |
| `active` | checkbox | Active by default | false |
| `key` | text | Filter key (matches review tags) | all |
| `label` | text | Label | All reviews |

### Photo review (`photo`, max 8)

| id | type | label | default |
| --- | --- | --- | --- |
| `tags` | text | Tags (space separated) | soap photos |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Cans on a picnic blanket |
| `caption` | text | Caption | “My everyday reach-for.” |
| `rating` | range | Rating | 5 |

### Review (`review`, max 12)

| id | type | label | default |
| --- | --- | --- | --- |
| `tags` | text | Tags (space separated) | soap |
| `rating` | range | Rating | 5 |
| `title` | text | Title | Fresh finish, no fuss. |
| `meta` | text | Meta | Verified customer · 12-pack |

## Dependencies

- Assets: `blko-tabs.js`, `blko-extras.js`
- Locale keys: `blko.reviews.count_template` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): `settings.blocko_api_base`

Generated file: do not edit; open an issue instead.
