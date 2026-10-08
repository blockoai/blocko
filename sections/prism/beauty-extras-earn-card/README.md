# Earn card

Rewards earning action card.

- Category: rewards
- Kind: block
- Shopify target: gap: needs app (earning rules and point balances need a loyalty app; Shopify has no native rewards data); UI shell emitted (no Liquid bundle yet)
- HTML source: `demo/prism/blocks/rewards--beauty-extras-earn-card.html`
- Live demo: https://demo.blocko.ai/html/prism/blocks/rewards--beauty-extras-earn-card.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "Earn card" (id `beauty-extras-earn-card`, theme `prism`; live demo: https://demo.blocko.ai/html/prism/blocks/rewards--beauty-extras-earn-card.html; no Shopify bundle yet (needs app (earning rules and point balances need a loyalty app; Shopify has no native rewards data); UI shell emitted) — port it from the HTML demo demo/prism/blocks/rewards--beauty-extras-earn-card.html into a Liquid section with a {% schema %}, mirroring the structure of an existing bundle in sections/veil/) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

Generated file: do not edit; open an issue instead.
