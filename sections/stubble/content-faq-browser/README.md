# FAQ browser

Searchable category tabs and accordion answers.

- Category: faq
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/stubble/sections/faq--content-faq-browser.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "FAQ browser" (id `content-faq-browser`, theme `stubble`; live demo: https://demo.blocko.ai/html/stubble/sections/faq--content-faq-browser.html; Shopify bundle: sections/stubble/content-faq-browser/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-content-faq-browser.liquid`
- `assets/blko-content.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `search_label` | text | Search label | Search answers |
| `search_placeholder` | text | Search placeholder | Try “shipping” or “scent” |
| `tabs_label` | text | Tabs label | FAQ categories |
| `empty_message` | text | Empty message | No matching questions yet. Try a different search or contact support. |

## Blocks

### Category tab (`tab`, max 6)

| id | type | label | default |
| --- | --- | --- | --- |
| `key` | text | Category key | all |
| `label` | text | Label | All |

### Question (`question`)

| id | type | label | default |
| --- | --- | --- | --- |
| `category` | text | Category key | orders |
| `question` | text | Question | When will my order ship? |
| `answer` | textarea | Answer | Orders are prepared on business days. You’ll receive a shipping update when your |

## Dependencies

- Assets: `blko-content.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
