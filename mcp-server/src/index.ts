import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ─── Paths ────────────────────────────────────────────────────────────────────

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "../../"); // chimmerjim root
const DATA_DIR = path.resolve(__dirname, "../data");

// ─── Helpers ──────────────────────────────────────────────────────────────────

function readData(file: string): unknown {
  const p = path.join(DATA_DIR, file);
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeData(file: string, data: unknown): void {
  const p = path.join(DATA_DIR, file);
  fs.writeFileSync(p, JSON.stringify(data, null, 2), "utf8");
}

const DATA_FILES: Record<string, string> = {
  config: "site-config.json",
  services: "services.json",
  faqs: "faqs.json",
};

const IGNORED_DIRS = new Set([
  "node_modules", ".git", ".next", "dist", ".vercel",
  "out", "coverage", ".turbo",
]);

function walkDir(
  dir: string,
  ext: string[] | null,
  results: { path: string; size: number }[] = [],
  base = PROJECT_ROOT,
): { path: string; size: number }[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (IGNORED_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(full, ext, results, base);
    } else {
      const rel = path.relative(base, full);
      if (!ext || ext.some((e) => entry.name.endsWith(e))) {
        const { size } = fs.statSync(full);
        results.push({ path: rel.replace(/\\/g, "/"), size });
      }
    }
  }
  return results;
}

function searchInFiles(pattern: string, exts: string[] | null): string {
  const regex = new RegExp(pattern, "gm");
  const files = walkDir(PROJECT_ROOT, exts);
  const matches: string[] = [];

  for (const { path: rel } of files) {
    const full = path.join(PROJECT_ROOT, rel);
    let content: string;
    try {
      content = fs.readFileSync(full, "utf8");
    } catch {
      continue;
    }
    const lines = content.split("\n");
    lines.forEach((line, i) => {
      if (regex.test(line)) {
        matches.push(`${rel}:${i + 1}  ${line.trim()}`);
      }
      regex.lastIndex = 0;
    });
    if (matches.length > 80) {
      matches.push("… (truncated, too many matches — narrow your pattern)");
      break;
    }
  }
  return matches.length ? matches.join("\n") : "No matches found.";
}

// ─── MCP Server ───────────────────────────────────────────────────────────────

const server = new McpServer({
  name: "chimmerjim",
  version: "1.0.0",
});

