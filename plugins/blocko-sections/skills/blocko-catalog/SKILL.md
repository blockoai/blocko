---
name: blocko-catalog
description: Find Blocko sections or blocks by need using catalog.json (category, target, gaps) and show their settings. Use when the user says "find a Blocko section", "which section for a hero/FAQ/cart drawer", "list Blocko sections", "does Blocko have X", "show settings of a section", or asks what is available before installing anything.
---

# blocko-catalog

## What it does
Answers "which Blocko section fits this need?" from `catalog.json` at the root of the sections repository, and shows the settings, blocks and dependencies of the chosen section. It never changes a theme.

## Steps
1. Locate `catalog.json` (the repository root; if the user has not cloned it, ask for the path or suggest `git clone https://github.com/blockoai/blocko`). Reason: the catalog is the single machine-readable index, so answers stay in sync with what is published.
2. Parse the need into category keywords (hero, product, cart, faq, footer, ...) and a theme preference if given. Reason: categories are the catalog's primary grouping.
3. Filter entries with `jq` or a short script on `category`, `name`, `description`. Reason: do not eyeball a large file.
4. Separate results by `targets.shopify`: `ok` entries are installable now; anything starting with `gap:` is not available as Liquid yet. Reason: promising a gap section wastes the user's time.
5. For the best match, read `sections/<theme>/<id>/README.md` and report settings, blocks, assets, locale keys. Reason: this is what the merchant will configure.
6. Offer the next step: `blocko-install-section` for one section, `blocko-install-theme` for a whole theme.

## Output format
A short table: id, name, category, shopify target. Then 3 to 6 lines for the recommended section: why it fits, key settings, dependencies, gap warnings. Name the bundle path.

## Always
- Say clearly when a matching section is a gap and what the nearest installable alternative is.
- Quote ids exactly as in the catalog.

## Never
- Never invent sections or settings that are not in the catalog or the bundle README.
- Never edit `catalog.json` or any generated file.

## Examples
Good: "Two installable matches in beauty-01: `content-values` (4 text settings, up to 6 blocks, 0 KB JS) and ... The FAQ accordion variant is a gap (not migrated yet)."
Bad: "Blocko has a mega menu section, install it." (not checked against the catalog)

## When unsure
If the need is ambiguous (for example "a banner"), list the 3 closest categories and ask which one. If `catalog.json` is missing or unparsable, say so and stop instead of guessing.
