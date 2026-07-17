/**
 * Migrated from https://astrean.vercel.app/, copy only, not legacy design.
 */

export const site = {
  brand: "Astrenox",
  tagline: "AI-First Digital Transformation",
  email: "hello@astrenox.com",
} as const;

export const hero = {
  eyebrow: "Astrenox · Enterprise AI Operating System",
  headline: "Creating engineering disruption with AI-first transformation.",
  subheadline:
    "Powered by the Astrenox Intelligence Platform, unified search, knowledge graphs, and autonomous agents that turn fragmented systems into intelligent operations.",
  primaryCta: "Request a consult",
  primaryHref: "/contact",
  secondaryCta: "Intelligence Platform",
  secondaryHref: "/platform",
  requestAccessCta: "Request access",
  requestAccessHref: "/contact",
} as const;

export const peLogos = ["Clearlake", "Berkshire Partners", "Blue Wolf"] as const;

export const heroMetrics = [
  { value: "25%", label: "Decrease in person hours" },
  { value: "20%", label: "Faster time to launch" },
  { value: "Step-change", label: "ROI unlocked" },
] as const;

export const emailCapture = {
  title: "Ship AI that holds up in production",
  subtitle: "No spam. A crisp plan and a clear next step.",
  placeholder: "Business email",
  cta: "Get started",
  pillars: [
    { title: "Discovery & roadmap", description: "Priorities, timelines, and success metrics" },
    { title: "AI engineering", description: "Evaluation, safety, and scalable architecture" },
    { title: "Automation & ops", description: "Orchestration that saves real hours" },
  ],
} as const;

export const deliveryProof = [
  { title: "Delivery Velocity", description: "Weeks to launch" },
  { title: "Ownership Model", description: "We ship with you" },
  { title: "Proof over slides", description: "Production or it didn't happen" },
] as const;

export const trustMarquee =
  "Built by builders, trusted by leaders · Built by builders, trusted by leaders · Built by builders, trusted by leaders · ";

export const talkToExperts = {
  title: "Talk to our AI experts",
  href: "/contact",
} as const;

export const disruptionHome = {
  title: "You have a choice. Disrupt yourself, or be disrupted.",
  description:
    "The cost of intelligence is falling to zero. Those who wait for perfect will be outpaced by those who build for flow. Astrenox ensures you end up on the right side of history.",
} as const;

export const ecosystemProviders = [
  {
    id: "openai",
    name: "OpenAI",
    description: "Leading the way in generative AI and measuring value.",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    description: "Innovations in the ethical and safe deployment of AI.",
  },
  {
    id: "google",
    name: "Google",
    description: "Pioneering advancements in AI research and cloud services.",
  },
  {
    id: "meta",
    name: "Meta",
    description: "Driving innovation in AI models and open-source initiatives.",
  },
] as const;

export const capabilitiesSection = {
  label: "Capabilities",
  title: "Ship AI that holds up in production.",
  description:
    "Discovery, engineering, and automation, sequenced for maximum leverage and measurable ROI across your stack.",
} as const;

export const capabilities = [
  {
    id: "ai-systems" as const,
    category: "AI Engineering",
    title: "AI Engineering",
    description:
      "Production-ready systems with evaluation, safety, and scalable architecture: MLOps, RAG, fine-tuning, and agentic workflows built by senior builders.",
    cta: "Explore engineering",
    ctaHref: "/contact",
    colSpan: "col-span-12 lg:col-span-8",
    row: "large" as const,
  },
  {
    id: "drones" as const,
    category: "Intelligent Automations",
    title: "Intelligent Automations",
    description:
      "AI chatbots, co-pilots, autonomous agents, and workflow automations that plug into your tools, data, and teams, value from day one.",
    cta: "Scope automations",
    ctaHref: "/projects",
    colSpan: "col-span-12 lg:col-span-4",
    row: "large" as const,
  },
  {
    id: "robotics" as const,
    category: "Transformation",
    title: "AI Transformation",
    description:
      "30/60/90-day audits, adoption roadmaps, and practitioner-led execution across product, process, and people, strategy that ships systems, not slides.",
    cta: "Transformation framework",
    ctaHref: "/services/ai-transformation",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    row: "medium" as const,
  },
  {
    id: "aerospace" as const,
    category: "Discovery",
    title: "Discovery & Roadmap",
    description:
      "Priorities, timelines, and success metrics grounded in your constraints, use cases ranked by impact, feasibility, and time-to-value.",
    cta: "Start discovery",
    ctaHref: "/contact",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    row: "medium" as const,
  },
  {
    id: "vision" as const,
    category: "Agentic Systems",
    title: "Custom Agentic Solutions",
    description:
      "Autonomous agents that reason, plan, and execute multi-step workflows across search, APIs, and enterprise data with full observability.",
    cta: "Agent architecture",
    ctaHref: "/platform#ai-agents",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    row: "medium" as const,
  },
  {
    id: "research" as const,
    category: "Talent",
    title: "Hire Elite Engineering Talent",
    description:
      "Pre-vetted AI, data, and product builders, individual experts or managed squads with outcome-based delivery and security-first onboarding.",
    cta: "Get a shortlist",
    ctaHref: "/careers",
    colSpan: "col-span-12 lg:col-span-6",
    row: "medium" as const,
    layout: "split" as const,
  },
  {
    id: "analytics" as const,
    category: "Platform",
    title: "Astrenox Intelligence Platform",
    description:
      "The AI operating system behind every engagement, enterprise search, knowledge graph, agents, and workflow automation with explainable decisions.",
    cta: "Explore platform",
    ctaHref: "/platform",
    colSpan: "col-span-12 lg:col-span-6",
    row: "medium" as const,
    layout: "split" as const,
  },
];

