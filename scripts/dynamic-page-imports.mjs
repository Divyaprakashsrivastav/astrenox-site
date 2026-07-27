import fs from "fs";
import path from "path";

const root = process.cwd();
const appDir = path.join(root, "app");

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (ent.name === "page.tsx") acc.push(p);
  }
  return acc;
}

const pages = walk(appDir);
let changed = 0;

for (const file of pages) {
  const rel = path.relative(root, file).replace(/\\/g, "/");
  if (rel === "app/page.tsx") continue;

  let src = fs.readFileSync(file, "utf8");
  if (src.includes("next/dynamic")) continue;

  // Normalize line endings for reliable transforms
  const eol = src.includes("\r\n") ? "\r\n" : "\n";
  src = src.replace(/\r\n/g, "\n");

  const importRe =
    /^import\s+(\w+)\s+from\s+["'](@\/app\/component\/[^"']+)["'];?\s*$/gm;
  const matches = [...src.matchAll(importRe)];
  const heavy = matches.filter((m) => m[1] !== "SiteLayout");
  if (heavy.length === 0) continue;

  let next = src;
  for (const m of heavy) {
    next = next.replace(m[0] + "\n", "");
    next = next.replace(m[0], "");
  }

  const dynBlock =
    [
      'import dynamic from "next/dynamic";',
      ...heavy.map(
        (m) => `const ${m[1]} = dynamic(() => import("${m[2]}"));`
      ),
    ].join("\n") + "\n";

  const siteLayoutRe =
    /(import SiteLayout from ["']@\/app\/component\/layout\/SiteLayout["'];?\n)/;
  if (siteLayoutRe.test(next)) {
    next = next.replace(siteLayoutRe, `$1${dynBlock}`);
  } else {
    next = next.replace(/^(import .+;\n)/m, `$1${dynBlock}`);
  }

  // Verify all symbols are declared
  for (const m of heavy) {
    if (!next.includes(`const ${m[1]} = dynamic`)) {
      throw new Error(`Failed to inject dynamic import for ${m[1]} in ${rel}`);
    }
  }

  next = next.replace(/\n{3,}/g, "\n\n");
  if (eol === "\r\n") next = next.replace(/\n/g, "\r\n");
  fs.writeFileSync(file, next);
  changed++;
  console.log("updated", rel, `(${heavy.map((h) => h[1]).join(", ")})`);
}

console.log("done", changed, "files");
