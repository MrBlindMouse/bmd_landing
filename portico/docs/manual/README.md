# Portico manual

Operator and reference documentation for **site authors** who import `github.com/MrBlindMouse/Portico`.

**Published copy** of `docs/manual/` from the [Portico framework](https://github.com/MrBlindMouse/Portico). Chapter links in this tree resolve on `https://bmd-studios.com/portico/docs/manual/`. Pin what you read to the **same git tag** as the `require` line in your site's `go.mod`.

**Normative contract:** If a feature is not described in this manual or in `go doc` at your pinned module version, treat it as **not shipped**. **AGENTS.md** in your site repo (from `portico init`) is the on-disk agent entry and should match this manual.

## HTTP fetch (agents)

Base URL: `https://bmd-studios.com/portico/docs/manual/`. Full curl list: [llms.txt](https://bmd-studios.com/portico/llms.txt).

```bash
curl -fsSL https://bmd-studios.com/portico/docs/manual/README.md
```

| Chapter | curl |
|---------|------|
| This index | `curl -fsSL https://bmd-studios.com/portico/docs/manual/README.md` |
| [Overview](00-overview.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/00-overview.md` |
| [Getting started](01-getting-started.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/01-getting-started.md` |
| [Authoring](02-authoring.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/02-authoring.md` |
| [Input](03-input.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/03-input.md` |
| [Rendering](04-rendering.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/04-rendering.md` |
| [Identity and accounts](05-identity-accounts.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/05-identity-accounts.md` |
| [Running](06-running.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/06-running.md` |
| [Production](07-production.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/07-production.md` |
| [Testing](08-testing.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/08-testing.md` |
| [Effects](reference/effects.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/reference/effects.md` |
| [Contexts](reference/contexts.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/reference/contexts.md` |
| [portico.Options](reference/options.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/reference/options.md` |
| [JSON config](reference/config-file.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/reference/config-file.md` |
| [Inspect HTTP](reference/inspect-http.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/reference/inspect-http.md` |
| [Status HTTP](reference/status-http.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/reference/status-http.md` |
| [CLI](reference/cli.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/reference/cli.md` |
| [Plans](reference/plans.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/reference/plans.md` |
| [Wire format](reference/wire.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/reference/wire.md` |
| [Packages](reference/packages.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/reference/packages.md` |
| [Hot reload](appendices/hot-reload.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/appendices/hot-reload.md` |
| [Glossary](appendices/glossary.md) | `curl -fsSL https://bmd-studios.com/portico/docs/manual/appendices/glossary.md` |

## How to use this manual

| Track | Chapters | Use when |
|-------|----------|----------|
| **Tutorial** | [Overview](00-overview.md) → [Getting started](01-getting-started.md) → [Authoring](02-authoring.md) | First site |
| **Guide** | [Input](03-input.md), [Rendering](04-rendering.md), [Identity](05-identity-accounts.md) | Daily development |
| **Reference** | [reference/](reference/) | Lookup APIs, HTTP, CLI, config |
| **Operations** | [Running](06-running.md), [Production](07-production.md) | Deploy and run |

Discovery from the CLI (replace `vX.Y.Z` with your module version):

```bash
go run github.com/MrBlindMouse/Portico/cmd/portico docs -tag vX.Y.Z
```

## Contents

### Guides

0. [Overview](00-overview.md)
1. [Getting started](01-getting-started.md)
2. [Authoring an installation](02-authoring.md)
3. [Input and dispatch](03-input.md)
4. [Rendering](04-rendering.md)
5. [Identity and accounts](05-identity-accounts.md)
6. [Running the server](06-running.md)
7. [Production and operations](07-production.md)
8. [Testing](08-testing.md)

### Reference

- [Effects](reference/effects.md)
- [Contexts](reference/contexts.md)
- [portico.Options](reference/options.md)
- [JSON config file](reference/config-file.md)
- [Inspect HTTP API](reference/inspect-http.md)
- [Status HTTP API](reference/status-http.md)
- [CLI (`portico`)](reference/cli.md)
- [Plans](reference/plans.md)
- [Wire format](reference/wire.md)
- [Import map (packages)](reference/packages.md)

### Appendices

- [Hot reload](appendices/hot-reload.md)
- [Glossary](appendices/glossary.md)

## Beyond this manual

| Doc | Where |
|-----|--------|
| **AGENTS.md** | Your site repo after `portico init` |
| building-a-site.md, site-agents.md | [Portico `docs/`](https://github.com/MrBlindMouse/Portico/tree/main/docs) at your module tag (not on bmd-studios.com) |
| Framework README, contributor AGENTS.md | [github.com/MrBlindMouse/Portico](https://github.com/MrBlindMouse/Portico) |
| llms.txt (curl index) | [portico/llms.txt](https://bmd-studios.com/portico/llms.txt) |
