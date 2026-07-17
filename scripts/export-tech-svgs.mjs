import * as si from "simple-icons";
import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";

const dir = "public/tech";
const iconsDir = "node_modules/simple-icons/icons";
fs.mkdirSync(dir, { recursive: true });

const icons = Object.values(si).filter((i) => i && typeof i === "object" && "slug" in i);

const map = {
  nextjs: "nextdotjs",
  react: "react",
  python: "python",
  fastapi: "fastapi",
  nodejs: "nodedotjs",
  langgraph: "langgraph",
  langchain: "langchain",
  n8n: "n8n",
  "google-vertex-ai": "googlecloud",
  googlecloud: "googlecloud",
  docker: "docker",
  kubernetes: "kubernetes",
  qdrant: "qdrant",
  anthropic: "anthropic",
  meta: "meta",
  mistral: "mistralai",
  postgresql: "postgresql",
  snowflake: "snowflake",
  terraform: "terraform",
  githubactions: "githubactions",
  gitlab: "gitlab",
  go: "go",
  datadog: "datadog",
  grafana: "grafana",
  splunk: "splunk",
  mlflow: "mlflow",
  sap: "sap",
  hubspot: "hubspot",
  zapier: "zapier",
  make: "make",
  figma: "figma",
  framer: "framer",
  sketch: "sketch",
  crewai: "crewai",
  milvus: "milvus",
};

function writeFromIcon(file, icon) {
  const svg = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>${icon.title}</title><path d="${icon.path}" fill="currentColor"/></svg>`;
  fs.writeFileSync(path.join(dir, `${file}.svg`), svg);
  console.log("wrote", file);
}

for (const [file, slug] of Object.entries(map)) {
  const icon = icons.find((i) => i.slug === slug);
  if (icon) {
    writeFromIcon(file, icon);
    continue;
  }
  const packaged = path.join(iconsDir, `${slug}.svg`);
  if (fs.existsSync(packaged)) {
    fs.copyFileSync(packaged, path.join(dir, `${file}.svg`));
    console.log("copied", file);
    continue;
  }
  console.log("missing", slug);
}

// CDN-backed brands (not in current simple-icons dataset)
const cdnSlugs = {
  openai: "openai",
  amazonaws: "amazonaws",
  microsoftazure: "microsoftazure",
  salesforce: "salesforce",
};

for (const [file, slug] of Object.entries(cdnSlugs)) {
  const url = `https://cdn.jsdelivr.net/npm/simple-icons@v9.21.0/icons/${slug}.svg`;
  const res = await fetch(url);
  if (!res.ok) {
    console.log("cdn missing", slug, res.status);
    continue;
  }
  fs.writeFileSync(path.join(dir, `${file}.svg`), await res.text());
  console.log("cdn wrote", file);
}

// LangSmith - LangChain variant
const langchain = icons.find((i) => i.slug === "langchain");
if (langchain) {
  writeFromIcon("langsmith", { ...langchain, title: "LangSmith" });
}

// Pinecone - fetch from simple-icons GitHub history
const pineconeRes = await fetch(
  "https://raw.githubusercontent.com/simple-icons/simple-icons/9.21.0/icons/pinecone.svg",
);
if (pineconeRes.ok) {
  fs.writeFileSync(path.join(dir, "pinecone.svg"), await pineconeRes.text());
  console.log("wrote pinecone");
}

// ServiceNow
const snRes = await fetch(
  "https://raw.githubusercontent.com/simple-icons/simple-icons/9.21.0/icons/servicenow.svg",
);
if (snRes.ok) {
  fs.writeFileSync(path.join(dir, "servicenow.svg"), await snRes.text());
  console.log("wrote servicenow");
}

// LlamaIndex - minimal wordmark from brand assets
if (!fs.existsSync(path.join(dir, "llamaindex.svg"))) {
  fs.writeFileSync(
    path.join(dir, "llamaindex.svg"),
    `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LlamaIndex</title><path fill="#F6F6F6" d="M12 2.5c-1.2 0-2.2.45-3.05 1.3-.85.85-1.3 1.95-1.3 3.05 0 .55.1 1.05.3 1.55l-2.2 4.05a.75.75 0 0 0 .65 1.05h1.35l.95 3.65a.75.75 0 0 0 .72.55h3.16a.75.75 0 0 0 .72-.55l.95-3.65h1.35a.75.75 0 0 0 .65-1.05l-2.2-4.05c.2-.5.3-1 .3-1.55 0-1.1-.45-2.2-1.3-3.05A4.28 4.28 0 0 0 12 2.5zm0 1.5c.75 0 1.4.28 1.95.82.55.55.82 1.2.82 1.95 0 .35-.06.68-.18 1l-.22.55-.45.2c-.55.25-.95.7-1.15 1.25l-.55 1.55H12.6l-.55-1.55c-.2-.55-.6-1-1.15-1.25l-.45-.2-.22-.55a2.5 2.5 0 0 1-.18-1c0-.75.27-1.4.82-1.95.55-.54 1.2-.82 1.95-.82z"/></svg>`,
  );
  console.log("wrote llamaindex (fallback)");
}

spawnSync(process.execPath, ["scripts/normalize-tech-svgs.mjs"], {
  stdio: "inherit",
  cwd: process.cwd(),
});