export const processSection = {
  label: "Methodology",
  title: "Think → Align → Execute",
  description:
    "A practical, eight-anchor framework that turns strategy into shipped outcomes, sequenced for maximum leverage and measurable ROI.",
  partBLabel: "Methodology · Part B",
} as const;

export const processSteps = [
  {
    step: "Think · 01",
    title: "Direction",
    description:
      "Align vision, outcomes, scope, and success KPIs before a single model is trained.",
  },
  {
    step: "Think · 02",
    title: "Readiness",
    description:
      "Assess people, processes, and technology, surface gaps and build a priority plan grounded in constraints.",
  },
  {
    step: "Align · 03",
    title: "Foundation",
    description:
      "Map target architecture, data models, and integrations with clear standards and governance.",
  },
  {
    step: "Align · 04",
    title: "Orchestration",
    description:
      "Compose resilient platforms across OpenAI, Anthropic, Google, Llama, Gemini, LangGraph, CrewAI, and n8n, observable and governable.",
  },
  {
    step: "Execute · 05",
    title: "Scale & ROI",
    description:
      "Maximize leverage at the constraint, production deployments, automation at scale, and step-change ROI unlocked.",
  },
] as const;

export const projectsSection = {
  label: "Success Stories",
  title: "Real stories, real results.",
  description:
    "How Astrenox helps leaders transform engineering and operations with AI-first thinking, from flagship platforms to production rollouts.",
} as const;

export type ProjectVisualId =
  | "solvoris"
  | "orzo"
  | "velocity"
  | "copilot"
  | "data-revamp"
  | "frontend";

export const projects = [
  {
    id: "solvoris" as const,
    title: "Solvoris",
    category: "Enterprise AI Platform",
    description:
      "The enterprise AI orchestration layer, unify data, models, and workflows into a single, governable ecosystem built for scale and security.",
    tags: ["Orchestration", "Governance", "MLOps", "Enterprise"],
    stats: [
      { value: "30+", label: "Data connectors" },
      { value: "Multi", label: "Model providers" },
      { value: "Enterprise", label: "Grade security" },
    ],
    outcome: "Vendor-agnostic AI platforms that evolve with the landscape.",
    href: "/contact",
  },
  {
    id: "orzo" as const,
    title: "Orzo",
    category: "AI Business Copilot",
    description:
      "The AI business copilot, amplify team productivity with instant search, proactive insights, and agentic workflows across your organization.",
    tags: ["Copilot", "RAG", "Agents", "Knowledge"],
    stats: [
      { value: "Live", label: "Knowledge sync" },
      { value: "Agentic", label: "Workflows" },
      { value: "Permission", label: "Aware search" },
    ],
    outcome: "Instant answers grounded in your latest enterprise facts.",
    href: "/contact",
  },
  {
    id: "velocity" as const,
    title: "Delivery Velocity Program",
    category: "AI Transformation",
    description:
      "Outcome-based product transformation with unicorn PMs and engineers accelerating roadmaps, not adding tickets, shipping outcomes.",
    tags: ["Product", "Outcomes", "Sprints", "AI-native"],
    stats: [
      { value: "25%", label: "Fewer person-hours" },
      { value: "20%", label: "Faster launch" },
      { value: "Step-change", label: "ROI unlocked" },
    ],
    outcome:
      "The speed of delivery shifted almost overnight, we aren't just shipping more, we're shipping better.",
    href: "/services/ai-transformation",
  },
  {
    id: "copilot" as const,
    title: "Enterprise Support Copilot",
    category: "Intelligent Automations",
    description:
      "Retrieval-augmented GenAI workflows for support, permission-aware answers synced across enterprise knowledge sources.",
    tags: ["RAG", "Support", "GenAI", "Automation"],
    stats: [
      { value: "30%", label: "Faster resolution" },
      { value: "Trusted", label: "By finance teams" },
      { value: "Live", label: "Sync retrieval" },
    ],
    outcome: "Measurable impact tracked with built-in analytics dashboards.",
    href: "/services/intelligent-automations",
  },
  {
    id: "data-revamp" as const,
    title: "Modern Data Stack Revamp",
    category: "AI Engineering",
    description:
      "Migrated analytics to modern ELT and a semantic layer, pipelines and RAG architectures that fuel intelligent insights.",
    tags: ["Data Engineering", "ELT", "Analytics", "RAG"],
    stats: [
      { value: "30+", label: "Sources connected" },
      { value: "Semantic", label: "Layer" },
      { value: "Pipeline", label: "Ready AI" },
    ],
    outcome: "Trusted foundation for downstream AI products and automations.",
    href: "/research",
  },
  {
    id: "frontend" as const,
    title: "AI-First Frontend Push",
    category: "Application Development",
    description:
      "High-velocity full-stack delivery with React, Next.js, and robust Python backends: Lighthouse 95+ after a focused two-week sprint.",
    tags: ["Next.js", "React", "Python", "Performance"],
    stats: [
      { value: "95+", label: "Lighthouse score" },
      { value: "20%", label: "Higher conversion" },
      { value: "2 wk", label: "Sprint delivery" },
    ],
    outcome: "Production-ready experiences with weekly deployment cadence.",
    href: "/contact",
  },
];

