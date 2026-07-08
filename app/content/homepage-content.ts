/**
 * Homepage content — System Transformation Engine narrative.
 * Single source of truth for all homepage copy.
 */

export const homeHero = {
  eyebrow: "SYSTEM TRANSFORMATION ENGINE",
  headline: "Creating Sustainable Business Value Through AI-First Digital Transformation",
  description:
    "Astrenox helps enterprises modernize operations, deploy AI systems, and create measurable business outcomes.",
  primaryCta: "Schedule Strategy Call",
  primaryHref: "/contact?intent=strategy",
  secondaryCta: "Explore Platform",
  secondaryHref: "/platform",
  kpis: [
    { value: 500, suffix: "+", label: "Deployments" },
    { value: 99.9, suffix: "%", label: "Reliability", decimals: 1 },
    { value: 30, suffix: "+", label: "Integrations" },
    { value: 10, suffix: "X", label: "Deployment Speed" },
  ],
} as const;

export const homeMethodology = {
  id: "methodology",
  label: "Our Methodology",
  title: "Strategy Shipped to Outcome",
  description:
    "We don't make presentations. We build and deploy systems.",
  stages: [
    {
      id: "discover",
      number: "01",
      title: "DISCOVER",
      tagline: "Understand the opportunity",
      items: [
        "Business diagnostics",
        "AI readiness assessment",
        "Process mapping",
        "Value identification",
      ],
    },
    {
      id: "architect",
      number: "02",
      title: "ARCHITECT",
      tagline: "Design the operating model",
      items: [
        "AI architecture",
        "Data strategy",
        "Governance",
        "Deployment roadmap",
      ],
    },
    {
      id: "deploy",
      number: "03",
      title: "DEPLOY",
      tagline: "Ship production systems",
      items: [
        "AI agents",
        "Automation workflows",
        "Monitoring",
        "Scale operations",
      ],
    },
  ],
} as const;

export const homeTriFlywheel = {
  label: "Defensibility Model",
  title: "Architecting Defensibility: The Tri-Flywheel Model",
  description:
    "Three reinforcing loops that compound speed, intelligence, and ecosystem advantage.",
  centerLabel: "Astrenox Core",
  flywheels: [
    {
      id: "product",
      tabLabel: "Product",
      title: "Product Delivery Flywheel",
      description:
        "Faster shipping → richer feedback → better AI products → higher retention.",
      steps: ["Ship faster", "Collect feedback", "Improve AI", "Increase retention"],
    },
    {
      id: "operations",
      tabLabel: "Operations",
      title: "Internal AI-Operations Flywheel",
      description:
        "Automation → cost efficiency → reinvestment → deeper agentic coverage.",
      steps: ["Automate workflows", "Reduce cost", "Reinvest gains", "Expand coverage"],
    },
    {
      id: "ecosystem",
      tabLabel: "Ecosystem",
      title: "Ecosystem Alignment Flywheel",
      description:
        "Partner depth → preferred access → faster integration → stronger moats.",
      steps: ["Partner integrations", "Market access", "Distribution", "Network effects"],
    },
  ],
} as const;

