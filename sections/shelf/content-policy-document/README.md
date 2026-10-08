# Policy document

Long-form policy typography with a sticky table of contents.

- Category: policy
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/shelf/sections/policy--content-policy-document.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Policy document" (id `content-policy-document`, theme `shelf`; live demo: https://demo.blocko.ai/html/shelf/sections/policy--content-policy-document.html; Shopify bundle: sections/shelf/content-policy-document/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-content-policy-document.liquid`
- `assets/blko-content.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `toc_label` | text | Toc label | Table of contents |
| `toc_heading` | text | Toc heading | On this page |

## Blocks

### Policy section (`section`)

| id | type | label | default |
| --- | --- | --- | --- |
| `anchor` | text | Anchor id | content-policy-intro |
| `toc` | text | Toc | Introduction |
| `heading` | text | Heading | 1. Introduction |
| `body` | richtext | Body | <p>[Organization name] respects your privacy. This placeholder explains the head |

## Dependencies

- Assets: `blko-content.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
