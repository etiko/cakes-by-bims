#!/usr/bin/env node
/**
 * Mirrors each generated `<route>.html` file into `<route>/index.html`.
 *
 * The production host (GoDaddy Managed WordPress, cakesbybims.co.uk) fronts
 * this static export with an edge/CDN layer that forces a trailing slash on
 * clean URLs (e.g. "/contact" -> "/contact/"). The site's .htaccess resolves
 * "/contact/" to "/contact/index.html" *if it exists*, falling back to a 403
 * otherwise (directory listing is disabled and there's no matching rewrite
 * for a trailing-slash request without an index file). `next build` with
 * `output: "export"` only emits the flat "contact.html" file alongside a
 * "contact/" directory containing internal Next.js data files (no
 * index.html), so without this step every trailing-slash URL 404s/403s in
 * production even though the flat "contact.html" file is present and correct.
 *
 * Run automatically as a postbuild step (see package.json) so `out/` always
 * has both forms ready to deploy.
 */
import { readdirSync, statSync, copyFileSync, existsSync } from "node:fs";
import { join, relative, basename, dirname } from "node:path";

const outDir = join(import.meta.dirname, "..", "out");

if (!existsSync(outDir)) {
  console.error(`mirror-index-html: "out/" not found — run "next build" first.`);
  process.exit(1);
}

let mirrored = 0;

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (!entry.name.endsWith(".html") || entry.name === "index.html") continue;

    const routeDir = join(dirname(fullPath), basename(entry.name, ".html"));
    if (!existsSync(routeDir) || !statSync(routeDir).isDirectory()) continue;

    const dest = join(routeDir, "index.html");
    copyFileSync(fullPath, dest);
    mirrored += 1;
    console.log(`mirror-index-html: ${relative(outDir, fullPath)} -> ${relative(outDir, dest)}`);
  }
}

walk(outDir);
console.log(`mirror-index-html: mirrored ${mirrored} file(s).`);
