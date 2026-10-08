# Subscription item

Recurring product line item.

- Category: subscriptions
- Kind: block
- Shopify target: gap: needs app (recurring line items come from a subscription app; Shopify has no native subscription contracts in Liquid); UI shell emitted (no Liquid bundle yet)
- HTML source: `demo/lather/blocks/subscriptions--beauty-extras-subscription-item.html`
- Live demo: https://demo.blocko.ai/html/lather/blocks/subscriptions--beauty-extras-subscription-item.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the block "Subscription item" (id `beauty-extras-subscription-item`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/blocks/subscriptions--beauty-extras-subscription-item.html; no Shopify bundle yet (needs app (recurring line items come from a subscription app; Shopify has no native subscription contracts in Liquid); UI shell emitted) — port it from the HTML demo demo/lather/blocks/subscriptions--beauty-extras-subscription-item.html into a Liquid section with a {% schema %}, mirroring the structure of an existing bundle in sections/veil/) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

Generated file: do not edit; open an issue instead.
