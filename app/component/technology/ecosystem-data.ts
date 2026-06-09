import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Cloud,
  Database,
  GitBranch,
  Building2,
} from "lucide-react";

export interface EcosystemLayer {
  id: string;
  title: string;
  description: string;
  partners: readonly string[];
  icon: LucideIcon;
  /** Anchor in 0–100 diagram space */
  anchor: { x: number; y: number };
}

export const ECOSYSTEM_LAYERS: EcosystemLayer[] = [
  {
    id: "models",
    title: "AI Models",
    description: "Model-agnostic routing across frontier LLMs with governance and observability.",
    partners: ["OpenAI", "Anthropic", "Google Gemini", "Mistral"],
    icon: Brain,
    anchor: { x: 50, y: 12 },
  },
  {
    id: "cloud",
    title: "Cloud",
    description: "Multi-cloud deployment fabric with policy-aware workload placement.",
    partners: ["AWS", "Azure", "Google Cloud", "Oracle"],
    icon: Cloud,
    anchor: { x: 88, y: 32 },
  },
  {
    id: "devops",
    title: "DevOps",
    description: "CI/CD, containers, and delivery pipelines wired into agent operations.",
    partners: ["Docker", "Kubernetes", "GitHub", "Vercel"],
    icon: GitBranch,
    anchor: { x: 88, y: 72 },
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "ERP, CRM, and service workflows unified through the control plane.",
    partners: ["Salesforce", "SAP", "ServiceNow", "Palantir"],
    icon: Building2,
    anchor: { x: 12, y: 72 },
  },
  {
    id: "data",
    title: "Data",
    description: "Lakehouse, warehouse, and operational data synchronized for AI workloads.",
    partners: ["Snowflake", "Databricks", "MongoDB", "Postgres"],
    icon: Database,
    anchor: { x: 12, y: 32 },
  },
];

export const HUB_ANCHOR = { x: 50, y: 50 };

export const ECOSYSTEM_STATUS = [
  { id: "models", label: "AI Models Online", position: "top" as const },
  { id: "data", label: "Data Sync Active", position: "left" as const },
  { id: "cloud", label: "Cloud Connected", position: "right" as const },
  { id: "devops", label: "DevOps Running", position: "bottom" as const },
] as const;

export const ECOSYSTEM_METRICS = [
  { id: "uptime", value: 99.99, suffix: "%", label: "Uptime", decimals: 2 },
  { id: "systems", value: 42, suffix: "", label: "Connected Systems" },
  { id: "models", value: 8, suffix: "", label: "AI Models" },
  { id: "workflows", value: 24, suffix: "", label: "Active Workflows" },
] as const;

/** @deprecated Use ECOSYSTEM_METRICS */
export const ECOSYSTEM_STATS = ECOSYSTEM_METRICS;
