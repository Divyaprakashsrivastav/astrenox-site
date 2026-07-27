import fs from "fs";
import path from "path";

const root = process.cwd();

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === "node_modules" || ent.name === ".next") continue;
      walk(p, acc);
    } else {
      acc.push(p);
    }
  }
  return acc;
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const ent of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, ent.name);
    const d = path.join(dest, ent.name);
    if (ent.isDirectory()) copyDir(s, d);
    else {
      // Don't overwrite existing HexGridBackground if present
      if (fs.existsSync(d) && ent.name === "HexGridBackground.tsx") {
        console.log("keep existing", path.relative(root, d));
        continue;
      }
      fs.mkdirSync(path.dirname(d), { recursive: true });
      fs.copyFileSync(s, d);
    }
  }
}

function rmDir(dir) {
  if (!fs.existsSync(dir)) return;
  fs.rmSync(dir, { recursive: true, force: true });
}

const srcComponents = path.join(root, "app", "component");
const destComponents = path.join(root, "components");
const srcLib = path.join(root, "app", "lib");
const destLib = path.join(root, "lib");

if (!fs.existsSync(srcComponents)) {
  console.error("app/component missing — already migrated?");
  process.exit(1);
}

console.log("Copying app/component → components ...");
copyDir(srcComponents, destComponents);

console.log("Copying app/lib → lib ...");
if (fs.existsSync(srcLib)) {
  fs.mkdirSync(destLib, { recursive: true });
  for (const ent of fs.readdirSync(srcLib, { withFileTypes: true })) {
    if (ent.isFile()) {
      fs.copyFileSync(
        path.join(srcLib, ent.name),
        path.join(destLib, ent.name)
      );
    }
  }
}

// Dead / duplicate trees to drop after copy
const dead = [
  path.join(destComponents, "industries-page"),
  path.join(destComponents, "hero", "three"),
];
for (const d of dead) {
  if (fs.existsSync(d)) {
    console.log("Removing dead folder", path.relative(root, d));
    rmDir(d);
  }
}

const TEXT_EXT = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".css",
  ".json",
  ".md",
]);

const files = walk(root).filter((f) =>
  TEXT_EXT.has(path.extname(f).toLowerCase())
);

let rewritten = 0;
for (const file of files) {
  let src = fs.readFileSync(file, "utf8");
  const before = src;

  src = src.replaceAll("@/components/", "@/components/");
  src = src.replaceAll("@/lib/", "@/lib/");
  // Relative imports from app/* into ./component/
  src = src.replaceAll('from "@/components/', 'from "@/components/');
  src = src.replaceAll("from '@/components/", "from '@/components/");
  src = src.replaceAll('import("@/components/', 'import("@/components/');
  src = src.replaceAll("import('@/components/", "import('@/components/");

  if (src !== before) {
    fs.writeFileSync(file, src);
    rewritten++;
  }
}

console.log("Rewrote imports in", rewritten, "files");

console.log("Removing old app/component and app/lib ...");
rmDir(srcComponents);
rmDir(srcLib);

console.log("Done.");
