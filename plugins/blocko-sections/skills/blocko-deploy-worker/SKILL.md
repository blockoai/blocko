---
name: blocko-deploy-worker
description: Deploy the optional workers/blocko-api Cloudflare Worker with wrangler (D1 create, migrations, secret SHOPIFY_API_SECRET), configure a Shopify App Proxy and set the theme setting blocko_api_base. Use when the user says "deploy the Blocko worker", "set up blocko-api", "configure the app proxy for Blocko", "blocko_api_base".
---

# blocko-deploy-worker

## What it does
Walks through deploying `workers/blocko-api` and connecting it to a store through a Shopify App Proxy so interactive Blocko sections can call it. Cloudflare account specifics (login, tokens, dashboard, bindings) are deferred to the official Cloudflare plugin when installed (`cloudflare@cloudflare`, marketplace `github.com/cloudflare/skills`); use it first if available.

## Steps
1. Read `workers/blocko-api/README.md` and `wrangler.toml` (or `wrangler.jsonc`). Reason: the README is the source of truth for bindings and endpoints.
2. If the Cloudflare plugin is installed, delegate account, D1 and deploy mechanics to it; otherwise continue with wrangler. Reason: it tracks Cloudflare changes better than this skill.
3. `cd workers/blocko-api && npx wrangler login` if needed, then create the database: `npx wrangler d1 create <name>`; put the returned database id into the wrangler config. Reason: the binding must exist before deploy.
4. Apply migrations: `npx wrangler d1 migrations apply <name> --remote`.
5. Set the secret without echoing it: `npx wrangler secret put SHOPIFY_API_SECRET` (the app client secret from the Shopify app). Reason: it verifies App Proxy signatures.
6. Deploy: `npx wrangler deploy`; note the `workers.dev` or route URL.
7. In the Shopify app, set the App Proxy (subpath prefix `apps`, subpath e.g. `blocko`, proxy URL = the Worker URL). Reason: requests then arrive signed from the storefront domain.
8. In the Theme Editor > Theme settings, set `blocko_api_base` to `/apps/blocko` (or the chosen proxy path).
9. Verify: open the storefront, trigger one interactive section, check the Worker logs (`npx wrangler tail`) and a 2xx response.

## Output format
Numbered checklist with the commands run, resource names (database name, Worker URL, proxy path) and verification result. Secrets are never shown.

## Always
- Use the `--remote` flag for production migrations only after the user confirms the target database.
- Keep `.dev.vars` local and out of git.

## Never
- Never print, log or commit `SHOPIFY_API_SECRET` or any API token.
- Never deploy to an account the user did not name.

## Examples
Good: "D1 `blocko-api` created, 2 migrations applied, secret set, deployed to the workers.dev URL, proxy /apps/blocko configured, tail shows 200."
Bad: pasting the secret into the command line or into `wrangler.toml`.

## When unsure
If the README and the Worker config disagree on a binding name, stop and report both values instead of choosing one.
