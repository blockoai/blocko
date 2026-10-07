# Gift card display

Gift card balance, code, copy action, and QR placeholder.

- Category: page
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://blocko.avada.net/html/veil/sections/page--global-gift-card-page.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Gift card display" (id `global-gift-card-page`, theme `veil`; live demo: https://blocko.avada.net/html/veil/sections/page--global-gift-card-page.html; Shopify bundle: sections/veil/global-gift-card-page/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-global-gift-card-page.liquid`
- `assets/blko-global.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `card_label` | text | Card label | For a good day |
| `card_title` | text | Card title | Gift card |
| `kicker` | text | Kicker | A gift, ready to use |
| `heading` | text | Heading | Share a little brightness. |
| `text` | textarea | Text | Use this gift card at checkout. The balance is available until it’s fully redeem |
| `code_label` | text | Code label | Gift card code |
| `copied_message` | text | Copied message | Gift card code copied. |
| `copy_label` | text | Copy label | Copy code |
| `wallet_label` | text | Wallet label | Add to Apple Wallet |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-global.js`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
