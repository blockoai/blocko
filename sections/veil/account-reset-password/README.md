# Password reset

Dedicated recovery page for setting a new account password.

- Category: customer-account
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://blocko.avada.net/html/veil/sections/customer-account--account-reset-password.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Password reset" (id `account-reset-password`, theme `veil`; live demo: https://blocko.avada.net/html/veil/sections/customer-account--account-reset-password.html; Shopify bundle: sections/veil/account-reset-password/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-account-reset-password.liquid`
- `assets/blko-account.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Kicker | Password reset |
| `heading` | text | Heading | Choose a new password. |
| `lede` | textarea | Lede | Use a password you have not used before. |
| `password_label` | text | Password label | New password |
| `confirm_label` | text | Confirm label | Confirm password |
| `submit_label` | text | Submit label | Save new password |
| `signin_link` | text | Signin link | Sign in |
| `register_link` | text | Register link | Create an account |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-account.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
