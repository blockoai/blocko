---
name: blocko-install-section
description: Ask where a Blocko section, block or page should go, then copy its bundle (or port its HTML demo) into a merchant Shopify theme (sections, blocks, snippets, assets), merge locale keys, check name collisions, run shopify theme check and explain how to add it in the Theme Editor. Use when the user says "install this Blocko section", "add the Blocko hero to my theme", "drop a section into Dawn", "put blko section in my theme folder".
---

# blocko-install-section

## What it does
Clarifies placement first, then installs one section or block into the user's project: a bundle from `sections/<theme>/<id>/` into a Shopify theme without overwriting anything silently, or, for items with no Shopify bundle, a port of the HTML demo (`demo/<theme>/...`) into Liquid with a schema, or a copy of the HTML for a plain site. Then validates.

## Steps
1. Clarify placement BEFORE any change: target project/theme, platform (Shopify theme or plain HTML site), page/template, and position (e.g. after the hero). If the user's message already answers these, restate the plan in one short list and ask for confirmation; if anything is missing, ask. Never guess, and do not read-then-write anything until the user confirms. Reason: a wrong guess edits the wrong theme or page.
2. Find the item in `catalog.json` and read its entry. If `targets.shopify` is `ok`, use the bundle (read its README; resolve the theme directory, which must contain `layout/theme.liquid` and `sections/`). If it is a gap (HTML-only theme such as tress, or a missing bundle): for a Shopify target port the HTML at the entry's `demo` path into a Liquid section with a `{% schema %}`, mirroring a bundle in `sections/veil/` (keep `blko-` classes, token fallbacks, idempotent custom elements); for a plain HTML site copy the demo HTML plus its CSS/JS assets. Reason: gap items have no Liquid file but the demo is the source of truth.
3. List every file in the bundle and compare with the destination. For each name collision show a diff and ASK before replacing; identical files can be skipped. Reason: merchants customise themes and silent overwrites destroy work.
4. Copy files to the same relative folders (`sections/`, `blocks/`, `snippets/`, `assets/`). Reason: bundles mirror the theme layout.
5. If the bundle has `locales/en.default.blko.json`, deep-merge it into the theme `locales/en.default.json`, keeping existing keys. Reason: replacing the locale file breaks every other string.
6. Run `shopify theme check --path <theme>`; report errors that mention the new files. Reason: catches schema or Liquid problems before upload.
7. Explain how to use it: push or `shopify theme dev`, open the Theme Editor, Add section, search the section name; for theme blocks, add them inside a section that accepts theme blocks.

## Output format
A list of files copied, skipped and asked-about; the locale keys merged; the `theme check` result (error count); then 2 to 3 lines of Theme Editor instructions.

## Always
- Show collisions before touching them and wait for the answer.
- Restate placement and wait for the user's OK before the first edit.
- Keep the `blko-` class names and the idempotent custom element guard untouched.
- Work on a copy or a git branch of the theme when the directory is a git repository with uncommitted changes.

## Never
- Never overwrite an existing file without asking.
- Never guess the target project, page or position; ask.
- Never edit the generated Liquid to "fix" style; open an issue in the sections repository, or customise a copy knowingly.
- Never push to a live (published) theme.

## Examples
Good: "Copied 3 files, skipped `assets/blko-content.js` (identical), merged 2 locale keys, theme check: 0 errors. Open the Theme Editor > Add section > 'Values in practice'."
Bad: copying with `cp -r` over the theme and overwriting `locales/en.default.json`.

## When unsure
If the target platform, page or position is unclear, ask before anything else. If the destination looks like a published store theme pulled from production, or the collision diff is non-trivial, stop and ask the user what to keep.
