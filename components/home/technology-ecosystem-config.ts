/**
 * Technology ecosystem logos, local SVG files in /public/tech/.
 * Used by homepage Technology Ecosystem marquee.
 */
export type TechLogoDef = {
  id: string;
  name: string;
  file: string;
  /** Logo is dark-on-transparent; invert for light monochrome display */
  darkLogo?: boolean;
};

export const TECH_ECOSYSTEM_LOGOS: TechLogoDef[] = [
  { id: "openai", name: "OpenAI", file: "openai.svg" },
  { id: "anthropic", name: "Anthropic", file: "anthropic.svg" },
  { id: "google", name: "Google Gemini", file: "googlecloud.svg" },
  { id: "meta", name: "Meta", file: "meta.svg" },
  { id: "mistral", name: "Mistral", file: "mistral.svg" },
  { id: "aws", name: "AWS", file: "amazonaws.svg" },
  { id: "azure", name: "Microsoft Azure", file: "microsoftazure.svg" },
  { id: "gcp", name: "Google Cloud Platform", file: "googlecloud.svg" },
  { id: "langchain", name: "LangChain", file: "langchain.svg" },
  { id: "langgraph", name: "LangGraph", file: "langgraph.svg" },
  { id: "llamaindex", name: "LlamaIndex", file: "llamaindex.svg" },
  { id: "crewai", name: "CrewAI", file: "crewai.svg" },
  { id: "n8n", name: "n8n", file: "n8n.svg" },
  { id: "pinecone", name: "Pinecone", file: "pinecone.svg", darkLogo: true },
  { id: "qdrant", name: "Qdrant", file: "qdrant.svg" },
  { id: "milvus", name: "Milvus", file: "milvus.svg" },
  { id: "postgresql", name: "PostgreSQL", file: "postgresql.svg" },
  { id: "snowflake", name: "Snowflake", file: "snowflake.svg" },
  { id: "docker", name: "Docker", file: "docker.svg" },
  { id: "kubernetes", name: "Kubernetes", file: "kubernetes.svg" },
  { id: "terraform", name: "Terraform", file: "terraform.svg" },
  { id: "github-actions", name: "GitHub Actions", file: "githubactions.svg" },
  { id: "gitlab", name: "GitLab CI/CD", file: "gitlab.svg" },
  { id: "react", name: "React", file: "react.svg" },
  { id: "nextjs", name: "Next.js", file: "nextjs.svg" },
  { id: "python", name: "Python", file: "python.svg" },
  { id: "fastapi", name: "FastAPI", file: "fastapi.svg" },
  { id: "nodejs", name: "Node.js", file: "nodejs.svg" },
  { id: "go", name: "Go", file: "go.svg" },
  { id: "datadog", name: "Datadog", file: "datadog.svg" },
  { id: "grafana", name: "Grafana", file: "grafana.svg" },
  { id: "langsmith", name: "LangSmith", file: "langsmith.svg" },
  { id: "splunk", name: "Splunk", file: "splunk.svg" },
  { id: "mlflow", name: "MLflow", file: "mlflow.svg" },
  { id: "salesforce", name: "Salesforce", file: "salesforce.svg" },
  { id: "sap", name: "SAP", file: "sap.svg" },
  { id: "servicenow", name: "ServiceNow", file: "servicenow.svg" },
  { id: "hubspot", name: "HubSpot", file: "hubspot.svg" },
  { id: "zapier", name: "Zapier", file: "zapier.svg" },
  { id: "make", name: "Make", file: "make.svg" },
  { id: "figma", name: "Figma", file: "figma.svg" },
  { id: "framer", name: "Framer", file: "framer.svg" },
  { id: "sketch", name: "Sketch", file: "sketch.svg" },
];

export const TECH_ECOSYSTEM_STATS = [
  { id: "integrations", label: "50+ Integrations", value: 50, suffix: "+" },
  { id: "agnostic", label: "Cloud Agnostic", display: "Cloud Agnostic" },
  { id: "enterprise", label: "Enterprise Ready", display: "Enterprise Ready" },
  { id: "llm", label: "Multi-LLM Support", display: "Multi-LLM Support" },
] as const;

/** Public URL for a logo SVG served from /public/tech/ */
export function techLogoSrc(file: string) {
  return `/tech/${file}`;
}

/** Split logos into two marquee rows */
export function splitMarqueeRows(logos: TechLogoDef[]) {
  const mid = Math.ceil(logos.length / 2);
  return {
    rowA: logos.slice(0, mid),
    rowB: logos.slice(mid),
  };
}
