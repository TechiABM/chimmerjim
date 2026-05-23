# ChimmerJim MCP — Setup Guide

A lightweight MCP server that gives Claude targeted access to your chimmerjim
project — file browsing, code search, and structured content editing — without
dumping entire files into context.

## Install

```bash
cd mcp-server
npm install
```

## Run in dev (no build step)

```bash
npm run dev
```

## Build for production

```bash
npm run build
npm start
```

---

## Connect to Claude Code

Add to `~/.claude.json` (or your project's `.claude/settings.json`):

```json
{
  "mcpServers": {
    "chimmerjim": {
      "command": "npx",
      "args": ["tsx", "C:/Users/User/WebstormProjects/chimmerjim/mcp-server/src/index.ts"],
      "env": {}
    }
  }
}
```

Then restart Claude Code. Type `/mcp` to confirm it's connected.

---

## Connect to Cowork

In Cowork → Settings → MCP Servers → Add Custom Server:

- **Name:** chimmerjim
- **Command:** `npx`
- **Args:** `tsx`, `C:/Users/User/WebstormProjects/chimmerjim/mcp-server/src/index.ts`

---

## Available Tools

| Tool | What it does | Token cost |
|------|-------------|------------|
| `project_overview` | Tech stack, file counts, content summary | Tiny |
| `list_files` | File paths + sizes, filtered by extension | Tiny |
| `read_file` | Read a specific file (supports line ranges) | Medium |
| `write_file` | Create or overwrite a file | — |
| `get_site_data` | Read services / pricing / FAQs / config JSON | Tiny |
| `update_site_data` | Deep-merge updates into data files | — |
| `search_code` | Regex search across source, returns file:line matches | Small |

## Data Files

Content lives in `mcp-server/data/` as plain JSON — easy to hand-edit too:

```
data/
  site-config.json   Business info, hero copy, SEO, trust badges
  services.json      Service list with descriptions
  pricing.json       Price table
  faqs.json          FAQ list
```

## Recommended workflow

1. Start a session → call `project_overview` to orient (one call, ~300 tokens)
2. Use `list_files` to find what you need
3. Use `read_file` with `start_line`/`end_line` for large files
4. Edit content via `update_site_data` — no file reads needed
5. Use `search_code` to find where something is referenced
