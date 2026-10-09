# Map placeholder

Neutral location treatment that avoids real address data.

- Category: contact
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/stubble/sections/contact--content-contact-map.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Map placeholder" (id `content-contact-map`, theme `stubble`; live demo: https://demo.blocko.ai/html/stubble/sections/contact--content-contact-map.html; Shopify bundle: sections/stubble/content-contact-map/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-content-contact-map.liquid`
- `assets/blko-content.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `map_label` | text | Map label | Abstract map placeholder |
| `kicker` | text | Kicker | Where it is made |
| `heading` | text | Heading | The factory |
| `text` | textarea | Text | Blades are ground and assembled in our own plant. Tours are not open to the publ |
| `city` | text | City | Eisfeld |
| `country` | text | Country | Germany |
| `link` | url | Link |  |
| `link_label` | text | Link label | Get directions |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-content.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