// ── Tool: project_overview ────────────────────────────────────────────────────
server.tool(
  "project_overview",
  "Get a compact overview of the chimmerjim project: tech stack, file counts, key directories, and a summary of current site content. Call this first to orient yourself without burning tokens on individual file reads.",
  {},
  async () => {
    const allFiles = walkDir(PROJECT_ROOT, null);
    const byExt: Record<string, number> = {};
    for (const { path: p } of allFiles) {
      const ext = path.extname(p) || "(no ext)";
      byExt[ext] = (byExt[ext] ?? 0) + 1;
    }

    const config = readData("site-config.json") as { business: { name: string; tagline: string; phone: string }; hero: { headline: string } };
    const services = readData("services.json") as { services: { title: string }[] };

    const summary = [
      `# ChimmerJim — Project Overview`,
      ``,
      `## Tech Stack`,
      `- Framework: Next.js (TypeScript, App Router, Turbopack)`,
      `- Styling: Tailwind CSS v4`,
      `- Images: next/image with AVIF+WebP formats, sharp for processing`,
      `- Icons: lucide-react`,
      `- Runtime: Node.js`,
      ``,
      `## File Breakdown`,
      Object.entries(byExt)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 12)
        .map(([ext, n]) => `  ${ext.padEnd(12)} ${n} file${n > 1 ? "s" : ""}`)
        .join("\n"),
      ``,
      `## Site Content Summary`,
      `- Business: ${config.business.name} — "${config.business.tagline}"`,
      `- Phone: ${config.business.phone}`,
      `- Hero headline: "${config.hero.headline}"`,
      `- Services (${services.services.length}): ${services.services.map((s: { title: string }) => s.title).join(", ")}`,
      ``,
      `## Route Structure`,
      `  app/(main)/page.tsx                        Home page`,
      `  app/(main)/[metro]/page.tsx                Metro area pages (e.g. /washington-dc)`,
      `  app/(main)/[metro]/[service]/page.tsx      Metro+service pages (e.g. /washington-dc/chimney-cleaning)`,
      `  app/(main)/services/[service]/page.tsx     Service pages (e.g. /services/chimney-cleaning)`,
      `  app/(main)/washington/page.tsx             Washington DC redirect`,
      `  app/(ads)/ads/[campaign]/page.tsx          Google Ads landing pages (noindex)`,
      ``,
      `## Primary Data Sources (TypeScript — authoritative)`,
      `  lib/data/services.ts    Service definitions (name, slug, intro, signs, duration, bullets)`,
      `  lib/data/metros.ts      Metro area definitions (slug, displayName, fullName, cities)`,
      `  lib/data/landers.ts     Ads landing page configs (campaign slugs, hero copy, FAQs, reviews)`,
      `  lib/data/cities.ts      City lists per metro`,
      ``,
      `## MCP Data Files (edit via update_site_data)`,
      Object.keys(DATA_FILES).map((k) => `  - ${k}`).join("\n"),
      `  Note: pricing has been removed from the site and MCP data.`,
      ``,
      `## Key Components`,
      `  components/sections/HomeHero.tsx      Home page hero (art-directed desktop+mobile images)`,
      `  components/sections/Hero.tsx          Hero used on metro/service/metro+service pages`,
      `  components/sections/PresetHero.tsx    Hero used on ads landing pages`,
      `  components/sections/ProcessSteps.tsx  4-step how-it-works (phone → visit → diagnose → repair)`,
      `  components/sections/CTA.tsx           Phone CTA section`,
      `  components/sections/Services.tsx      Service cards grid`,
      `  components/sections/FAQ.tsx           FAQ accordion`,
      `  components/sections/CommonProblems.tsx  Problem list for metro pages`,
      `  components/sections/LanderProblems.tsx  Problem list for ads landers`,
      `  components/ui/Breadcrumb.tsx          Breadcrumb nav (metro, service, metro+service pages)`,
      `  components/schema/LocalBusinessSchema.tsx  JSON-LD schema`,
      `  components/schema/BreadcrumbSchema.tsx     JSON-LD breadcrumb schema`,
      `  components/schema/FAQSchema.tsx            JSON-LD FAQ schema`,
      `  components/layout/Navbar.tsx          Sticky top nav with services dropdown`,
      `  components/layout/Footer.tsx          Footer with metro/service links`,
      `  components/layout/AdsHeader.tsx       Simplified header for ads landers`,
      ``,
      `## Static Assets`,
      `  public/logo.png                Transparent-background logo (3620×970, RGBA PNG)`,
      `  public/og-chimmerjim.jpg       OG image (1376×768)`,
      `  public/heroes/hero-home-desktop.png   Home hero — landscape`,
      `  public/heroes/hero-home-mobile.png    Home hero — portrait (mobile)`,
      `  public/heroes/hero-metro.jpg          Metro page hero`,
      `  public/heroes/hero-service.jpg        Service page hero`,
      `  public/heroes/hero-metro-service.jpg  Metro+service page hero`,
      `  public/heroes/hero-ads.jpg            Ads lander hero`,
      ``,
      `## Removed Features`,
      `  - "Request a Callback" button and form (dropped; phone-only CTA)`,
      `  - Typical cost / price range display (removed from all pages and service cards)`,
    ].join("\n");

    return { content: [{ type: "text", text: summary }] };
  },
);

// ── Tool: list_files ──────────────────────────────────────────────────────────
server.tool(
  "list_files",
  "List files in the chimmerjim project by extension. Returns relative paths and file sizes — no file content, so token cost is minimal.",
  {
    extensions: z
      .array(z.string())
      .optional()
      .describe(
        'File extensions to filter by, e.g. [".tsx", ".ts"]. Omit for all files.',
      ),
    subdir: z
      .string()
      .optional()
      .describe("Subdirectory to restrict search to, e.g. \"app\" or \"public\"."),
  },
  async ({ extensions, subdir }) => {
    const base = subdir
      ? path.resolve(PROJECT_ROOT, subdir)
      : PROJECT_ROOT;
    const files = walkDir(base, extensions ?? null, [], base);
    const lines = files.map(
      ({ path: p, size }) =>
        `${p.padEnd(55)} ${(size / 1024).toFixed(1)} KB`,
    );
    const text =
      lines.length > 0
        ? `${lines.length} file(s):\n\n${lines.join("\n")}`
        : "No files found matching criteria.";
    return { content: [{ type: "text", text }] };
  },
);

