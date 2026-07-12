/**
 * Products page — verbatim content from official Content.docx (sole source of truth).
 * Do not paraphrase, summarize, or omit any line from the document.
 */

export const productsPageBrief =
  "OUR Products page -  ALL THE PRODUCTS brief in one page with redirection to respective product pages ( guideline below)";

export const productsPageGuidelines = [
  "1-4 vercel",
  "Solvoris - 2-4",
  "Solvoris Brain ( Company brain as a service similar to heyhyper.ai )",
  "Solvoris Platform -  (autonomous AI company runtime, ref -> matrix.build , cofounder.co,)",
  "CTA",
  "Astren- AI Transformation engine( inspired by -> foaster.ai , autostep.ai , ontora.ai and oximy ) 3-4",
  "CTA",
  "Astren Enterprise ( phase 2 and 3 services custom built",
  "AkiRen ( Personal intelligence assistant)1-2",
  "CTA",
  "Orzora - Custom built AI workspace and RFx pipeline 1",
] as const;

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
    heading: "AstrenAI | Deterministic Autonomous Workflows",
    description:
      "AstrenAI bridges generative AI capabilities with strict operational logic, enabling the deployment of reliable, multi-step agents.",
    bullets: [
      "Agentic Execution: Constructs and runs complex business workflows using structured prompt templates and verified data inputs.",
      "Conditional Automation: Ensures generative outputs adhere to deterministic routing, executing API calls and data transformations reliably to prevent hallucination-induced drift.",
    ],
  },
  {
    id: "akiren",
    heading: "AkiRen | Unified Data Pipelines & LLMOps",
    description:
      "AkiRen solves infrastructure fragmentation by managing data engineering and prompt lifecycles through a shared, high-performance execution engine.",
    bullets: [
      "Aki (Pipeline Orchestration): A technical interface for building, routing, and monitoring complex data ingestion streams to feed AI models in real time.",
      "Ren (Prompt Engineering): An LLMOps workspace for prompt version control, parameter tuning, and rigorous A/B testing against historical datasets prior to production deployment.",
    ],
  },
] as const;