export const homeEnterpriseEcosystem = {
  label: "Alliances",
  title: "Our Enterprise Ecosystem & Alliances",
  description:
    "Cloud, AI, and integration partners—activated through one Astrenox control plane.",
  marquee: [
    "AWS",
    "Microsoft Azure",
    "Google Cloud",
    "Oracle Cloud",
    "OpenAI",
    "Anthropic",
    "Google DeepMind",
    "Meta AI",
    "Cohere",
    "Salesforce",
    "ServiceNow",
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
      useCases: [
        "Predictive maintenance",
        "Quality vision systems",
        "Production scheduling agents",
        "Supplier risk intelligence",
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description: "Clinical and operational AI with compliance-by-design.",
      useCases: [
        "Clinical trial matching",
        "Prior authorization automation",
        "Care pathway copilots",
        "HIPAA-aware document intelligence",
      ],
    },
    {
      id: "financial",
      title: "Financial Services",
      description: "Risk, compliance, and client intelligence at scale.",
      useCases: [
        "AML monitoring agents",
        "Wealth risk engines",
        "Regulatory reporting automation",
        "Client 360 knowledge search",
      ],
    },
    {
      id: "retail",
      title: "Retail and Consumer",
      description: "Merchandising, fulfillment, and customer experience AI.",
      useCases: [
        "Demand forecasting",
        "Personalization engines",
        "Returns automation",
        "Store operations copilots",
      ],
    },
    {
      id: "realestate",
      title: "Real Estate and Construction",
      description: "Portfolio intelligence and transaction acceleration.",
      useCases: [
        "Deal underwriting assistants",
        "Lease abstraction",
        "Portfolio analytics",
        "Tenant experience automation",
      ],
    },
    {
      id: "logistics",
      title: "Logistics and Supply Chain",
      description: "Fleet, route, and warehouse orchestration.",
      useCases: [
        "Dynamic routing agents",
        "Warehouse robotics coordination",
        "ETA prediction",
        "Freight document automation",
      ],
    },
    {
      id: "education",
      title: "Education and Skilling",
      description: "Learning operations and student success systems.",
      useCases: [
        "Adaptive learning paths",
        "Admissions workflow AI",
        "Faculty operations automation",
        "Accreditation reporting",
      ],
    },
    {
      id: "government",
      title: "Government and Public Sector",
      description: "Secure citizen services and policy intelligence.",
      useCases: [
        "Case management automation",
        "Policy research agents",
        "Fraud detection",
        "Multilingual citizen support",
      ],
    },
    {
      id: "professional",
      title: "Professional Services",
      description: "Knowledge leverage across engagements and delivery.",
      useCases: [
        "Proposal intelligence",
        "Engagement knowledge graphs",
        "Billing automation",
        "Expert matching agents",
      ],
    },
    {
      id: "technology",
      title: "Technology and SaaS",
      description: "AI-native product companies and platform scale-ups.",
      useCases: [
        "MVP acceleration",
        "Agentic product layers",
        "DevOps intelligence",
        "Customer success automation",
      ],
    },
  ],
} as const;

export const homeMetrics = {
  label: "Outcomes",
  title: "Performance in Numbers",
  description: "Measured delivery—not marketing claims.",
  stats: [
    { value: 99.4, suffix: "%", decimals: 1, label: "Project Delivery Success Rate" },
    { value: 40, suffix: "%", label: "Average Reduction in Time-to-Market" },
    { value: 50, suffix: "+", label: "Production AI Use Cases Delivered" },
    { display: "4.8/5", label: "Client Satisfaction Rating" },
    { value: 35, suffix: "%", label: "Average Operational Efficiency Improvement" },
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
      outcome: "12-week transformation sprints",
      href: "/services/ai-transformation",
    },
    {
      id: "agentic",
      title: "Agentic Managed Services",
      description: "Managed agent fleets, runbooks, and observability across your estate.",
      outcome: "24/7 agent operations",
      href: "/platform",
    },
    {
      id: "staffing",
      title: "Staff Augmentation & Fractional CXOs",
      description: "Elite AI, data, and product leaders embedded with outcome accountability.",
      outcome: "2-week team activation",
      href: "/careers",
    },
    {
      id: "digital",
      title: "Digital and IT Services",
      description: "Modern engineering, integration, and human-centered digital delivery.",
      outcome: "Enterprise-grade SDLC",
      href: "/services/digital-it-consulting",
    },
    {
      id: "products",
      title: "Purpose-Built Products",
      description: "Flagship platforms and copilots engineered for your domain.",
      outcome: "Production in weeks",
      href: "/projects",
    },
    {
      id: "infra",
      title: "Infrastructure & Cloud Management",
      description: "Secure, scalable cloud foundations for AI workloads and data platforms.",
      outcome: "Multi-cloud ready",
      href: "/services/ai-engineering",
    },
    {
      id: "mvp",
      title: "Software Factory & MVP Studio",
      description: "High-velocity squads shipping investor-ready MVPs and scale paths.",
      outcome: "6-week MVP cycles",
      href: "/services/mvp-studio",
    },
  ],
} as const;

