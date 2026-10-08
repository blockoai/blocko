# Story timeline

Vertical chronology for a brand journey.

- Category: about
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/stubble/sections/about--content-story-timeline.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Story timeline" (id `content-story-timeline`, theme `stubble`; live demo: https://demo.blocko.ai/html/stubble/sections/about--content-story-timeline.html; Shopify bundle: sections/stubble/content-story-timeline/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-content-story-timeline.liquid`
- `assets/blko-content.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Kicker | Along the way |
| `heading` | text | Heading | Built one useful product at a time. |

## Blocks

### Milestone (`milestone`)

| id | type | label | default |
| --- | --- | --- | --- |
| `datetime` | text | Machine-readable year | 2018 |
| `label` | text | Year label | 2018 |
| `title` | text | Title | An everyday idea |
| `text` | textarea | Text | A small team begins with a simple belief: a good shave should not cost a fortune |

## Dependencies

- Assets: `blko-content.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
