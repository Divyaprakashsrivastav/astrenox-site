/**
 * Homepage content — System Transformation Engine narrative.
 */

export const homeHero = {
  eyebrow: "System Transformation Engine",
  headline: {
    line1: "Creating Sustainable",
    highlightA: "Business Value",
    line2After: " Through",
    highlightB: "AI-First",
    line3: "Transformation",
  },
  description:
    "Astrenox architects enterprise operating systems—unifying strategy, agentic AI, and production engineering to compound defensibility and measurable ROI.",
  primaryCta: "Run System Diagnostic",
  primaryHref: "/contact?intent=diagnostic",
  secondaryCta: "Explore Methodology",
  secondaryHref: "#methodology",
  kpis: [
    { value: 500, suffix: "+", label: "Enterprise Workflows" },
    { value: 99.9, suffix: "%", label: "Reliability", decimals: 1 },
    { value: 30, suffix: "+", label: "AI Integrations" },
    { value: 10, suffix: "x", label: "Deployment Speed" },
  ],
} as const;

export const homeCapabilities = {
  label: "Capabilities",
  title: "Production systems for the physical world",
  description:
    "Four flagship disciplines—each engineered for enterprise deployment, not prototypes.",
  items: [
    {
      id: "enterprise-ai" as const,
      title: "Enterprise AI",
      description:
        "Multi-model orchestration, knowledge graphs, and governed agent fleets at scale.",
    },
    {
      id: "drones" as const,
      title: "Autonomous Drones",
      description:
        "Mission routing, fleet telemetry, and human-in-the-loop autonomy for aerial operations.",
    },
    {
      id: "robotics" as const,
      title: "Robotics",
      description:
        "Closed-loop manipulators, warehouse agents, and industrial automation with full observability.",
    },
    {
      id: "aerospace" as const,
      title: "Aerospace Intelligence",
      description:
        "Orbital telemetry, trajectory planning, and mission-grade decision systems.",
    },
  ],
} as const;

export const homeControlPlane = {
  label: "Control Plane",
  title: "Control Plane",
  description: "Enterprise operating layer for autonomous systems.",
} as const;

export const homePhysicalWorld = {
  label: "Physical World",
  title: "Intelligence That Moves Through Reality",
  description:
    "From factory floors to flight systems, Astrenox orchestrates AI where decisions become physical outcomes.",
  domains: [
    {
      id: "robotics",
      title: "Robotics & Autonomy",
      outcome: "Closed-loop agent fleets with human oversight at the edge.",
      metric: "24/7 ops",
    },
    {
      id: "aerospace",
      title: "Aerospace Systems",
      outcome: "Mission-grade routing, telemetry graphs, and safety gates.",
      metric: "99.9% SLA",
    },
    {
      id: "logistics",
      title: "Autonomous Logistics",
      outcome: "Dynamic fleet orchestration across warehouses and routes.",
      metric: "22% cost ↓",
    },
    {
      id: "industrial",
      title: "Industrial Operations",
      outcome: "Predictive maintenance and production scheduling agents.",
      metric: "40% faster",
    },
  ],
} as const;

export const homeOperatingSystem = {
  label: "Architecture",
  title: "One Operating System. Four Layers.",
  description:
    "A Palantir-grade stack—perception, intelligence, orchestration, and physical execution—unified under Astrenox.",
  id: "operating-system",
  layers: [
    {
      id: "perception",
      title: "Perception Layer",
      description: "Sensors, vision, telemetry, and real-world signal ingestion.",
      items: ["Computer vision", "Fleet telemetry", "Edge streams"],
    },
    {
      id: "intelligence",
      title: "Intelligence Layer",
      description: "Multi-model reasoning, knowledge graphs, and agent cognition.",
      items: ["LLM routing", "Knowledge graph", "Scenario agents"],
    },
    {
      id: "orchestration",
      title: "Orchestration Layer",
      description: "Policies, workflows, integrations, and governed automation.",
      items: ["Control plane", "Runbooks", "30+ integrations"],
    },
    {
      id: "execution",
      title: "Physical Execution",
      description: "Commands issued to robots, routes, plants, and mission systems.",
      items: ["Robotics API", "Mission dispatch", "Closed-loop ops"],
    },
  ],
} as const;

