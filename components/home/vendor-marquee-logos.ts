import { homeEnterpriseEcosystem } from "@/app/content/homepage-content";

type MarqueeName = (typeof homeEnterpriseEcosystem.marquee)[number];

/** Maps verbatim marquee labels from homeEnterpriseEcosystem to /public/tech SVG files */
export const VENDOR_MARQUEE_LOGOS: Record<
  MarqueeName,
  { file: string; darkLogo?: boolean }
> = {
  OpenAI: { file: "openai.svg" },
  Anthropic: { file: "anthropic.svg" },
  Google: { file: "googlecloud.svg" },
  Meta: { file: "meta.svg" },
  LangGraph: { file: "langgraph.svg" },
  CrewAI: { file: "crewai.svg" },
  n8n: { file: "n8n.svg" },
  AWS: { file: "amazonaws.svg" },
  "Google Cloud Platform": { file: "googlecloud.svg" },
  "Microsoft Azure": { file: "microsoftazure.svg" },
  Salesforce: { file: "salesforce.svg" },
  SAP: { file: "sap.svg" },
  ServiceNow: { file: "servicenow.svg" },
  HubSpot: { file: "hubspot.svg" },
};

export function vendorLogoSrc(file: string) {
  return `/tech/${file}`;
}
