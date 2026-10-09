# Subscribe and save

Bold promotional band for subscribe-and-save with perks and a call to action.

- Category: promo
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/prism/sections/promo--prism-subscribe.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Subscribe and save" (id `prism-subscribe`, theme `prism`; live demo: https://demo.blocko.ai/html/prism/sections/promo--prism-subscribe.html; Shopify bundle: sections/prism/prism-subscribe/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-prism-subscribe.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Subscribe + save |
| `heading` | text | Heading | 10% off, every refill |
| `button_label` | text | Button label | See how it works |
| `button_url` | url | Button url |  |

## Blocks

### Perk (`perk`, max 5)

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | 10% off every order |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
