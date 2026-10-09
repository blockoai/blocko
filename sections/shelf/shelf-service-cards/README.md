# Service booking cards

Bookable in-store services with length, price and a redeemable credit.

- Category: split
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/shelf/sections/split--shelf-service-cards.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Service booking cards" (id `shelf-service-cards`, theme `shelf`; live demo: https://demo.blocko.ai/html/shelf/sections/split--shelf-service-cards.html; Shopify bundle: sections/shelf/shelf-service-cards/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-shelf-service-cards.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Pick a session |
| `heading` | text | Heading | Services and prices |
| `lede` | textarea | Lede | A small travel-size gift comes with each booking, and spending $50 to $75 on a f |
| `button_label` | text | Button label | Book |

## Blocks

### Service (`service`, max 8)

| id | type | label | default |
| --- | --- | --- | --- |
| `length` | text | Length | 60 min |
| `price` | text | Price | $50 |
| `name` | text | Name | Service |
| `note` | text | Note | Redeemable on products |
| `url` | url | Url |  |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
