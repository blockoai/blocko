# Soda product

Gallery, price, variant picker and one-time vs Subscribe & Save selector that posts selling_plan.

- Category: main-product
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/fizz/sections/main-product--soda-product.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Soda product" (id `soda-product`, theme `fizz`; live demo: https://demo.blocko.ai/html/fizz/sections/main-product--soda-product.html; Shopify bundle: sections/fizz/soda-product/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-soda-product.liquid`
- `assets/blko-soda.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `one_time_label` | text | One-time label | One-time purchase |
| `subscribe_label` | text | Subscribe label | Subscribe & Save |
| `save_label` | text | Save label | Save |
| `frequency_label` | text | Frequency label | Delivery frequency |
| `add_label` | text | Add to cart label | Add to cart |
| `sold_label` | text | Sold out label | Sold out |
| `shipping_note` | text | Shipping note | Free shipping over $35. Pause or cancel any time. |
| `default_subscribe` | checkbox | Default to subscription | False |
| `perks_heading` | text | Perks heading | How subscription works |

## Blocks

### Subscription perk (`perk`, max 6)

| id | type | label | default |
| --- | --- | --- | --- |
| `text` | text | Text | Skip any delivery |


## Dependencies

- Assets: `blko-soda.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): `text`

Generated file: do not edit; open an issue instead.
