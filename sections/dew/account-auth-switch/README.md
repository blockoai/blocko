# Account auth switch

Links between sign-in, registration, and recovery screens.

- Category: customer-account
- Kind: block
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/dew/blocks/customer-account--account-auth-switch.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "Account auth switch" (id `account-auth-switch`, theme `dew`; live demo: https://demo.blocko.ai/html/dew/blocks/customer-account--account-auth-switch.html; Shopify bundle: sections/dew/account-auth-switch/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

This is a theme block: copy it into `blocks/`, then add it inside a section that accepts theme blocks (`@theme`).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `blocks/blko-account-auth-switch.liquid`
- `assets/blko-account.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `register_link` | text | Register link | Create an account |
| `reset_link` | text | Reset link | Reset password |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-account.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