export const homeTechnology = {
  label: "Technology",
  title: "Technology Ecosystem",
  description: "Vendor-agnostic orchestration across the modern AI stack.",
  categories: [
    {
      id: "models",
      title: "AI Models & LLMs",
      items: ["GPT-4o", "Claude", "Gemini", "Llama", "Mistral"],
    },
    {
      id: "agents",
      title: "Agent Frameworks",
      items: ["LangGraph", "CrewAI", "AutoGen", "Semantic Kernel"],
    },
    {
      id: "automation",
      title: "Automation Tools",
      items: ["n8n", "Temporal", "Airflow", "Zapier Enterprise"],
    },
    {
      id: "cloud",
      title: "Cloud Platforms",
      items: ["AWS", "Azure", "GCP", "Kubernetes"],
    },
    {
      id: "databases",
      title: "Data & Vector Databases",
      items: ["PostgreSQL", "Snowflake", "Pinecone", "Neo4j"],
    },
    {
      id: "fullstack",
      title: "Frontend & Backend Technologies",
      items: ["Next.js", "React", "Python", "FastAPI", "Node"],
    },
    {
      id: "devops",
      title: "DevOps & CI/CD",
      items: ["Terraform", "GitHub Actions", "ArgoCD", "Datadog"],
    },
    {
      id: "analytics",
      title: "Analytics & Observability",
      items: ["dbt", "Looker", "Power BI", "Amplitude"],
    },
    {
      id: "integrations",
      title: "Enterprise Integrations",
      items: ["Salesforce", "SAP", "Workday", "ServiceNow"],
    },
    {
      id: "design",
      title: "Design & Prototyping",
      items: ["Figma", "Framer", "Storybook", "Design Systems"],
    },
  ],
} as const;

export const homeFlagshipProjects = {
  label: "Flagship Projects",
  title: "Flagship Projects & Products",
  description: "Architecture proven in production—with outcomes that survived executive review.",
  items: [
    {
      id: "nexuscore" as const,
      title: "NexusCore Orchestrator",
      category: "Enterprise AI Platform",
      description:
        "Unified orchestration layer with governance, routing, and observability across providers.",
      outcome: "Single control plane for 30+ connectors and multi-model agent fleets.",
      status: "Production" as const,
      techStack: ["Python", "FastAPI", "OpenAI", "Kubernetes", "React", "Postgres"],
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
      description:
        "Agentic routing, fleet telemetry graph, and exception runbooks in one engine.",
      outcome: "Dynamic optimization with human-in-the-loop for edge cases only.",
      status: "Live" as const,
      techStack: ["Python", "Kafka", "React", "Postgres", "Kubernetes"],
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
      description:
        "Code-aware RAG, PR agents, and quality gates integrated into the SDLC.",
      outcome: "Developer velocity up with audit-ready change lineage.",
      status: "Enterprise" as const,
      techStack: ["TypeScript", "OpenAI", "GitHub", "React", "Postgres"],
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
      description:
        "Knowledge graph + scenario agents with explainable decision trails.",
      outcome: "Executive dashboards with live traversals and approval workflows.",
      status: "Production" as const,
      techStack: ["Python", "Neo4j", "FastAPI", "React", "Kubernetes"],
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
      description:
        "Clinical criteria matching agent with HIPAA-aware document pipeline.",
      outcome: "MVP to pilot sites in six weeks with measurable enrollment lift.",
      status: "Beta" as const,
      techStack: ["Python", "OpenAI", "FastAPI", "React", "HIPAA"],
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
      quote:
        "Astrenox turned our AI strategy into operating rhythm. We went from pilots to production agents in one quarter.",
      author: "[Client Name]",
      role: "Chief Digital Officer, Global Manufacturing Enterprise",
      projectType: "Agentic Operations",
      outcome: "35% efficiency gain in plant scheduling",
    },
    {
      quote:
        "The Tri-Flywheel framing changed how our board funds AI—we now compound capability instead of funding one-offs.",
      author: "[Client Name]",
      role: "VP Strategy, Fortune 500 Financial Services",
      projectType: "AI Transformation",
      outcome: "40% faster time-to-market on digital products",
    },
    {
      quote:
        "Their managed agent layer runs our support and research workflows with full observability. Finally, AI we can audit.",
      author: "[Client Name]",
      role: "Head of Enterprise Technology, Healthcare Network",
      projectType: "Agentic Managed Services",
      outcome: "30% reduction in case resolution time",
    },
    {
      quote:
        "NexusCore became our internal AI OS. One orchestration standard across twelve business units.",
      author: "[Client Name]",
      role: "SVP Engineering, Technology Holding Company",
      projectType: "Platform Engineering",
      outcome: "50+ production use cases in 12 months",
    },
  ],
} as const;

