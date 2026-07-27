import fs from "fs";
import path from "path";

const COMPONENT_ROOT = path.join(process.cwd(), "app", "component");

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name.endsWith(".tsx") && ent.name !== "FormattedText.tsx") out.push(p);
  }
  return out;
}

function importPath(filePath) {
  const rel = path.relative(path.dirname(filePath), path.join(COMPONENT_ROOT, "ui", "FormattedText.tsx"));
  const normalized = rel.split(path.sep).join("/");
  if (normalized.startsWith(".")) return normalized.replace(/\.tsx$/, "");
  return `./${normalized.replace(/\.tsx$/, "")}`;
}

let fixed = 0;
for (const file of walk(COMPONENT_ROOT)) {
  let src = fs.readFileSync(file, "utf8");
  if (!src.includes("FormattedText text=") && !src.includes("<FormattedText")) continue;
  if (src.includes("import FormattedText")) continue;

  const importLine = `import FormattedText from "${importPath(file)}";\n`;
  const firstImport = src.match(/^import .+;\r?\n/m);
  if (!firstImport) continue;

  const idx = src.indexOf(firstImport[0]) + firstImport[0].length;
  src = src.slice(0, idx) + importLine + src.slice(idx);
  fs.writeFileSync(file, src);
  fixed++;
  console.log("import added:", path.relative(process.cwd(), file));
}

console.log(`Fixed ${fixed} files.`);
