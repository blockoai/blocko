# Soda fiber education

Fiber 101: three steps and a grams-of-fiber comparison.

- Category: about
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/fizz/sections/about--soda-fiber.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Soda fiber education" (id `soda-fiber`, theme `fizz`; live demo: https://demo.blocko.ai/html/fizz/sections/about--soda-fiber.html; Shopify bundle: sections/fizz/soda-fiber/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-soda-fiber.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `bg` | color | Background | #fbf3e2 |
| `text_color` | color | Text | #0f3b2e |
| `eyebrow` | text | Eyebrow | Fiber 101 |
| `heading` | text | Heading | Fiber is the good stuff your gut is missing. |
| `text` | textarea | Intro | Most of us eat about half the fiber we need. Prebiotic fiber feeds the friendly bugs in your gut, and a can of Fizz brings nine grams to the party. |
| `compare_heading` | text | Comparison heading | Grams of fiber, side by side |
| `note` | text | Footnote | Typical values. Check each label for exact numbers. |

## Blocks

### Step (`step`)

| id | type | label | default |
| --- | --- | --- | --- |
| `color` | color | Tile color | #ffc9d6 |
| `title` | text | Title | Fiber arrives |
| `text` | textarea | Text | Plant fiber from chicory and cassava skips digestion in your stomach. |

### Comparison bar (`compare`)

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | One can of Fizz |
| `grams` | text | Grams | 9g |
| `percent` | range | Bar length | 75 |
| `color` | color | Bar color | #cdf26b |


## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): `color`, `grams`, `label`, `percent`, `text`, `title`

Generated file: do not edit; open an issue instead.
