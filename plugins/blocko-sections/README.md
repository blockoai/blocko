# blocko-sections

Claude Code plugin for the Blocko library (https://github.com/blockoai/blocko). Live catalog: https://blocko.avada.net/html/#/guide

## Install (one line)

```bash
claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko
```

Inside a Claude Code session: `/plugin marketplace add blockoai/blocko`, then `/plugin install blocko-sections@blocko`.

## Connect via MCP

Any agent can read the catalog over MCP (read-only, no sign-in): `claude mcp add --transport http blocko https://blocko.avada.net/mcp`. Other clients: https://blocko.avada.net/html/#/agents

## Update and uninstall

```bash
claude plugin marketplace update blocko && claude plugin update blocko-sections@blocko
claude plugin uninstall blocko-sections@blocko && claude plugin marketplace remove blocko
```

## Skills

| Skill | What it does | Example ask |
| --- | --- | --- |
| `blocko-catalog` | Finds sections, blocks and pages in `catalog.json` and shows their settings | "Does Blocko have a cart drawer?" |
| `blocko-install-section` | Asks where it should go (project, platform, page, position), then installs one section or block; ports HTML-only items | "Add the Blocko account sign in after the header of my login page" |
| `blocko-install-theme` | Pushes a full theme as an unpublished Shopify theme | "Push the beauty-01 theme to my dev store" |
| `blocko-deploy-worker` | Deploys the optional API Worker (D1, App Proxy) | "Set up the Blocko API worker for reviews" |

## Without the plugin

Each entry in `catalog.json` (and each `sections/<theme>/<id>/README.md`) has a one-line prompt. Paste it into any coding agent (Claude Code, Codex, Cursor). The agent reads `AGENTS.md`, asks where the item should go, and installs it.