export const homeMethodology = {
  label: "Deployment Methodology",
  title: "From Signal to Physical Outcome",
  subtitle: "THINK → ALIGN → EXECUTE",
  description:
    "Enterprise programs that connect intelligence layers to autonomous execution—robotics, aerospace, and industrial systems in production.",
  stages: [
    {
      id: "think",
      number: "01",
      title: "THINK",
      tagline: "Intelligence diagnosis",
      items: [
        { title: "Direction", description: "Vision, scope, and success KPIs locked before build." },
        { title: "Readiness", description: "People, process, and technology constraints mapped." },
        { title: "Foundation", description: "Use cases ranked by impact, feasibility, and time-to-value." },
      ],
      metrics: [
        { value: "100%", label: "KPI alignment" },
        { value: "72h", label: "Diagnostic window" },
      ],
    },
    {
      id: "align",
      number: "02",
      title: "ALIGN",
      tagline: "Architecture orchestration",
      items: [
        { title: "Governance network", description: "Policy, access, and model risk wired into the graph." },
        { title: "Cross-functional orchestration", description: "Squads, data flows, and ownership sequenced." },
        { title: "System foundation", description: "Integrations, data models, and agent frameworks composed." },
      ],
      metrics: [
        { value: "30+", label: "Integration nodes" },
        { value: "Unified", label: "Control plane" },
      ],
    },
    {
      id: "execute",
      number: "03",
      title: "EXECUTE",
      tagline: "Production deployment engine",
      items: [
        { title: "Live deployment", description: "Evaluation, safety gates, and observability from sprint one." },
        { title: "AI automation loops", description: "Agentic runbooks and closed-loop operations." },
        { title: "Real-time telemetry", description: "ROI, latency, and outcome dashboards for leaders." },
      ],
      metrics: [
        { value: "99.4%", label: "Delivery success" },
        { value: "24/7", label: "Agent ops" },
      ],
    },
  ],
} as const;

export const homeTriFlywheel = {
  label: "Defensibility Model",
  title: "Architecting Defensibility: The Tri-Flywheel Model",
  description: "Three reinforcing loops that compound speed, intelligence, and ecosystem advantage.",
  centerLabel: "Astrenox Core",
  flywheels: [
    {
      id: "product",
      title: "Product Delivery Flywheel",
      description: "Faster shipping → richer feedback → better AI products → higher retention.",
      highlights: ["Outcome squads", "Production gates", "Weekly releases"],
    },
    {
      id: "operations",
      title: "Internal AI Operations Flywheel",
      description: "Automation → cost efficiency → reinvestment → deeper agentic coverage.",
      highlights: ["Agent runbooks", "Knowledge graph", "Closed-loop ops"],
    },
    {
      id: "ecosystem",
      title: "Ecosystem Alignment Flywheel",
      description: "Partner depth → preferred access → faster integration → stronger moats.",
      highlights: ["Cloud alliances", "Model routing", "Vendor-agnostic core"],
    },
  ],
} as const;

export const homeEnterpriseEcosystem = {
  label: "Enterprise Trust",
  title: "Built on Production-Grade Infrastructure",
  description:
    "Cloud, model, and integration partners unified through Astrenox—the control plane for physical-world AI operations.",
  coreLabel: "Astrenox Core",
  rings: [
    {
      id: "cloud",
      title: "Cloud Infrastructure",
      ringIndex: 1,
      partners: [
        { id: "aws", name: "AWS", category: "Cloud Infrastructure", tooltip: "Connected through Astrenox orchestration layer" },
        { id: "azure", name: "Azure", category: "Cloud Infrastructure", tooltip: "Connected through Astrenox orchestration layer" },
        { id: "gcp", name: "Google Cloud", category: "Cloud Infrastructure", tooltip: "Connected through Astrenox orchestration layer" },
        { id: "oracle", name: "Oracle", category: "Cloud Infrastructure", tooltip: "Connected through Astrenox orchestration layer" },
      ],
    },
    {
      id: "ai",
      title: "AI & Intelligence",
      ringIndex: 2,
      partners: [
        { id: "openai", name: "OpenAI", category: "AI & Intelligence", tooltip: "Connected through Astrenox orchestration layer" },
        { id: "anthropic", name: "Anthropic", category: "AI & Intelligence", tooltip: "Connected through Astrenox orchestration layer" },
        { id: "deepmind", name: "Google DeepMind", category: "AI & Intelligence", tooltip: "Connected through Astrenox orchestration layer" },
        { id: "meta", name: "Meta AI", category: "AI & Intelligence", tooltip: "Connected through Astrenox orchestration layer" },
        { id: "cohere", name: "Cohere", category: "AI & Intelligence", tooltip: "Connected through Astrenox orchestration layer" },
      ],
    },
    {
      id: "integration",
      title: "Enterprise Integrations",
      ringIndex: 3,
      partners: [
        { id: "salesforce", name: "Salesforce", category: "Enterprise Integrations", tooltip: "Integrated into enterprise deployment stack" },
        { id: "servicenow", name: "ServiceNow", category: "Enterprise Integrations", tooltip: "Integrated into enterprise deployment stack" },
        { id: "snowflake", name: "Snowflake", category: "Enterprise Integrations", tooltip: "Integrated into enterprise deployment stack" },
        { id: "databricks", name: "Databricks", category: "Enterprise Integrations", tooltip: "Integrated into enterprise deployment stack" },
        { id: "palantir", name: "Palantir", category: "Enterprise Integrations", tooltip: "Integrated into enterprise deployment stack" },
      ],
    },
  ],
  businessImpact: [
    { id: "multicloud", title: "Multi-Cloud Ready", description: "Deploy across AWS, Azure, GCP without lock-in." },
    { id: "secure", title: "Enterprise Secure", description: "Governance, audit trails, and policy-aware routing." },
    { id: "ainative", title: "AI Native", description: "Model-agnostic intelligence at the orchestration layer." },
    { id: "scale", title: "Production Scale", description: "From pilot to fleet-wide agent operations." },
  ],
  marquee: [
    "AWS",
    "OpenAI",
    "Azure",
    "Anthropic",
    "Salesforce",
    "Snowflake",
    "Databricks",
    "Palantir",
  ],
} as const;