// ── Tool: read_file ───────────────────────────────────────────────────────────
server.tool(
  "read_file",
  "Read the content of a specific file in the chimmerjim project. Use list_files first to find the right path.",
  {
    file_path: z
      .string()
      .describe("Path relative to project root, e.g. \"app/page.tsx\""),
    start_line: z
      .number()
      .optional()
      .describe("First line to return (1-indexed). Useful for large files."),
    end_line: z
      .number()
      .optional()
      .describe("Last line to return (inclusive)."),
  },
  async ({ file_path, start_line, end_line }) => {
    const full = path.resolve(PROJECT_ROOT, file_path);
    if (!full.startsWith(PROJECT_ROOT)) {
      return { content: [{ type: "text", text: "Error: path escapes project root." }] };
    }
    if (!fs.existsSync(full)) {
      return { content: [{ type: "text", text: `File not found: ${file_path}` }] };
    }
    let content = fs.readFileSync(full, "utf8");
    const lines = content.split("\n");
    const s = start_line ? start_line - 1 : 0;
    const e = end_line ? end_line : lines.length;
    const slice = lines.slice(s, e);
    const numbered = slice.map((l, i) => `${String(s + i + 1).padStart(4)} | ${l}`).join("\n");
    return {
      content: [
        {
          type: "text",
          text: `File: ${file_path} (lines ${s + 1}–${s + slice.length} of ${lines.length})\n\n${numbered}`,
        },
      ],
    };
  },
);

// ── Tool: write_file ──────────────────────────────────────────────────────────
server.tool(
  "write_file",
  "Create or overwrite a file in the chimmerjim project. Use for new components, pages, styles, etc.",
  {
    file_path: z
      .string()
      .describe("Path relative to project root, e.g. \"app/components/Hero.tsx\""),
    content: z.string().describe("Full file content to write."),
  },
  async ({ file_path, content }) => {
    const full = path.resolve(PROJECT_ROOT, file_path);
    if (!full.startsWith(PROJECT_ROOT)) {
      return { content: [{ type: "text", text: "Error: path escapes project root." }] };
    }
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, content, "utf8");
    const lines = content.split("\n").length;
    return {
      content: [{ type: "text", text: `Written: ${file_path} (${lines} lines)` }],
    };
  },
);

// ── Tool: get_site_data ───────────────────────────────────────────────────────
server.tool(
  "get_site_data",
  "Read structured site content from JSON data files. Much cheaper than reading source files when you just need content like services, pricing, FAQs, or site config.",
  {
    key: z
      .enum(["config", "services", "faqs", "all"])
      .describe(
        '"config" = business info & SEO | "services" = service list | "faqs" = FAQ list | "all" = everything',
      ),
  },
  async ({ key }) => {
    let data: unknown;
    if (key === "all") {
      data = Object.fromEntries(
        Object.entries(DATA_FILES).map(([k, f]) => [k, readData(f)]),
      );
    } else {
      data = readData(DATA_FILES[key]);
    }
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
    };
  },
);

// ── Tool: update_site_data ────────────────────────────────────────────────────
server.tool(
  "update_site_data",
  "Update structured site content. Pass a partial object — it does a deep merge with the existing data. To replace the entire file, pass replace: true.",
  {
    key: z
      .enum(["config", "services", "faqs"])
      .describe("Which data file to update."),
    data: z
      .record(z.unknown())
      .describe("Partial or full data to merge into the file."),
    replace: z
      .boolean()
      .optional()
      .describe("If true, replace the entire file instead of merging. Default: false."),
  },
  async ({ key, data, replace }) => {
    const file = DATA_FILES[key];
    let final: unknown;
    if (replace) {
      final = data;
    } else {
      const existing = readData(file) as Record<string, unknown>;
      final = deepMerge(existing, data);
    }
    writeData(file, final);
    return {
      content: [
        {
          type: "text",
          text: `Updated ${file}.\n\nNew content:\n${JSON.stringify(final, null, 2)}`,
        },
      ],
    };
  },
);

// ── Tool: search_code ─────────────────────────────────────────────────────────
server.tool(
  "search_code",
  "Search for a regex pattern across chimmerjim source files. Returns file paths and matching lines with line numbers. Great for finding where something is used without reading every file.",
  {
    pattern: z.string().describe("Regex pattern to search for (JavaScript regex syntax)."),
    extensions: z
      .array(z.string())
      .optional()
      .describe('Limit to these file extensions, e.g. [".tsx", ".ts"].'),
  },
  async ({ pattern, extensions }) => {
    const result = searchInFiles(pattern, extensions ?? null);
    return { content: [{ type: "text", text: result }] };
  },
);

// ─── Deep merge utility ───────────────────────────────────────────────────────

function deepMerge(
  target: Record<string, unknown>,
  source: Record<string, unknown>,
): Record<string, unknown> {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (
      typeof source[key] === "object" &&
      source[key] !== null &&
      !Array.isArray(source[key]) &&
      typeof target[key] === "object" &&
      target[key] !== null &&
      !Array.isArray(target[key])
    ) {
      result[key] = deepMerge(
        target[key] as Record<string, unknown>,
        source[key] as Record<string, unknown>,
      );
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

// ─── Start ────────────────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);
