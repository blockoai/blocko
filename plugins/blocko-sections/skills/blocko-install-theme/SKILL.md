---
name: blocko-install-theme
description: Push a full Blocko theme from themes/<theme> to a Shopify store as an unpublished theme with the Shopify CLI and verify it. Use when the user says "install the Blocko theme", "push veil to my store", "upload the Blocko theme", "try the theme on my dev store".
---

# blocko-install-theme

## What it does
Uploads `themes/<theme>/` to a store as an UNPUBLISHED theme, so nothing live changes, then walks through verification.

## Steps
1. Clarify first: which theme, which store (dev store or live store), and whether this is a full-theme install or only some sections (then use `blocko-install-section`). If the message already answers, restate and confirm; never guess. Themes without `themes/<theme>/` (HTML-only, e.g. tress) cannot be pushed: say so and offer to port pages with `blocko-install-section`. Reason: pushing to the wrong store is not reversible by us.
2. Check the Shopify CLI is installed and logged in (`shopify version`; `shopify auth` happens on first command). Reason: failing early is cheaper than a half push.
3. Choose the theme from `catalog.json` / `themes/`; warn that sections marked `gap` are not part of the theme yet. Reason: sets honest expectations.
4. Run `shopify theme check --path themes/<theme>`; require 0 errors. Reason: the theme must be clean before upload.
5. Push: `shopify theme push --path themes/<theme> --store <store>.myshopify.com --unpublished --theme "Blocko <theme>"`. Reason: `--unpublished` creates a new theme and never replaces the live one.
6. Print the preview URL and the Theme Editor URL from the CLI output.
7. Verify: open the preview, check home, a collection, a product, cart, and a customer page; confirm fonts load and the header/footer groups render; try keyboard navigation on the menu.
8. Tell the user publishing is a separate, deliberate step in Online Store > Themes.

## Output format
Command run, theme id and preview URL, theme check result, a short verification checklist with pass/fail per page.

## Always
- Use `--unpublished`.
- Ask for the store domain if not given.

## Never
- Never use `--live`, never publish, never push with `--allow-live`.
- Never include store passwords or access tokens in output; the CLI handles login.

## Examples
Good: "Pushed veil as unpublished theme #123456789, theme check 0 errors, preview URL ..., product page OK, cart drawer OK."
Bad: `shopify theme push --live` on a production store.

## When unsure
If the user has not said which store or whether it is a dev store, ask before pushing.