export const homeIndustries = {
  label: "Industries",
  title: "Transformation Across Critical Sectors",
  description: "Production AI patterns tailored to regulatory, operational, and data realities.",
  items: [
    {
      id: "manufacturing",
      title: "Manufacturing",
      description: "Intelligent operations from plant floor to supply chain.",
      useCases: ["Predictive maintenance", "Quality vision systems", "Production scheduling agents", "Supplier risk intelligence"],
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description: "Clinical and operational AI with compliance-by-design.",
      useCases: ["Clinical trial matching", "Prior authorization automation", "Care pathway copilots", "HIPAA-aware document intelligence"],
    },
    {
      id: "financial",
      title: "Financial Services",
      description: "Risk, compliance, and client intelligence at scale.",
      useCases: ["AML monitoring agents", "Wealth risk engines", "Regulatory reporting automation", "Client 360 knowledge search"],
    },
    {
      id: "retail",
      title: "Retail",
      description: "Merchandising, fulfillment, and customer experience AI.",
      useCases: ["Demand forecasting", "Personalization engines", "Returns automation", "Store operations copilots"],
    },
    {
      id: "realestate",
      title: "Real Estate",
      description: "Portfolio intelligence and transaction acceleration.",
      useCases: ["Deal underwriting assistants", "Lease abstraction", "Portfolio analytics", "Tenant experience automation"],
    },
    {
      id: "logistics",
      title: "Logistics",
      description: "Fleet, route, and warehouse orchestration.",
      useCases: ["Dynamic routing agents", "Warehouse robotics coordination", "ETA prediction", "Freight document automation"],
    },
    {
      id: "education",
      title: "Education",
      description: "Learning operations and student success systems.",
      useCases: ["Adaptive learning paths", "Admissions workflow AI", "Faculty operations automation", "Accreditation reporting"],
    },
    {
      id: "government",
      title: "Government",
      description: "Secure citizen services and policy intelligence.",
      useCases: ["Case management automation", "Policy research agents", "Fraud detection", "Multilingual citizen support"],
    },
    {
      id: "professional",
      title: "Professional Services",
      description: "Knowledge leverage across engagements and delivery.",
      useCases: ["Proposal intelligence", "Engagement knowledge graphs", "Billing automation", "Expert matching agents"],
    },
    {
      id: "technology",
      title: "Technology",
      description: "AI-native product companies and platform scale-ups.",
      useCases: ["MVP acceleration", "Agentic product layers", "DevOps intelligence", "Customer success automation"],
    },
  ],
} as const;

export const homeMetrics = {
  label: "Outcomes",
  title: "Performance In Numbers",
  description: "Measured delivery—not marketing claims.",
  stats: [
    { value: 99.4, suffix: "%", decimals: 1, label: "Project Delivery Success Rate" },
    { value: 40, suffix: "%", label: "Reduction In Time To Market" },
    { value: 50, suffix: "+", label: "Production AI Use Cases" },
    { display: "4.8/5", label: "Client Satisfaction" },
    { value: 35, suffix: "%", label: "Operational Efficiency Improvement" },
  ],
} as const;