/** Bento showcase — every product line from the document plus linked infrastructure copy where applicable */
export const productsBentoItems = [
  {
    id: "solvoris",
    guidelineLine: "Solvoris - 2-4",
    productLine: "Solvoris | Centralized Knowledge & Telemetry",
    category: "Centralized Knowledge & Telemetry",
    description:
      "Solvoris operates as the cognitive layer for enterprise environments, combining secure data indexing with comprehensive LLM observability.",
    bullets: [
      "Knowledge Orchestration: Utilizes advanced vector retrieval to synthesize internal enterprise data into secure, context-aware AI interactions.",
      "Operational Telemetry: Features native integration for granular tracing, latency monitoring, token analytics, and prompt evaluation to maintain compliance and control compute costs.",
    ],
    ctaLine: "CTA",
    href: "/products#infrastructure-solvoris",
    layout: "wide" as const,
    effect: "sweep" as const,
    visual: "knowledge" as const,
  },
  {
    id: "solvoris-brain",
    guidelineLine: "Solvoris Brain ( Company brain as a service similar to heyhyper.ai )",
    productLine: "Solvoris Brain ( Company brain as a service similar to heyhyper.ai )",
    category: "Company brain as a service similar to heyhyper.ai",
    description: "Solvoris Brain ( Company brain as a service similar to heyhyper.ai )",
    bullets: [] as const,
    ctaLine: "CTA",
    href: "/contact?product=solvoris-brain",
    layout: "medium" as const,
    effect: "glow" as const,
    visual: "brain" as const,
  },
  {
    id: "solvoris-platform",
    guidelineLine:
      "Solvoris Platform -  (autonomous AI company runtime, ref -> matrix.build , cofounder.co,)",
    productLine:
      "Solvoris Platform -  (autonomous AI company runtime, ref -> matrix.build , cofounder.co,)",
    category: "autonomous AI company runtime, ref -> matrix.build , cofounder.co,",
    description:
      "Solvoris Platform -  (autonomous AI company runtime, ref -> matrix.build , cofounder.co,)",
    bullets: [] as const,
    ctaLine: "CTA",
    href: "/contact?product=solvoris-platform",
    layout: "medium" as const,
    effect: "glass" as const,
    visual: "platform" as const,
  },
  {
    id: "astren-transformation",
    guidelineLine:
      "Astren- AI Transformation engine( inspired by -> foaster.ai , autostep.ai , ontora.ai and oximy ) 3-4",
    productLine:
      "Astren- AI Transformation engine( inspired by -> foaster.ai , autostep.ai , ontora.ai and oximy ) 3-4",
    category: "inspired by -> foaster.ai , autostep.ai , ontora.ai and oximy ) 3-4",
    description:
      "Astren- AI Transformation engine( inspired by -> foaster.ai , autostep.ai , ontora.ai and oximy ) 3-4",
    bullets: [] as const,
    ctaLine: "CTA",
    href: "/services/ai-transformation",
    layout: "wide" as const,
    effect: "tilt" as const,
    visual: "workflow" as const,
  },
  {
    id: "astren-enterprise",
    guidelineLine: "Astren Enterprise ( phase 2 and 3 services custom built",
    productLine: "Astren Enterprise ( phase 2 and 3 services custom built",
    category: "phase 2 and 3 services custom built",
    description: "Astren Enterprise ( phase 2 and 3 services custom built",
    bullets: [] as const,
    ctaLine: "CTA",
    href: "/contact?product=astren-enterprise",
    layout: "medium" as const,
    effect: "layers" as const,
    visual: "enterprise" as const,
  },
  {
    id: "akiren",
    guidelineLine: "AkiRen ( Personal intelligence assistant)1-2",
    productLine: "AkiRen | Unified Data Pipelines & LLMOps",
    category: "Personal intelligence assistant)1-2",
    description:
      "AkiRen ( Personal intelligence assistant)1-2",
    extraDescription:
      "AkiRen solves infrastructure fragmentation by managing data engineering and prompt lifecycles through a shared, high-performance execution engine.",
    bullets: [
      "Aki (Pipeline Orchestration): A technical interface for building, routing, and monitoring complex data ingestion streams to feed AI models in real time.",
      "Ren (Prompt Engineering): An LLMOps workspace for prompt version control, parameter tuning, and rigorous A/B testing against historical datasets prior to production deployment.",
    ],
    ctaLine: "CTA",
    href: "/products#infrastructure-akiren",
    layout: "medium" as const,
    effect: "particles" as const,
    visual: "pipeline" as const,
  },
  {
    id: "orzora",
    guidelineLine: "Orzora - Custom built AI workspace and RFx pipeline 1",
    productLine: "Orzora - Custom built AI workspace and RFx pipeline 1",
    category: "Custom built AI workspace and RFx pipeline 1",
    description: "Orzora - Custom built AI workspace and RFx pipeline 1",
    bullets: [] as const,
    ctaLine: "CTA",
    href: "/contact?product=orzora",
    layout: "wide" as const,
    effect: "slide" as const,
    visual: "rfx" as const,
  },
] as const;

export const productsPageDesignNote = "1-4 vercel";

/** Hero UI copy — marketing layer only; product content remains in document sections below */
export const productsPageHero = {
  label: "ASTRENOX AI PLATFORM SUITE",
  titleLine1: "Enterprise AI Products",
  titleLine2: "Built for Production,",
  titleLine3: "Not Prototypes.",
  description:
    "Astrenox builds enterprise-grade AI platforms for knowledge orchestration, autonomous workflows, enterprise intelligence, and AI infrastructure—designed to run in production, not stop at proof-of-concept.",
  primaryCta: "Explore Products",
  primaryHref: "#products-bento",
  secondaryCta: "Book Demo",
  secondaryHref: "/contact?intent=demo",
  ribbon: [
    "Solvoris",
    "Solvoris Brain",
    "Solvoris Platform",
    "AstrenAI",
    "Astren Enterprise",
    "AkiRen",
    "Orzora",
  ],
  hubLabel: "ASTRENOX AI PLATFORM",
} as const;

export const productsOverviewTitle = "Products Overview";
