# Required and encouraged lists

Per-pillar columns that separate what brands must do from what we encourage.

- Category: trust
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/shelf/sections/trust--shelf-pillar-lists.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Required and encouraged lists" (id `shelf-pillar-lists`, theme `shelf`; live demo: https://demo.blocko.ai/html/shelf/sections/trust--shelf-pillar-lists.html; Shopify bundle: sections/shelf/shelf-pillar-lists/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-shelf-pillar-lists.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | The rulebook |
| `heading` | text | Heading | Required and encouraged |
| `lede` | textarea | Lede | A brand must clear every required item to be listed. Encouraged items win it a p |
| `required_label` | text | Required label | Required |
| `encouraged_label` | text | Encouraged label | Encouraged |

## Blocks

### Pillar (`pillar`, max 6)

| id | type | label | default |
| --- | --- | --- | --- |
| `title` | text | Title | Pillar |
| `required` | textarea | Required | What brands must do. |
| `encouraged` | textarea | Encouraged | What we would like brands to do. |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