export const researchSection = {
  label: "Research & Ecosystem",
  title: "We orchestrate the ecosystem, not just use it.",
  description:
    "Astrenox as systems integrator across leading models and orchestration frameworks, resilient, observable, and governable by design.",
} as const;

export const researchPillars = [
  {
    title: "Future-Proof Architecture",
    description:
      "Building systems that evolve with the rapidly changing AI landscape.",
  },
  {
    title: "Vendor-Agnostic Strategy",
    description: "The right model for the right task, across any provider.",
  },
  {
    title: "Enterprise Security & Governance",
    description:
      "Access controls, auditability, model risk management, and alignment with your compliance requirements from day one.",
  },
  {
    title: "Model & Platform Research",
    description:
      "OpenAI, Anthropic, Google, Meta, Llama, Gemini, matched to the right task with LangGraph, CrewAI, and n8n orchestration.",
  },
  {
    title: "Applied Engineering",
    description:
      "Fine-tuning, custom agents, workflow automations, knowledge search, and document intelligence in production.",
  },
  {
    title: "Transformation Audits",
    description:
      "30/60/90-day holistic and function-specific audits with AI-Adoption Reports and technical implementation appendices.",
  },
  {
    title: "People & Process",
    description:
      "Bespoke curricula, workshops, and change management so teams adopt AI-first workflows sustainably.",
  },
];

export const statisticsSection = {
  label: "Outcomes",
  title: "Trusted at enterprise scale",
  description:
    "Proof over slides, production deployments, outcome-based ownership, and measurable leverage at the constraint.",
} as const;

export const statistics = [
  { value: 25, suffix: "%", label: "Decrease in per-project person hours" },
  { value: 20, suffix: "%", label: "Faster time to launch" },
  { value: 30, suffix: "%", label: "Faster support resolution" },
  { value: 95, suffix: "+", label: "Lighthouse performance score" },
];

export const trustedSection = {
  eyebrow: "Industry network",
  title: "Trusted across critical industries",
  subtitle:
    "Building intelligent systems for private equity, enterprise AI, cloud leaders, and teams shipping production rollouts.",
  ecosystemNodes: [
    "AI Engineering",
    "Automations",
    "Transformation",
    "Agentic AI",
    "Data Platforms",
    "Ecosystem Integration",
  ],
  clientLogos: [
    "Clearlake",
    "Berkshire Partners",
    "Blue Wolf",
    "OpenAI",
    "Anthropic",
    "Databricks",
  ],
  stats: [
    { value: "25%", label: "Person-hour reduction" },
    { value: "20%", label: "Faster launches" },
    { value: "Production", label: "Or it didn't happen" },
    { value: "Weeks", label: "To first launch" },
  ],
};

export const faqSection = {
  label: "FAQ",
  title: "Frequently asked questions",
  description:
    "Everything you need to know about how we work, what to expect, and how we deliver outcomes.",
  cta: "Email our team",
  email: "hello@astrenox.com",
  stillHaveQuestions: "Still have questions? Email us at hello@astrenox.com.",
} as const;

