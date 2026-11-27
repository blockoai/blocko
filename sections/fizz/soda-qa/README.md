# Soda FAQ

Category pills and an accordion of questions.

- Category: faq
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/fizz/sections/faq--soda-qa.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Soda FAQ" (id `soda-qa`, theme `fizz`; live demo: https://demo.blocko.ai/html/fizz/sections/faq--soda-qa.html; Shopify bundle: sections/fizz/soda-qa/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-soda-qa.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `bg` | color | Background | #c8f1dd |
| `text_color` | color | Text | #0f3b2e |
| `heading` | text | Heading | Questions, answered. |
| `text` | textarea | Intro | Flavors, fiber, shipping and subscriptions. Still stuck? We are one message away. |
| `all_label` | text | All tab label | All |
| `more_text` | text | Footer text | Did not find it? |
| `more_label` | text | Footer link label | Contact us |
| `more_url` | url | Footer link |  |

## Blocks

### Category tab (`category`)

| id | type | label | default |
| --- | --- | --- | --- |
| `name` | text | Name | Flavors |

### Question (`question`)

| id | type | label | default |
| --- | --- | --- | --- |
| `category` | text | Category (match a tab name) | Flavors |
| `question` | text | Question | Which flavor should I try first? |
| `answer` | textarea | Answer | Start with Cherry Pop or grab a variety pack and pick a favorite. |


## Dependencies

- Assets: none (0 KB JavaScript)
- Locale keys: none
- Theme settings read (optional, with fallbacks): `answer`, `category`, `name`, `question`

Generated file: do not edit; open an issue instead.
