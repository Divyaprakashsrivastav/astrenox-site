import fs from "fs";
import path from "path";

const ROOT = path.join(process.cwd(), "app", "component");
const IMPORT = 'import FormattedText from "../ui/FormattedText";';
const IMPORT_DEPTH = (depth) =>
  `import FormattedText from "${ "../".repeat(depth) }ui/FormattedText";`;

const REPLACEMENTS = [
  [/<p>\{([a-zA-Z0-9_.?\[\]]+\.description)\}<\/p>/g, '<p><FormattedText text={$1} /></p>'],
  [/<p>\{([a-zA-Z0-9_.?\[\]]+\.outcome)\}<\/p>/g, '<p><FormattedText text={$1} /></p>'],
  [/<p>\{([a-zA-Z0-9_.?\[\]]+\.body)\}<\/p>/g, '<p><FormattedText text={$1} /></p>'],
  [/<p>\{([a-zA-Z0-9_.?\[\]]+\.intro)\}<\/p>/g, '<p><FormattedText text={$1} /></p>'],
  [/<p>\{([a-zA-Z0-9_.?\[\]]+\.subtitle)\}<\/p>/g, '<p><FormattedText text={$1} /></p>'],
  [/<p>\{([a-zA-Z0-9_.?\[\]]+\.tagline)\}<\/p>/g, '<p><FormattedText text={$1} /></p>'],
  [/<p className="([^"]+)">\{([a-zA-Z0-9_.?\[\]]+\.description)\}<\/p>/g, '<p className="$1"><FormattedText text={$2} /></p>'],
  [/<p className="([^"]+)">\{([a-zA-Z0-9_.?\[\]]+\.outcome)\}<\/p>/g, '<p className="$1"><FormattedText text={$2} /></p>'],
  [/<p className="([^"]+)">\{([a-zA-Z0-9_.?\[\]]+\.body)\}<\/p>/g, '<p className="$1"><FormattedText text={$2} /></p>'],
  [/<p className="([^"]+)">\{([a-zA-Z0-9_.?\[\]]+\.intro)\}<\/p>/g, '<p className="$1"><FormattedText text={$2} /></p>'],
  [/<p className="([^"]+)">\{([a-zA-Z0-9_.?\[\]]+\.text)\}<\/p>/g, '<p className="$1"><FormattedText text={$2} /></p>'],
  [/<p key=\{([^}]+)\}>\{p\}<\/p>/g, '<p key={$1}><FormattedText text={p} /></p>'],
  [/<p key=\{([^}]+)\}>\{paragraph\}<\/p>/g, '<p key={$1}><FormattedText text={paragraph} /></p>'],
];

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name.endsWith(".tsx") && ent.name !== "FormattedText.tsx") out.push(p);
  }
  return out;
}

function relativeImportDepth(filePath) {
  const rel = path.relative(path.dirname(filePath), path.join(ROOT, "ui"));
  const depth = rel.split(path.sep).filter(Boolean).length;
  return depth || 1;
}

let changed = 0;
for (const file of walk(ROOT)) {
  let src = fs.readFileSync(file, "utf8");
  if (src.includes("FormattedText text=") && !src.includes('from "../ui/FormattedText"') && !src.includes('from "../../ui/FormattedText"')) {
    // already partially updated
  }

  const original = src;
  for (const [pattern, replacement] of REPLACEMENTS) {
    src = src.replace(pattern, replacement);
  }

  if (src !== original) {
    if (!src.includes("FormattedText")) {
      changed++;
      continue;
    }
    if (!src.includes("import FormattedText")) {
      const depth = relativeImportDepth(file);
      const importLine = depth === 1 ? IMPORT : IMPORT_DEPTH(depth);
      const importAnchor = src.match(/^import .+;\n/m);
      if (importAnchor) {
        const idx = src.indexOf(importAnchor[0]) + importAnchor[0].length;
        src = src.slice(0, idx) + importLine + "\n" + src.slice(idx);
      }
    }
    fs.writeFileSync(file, src);
    changed++;
    console.log("updated:", path.relative(process.cwd(), file));
  }
}

console.log(`Done. ${changed} files updated.`);
