# Account activation

First-time activation state with password setup and an optional decline action.

- Category: customer-account
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/twist/sections/customer-account--account-activate.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Account activation" (id `account-activate`, theme `twist`; live demo: https://demo.blocko.ai/html/twist/sections/customer-account--account-activate.html; Shopify bundle: sections/twist/account-activate/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-account-activate.liquid`
- `assets/blko-account.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Kicker | Activate your account |
| `heading` | text | Heading | Set your password. |
| `lede` | textarea | Lede | One final step, then your account will be ready. |
| `password_label` | text | Password label | Password |
| `confirm_label` | text | Confirm label | Confirm password |
| `submit_label` | text | Submit label | Activate account |
| `decline_label` | text | Decline label | Decline invitation |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-account.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