export const homeServices = {
  label: "Services",
  title: "Full-Stack Transformation Capabilities",
  description: "From boardroom strategy to production agents—one accountable partner.",
  items: [
    {
      id: "consulting",
      title: "AI Consulting & Transformation",
      description: "30/60/90-day audits, adoption roadmaps, and practitioner-led execution.",
      metric: "12-week transformation sprints",
      href: "/services/ai-transformation",
    },
    {
      id: "agentic",
      title: "Agentic Managed Services",
      description: "Managed agent fleets, runbooks, and observability across your estate.",
      metric: "24/7 agent operations",
      href: "/platform",
    },
    {
      id: "staffing",
      title: "Staff Augmentation & Fractional CXOs",
      description: "Elite AI, data, and product leaders embedded with outcome accountability.",
      metric: "2-week team activation",
      href: "/careers",
    },
    {
      id: "digital",
      title: "Digital & IT Services",
      description: "Modern engineering, integration, and human-centered digital delivery.",
      metric: "Enterprise-grade SDLC",
      href: "/services/digital-it-consulting",
    },
    {
      id: "products",
      title: "Purpose-Built Products",
      description: "Flagship platforms and copilots engineered for your domain.",
      metric: "Production in weeks",
      href: "/projects",
    },
    {
      id: "infra",
      title: "Infrastructure & Cloud Management",
      description: "Secure, scalable cloud foundations for AI workloads and data platforms.",
      metric: "Multi-cloud ready",
      href: "/services/ai-engineering",
    },
    {
      id: "mvp",
      title: "Software Factory & MVP Studio",
      description: "High-velocity squads shipping investor-ready MVPs and scale paths.",
      metric: "6-week MVP cycles",
      href: "/services/mvp-studio",
    },
  ],
} as const;

export const homeTechnology = {
  label: "Technology",
  title: "Technology Ecosystem Architecture",
  description: "Vendor-agnostic orchestration across the modern AI stack.",
  coreLabel: "Astrenox Core",
  categories: [
    { id: "models", title: "AI Models", items: ["GPT-4o", "Claude", "Gemini", "Llama", "Mistral"] },
    { id: "agents", title: "Agent Frameworks", items: ["LangGraph", "CrewAI", "AutoGen", "Semantic Kernel"] },
    { id: "automation", title: "Automation Tools", items: ["n8n", "Temporal", "Airflow", "Zapier Enterprise"] },
    { id: "cloud", title: "Cloud Platforms", items: ["AWS", "Azure", "GCP", "Kubernetes"] },
    { id: "databases", title: "Databases", items: ["PostgreSQL", "Snowflake", "Pinecone", "Neo4j"] },
    { id: "fullstack", title: "Frontend/Backend", items: ["Next.js", "React", "Python", "FastAPI", "Node"] },
    { id: "devops", title: "DevOps", items: ["Terraform", "GitHub Actions", "ArgoCD", "Datadog"] },
    { id: "analytics", title: "Analytics", items: ["dbt", "Looker", "Power BI", "Amplitude"] },
    { id: "integrations", title: "Enterprise Integrations", items: ["Salesforce", "SAP", "Workday", "ServiceNow"] },
    { id: "design", title: "Design Tools", items: ["Figma", "Framer", "Storybook", "Design Systems"] },
  ],
} as const;

