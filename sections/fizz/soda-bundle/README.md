# Soda bundle

Volume tier cards with per-can price and a build-your-own variety pack picker with bundle price.

- Category: main-product
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/fizz/sections/main-product--soda-bundle.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Soda bundle" (id `soda-bundle`, theme `fizz`; live demo: https://demo.blocko.ai/html/fizz/sections/main-product--soda-bundle.html; Shopify bundle: sections/fizz/soda-bundle/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-soda-bundle.liquid`
- `assets/blko-soda.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `tiers_eyebrow` | text | Eyebrow | Stock the fridge |
| `tiers_heading` | text | Heading | Buy more, save more |
| `cans_per_unit` | range | Cans per unit | 12 |
| `buy_label` | text | Buy label | Buy |
| `save_label` | text | Save label | Save |
| `can_label` | text | Per-unit label | can |
| `note_tiers` | text | Editor note: section tiers | No active AOV.ai volume offer covers this product, so these section tiers are display only. Create a Shopify automatic discount that matches each tier. |
| `note_pack` | text | Editor note: variety pack | No active AOV.ai mix-and-match offer found. The pack discount is display only; create a matching Shopify automatic discount for items with the _bundle property. |
| `note_aov` | text | Editor note: AOV.ai offer in use | Using the active AOV.ai offer. Its code is applied to the cart after add. |
| `tier_add_label` | text | Add tier button label | Add to cart |
| `pack_eyebrow` | text | Eyebrow | Build your own |
| `pack_heading` | text | Heading | Build your own variety pack |
| `pack_collection` | collection | Flavor collection |  |
| `pack_size` | range | Flavors to pick | 3 |
| `pack_discount` | range | Pack discount (%) | 10 |
| `hint_label` | text | Hint text | Pick {left} more to save {discount} |
| `progress_label` | text | Progress text | {picked} of {total} picked |
| `add_label` | text | Add flavor label | Add |
| `remove_label` | text | Remove flavor label | Remove |
| `pack_add_label` | text | Add bundle button label | Add bundle to cart |
| `empty_text` | text | Empty text | Choose a flavor collection in the section settings. |

## Blocks

### Volume tier (`tier`, max 6)

| id | type | label | default |
| --- | --- | --- | --- |
| `quantity` | range | Quantity | 1 |
| `discount` | range | Discount (%) | 0 |
| `badge` | text | Badge |  |


## Dependencies

- Assets: `blko-soda.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): `badge`, `discount`, `quantity`

Generated file: do not edit; open an issue instead.
