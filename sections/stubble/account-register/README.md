# Account registration

New customer registration with a concise benefits list and accessible fields.

- Category: customer-account
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/stubble/sections/customer-account--account-register.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Account registration" (id `account-register`, theme `stubble`; live demo: https://demo.blocko.ai/html/stubble/sections/customer-account--account-register.html; Shopify bundle: sections/stubble/account-register/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-account-register.liquid`
- `assets/blko-account.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Kicker | Create an account |
| `heading` | text | Heading | Make shaving easier. |
| `lede` | textarea | Lede | Keep your orders, subscriptions and delivery details in one place. |
| `first_name_label` | text | First name label | First name |
| `last_name_label` | text | Last name label | Last name |
| `email_label` | text | Email label | Email address |
| `password_label` | text | Password label | Create password |
| `submit_label` | text | Submit label | Create account |
| `legal` | textarea | Legal | By continuing, you agree to the store terms and privacy notice. |
| `signin_link` | text | Signin link | Sign in |
| `reset_link` | text | Reset link | Reset password |

## Blocks

### Benefit (`benefit`, max 6)

| id | type | label | default |
| --- | --- | --- | --- |
| `text` | text | Text | See your order history |

## Dependencies

- Assets: `blko-account.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
