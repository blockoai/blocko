# Subscribe success

Subscription confirmation page with an onward shopping action.

- Category: page
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://blocko.avada.net/html/beauty-01/sections/page--global-subscribe-success.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Subscribe success" (id `global-subscribe-success`, theme `beauty-01`; live demo: https://blocko.avada.net/html/beauty-01/sections/page--global-subscribe-success.html; Shopify bundle: sections/beauty-01/global-subscribe-success/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-global-subscribe-success.liquid`
- `assets/blko-global.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Kicker | You’re on the list |
| `heading` | text | Heading | Thanks for signing up. |
| `text` | textarea | Text | Look for a welcome note soon. In the meantime, discover a few everyday essential |
| `button_label` | text | Button label | Explore the collection |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-global.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
