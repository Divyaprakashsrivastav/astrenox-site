import fs from "fs";
import path from "path";

const configPath = path.join("app/component/home/technology-ecosystem-config.ts");
const src = fs.readFileSync(configPath, "utf8");
const files = [...src.matchAll(/file:\s*"([^"]+\.svg)"/g)].map((m) => m[1]);
const techDir = path.join("public/tech");

const missing = files.filter((file) => !fs.existsSync(path.join(techDir, file)));
const unique = [...new Set(files)];

console.log(`Configured logos: ${unique.length}`);
if (missing.length) {
  console.error("Missing SVG files:");
  missing.forEach((f) => console.error(`  - ${f}`));
  process.exit(1);
}
console.log("All configured SVG files exist in public/tech/");
