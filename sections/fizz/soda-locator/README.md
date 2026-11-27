# Soda store locator

Where to buy: flavor chips grid, then a store list with search box and zip input (no map API).

- Category: store-locator
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/fizz/sections/store-locator--soda-locator.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Soda store locator" (id `soda-locator`, theme `fizz`; live demo: https://demo.blocko.ai/html/fizz/sections/store-locator--soda-locator.html; Shopify bundle: sections/fizz/soda-locator/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-soda-locator.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `bg` | color | Background | #fff3b0 |
| `text_color` | color | Text | #0f3b2e |
| `heading` | text | Heading | Where to buy |
| `text` | textarea | Intro | Pick a flavor, add your zip and find a cold can near you. No map needed. |
| `flavor_heading` | text | Flavor heading | Which flavor are you after? |
| `search_label` | text | Search label | Store or city |
| `search_placeholder` | text | Search placeholder | Try Denver or Corner Market |
| `zip_label` | text | Zip label | Zip code |
| `zip_placeholder` | text | Zip placeholder | 80202 |
| `button_label` | text | Button label | Find stores |
| `count_label` | text | Count label | stores found |
| `directions_label` | text | Link label | Get directions |
| `empty_text` | text | Empty message | No stores match yet. Try fewer filters, or shop Fizz online. |

## Blocks

### Flavor chip (`flavor`)

| id | type | label | default |
| --- | --- | --- | --- |
| `name` | text | Name | Cherry Pop |
| `color` | color | Tile color | #ffc9d6 |
| `image` | image_picker | Image |  |
| `image_url` | url | Image URL (demo) |  |

### Store (`store`)

| id | type | label | default |
| --- | --- | --- | --- |
| `name` | text | Name | Corner Market |
| `address` | text | Street | 120 Larimer St |
| `city` | text | City and state | Denver, CO |
| `zip` | text | Zip | 80202 |
| `flavors` | text | Flavors (comma separated) | Cherry Pop, Orange Burst |
| `url` | url | Directions link |  |


## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): `address`, `city`, `color`, `flavors`, `image`, `image_url`, `name`, `url`, `zip`

Generated file: do not edit; open an issue instead.