export const homeContactCta = {
  eyebrow: "Engage Astrenox",
  title: "Transition from Architecture to Production",
  description:
    "Schedule a scoping session with our transformation architects—or submit an RFP for enterprise procurement.",
  primaryCta: "Schedule Architecture Scoping",
  primaryHref: "/contact?intent=scoping",
  secondaryCta: "Submit RFP / Technical Specs",
  secondaryHref: "/contact?intent=rfp",
  infoRows: [
    {
      icon: "mail" as const,
      label: "Email",
      value: "engineering@astrenox.com",
      href: "mailto:engineering@astrenox.com",
    },
    {
      icon: "phone" as const,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+910000000000",
    },
    {
      icon: "map" as const,
      label: "Address",
      value: "India",
      href: "/contact",
    },
    {
      icon: "calendar" as const,
      label: "Discovery Call",
      value: "Architecture Discovery",
      href: "/contact?intent=scoping",
    },
    {
      icon: "file" as const,
      label: "Submit RFP",
      value: "Technical specifications",
      href: "/contact?intent=rfp",
    },
  ],
  channels: [
    { label: "Technical Discovery", value: "Available on request for enterprise accounts" },
    { label: "Direct Calendar Sync", value: "Calendar integration available on request" },
    { label: "Architecture & RFP Email", value: "engineering@astrenox.com" },
    { label: "Partnership Email", value: "partnerships@astrenox.com" },
    { label: "Phone Number", value: "[Phone Number Placeholder]" },
    { label: "Corporate Address", value: "[Corporate Address Placeholder]" },
  ],
} as const;

export const homeFooter = {
  about:
    "AI-first consulting and production engineering for enterprises that ship real systems—not slide decks.",
  aboutLink: { label: "About Astrenox", href: "/about" },
  companyLinks: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
  servicesLinks: [
    { label: "AI Consulting", href: "/services/ai-transformation" },
    { label: "AI Engineering", href: "/services/ai-engineering" },
    { label: "Digital Transformation", href: "/services/digital-it-consulting" },
    { label: "Automation", href: "/services/intelligent-automations" },
    { label: "MVP Studio", href: "/services/mvp-studio" },
  ],
  resourcesLinks: [
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "Research", href: "/research" },
    { label: "Industries", href: "/services/industries" },
    { label: "Platform", href: "/platform" },
    { label: "Careers", href: "/careers" },
  ],
  servicesLink: { label: "Services", href: "/services" },
  industriesLink: { label: "Industries", href: "/services/industries" },
  github: { label: "GitHub", href: "https://github.com" },
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/company/astrenox" },
  x: { label: "X", href: "https://x.com" },
  email: "engineering@astrenox.com",
  copyright: "© 2026 Astrenox",
  legalLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/legal" },
    { label: "Cookies", href: "/legal" },
  ],
  madeWith: "Made with AI",
} as const;
