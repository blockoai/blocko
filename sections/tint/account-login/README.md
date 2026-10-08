# Account sign in

Centered sign-in form with an inline password recovery state.

- Category: customer-account
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/tint/sections/customer-account--account-login.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Account sign in" (id `account-login`, theme `tint`; live demo: https://demo.blocko.ai/html/tint/sections/customer-account--account-login.html; Shopify bundle: sections/tint/account-login/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-account-login.liquid`
- `assets/blko-account.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Kicker | Your account |
| `heading` | text | Heading | Welcome back. |
| `lede` | textarea | Lede | Sign in to view your orders and saved details. |
| `email_label` | text | Email label | Email address |
| `password_label` | text | Password label | Password |
| `submit_label` | text | Submit label | Sign in |
| `register_link` | text | Register link | Create an account |
| `reset_link` | text | Reset link | Reset password |
| `recover_kicker` | text | Recover kicker | Password help |
| `recover_heading` | text | Recover heading | Reset your password. |
| `recover_lede` | textarea | Recover lede | Enter your email and we’ll prepare a reset link. |
| `recover_email_label` | text | Recover email label | Email address |
| `recover_submit_label` | text | Recover submit label | Send reset link |
| `recover_success` | text | Recover success | We’ve sent you an email with a link to update your password. |
| `return_label` | text | Return label | Return to sign in |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-account.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