export const faqItems = [
  {
    question: "What kinds of companies do you work with?",
    answer:
      "We partner with mid-market and enterprise organizations serious about AI-first transformation, especially teams that need both strategy and hands-on execution.",
  },
  {
    question: "How do you identify the right AI use cases?",
    answer:
      "We start with business goals and constraints, then prioritize use cases by impact, feasibility, data readiness, and time-to-value to build a practical roadmap.",
  },
  {
    question: "Do you build, or only advise?",
    answer:
      "We do both. We align on strategy and deliver production-ready solutions with strong engineering practices: MLOps, data pipelines, evaluation, and governance.",
  },
  {
    question: "How long does an engagement typically take?",
    answer:
      "A focused assessment can take a few weeks. End-to-end delivery and scaling typically spans multiple phases across 8–16+ weeks depending on scope.",
  },
  {
    question: "Can you work with our internal teams?",
    answer:
      "Yes, collaboration is our default. We integrate with your engineering and business stakeholders, transfer knowledge, and set up repeatable processes.",
  },
  {
    question: "How do you handle security and compliance?",
    answer:
      "We design with security and governance from day one: access controls, data handling, auditability, model risk management, and alignment with your compliance requirements.",
  },
  {
    question: "How is Astrenox different from a traditional consultancy?",
    answer:
      "Traditional consultancies sell slides. We ship systems, outcome-based milestones, senior-only builders, and production or it didn't happen.",
  },
  {
    question: "Do you support staff augmentation or managed squads?",
    answer:
      "Yes. We offer individuals, managed squads, fractional leadership, and build-operate-transfer models, with shortlists in days and security-first onboarding.",
  },
];

export const ctaBanner = {
  eyebrow: "Stay on the right side of history",
  title: "Ready to build what's next?",
  description:
    "Deploy the Astrenox Intelligence Platform or engage our teams to ship search, agents, and automation, weeks to launch, we ship with you.",
  primaryCta: "Get started",
  secondaryCta: "View platform",
} as const;

export const footer = {
  headline: "Transition from architecture to production.",
  headlineAccent: "Ship systems, not slides.",
  tagline: "System Transformation Engine",
  description:
    "AI-first strategy and engineering partners helping teams modernize operations, build AI-native products, and deliver measurable outcomes at velocity.",
  contactEmail: "hello@astrenox.com",
  partnerEmail: "Prajwal@astrentech.com",
  phone: "+91 8384016763",
  address: "Noida, Uttar Pradesh, India",
  addressAlt: "Ghaziabad, Uttar Pradesh, India",
  legal: "AI Transformation · Engineering · Automations",
} as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/astrenox",
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com",
  },
  {
    label: "GitHub",
    href: "https://github.com",
  },
] as const;

export const careersSection = {
  label: "Careers & Talent",
  title: "Hire elite AI & engineering talent, on-demand",
  description:
    "Ship faster with pre-vetted builders, fractional leaders, and outcome-driven squads that plug into your roadmap from day one.",
} as const;

export const careerCategories = [
  {
    title: "AI/ML & GenAI",
    roles: "Applied AI Engineer, Prompt Engineer, RAG Specialist, MLOps, CV/NLP",
  },
  {
    title: "Data",
    roles: "Analytics Engineer, Data Engineer, BI Developer, Data Scientist",
  },
  {
    title: "Product & Design",
    roles: "Product Manager, Product Designer, UX Writer, Researcher",
  },
  {
    title: "Full-Stack & Platform",
    roles: "Frontend (React/Next), Backend (Node/Python/Go), API Engineer",
  },
  {
    title: "Cloud & DevOps",
    roles: "SRE, DevOps, Platform Engineer, Release/CI-CD",
  },
  {
    title: "Automation",
    roles: "Workflow/RPA Engineer, Integration Engineer, QA Automation",
  },
];

export const careerHighlights = [
  { title: "Shortlists in days", detail: "Always-warm bench across AI, data, and product." },
  { title: "Vetted for outcomes", detail: "Graded on delivery patterns, not LeetCode alone." },
  { title: "Pods or individuals", detail: "One specialist or a managed squad with PM and QA." },
  { title: "Outcome-based models", detail: "Tied to features and milestones, not hours alone." },
];

export const navLinks = [
  { label: "Capabilities", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Industries", href: "#trusted" },
  { label: "Careers", href: "#careers" },
  { label: "FAQ", href: "#faq" },
] as const;

export const footerNavLinks = [
  { label: "Capabilities", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
] as const;
