# Password / coming soon

Coming-soon storefront with email signup.

- Category: page
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/tint/sections/page--global-password-page.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Password / coming soon" (id `global-password-page`, theme `tint`; live demo: https://demo.blocko.ai/html/tint/sections/page--global-password-page.html; Shopify bundle: sections/tint/global-password-page/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-global-password-page.liquid`
- `assets/blko-global.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image alt text | Person with natural makeup |
| `badge` | text | Badge | Coming soon |
| `kicker` | text | Kicker | Something is taking shape |
| `heading` | text | Heading | A new ritual is on its way. |
| `text` | textarea | Text | Leave your email and we’ll let you know when the doors open. |
| `email_label` | text | Email label | Email address |
| `email_placeholder` | text | Email placeholder | you@example.com |
| `submit_label` | text | Submit label | Notify me |
| `success_message` | text | Success message | You’re signed up. Keep an eye on your inbox. |
| `error_message` | text | Error message | Please enter a valid email address. |
| `message` | text | Message | A few thoughtful notes, from time to time. |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-global.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
