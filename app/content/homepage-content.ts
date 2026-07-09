/**
 * Homepage content — verbatim from approved Content.docx.
 * Single source of truth for all homepage copy.
 */

export const homeHero = {
  eyebrow: "SYSTEM TRANSFORMATION ENGINE",
  headline: "Creating Sustainable Business Value Through AI-First Digital Transformation",
  description:
    "Organizations today face increasing pressure to modernize operations, improve efficiency, and unlock value from rapidly growing volumes of data. While many businesses recognize the potential of AI and digital transformation, turning strategy into measurable outcomes remains a significant challenge.\n\nAstrenox helps organizations navigate this complexity through a combination of AI engineering, technology consulting, and digital transformation expertise. We work closely with leadership teams to identify opportunities, remove operational bottlenecks, and implement scalable solutions that deliver measurable business impact.\n\nPrimary CTA\n\nRun System Diagnostic →\n\nSecondary CTA\n\nView Technical Documentation",
  primaryCta: "Run System Diagnostic →",
  primaryHref: "/contact?intent=diagnostic",
  secondaryCta: "View Technical Documentation",
  secondaryHref: "/research",
  kpis: [
    { value: 90, suffix: "%", label: "Project Delivery Success Rate" },
    { value: 40, suffix: "%", label: "Average Reduction in Time-to-Market" },
    { value: 50, suffix: "+", label: "Production AI Use Cases Delivered" },
    { value: 4.8, suffix: "/5", decimals: 1, label: "Client Satisfaction Rating" },
  ],
} as const;

export const homeMethodology = {
  id: "methodology",
  label: "2. OUR METHODOLOGY / APPROACH",
  title: "Strategy Shipped to Outcome",
  description:
    "Successful digital transformation requires a rigorous methodology that aligns business priorities with deep technical execution. We guide organizations from baseline strategy to sustainable, measurable operational impact.",
  stages: [
    {
      id: "think",
      number: "01",
      title: "STAGE 01: THINK",
      tagline:
        "This phase establishes strategic direction, assesses technical maturity, and engineers the architectural baseline required for scalable integration.",
      items: [
        "Direction:- Align technical ambition with target business outcomes, defining precise project scope and standardized success KPIs.",
        "Readiness:-  Evaluate legacy technology stacks, data silos, and operational workflows to isolate infrastructural gaps and sequence capability development.",
        "Foundation:-  Map IT/OT convergence across the value chain, defining robust data models and strict standards for interoperability, modularity, and security.",
      ],
    },
    {
      id: "align",
      number: "02",
      title: "STAGE 02: ALIGN",
      tagline:
        "This phase transitions foundational strategy into a mobilized, prioritized portfolio designed to deliver maximum short-term and long-term value.",
      items: [
        "Focus: Build a value-scored use-case portfolio that balances immediate operational wins with complex, compounding strategic initiatives linked directly to ROI metrics.",
        "Coordination:- Establish cross-functional governance structures, definitive ownership roles, and rigid decision-making authority matrices to synchronize delivery across departments.",
      ],
    },
    {
      id: "execute",
      number: "03",
      title: "STAGE 03: EXECUTE",
      tagline:
        "This phase builds the deployment engine, activates data pipelines, and implements continuous recalibration loops based on real-time operational telemetry.",
      items: [
        "Engine:- Standardize deployment processes using repeatable templates and agile delivery cycles to drive efficient, site-by-site scaling while mitigating adoption friction.",
        "Insight: Operationalize high-fidelity data pipelines via live dashboards and AI/ML-driven recommendations to power real-time decision-making at all tiers.",
        "Refinement: Track leading and lagging indicators through closed-loop feedback systems and technical retrospectives to continuously calibrate the overarching roadmap.",
      ],
    },
  ],
} as const;

