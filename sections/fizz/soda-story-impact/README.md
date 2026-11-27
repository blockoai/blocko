# Soda story stats

Big-number stats row.

- Category: about
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/fizz/sections/about--soda-story-impact.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Soda story stats" (id `soda-story-impact`, theme `fizz`; live demo: https://demo.blocko.ai/html/fizz/sections/about--soda-story-impact.html; Shopify bundle: sections/fizz/soda-story-impact/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-soda-story-impact.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `bg` | color | Background | #ffc9d6 |
| `text_color` | color | Text | #14433d |
| `heading` | text | Heading | Fizz by the numbers |
| `text` | textarea | Text | Every can swaps added sugar for fiber and fruit. Here is what that adds up to so far. |
| `footnote` | text | Footnote | *Placeholder figures, replace with your own. |

## Blocks

### Stat (`stat`)

| id | type | label | default |
| --- | --- | --- | --- |
| `number` | text | Number | 2M |
| `label` | text | Label | Cans sipped* |


## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): `label`, `number`

Generated file: do not edit; open an issue instead.