export const homeFlagshipProjects = {
  label: "Case Studies",
  title: "Systems Operating in the Physical World",
  description: "Autonomous operations, aerospace-grade orchestration, and enterprise AI—verified under production load.",
  items: [
    {
      id: "nexuscore" as const,
      title: "NexusCore Orchestrator",
      category: "Enterprise AI Platform",
      challenge: "Fragmented model providers and siloed workflows blocked enterprise AI scale.",
      solution: "Unified orchestration layer with governance, routing, and observability across providers.",
      outcome: "Single control plane for 30+ connectors and multi-model agent fleets.",
      metrics: [
        { value: "30+", label: "Integrations" },
        { value: "99.9%", label: "Uptime SLA" },
        { value: "40%", label: "Faster rollout" },
      ],
      href: "/platform",
    },
    {
      id: "synapse" as const,
      title: "Synapse Logistics Engine",
      category: "Autonomous Operations",
      challenge: "Manual dispatch and exception handling drained margin on high-volume routes.",
      solution: "Agentic routing, fleet telemetry graph, and exception runbooks in one engine.",
      outcome: "Dynamic optimization with human-in-the-loop for edge cases only.",
      metrics: [
        { value: "22%", label: "Cost reduction" },
        { value: "18%", label: "On-time gain" },
        { value: "Live", label: "Fleet graph" },
      ],
      href: "/projects",
    },
    {
      id: "codeforge" as const,
      title: "CodeForge Insight",
      category: "Engineering Intelligence",
      challenge: "Legacy repos and docs made AI-assisted development inconsistent and risky.",
      solution: "Code-aware RAG, PR agents, and quality gates integrated into the SDLC.",
      outcome: "Developer velocity up with audit-ready change lineage.",
      metrics: [
        { value: "35%", label: "PR throughput" },
        { value: "95+", label: "Quality score" },
        { value: "2 wk", label: "Pilot to prod" },
      ],
      href: "/services/ai-engineering",
    },
    {
      id: "sovereign" as const,
      title: "Sovereign Wealth Risk Engine",
      category: "Financial Intelligence",
      challenge: "Portfolio risk signals scattered across research, market, and compliance systems.",
      solution: "Knowledge graph + scenario agents with explainable decision trails.",
      outcome: "Executive dashboards with live traversals and approval workflows.",
      metrics: [
        { value: "60%", label: "Faster analysis" },
        { value: "Full", label: "Audit lineage" },
        { value: "4.9/5", label: "Stakeholder NPS" },
      ],
      href: "/contact",
    },
    {
      id: "clinical" as const,
      title: "ClinicalMatch MVP",
      category: "Healthcare AI",
      challenge: "Trial enrollment bottlenecks delayed studies and inflated site costs.",
      solution: "Clinical criteria matching agent with HIPAA-aware document pipeline.",
      outcome: "MVP to pilot sites in six weeks with measurable enrollment lift.",
      metrics: [
        { value: "6 wk", label: "MVP delivery" },
        { value: "28%", label: "Match accuracy lift" },
        { value: "HIPAA", label: "Aligned controls" },
      ],
      href: "/services/mvp-studio",
    },
  ],
} as const;

export const homeTestimonials = {
  label: "Testimonials",
  title: "Trusted by Transformation Leaders",
  description: "Enterprise stakeholders who measure us on production outcomes—not presentations.",
  items: [
    {
      quote: "Astrenox became our operating system for plant autonomy—we went from pilots to closed-loop robotics in one quarter.",
      author: "Chief Digital Officer",
      role: "Global Manufacturing Enterprise",
      projectType: "Agentic Operations",
      outcome: "35% efficiency gain in plant scheduling",
    },
    {
      quote: "The Tri-Flywheel framing changed how our board funds AI—we now compound capability instead of funding one-offs.",
      author: "VP Strategy",
      role: "Fortune 500 Financial Services",
      projectType: "AI Transformation",
      outcome: "40% faster time-to-market on digital products",
    },
    {
      quote: "Their managed agent layer runs our support and research workflows with full observability. Finally, AI we can audit.",
      author: "Head of Enterprise Technology",
      role: "Healthcare Network",
      projectType: "Agentic Managed Services",
      outcome: "30% reduction in case resolution time",
    },
    {
      quote: "NexusCore became our internal AI OS. One orchestration standard across twelve business units.",
      author: "SVP Engineering",
      role: "Technology Holding Company",
      projectType: "Platform Engineering",
      outcome: "50+ production use cases in 12 months",
    },
  ],
} as const;

export const homeContactCta = {
  eyebrow: "Engage Astrenox",
  title: "Deploy the AI Operating System",
  description:
    "Connect enterprise intelligence to autonomous systems. Schedule a control-plane scoping session or submit an enterprise RFP.",
  trust: ["Mission-grade SLAs", "Robotics & aerospace programs", "Production engineering—not prototypes"],
  primaryCta: "Schedule Control Plane Scoping",
  primaryHref: "/contact?intent=scoping",
  secondaryCta: "Submit RFP",
  secondaryHref: "/contact?intent=rfp",
  calendarNote: "Calendar integration available on request for enterprise accounts.",
} as const;

export const homeFooter = {
  about:
    "Astrenox is the AI Operating System for the Physical World—enterprise intelligence, autonomous systems, and production-grade engineering.",
  servicesLinks: [
    { label: "AI Consulting & Transformation", href: "/services/ai-transformation" },
    { label: "Agentic Managed Services", href: "/platform" },
    { label: "Staff Augmentation", href: "/careers" },
    { label: "Digital & IT Services", href: "/services/digital-it-consulting" },
    { label: "MVP Studio", href: "/services/mvp-studio" },
  ],
  industriesLinks: [
    { label: "Manufacturing", href: "/services/industries" },
    { label: "Healthcare", href: "/services/industries" },
    { label: "Financial Services", href: "/services/industries" },
    { label: "Technology", href: "/services/industries" },
  ],
} as const;
