/**
 * Products hub page content
 */

import { flagshipProducts } from "./products/flagship-products-content";

export const productsPageBrief =
  "Explore Astrenox enterprise AI products, ready-to-deploy solutions, and governed engineering platforms.";

export const productsPageGuidelines = flagshipProducts.map((p) => `${p.name}: ${p.tagline}`);

export const productsInfrastructureHeading = "Enterprise AI Infrastructure";

export const productsInfrastructureIntro =
  "Our proprietary suite provides the foundational architecture to build, deploy, and monitor AI systems at scale. Select a platform to review technical specifications and deployment schemas.";

export const productsInfrastructurePlatforms = [
  {
    id: "solvoris",
    heading: "Solvoris | Centralized Knowledge & Telemetry",
    description:
      "Solvoris operates as the cognitive layer for enterprise environments, combining secure data indexing with comprehensive LLM observability.",
    bullets: [
      "Knowledge Orchestration: Utilizes advanced vector retrieval to synthesize internal enterprise data into secure, context-aware AI interactions.",
      "Operational Telemetry: Features native integration for granular tracing, latency monitoring, token analytics, and prompt evaluation to maintain compliance and control compute costs.",
    ],
  },
  {
    id: "astrenai",
    heading: "Astren | AI Transformation Engine",
    description:
      "Astren bridges generative AI capabilities with strict operational logic, enabling governed transformation and reliable, multi-step agent workflows.",
    bullets: [
      "Transformation Engine: Identifies use cases, assesses readiness and aligns AI adoption with business workflows.",
      "Agentic Execution: Constructs and runs complex business workflows using structured templates and verified data inputs.",
    ],
  },
  {
    id: "orzora",
    heading: "Orzora | AI Workspace & RFx Pipeline",
    description:
      "Orzora delivers a custom-built AI workspace and RFx pipeline for SMEs, built on PipesHub with ContraVault RFx agents.",
    bullets: [
      "Unified Workspace: Collaborative AI environment for documents, tasks and procurement workflows.",
      "RFx Automation: Intelligent document analysis, proposal drafting and pipeline management for SMEs.",
    ],
  },
] as const;

export const productOfferings = [
  {
    id: "ready-to-deploy",
    title: "Ready-to-Deploy & Customised AI Solutions",
    description:
      "Applied AI platforms for KnowForth, enterprise Gen AI boilerplates across industries, and custom AI-powered CRM engineering.",
    href: "/products/ready-to-deploy-ai-solutions",
  },
  {
    id: "mvp-studio",
    title: "MVP Studio & Custom SaaS Solutions",
    description:
      "Launch your MVP in 3 weeks with AI-native architecture, plus a portfolio of custom SaaS and business solutions.",
    href: "/services/mvp-studio",
  },
  {
    id: "software-factory",
    title: "AI Native Software Factory",
    description:
      "Governed, agentic engineering for the enterprise , unified AIDLC and SDLC control plane with human governance.",
    href: "/products/ai-native-software-factory",
  },
] as const;

/** Bento showcase, flagship products with links to dedicated pages */
export const productsBentoItems = [
  {
    id: "solvoris",
    guidelineLine: "Solvoris",
    productLine: "Solvoris",
    category: "Autonomous company brain and personal assistant",
    description:
      "Autonomous company brain and personal assistant with unified institutional knowledge and context-aware AI reasoning.",
    bullets: [] as const,
    ctaLine: "Explore Solvoris",
    href: "/products/solvoris",
    layout: "wide" as const,
    effect: "glow" as const,
    visual: "brain" as const,
  },
  {
    id: "astren",
    guidelineLine: "Astren",
    productLine: "Astren",
    category: "AI adoption and transformation engine",
    description:
      "AI adoption and transformation engine for governed, scalable enterprise adoption.",
    bullets: [] as const,
    ctaLine: "Explore Astren",
    href: "/products/astren",
    layout: "wide" as const,
    effect: "tilt" as const,
    visual: "workflow" as const,
  },
  {
    id: "akiren",
    guidelineLine: "Akiren",
    productLine: "Akiren",
    category: "AI-native company OS",
    description:
      "AI-native company operating system connecting workflows, data, agents, and operational controls.",
    bullets: [] as const,
    ctaLine: "Explore Akiren",
    href: "/products/akiren",
    layout: "wide" as const,
    effect: "glass" as const,
    visual: "platform" as const,
  },
  {
    id: "orzora",
    guidelineLine: "Orzora",
    productLine: "Orzora",
    category: "Deal desk and RFx pipeline",
    description:
      "AI-powered deal desk and RFx pipeline for qualification, proposals, and collaborative deal execution.",
    bullets: [] as const,
    ctaLine: "Explore Orzora",
    href: "/products/orzora",
    layout: "wide" as const,
    effect: "slide" as const,
    visual: "rfx" as const,
  },
] as const;

export const productsPageHero = {
  label: "ASTRENOX AI PLATFORM SUITE",
  titleLine1: "Enterprise AI Products",
  titleLine2: "Built for Production,",
  titleLine3: "Not Prototypes.",
  description:
    "Astrenox builds enterprise-grade AI platforms for knowledge orchestration, autonomous workflows, transformation engines, and AI infrastructure, designed to run in production, not stop at proof-of-concept.",
  primaryCta: "Explore Products",
  primaryHref: "#products-bento",
  secondaryCta: "Book Demo",
  secondaryHref: "/contact?intent=demo",
  ribbon: ["Solvoris", "Astren", "Akiren", "Orzora"],
  hubLabel: "ASTRENOX AI PLATFORM",
} as const;

export const productsOverviewTitle = "Products Overview";
export const productOfferingsTitle = "Product Offerings";