export const homeTriFlywheel = {
  label: "3. FLYWHEEL SECTION",
  title: "Architecting Defensibility: The Tri-Flywheel Model",
  description:
    "Building a business by simply wrapping an off-the-shelf AI model offers no long-term competitive edge. True market durability requires capturing a high-friction operational workflow and expanding that footprint through three distinct phases:",
  centerLabel: "Astrenox Core",
  flywheels: [
    {
      id: "product",
      tabLabel: "Product Delivery",
      title: "The Product Delivery Flywheel",
      description:
        "1. The Product Delivery Flywheel:-  Capture proprietary insights by routing every unique customer interaction into your core architecture. This automated feedback makes your software smarter and highly specialized over time.",
      steps: [] as readonly string[],
    },
    {
      id: "operations",
      tabLabel: "Internal AI-Operations",
      title: "The Internal AI-Operations Flywheel",
      description:
        "2. The Internal AI-Operations Flywheel:- Accelerate development speed by embedding autonomous tools into the engineering lifecycle to minimize operational overhead. Simultaneously, pivot discovery strategies from traditional SEO to Model Recommendation Optimization (MRO)—ensuring you are natively indexed when users query AI search engines.",
      steps: [] as readonly string[],
    },
    {
      id: "ecosystem",
      tabLabel: "Ecosystem Alignment",
      title: "The Ecosystem Alignment Flywheel",
      description:
        "3. The Ecosystem Alignment Flywheel:- Convert early success into industry dominance through seamless compatibility with Cloud Service Providers (CSPs), major vendors, and Systems Integrators (SIs). This structural integration unlocks massive, built-in distribution channels that return fresh enterprise insights to the start, compounding overall growth.",
      steps: [] as readonly string[],
    },
  ],
} as const;

export const homeEnterpriseEcosystem = {
  label: "Technology Ecosystem",
  title: "Vendor-Agnostic Integration",
  description:
    "We leverage strategic alliances with leading providers (OpenAI, Anthropic, Google, Meta) to route workloads to the optimal model, ensuring architectural flexibility without vendor lock-in.",
  marquee: [
    "OpenAI",
    "Anthropic",
    "Google",
    "Meta",
    "LangGraph",
    "CrewAI",
    "n8n",
    "AWS",
    "Google Cloud Platform",
    "Microsoft Azure",
    "Salesforce",
    "SAP",
    "ServiceNow",
    "HubSpot",
  ],
} as const;

