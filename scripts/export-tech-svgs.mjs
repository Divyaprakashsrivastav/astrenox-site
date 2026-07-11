import * as si from "simple-icons";
import fs from "fs";
import path from "path";

const dir = "public/tech";
fs.mkdirSync(dir, { recursive: true });

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
  docker: "docker",
  kubernetes: "kubernetes",
  qdrant: "qdrant",
};

for (const [file, slug] of Object.entries(map)) {
  const icon = Object.values(si).find((i) => i?.slug === slug);
  if (!icon) {
    console.log("missing", slug);
    continue;
  }
  const svg = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>${icon.title}</title><path d="${icon.path}" fill="#${icon.hex}"/></svg>`;
  fs.writeFileSync(path.join(dir, `${file}.svg`), svg);
  console.log("wrote", file);
}
