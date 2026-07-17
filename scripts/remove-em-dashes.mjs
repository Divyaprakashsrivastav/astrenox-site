import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const SKIP = new Set(["node_modules", ".next", ".git", "dist", "build", "out"]);
const TEXT_EXT = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".css",
  ".md",
  ".mdx",
  ".json",
  ".txt",
  ".py",
  ".example",
  ".html",
  ".svg",
]);

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else {
      const ext = path.extname(ent.name);
      if (TEXT_EXT.has(ext) || ent.name.startsWith(".") || !ext) {
        try {
          const buf = fs.readFileSync(p);
          if (buf.includes(Buffer.from("-", "utf8"))) out.push(p);
        } catch {
          /* ignore unreadable */
        }
      }
    }
  }
  return out;
}

const COMMA_FOLLOWERS = [
  "not",
  "or",
  "and",
  "including",
  "from",
  "ensuring",
  "within",
  "without",
  "with",
  "before",
  "after",
  "where",
  "when",
  "while",
  "because",
  "as",
  "such",
  "rather",
  "especially",
  "particularly",
  "helping",
  "enabling",
  "creating",
  "delivering",
  "providing",
  "supporting",
  "covering",
  "designed",
  "built",
  "engineered",
  "aligned",
  "sequenced",
  "unified",
  "composed",
  "your",
  "our",
  "their",
  "the",
  "a",
  "an",
  "we",
  "they",
  "it",
  "this",
  "that",
  "unifying",
  "eliminating",
  "cutting",
  "alongside",
  "through",
  "into",
  "across",
  "via",
  "just",
  "simply",
  "only",
  "even",
  "also",
  "still",
  "now",
  "then",
  "so",
  "to",
  "for",
  "by",
  "on",
  "in",
  "at",
  "of",
  "if",
  "until",
  "unless",
  "though",
  "although",
  "whether",
  "which",
  "who",
  "whom",
  "whose",
  "how",
  "what",
  "deploying",
  "mapping",
  "connecting",
  "turning",
  "moving",
  "working",
  "using",
  "leveraging",
  "combining",
  "analyzing",
  "identifying",
  "implementing",
  "accelerating",
  "maximizing",
  "preserving",
  "keeping",
  "making",
  "pushing",
  "shipping",
  "solving",
  "adding",
  "generating",
  "monitoring",
  "running",
];

function replaceEmDashes(src, filePath) {
  const isCommentHeavy = /\.(css|md|mjs|py)$/i.test(filePath);
  let s = src;

  // Template literals like `${x}: ${y}` → colon
  s = s.replace(/\$\{([^}]+)\}\s*-\s*\$\{/g, "${$1}: ${");

  if (isCommentHeavy) {
    return s.replace(/-/g, "-");
  }

  for (const w of COMMA_FOLLOWERS) {
    const re = new RegExp(`-\\s*${w}\\b`, "gi");
    s = s.replace(re, (_m, offset, full) => {
      // Keep original casing of follower word from match
      const match = full.slice(offset).match(new RegExp(`-\\s*(${w})\\b`, "i"));
      const word = match ? match[1] : w;
      return `, ${word}`;
    });
  }

  // Capitalized Title-Capitalized Phrase → colon
  s = s.replace(/([A-Za-z0-9)])-([A-Z])/g, "$1: $2");

  // Remaining spaced or bare em dashes → comma
  s = s.replace(/\s*-\s*/g, ", ");
  s = s.replace(/-/g, ", ");

  // Cleanup duplicate / broken punctuation
  s = s.replace(/,\s*,/g, ",");
  s = s.replace(/:\s*:/g, ":");
  s = s.replace(/\.\s*,/g, ".");
  s = s.replace(/,\s*\./g, ".");
  s = s.replace(/\?\s*,/g, "?");
  s = s.replace(/!\s*,/g, "!");
  s = s.replace(/,\s*;/g, ";");
  s = s.replace(/,\s*:/g, ":");
  s = s.replace(/:\s*,/g, ":");

  return s;
}

const files = walk(ROOT);
let changed = 0;
for (const f of files) {
  const before = fs.readFileSync(f, "utf8");
  if (!before.includes("-")) continue;
  const after = replaceEmDashes(before, f);
  if (after !== before) {
    fs.writeFileSync(f, after, "utf8");
    changed++;
  }
}

console.log("Files scanned with em dash:", files.length);
console.log("Files updated:", changed);

const remaining = [];
for (const f of walk(ROOT)) {
  const t = fs.readFileSync(f, "utf8");
  if (t.includes("-")) remaining.push(path.relative(ROOT, f));
}
console.log("Remaining files:", remaining.length);
if (remaining.length) console.log(remaining.join("\n"));