export const homeIndustries = {
  label: "4. INDUSTRIES SECTION",
  title: "4. INDUSTRIES SECTION",
  description:
    "Application Modernization*, and *Product Engineering*. Dropping these terms makes the firm sound like a generic agency rather than a high-end technical consultancy.",
  items: [
    {
      id: "manufacturing",
      title: "Manufacturing",
      description:
        "Description: Enhancing production efficiency and operational resilience through intelligent automation and modernized infrastructure.",
      useCases: [
        "BMS (Building Management Systems) and computer vision for facility safety.",
        "Legacy application modernization for factory floor systems.",
        "Cloud managed services for scaling supply chain analytics.",
        "Software testing and quality assurance for automated assembly lines.",
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description:
        "Description:-  Empowering patient care and securing sensitive health data with compliant, scalable, and user-centric digital platforms.",
      useCases: [
        "Electronic health record (EHR) legacy app modernization.",
        "Cloud managed services for compliant medical data storage.",
        "Software testing and quality assurance for critical medical software.",
      ],
    },
    {
      id: "financial",
      title: "Financial Services",
      description:
        "Description:- Modernizing financial workflows to ensure regulatory compliance, reduce operational risk, and deliver secure digital experiences.",
      useCases: [
        "Legacy app modernization for core banking and payment gateways.",
        "Secure data center and networking architectures for data protection.",
        "UI/UX and product engineering for mobile banking platforms.",
        "Software testing and quality assurance for compliance and fraud detection.",
      ],
    },
    {
      id: "retail",
      title: "Retail and Consumer",
      description:
        "Description:-  Driving customer engagement and optimizing inventory through unified shopping experiences and high-availability IT platforms.",
      useCases: [
        "E-commerce and product engineering for customer journeys.",
        "Computer vision for retail footfall and automated checkout analytics.",
        "Cloud managed services to handle peak seasonal traffic scaling.",
        "Software testing and quality assurance for point-of-sale (POS) systems.",
      ],
    },
    {
      id: "realestate",
      title: "Real Estate and Construction",
      description:
        "Description:- Transforming property management and site development with connected building technologies and streamlined project operations.",
      useCases: [
        "BMS and computer vision for smart building climate and access security.",
        "Cloud managed services for centralized property portfolio management.",
        "Data center and networking setups for corporate real estate hubs.",
        "UI/UX and product engineering for tenant management dashboards.",
      ],
    },
    {
      id: "logistics",
      title: "Logistics and Supply Chain",
      description:
        "Description: Improving fleet visibility and operational agility with responsive tracking networks and data-driven routing systems.",
      useCases: [
        "Data center and networking optimization for real-time freight tracking.",
        "Legacy app modernization of warehouse management software.",
        "Software testing and quality assurance for logistics and dispatch tools.",
        "Cloud managed services for global supply chain visibility platforms.",
      ],
    },
    {
      id: "education",
      title: "Education and Skilling",
      description:
        "Description:- Delivering accessible, high-performance learning environments through reliable digital platforms and user-focused design",
      useCases: [
        "UI/UX and product engineering for learning management systems (LMS).",
        "Cloud managed services to support high-volume video streaming.",
        "Legacy app modernization for student enrollment and administration portals.",
        "Computer vision for secure online exam proctoring.",
      ],
    },
    {
      id: "government",
      title: "Government and Public Sector",
      description:
        "Description:- Modernizing public services to increase citizen accessibility, ensure data sovereignty, and improve administrative efficiency.",
      useCases: [
        "Legacy app modernization for civil registry and tax systems.",
        "Secure data center and networking compliance for public data storage.",
        "Software testing and quality assurance for public service web portals.",
        "Cloud managed services to streamline municipal IT operations.",
      ],
    },
    {
      id: "professional",
      title: "Professional Services",
      description:
        "Description:-  Streamlining operational workflows and client delivery with custom-engineered applications and stable digital infrastructures.",
      useCases: [
        "UI/UX and product engineering for client reporting dashboards.",
        "Cloud managed services for secure, collaborative document management.",
        "Software testing and quality assurance for internal billing systems.",
        "Legacy app modernization for enterprise resource planning (ERP) systems.",
      ],
    },
    {
      id: "technology",
      title: "Technology and SaaS",
      description:
        "Description:-  Accelerating product roadmaps and ensuring platform reliability to support rapid growth and high user adoption.",
      useCases: [
        "End-to-end UI/UX and product engineering for new software releases.",
        "Comprehensive software testing and quality assurance to minimize deployment bugs.",
        "Highly available data center and networking setups for global service delivery.",
        "Cloud managed services to optimize infrastructure costs and automate scaling.",
      ],
    },
  ],
} as const;

export const homeMetrics = {
  label: "6. METRICS SECTION",
  title: "Performance in Numbers",
  description:
    "[90%]\n\nProject Delivery Success Rate\n\n[40%]\n\nAverage Reduction in Time-to-Market\n\n[50+]\n\nProduction AI Use Cases Delivered\n\n[4.8/5]\n\nClient Satisfaction Rating\n\n[35%]\n\nAverage Operational Efficiency Improvement\n\nMetrics to be validated and updated with verified company data.",
  stats: [
    { value: 90, suffix: "%", decimals: 0, label: "Project Delivery Success Rate" },
    { value: 40, suffix: "%", decimals: 0, label: "Average Reduction in Time-to-Market" },
    { value: 50, suffix: "+", decimals: 0, label: "Production AI Use Cases Delivered" },
    { display: "4.8/5", label: "Client Satisfaction Rating" },
    { value: 35, suffix: "%", decimals: 0, label: "Average Operational Efficiency Improvement" },
  ],
} as const;

export const homeServices = {
  label: "7. SERVICES SECTION",
  title: "7. SERVICES SECTION",
  description: "",
  items: [
    {
      id: "consulting",
      title: "1. AI Consulting & Transformation-",
      description:
        "Description:- Aligning business goals with AI-native architecture. We handle model selection, fine-tuning, and integration to convert legacy processes into intelligent workflows.",
      outcome: "Outcome:- Decrease operational overhead by 40%.",
      href: "/services/ai-transformation",
    },
    {
      id: "agentic",
      title: "2. Agentic Managed Services-",
      description:
        "Description:- Engineering autonomous, context-aware systems. We deploy agents with RAG capabilities and persistent memory to execute complex, multi-step business logic independently.",
      outcome: "Outcome:- Eliminate manual routing with 24/7 automation.",
      href: "/services/intelligent-automations",
    },
    {
      id: "staffing",
      title: "3. Staff Augmentation & Fractional CXOs-",
      description:
        "Description:- On-demand access to elite ML engineers and data scientists. Integrate our experts into your current sprints or leverage our fractional C-suite for technical governance.",
      outcome: "Outcome:- Accelerate development velocity by 3x.",
      href: "/careers",
    },
    {
      id: "digital",
      title: "4. Digital and IT Services-",
      description:
        "Description:- Hardening your core digital backbone. We focus on resilient API integrations and secure microservices to ensure your enterprise architecture remains performant under load.",
      outcome: "Outcome:- Achieve 99.99% system availability.",
      href: "/services/digital-it-consulting",
    },
    {
      id: "products",
      title: "5. Purpose-Built Products-",
      description:
        "Description:- Designing bespoke software that addresses unique market gaps. We engineer proprietary platforms that leverage your internal data to create durable competitive advantages.",
      outcome: "Outcome:- Convert unique business logic into scalable IP.",
      href: "/products",
    },
    {
      id: "infra",
      title: "6. Infrastructure & Cloud Management-",
      description:
        "Description:- Governance of multi-cloud environments built for intensive AI inference. We provide proactive orchestration, security, and observability to manage compute costs.",
      outcome: "Outcome:-  Reduce cloud infrastructure spend by 30%.",
      href: "/infrastructure-solutions",
    },
    {
      id: "mvp",
      title: "7. Software Factory & MVP Studio-",
      description:
        "Description:- A disciplined, agile approach to product validation. We collapse the timeline from prototype to secure, production-ready MVP.",
      outcome: "Outcome:- Concept to market in under 12 weeks.",
      href: "/services/mvp-studio",
    },
  ],
} as const;

export const homeTechnology = {
  label: "Technology Ecosystem",
  title: "8 Our Technology Ecosystem1 AI Models & LLMs",
  description:
    "8 Our Technology Ecosystem1 AI Models & LLMs\n\nDeploying production-grade AI requires deep structural synchronization across technology infrastructure and foundational models. Astrenox acts as a systems integrator, orchestrating a unified ecosystem that guarantees multi-cloud interoperability, security, and high computational efficiency.\n\nVendor-Agnostic Integration: We leverage strategic alliances with leading providers (OpenAI, Anthropic, Google, Meta) to route workloads to the optimal model, ensuring architectural flexibility without vendor lock-in.\n\nAdvanced Orchestration: By bridging foundational models with engineering frameworks like LangGraph, CrewAI, and n8n, we construct resilient, future-proof automation pipelines that execute reliably across environments.\n\nEnterprise-Grade Governance: Every component in our stack and partner network adheres to strict enterprise benchmarks for data security, observability, and access control from development through production scaling.",
  categories: [
    {
      id: "models",
      title: "1 AI Models & LLMs",
      items: [
        "Technologies: OpenAI, Anthropic Claude, Google Gemini, Mistral, Qwen, GLM, Kimi, deepseek",
        "Strategic selection and deployment of foundation models optimized for latency, token economics, and domain-specific reasoning.",
        "OpenAI",
        "Anthropic Claude",
        "Google Gemini",
        "Mistral",
        "Qwen",
        "GLM",
        "Kimi",
        "deepseek",
      ],
    },
    {
      id: "agents",
      title: "2 Agent Frameworks",
      items: [
        "Technologies: LangChain,openclaw, hermes,  CrewAI.",
        "Orchestration libraries for building deterministic multi-agent workflows, enabling complex reasoning and reliable external API execution in production.",
        "LangChain",
        "openclaw",
        "hermes",
        "CrewAI.",
      ],
    },
    {
      id: "automation",
      title: "3 Automation Tools",
      items: [
        "Technologies: Make, Zapier, n8n, Microsoft Power Automate.",
        "Event-driven pipeline integration bridging legacy systems and modern APIs to automate complex, multistep business logic.",
        "Make",
        "Zapier",
        "n8n",
        "Microsoft Power Automate.",
      ],
    },
    {
      id: "cloud",
      title: "4  Cloud Platforms",
      items: [
        "Technologies: AWS, Google Cloud Platform, Microsoft Azure.",
        "Cloud-native architectures optimized for high-availability machine learning workloads, distributed microservices, and elastic compute.",
        "AWS",
        "Google Cloud Platform",
        "Microsoft Azure.",
      ],
    },
    {
      id: "databases",
      title: "5 Data & Vector Databases",
      items: [
        "Technologies: Pinecone, Milvus, Qdrant, PostgreSQL (pgvector), Snowflake.",
        "High-performance storage for high-dimensional embeddings and unstructured data, ensuring sub-millisecond query latency for Retrieval-Augmented Generation (RAG) pipelines.",
        "Pinecone",
        "Milvus",
        "Qdrant",
        "PostgreSQL (pgvector)",
        "Snowflake.",
      ],
    },
    {
      id: "fullstack",
      title: "6 Frontend & Backend Technologies",
      items: [
        "Technologies: React, Next.js, Python (FastAPI), Node.js, Go.",
        "API-first microservices and component-driven interfaces designed for high concurrency and real-time AI interactions.",
        "React",
        "Next.js",
        "Python (FastAPI)",
        "Node.js",
        "Go.",
      ],
    },
    {
      id: "devops",
      title: "7 DevOps & CI/CD Tools",
      items: [
        "Technologies: Docker, Kubernetes, Terraform, GitHub Actions, GitLab CI/CD.",
        "Strict Infrastructure as Code (IaC) and automated testing pipelines ensuring consistent environment parity and zero-downtime deployments.",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
        "GitLab CI/CD.",
      ],
    },
    {
      id: "analytics",
      title: "8 Analytics & Observability Tools",
      items: [
        "Technologies: Datadog, Grafana, LangSmith, Splunk, MLflow",
        "Deep telemetry and distributed tracing to monitor resource utilization, detect LLM drift, and enforce strict enterprise SLAs.",
        "Datadog",
        "Grafana",
        "LangSmith",
        "Splunk",
        "MLflow",
      ],
    },
    {
      id: "integrations",
      title: "9 Enterprise Integrations",
      items: [
        "Technologies: Salesforce, SAP, ServiceNow, HubSpot.",
        "Secure, bi-directional data synchronization between custom AI layers and core enterprise infrastructure.",
        "Salesforce",
        "SAP",
        "ServiceNow",
        "HubSpot.",
      ],
    },
    {
      id: "design",
      title: "10 Design & Prototyping Tools",
      items: [
        "Technologies: Figma, Framer, Sketch.",
        "Rapid prototyping to map complex machine execution to intuitive, accessible human-computer interfaces.",
        "Figma",
        "Framer",
        "Sketch.",
      ],
    },
  ],
} as const;

export {
  homeFlagshipProjects,
  homeTestimonials,
  homeContactCta,
  homeFooter,
} from "./homepage-content-remainder";
