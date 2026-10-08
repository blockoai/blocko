# Brand archetype

Archetype, traits and the promise the brand makes.

- Category: brand-guidelines
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/isle/sections/brand-guidelines--brand-archetype.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Brand archetype" (id `brand-archetype`, theme `isle`; live demo: https://demo.blocko.ai/html/isle/sections/brand-guidelines--brand-archetype.html; Shopify bundle: sections/isle/brand-archetype/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-brand-archetype.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `eyebrow` | text | Eyebrow | Archetype |
| `heading` | text | Heading | Personality |
| `primary` | text | Primary archetype | Explorer |
| `secondary_label` | text | Secondary label | Supported by |
| `secondary` | text | Secondary archetype | Jester |
| `description` | textarea | Description | Isle invites people out of the routine. It is curious about warm places and good |
| `promise` | text | Brand promise | A few minutes every day that feel like being somewhere warmer. |

## Blocks

### Trait (`trait`, max 6)

| id | type | label | default |
| --- | --- | --- | --- |
| `trait` | text | Trait | Warm |

## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
