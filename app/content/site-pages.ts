/**
 * Full-page content migrated from https://astrean.vercel.app/
 */

export const navServices = [
  { label: "AI Transformation", href: "/services/ai-transformation" },
  { label: "AI Engineering", href: "/services/ai-engineering" },
  { label: "Intelligent Automations", href: "/services/intelligent-automations" },
  { label: "Digital & IT Consulting", href: "/services/digital-it-consulting" },
] as const;

export const navSolutions = [
  { label: "Intelligence Platform", href: "/platform" },
  { label: "Hire Talent", href: "/careers" },
  { label: "MVP Studio", href: "/services/mvp-studio" },
] as const;

/** Flat nav links (dropdown parents rendered separately in Navbar). */
export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Products", href: "/products/solvoris" },
  { label: "Industries", href: "/services/industries" },
  { label: "Research", href: "/research" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "Intelligence Platform", href: "/platform" },
  { label: "AI Transformation", href: "/services/ai-transformation" },
  { label: "AI Engineering", href: "/services/ai-engineering" },
  { label: "Intelligent Automations", href: "/services/intelligent-automations" },
  { label: "Digital & IT Consulting", href: "/services/digital-it-consulting" },
  { label: "Hire Talent", href: "/careers" },
  { label: "MVP Studio", href: "/services/mvp-studio" },
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/services/industries" },
  { label: "Products", href: "/products/solvoris" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  { label: "Platform", href: "/platform" },
  { label: "About", href: "/about" },
  { label: "AI Consulting", href: "/services/ai-consulting-advisory" },
  { label: "Products", href: "/products/solvoris" },
  { label: "Research", href: "/research" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalPages = {
  privacy: {
    title: "Privacy Policy",
    description:
      "Astrenox respects your privacy. We collect only information you provide through contact forms and consultations, used solely to respond to inquiries and deliver services.",
  },
  legal: {
    title: "Legal",
    description:
      "All content on this site is owned by Astrenox. Engagements are governed by mutual service agreements executed at project kickoff.",
  },
} as const;

export const serviceLinks = [
  {
    slug: "digital-it-consulting",
    title: "Digital & IT Consulting",
    description:
      "Strategic IT and engineering: AI-based solutions with human-centered design to unleash digital transformation.",
    href: "/services/digital-it-consulting",
  },
  {
    slug: "ai-engineering",
    title: "AI Engineering",
    description:
      "High-velocity engineering-as-a-service, production-ready AI systems without sacrificing quality.",
    href: "/services/ai-engineering",
  },
  {
    slug: "ai-transformation",
    title: "AI Transformation",
    description:
      "Strategic oversight and technical execution from AI-absent to AI-native, without traditional consultancy overhead.",
    href: "/services/ai-transformation",
  },
  {
    slug: "intelligent-automations",
    title: "Intelligent Automations",
    description:
      "Production-ready automations that plug into your tools, data, and teams, value from day one.",
    href: "/services/intelligent-automations",
  },
  {
    slug: "mvp-studio",
    title: "MVP Studio",
    description: "Launch your MVP in three weeks, from idea to live product with observability and handoff.",
    href: "/services/mvp-studio",
  },
  {
    slug: "industries",
    title: "Industries",
    description:
      "AI-first thinking for the world's most critical sectors, deep tech plus domain insight.",
    href: "/services/industries",
  },
] as const;

export const aboutPage = {
  hero: {
    eyebrow: "AI-first strategy & engineering",
    title:
      "Our mission is to help your business reach its potential, and end up on the right side of history, post-AI.",
    description:
      "Astrenox was founded on the belief that the AI supercycle is the most significant technological shift of our lifetime. We bridge the gap between strategic vision and production-grade execution.",
    primaryCta: "Request a consult",
    secondaryCta: "Explore services",
  },
  beliefs: [
    {
      num: "01",
      title: "AI is a technological supercycle",
      description:
        "This isn't a trend. It's a fundamental shift in how value is created and captured across every industry.",
    },
    {
      num: "02",
      title: "AI-absent to AI-first",
      description:
        "Survival requires a transition from being AI-absent to AI-integrated, and eventually AI-first in every operation.",
    },
    {
      num: "03",
      title: "Embrace AI or be outpaced",
      description:
        "The competitive advantage of the next decade belongs to those who operationalize intelligence at scale.",
    },
    {
      num: "04",
      title: "In-house capability gap",
      description:
        "Most companies lack the senior engineering talent required to integrate AI seamlessly. We are that capability.",
    },
  ],
  leadership: [
    {
      name: "Prajwal",
      role: "Managing Partner",
      bio: "Senior architect with a focus on enterprise AI systems and agentic workflows.",
    },
    {
      name: "Vipul Negi",
      role: "Technical Lead",
      bio: "Specialist in high-velocity engineering and modern stack transformation.",
    },
  ],
  hiringTeaser: {
    title: "Come make history",
    description:
      "We are looking for senior builders tired of corporate bloat who want to ship meaningful AI systems at high velocity. If you care about outcomes more than hours, we want to talk.",
    quote:
      "Joining Astrenox means sitting in the code that will define the next decade of enterprise productivity.",
    cta: "View careers",
    href: "/careers",
  },
  openings: [
    {
      title: "Senior AI Engineer",
      team: "Engineering",
      location: "Remote / Ghaziabad",
      compensation: "$80k – $120k",
    },
    {
      title: "Solutions Architect",
      team: "Consulting",
      location: "Remote",
      compensation: "$90k – $140k",
    },
    {
      title: "Product Manager (AI)",
      team: "Product",
      location: "Ghaziabad",
      compensation: "$70k – $110k",
    },
  ],
} as const;

export const servicesHub = {
  hero: {
    eyebrow: "Services",
    title: "AI-first delivery, enterprise-grade",
    description:
      "Discovery, engineering, transformation, automations, and talent, sequenced for measurable outcomes across your stack.",
  },
} as const;

export const aiEngineeringPage = {
  slug: "ai-engineering",
  hero: {
    title: "AI Engineering",
    description:
      "High-velocity engineering-as-a-service, without sacrificing quality. Astrenox engineers are builders first, specialized in deploying production-ready AI systems that scale.",
  },
  pillars: [
    { title: "Hire the best", description: "Top 1% engineering talent, senior builders who understand the full stack." },
    { title: "Use AI (a lot)", description: "We leverage AI to build AI, internal velocity multiplied by the same tools we deploy for you." },
    { title: "Charge on outcomes", description: "We bill for milestones. If the code doesn't work, we don't win." },
    { title: "Pay on outcomes", description: "Engineers are incentivized by your project's success, aligned culture, aligned goals." },
  ],
  whyNeedUs: [
    { title: "Hiring risks", description: "Avoid the 6-month hiring cycle and the risk of a bad technical fit." },
    { title: "Cost efficiency", description: "On-demand senior talent beats maintaining a bloated internal bench." },
    { title: "Velocity advantage", description: "We ship in days what takes internal teams months to scope." },
    { title: "Unwinding bad habits", description: "Best-in-class MLOps and engineering standards for your stack." },
  ],
  capabilities: [
    { title: "Application Development", description: "Full-stack AI-first apps with React, Next.js, and robust Python backends." },
    { title: "Fine-Tuning Models", description: "Customizing LLMs on proprietary data for domain-specific excellence." },
    { title: "Code Migration & Refactors", description: "Modernizing legacy systems to be AI-ready and performance-optimized." },
    { title: "Data Engineering & Analysis", description: "Pipelines and RAG architectures that fuel intelligent insights." },
    { title: "Custom Agentic Solutions", description: "Autonomous agents that reason, plan, and execute multi-step workflows." },
  ],
  engagement: [
    { title: "Dedicated Team", description: "A senior-only squad that learns your business and stack." },
    { title: "Sprint Cycles", description: "Weekly deployments and rapid feedback loops." },
    { title: "Project Management", description: "Full transparency via Jira/Linear and regular syncs." },
    { title: "Slack & Code", description: "Direct access to engineers via Slack and GitHub." },
  ],
} as const;

export const aiTransformationPage = {
  slug: "ai-transformation",
  hero: {
    title: "AI Transformation",
    description:
      "The cost of intelligence is falling toward zero. Astrenox provides strategic oversight and technical execution to move from AI-absent to AI-native, without traditional consultancy overhead.",
  },
  strategy: {
    title: "Strategy",
    description:
      "We conduct 30/60/90-day holistic and function-specific audits. The output is a comprehensive AI-Adoption Report and technical appendix, your implementation bible.",
  },
  framework: [
    {
      title: "Product Transformation",
      description:
        "Unicorn PMs and engineers build AI-first products. Outcome-based engagements accelerate your roadmap, not just add tickets.",
    },
    {
      title: "Process Transformation",
      description:
        "Surveys and stakeholder interviews identify high-friction processes, we implement intelligent automation with change management.",
    },
    {
      title: "People Transformation",
      description:
        "Bespoke curricula and hands-on workshops upskill your workforce for an AI-first world.",
    },
  ],
  whyNeedUs: [
    "Mission-critical oversight for your AI roadmap.",
    "Bridging the ownership gap between strategy and dev.",
    "Deep technical chops that slide-deck shops lack.",
    "Ensuring cultural buy-in across all business units.",
    "Avoiding common pitfalls of stalled AI pilots.",
    "Practitioner-led results that scale beyond prototypes.",
  ],
  offerings: [
    { title: "Process Survey", description: "Deep-dive analysis of operational friction points." },
    { title: "Executive Survey", description: "Aligning leadership on AI priorities and vision." },
    { title: "Expert Interviews", description: "Ground-truth insights from domain experts." },
    { title: "Custom Training", description: "Curricula designed for your stack and culture." },
    { title: "AI Tooling", description: "Selecting and configuring the right tools for your team." },
    { title: "AI Engineering", description: "Building the models and systems that power your future." },
  ],
} as const;

export const automationsPage = {
  slug: "intelligent-automations",
  hero: {
    title: "Intelligent Automations",
    description:
      "Production-ready AI automations that plug directly into your existing tools, data, and teams to drive value from day one.",
  },
  builds: [
    { title: "AI Chatbots", description: "Support, onboarding, leads, or advisory, web, Slack, WhatsApp, or SMS." },
    { title: "AI Assistants / Co-pilots", description: "Internal assistants on your knowledge base enforcing SOPs across sales, ops, and compliance." },
    { title: "Autonomous Agents", description: "Task decomposition via search, APIs, and databases for complex multi-step goals." },
    { title: "Workflow Automations", description: "Content generation, outbound sequencing, call summaries, and analytics pipelines." },
    { title: "Knowledge Search", description: "Permission-aware retrieval with live sync across enterprise data sources." },
    { title: "Document Automations", description: "RFP responses, proposals, reports, and analysis accelerators with precision." },
  ],
  howWeBuild: [
    { step: "1", title: "Proven Patterns", description: "Battle-tested templates and accelerators." },
    { step: "2", title: "Connect Data", description: "Sync with 30+ sources: Drive, Notion, Salesforce, HubSpot, and more." },
    { step: "3", title: "Compose Visually", description: "Visual orchestrator or robust SDK for complex logic." },
    { step: "4", title: "Best Models", description: "OpenAI, Anthropic, Google, Llama, and Mistral via a single API." },
    { step: "5", title: "Deploy Everywhere", description: "Web embed, share links, Slack, and messaging integrations." },
  ],
  outcomes: [
    { title: "Measurable Impact", description: "Track performance and ROI with built-in analytics dashboards." },
    { title: "Accuracy & Freshness", description: "Live-synced retrieval ensures your AI has the latest facts." },
    { title: "Enterprise Integration", description: "Production-ready triggers, actions, and robust API endpoints." },
  ],
  engagement: [
    { step: "01", title: "Discovery & Prioritization", description: "Identify high-impact use cases." },
    { step: "02", title: "Design & Orchestration", description: "Architect the agentic logic." },
    { step: "03", title: "Integration & Security", description: "Connect tools safely." },
    { step: "04", title: "Deployment & Enablement", description: "Go live and train teams." },
    { step: "05", title: "Monitor & Optimize", description: "Continuous improvement loops." },
  ],
} as const;

export const mvpStudioPage = {
  slug: "mvp-studio",
  hero: {
    title: "Launch your MVP in 3 weeks",
    description:
      "From idea to live product. Strategy, build, and first users delivered without chaos or rework.",
  },
  highlights: [
    "Clear scope confirmed within 48 hours",
    "Design, build, and deploy with end-to-end observability",
    "Handover playbook and a ready next-sprint backlog",
  ],
  stats: [
    { value: "20+", label: "Products shipped" },
    { value: "$10M+", label: "Capital raised by clients" },
    { value: "5+", label: "Acquisitions" },
    { value: "<14d", label: "Avg. time to first user" },
    { value: "60+", label: "NPS for delivery" },
  ],
  work: [
    {
      title: "Ops Copilot",
      description:
        "From spec to live product in 13 days. Forty pilot users in the first week through targeted outreach.",
    },
    {
      title: "Fintech Dashboard",
      description:
        "Version zero in two weeks. Two design partners converted to paying customers after guided trial.",
    },
    {
      title: "Creator Tools",
      description:
        "Low-code MVP validated core assumptions. Seed round within ninety days using product signals and retention.",
    },
  ],
  process: [
    {
      step: "1",
      title: "Define the vision",
      description: "Align on framing, jobs-to-be-done, and must-haves vs. later iterations.",
      output: "One-page spec, screen map, prioritized backlog",
    },
    {
      step: "2",
      title: "Build your MVP",
      description: "Design system, core flows, CI/CD, observability, and authentication.",
      output: "Deployed MVP, operational runbook",
    },
    {
      step: "3",
      title: "Launch and learn",
      description: "Beta rollout, funnel signals, and next-sprint prioritization from real usage.",
      output: "Post-launch report, v0.1 backlog",
    },
  ],
  included: [
    "Product strategy, UX flows, and UI kit",
    "Full-stack implementation (API, DB, App)",
    "Auth, Payments, Email, and Analytics",
    "Telemetry (logs, metrics, error tracking)",
    "Cloud or Vercel deployment with handoff",
    "Two-week warranty for critical fixes",
  ],
  pricing: {
    title: "MVP in 3 weeks",
    price: "starts from $1,500",
    description:
      "Best for well-scoped products with up to three core flows. Includes strategy workshop, design system, build, deploy, and handoff.",
    addons: [
      "Extra integrations",
      "Custom models or AI agents",
      "Complex data migrations",
      "SOC 2-ready foundation",
    ],
    contact: "prajwal@astrentech.com",
  },
  testimonials: [
    {
      quote:
        "Astrenox helped us turn a fuzzy concept into something users paid for within a month. Fast and structured.",
      author: "Founder, Ops Platform",
    },
    {
      quote: "We shipped on time and on budget. Instrumentation made the next steps obvious.",
      author: "Product Lead, Fintech",
    },
    {
      quote:
        "Fast and precise, they push for clarity and make the right trade-offs for pre-seed teams.",
      author: "CTO, Creator Tools",
    },
  ],
  faq: [
    {
      q: "What do you need from us?",
      a: "Founder time for workshops, a single decision maker, and access to existing assets and tools.",
    },
    {
      q: "Will it scale?",
      a: "Yes, clean modules, environment configuration, and CI from the first commit.",
    },
    {
      q: "What happens after launch?",
      a: "Retain us for weekly sprints or hand over with documentation and training.",
    },
    {
      q: "Do you support AI features?",
      a: "RAG, search, chat, assistants, and lightweight agents, the simplest path that proves value quickly.",
    },
  ],
} as const;

export const industriesPage = {
  slug: "industries",
  hero: {
    title: "Industry, transformed",
    description:
      "Deep tech plus domain insight to solve real constraints. AI-first thinking for the world's most critical sectors.",
  },
  stats: [
    { value: "11+", label: "Sectors covered" },
    { value: "30%", label: "Avg. efficiency gain" },
    { value: "Zero", label: "Technical debt goal" },
  ],
  process: [
    { step: "01", title: "Domain Discovery", description: "Map constraints, regulatory requirements, and high-leverage bottlenecks." },
    { step: "02", title: "Strategic Blueprint", description: "Vendor-agnostic AI architecture integrated with legacy infrastructure." },
    { step: "03", title: "Elite Engineering", description: "Custom agentic solutions and fine-tuned models in production." },
    { step: "04", title: "Operational Scaling", description: "Hands-on training and continuous optimization of the intelligence layer." },
  ],
  verticals: [
    {
      sector: "Financial Services & Fintech",
      metric: "30% faster processing",
      domains: ["Risk Modeling", "Compliance Automation", "Predictive Analytics"],
    },
    {
      sector: "Healthcare & Life Sciences",
      metric: "40% cost reduction",
      domains: ["RAG for Medical Data", "Clinical Flow Ops", "Patient Engagement Agents"],
    },
    {
      sector: "Retail & E-commerce",
      metric: "25% higher conversion",
      domains: ["Supply Chain AI", "Churn Prediction", "Visual Search"],
    },
    {
      sector: "Manufacturing & Automotive",
      metric: "20% lower downtime",
      domains: ["OEE Optimization", "Quality Inspection AI", "Legacy IoT Bridge"],
    },
    {
      sector: "Media & Entertainment",
      metric: "50% faster editing",
      domains: ["Automated Editing", "Metadata Extraction", "Engagement Forecasting"],
    },
    {
      sector: "Travel & Hospitality",
      metric: "15% RevPAR increase",
      domains: ["Revenue Management", "Multilingual Support", "Travel Concierge Agents"],
    },
    {
      sector: "Energy & Utilities",
      metric: "12% energy savings",
      domains: ["Smart Grid Analytics", "Asset Longevity", "Regulatory Reporting"],
    },
    {
      sector: "Telecommunications",
      metric: "22% churn reduction",
      domains: ["Network Auto-Scaling", "Billing Ops AI", "Customer Lifecycle Management"],
    },
    {
      sector: "Aerospace and Defence",
      metric: "Zero security breaches target",
      domains: ["Secure LLM Enclaves", "Predictive Maintenance", "Logistics Optimization"],
    },
    {
      sector: "Construction",
      metric: "18% margin uplift",
      domains: ["BIM Intelligence", "Worker Safety Vision", "Schedule Risk Analysis"],
    },
    {
      sector: "Public and Govt Sector",
      metric: "60% efficiency boost",
      domains: ["Citizen Support Portals", "Data Privacy Guardrails", "Workflow Democratization"],
    },
  ],
} as const;

export const researchLibrary = [
  {
    id: "future-proof-architecture",
    title: "Future-Proof Architecture",
    abstract:
      "Building systems that evolve with the rapidly changing AI landscape, vendor-agnostic by design.",
    field: "Platform Strategy",
    status: "Active",
    cta: "Discuss architecture",
  },
  {
    id: "vendor-agnostic",
    title: "Vendor-Agnostic Strategy",
    abstract: "The right model for the right task, across OpenAI, Anthropic, Google, Meta, Llama, and Gemini.",
    field: "Model Selection",
    status: "Active",
    cta: "Model assessment",
  },
  {
    id: "enterprise-governance",
    title: "Enterprise Security & Governance",
    abstract:
      "Resilient, observable, and governable AI platforms with access controls and auditability from day one.",
    field: "Governance",
    status: "Active",
    cta: "Security review",
  },
  {
    id: "orchestration",
    title: "Ecosystem Orchestration",
    abstract:
      "LangGraph, CrewAI, and n8n composed into observable platforms, not isolated model calls.",
    field: "Systems Integration",
    status: "Active",
    cta: "Integration plan",
  },
  {
    id: "applied-engineering",
    title: "Applied Engineering",
    abstract:
      "Fine-tuning, custom agents, workflow automations, knowledge search, and document intelligence in production.",
    field: "Applied AI",
    status: "Shipping",
    cta: "Scope a build",
  },
  {
    id: "transformation-audits",
    title: "Transformation Audits",
    abstract:
      "30/60/90-day holistic and function-specific audits with AI-Adoption Reports and technical appendices.",
    field: "Transformation",
    status: "Available",
    cta: "Book an audit",
  },
  {
    id: "openai-ecosystem",
    title: "OpenAI Ecosystem",
    abstract: "Leading generative AI capabilities and measurable value deployment patterns.",
    field: "Provider Research",
    status: "Monitoring",
    cta: "Provider fit",
  },
  {
    id: "anthropic-ecosystem",
    title: "Anthropic Ecosystem",
    abstract: "Ethical and safe deployment patterns for enterprise-grade assistant workloads.",
    field: "Provider Research",
    status: "Monitoring",
    cta: "Provider fit",
  },
  {
    id: "google-ecosystem",
    title: "Google AI & Cloud",
    abstract: "Advancements in AI research and cloud services for hybrid enterprise deployments.",
    field: "Provider Research",
    status: "Monitoring",
    cta: "Provider fit",
  },
  {
    id: "meta-ecosystem",
    title: "Meta AI",
    abstract: "Open-source model initiatives and enterprise adaptation pathways.",
    field: "Provider Research",
    status: "Monitoring",
    cta: "Provider fit",
  },
] as const;

export const researchPage = {
  hero: {
    eyebrow: "Research & Ecosystem",
    title: "We orchestrate the ecosystem, not just use it.",
    description:
      "Astrenox as systems integrator: OpenAI, Anthropic, Llama, Gemini, LangGraph, CrewAI, n8n → resilient, observable, governable platforms.",
  },
  disruption: {
    title: "You have a choice. Disrupt yourself, or be disrupted.",
    description:
      "The cost of intelligence is falling to zero. Those who wait for perfect will be outpaced by those who build for flow.",
  },
} as const;

export const projectsPage = {
  hero: {
    eyebrow: "Success Stories & Products",
    title: "Real stories, real results.",
    description:
      "Flagship platforms and production rollouts, how Astrenox helps leaders transform engineering and operations with AI-first thinking.",
  },
  flagship: [
    {
      title: "Solvoris",
      description:
        "The enterprise AI orchestration layer. Unify data, models, and workflows into a single, governable ecosystem.",
      href: "/contact",
    },
    {
      title: "Orzo",
      description:
        "The AI business copilot. Amplify productivity with instant search, proactive insights, and agentic workflows.",
      href: "/contact",
    },
  ],
  quotes: [
    {
      metric: "25%",
      label: "Decrease in per-project person hours",
      quote:
        "The speed of delivery shifted almost overnight. We aren't just shipping more, we're shipping better.",
    },
    {
      metric: "20%",
      label: "Decrease in time to launch",
      quote:
        "Astrenox didn't just give us a roadmap. They sat in the code with us until the vision was live.",
    },
  ],
} as const;

export const digitalItConsultingPage = {
  slug: "digital-it-consulting",
  hero: {
    title: "Digital & IT Consulting",
    description:
      "Strategic IT & engineering, data engineering, we combine cutting-edge AI-based solutions with human-centered design to unleash your digital transformation.",
  },
  dilemmas: [
    { title: "Technical Debt", description: "Accumulated debt hinders innovation and agility in responding to market changes." },
    { title: "Legacy Systems", description: "Outdated systems are costly to maintain and hard to integrate with modern solutions." },
    { title: "Talent Gaps", description: "Finding and retaining skilled professionals for digital initiatives is increasingly challenging." },
    { title: "Security Risks", description: "Cyber threats and compliance challenges require robust security measures." },
  ],
  blueprint: [
    { title: "Strategic Roadmap", description: "Define your digital vision and roadmap aligned with business objectives." },
    { title: "Technology Stack Design", description: "Select and design the optimal technology stack for your goals." },
    { title: "AI-First Architecture", description: "Architectures that leverage AI capabilities from the ground up." },
  ],
  build: [
    { title: "Custom Software Development", description: "Scalable, secure applications tailored to your requirements." },
    { title: "Application Modernization", description: "Transform outdated systems into modern, maintainable solutions." },
    { title: "DevOps & CI/CD", description: "Continuous integration and deployment for faster delivery." },
    { title: "Data & AI Engineering", description: "Robust data pipelines and AI infrastructure for intelligent insights." },
  ],
  services: [
    { title: "Strategy & Roadmapping", description: "Digital vision and strategic roadmap for transformation." },
    { title: "Custom Application Development", description: "Modern, secure applications using best practices." },
    { title: "Legacy System Modernization", description: "Efficient, maintainable replacements for outdated systems." },
    { title: "Cloud & Infrastructure Modernization", description: "Cloud migration optimized for scale and cost." },
    { title: "AI Development & Integration", description: "AI solutions that enhance capabilities and decision-making." },
  ],
  results: [
    { title: "Lower TCO", description: "Optimized operations and efficient resource utilization." },
    { title: "Higher Release Frequency", description: "Agile practices and automated pipelines accelerate time-to-market." },
    { title: "Stronger Security", description: "Industry-leading practices and compliance frameworks." },
    { title: "Faster Innovation", description: "Modern tools and methodologies for continuous innovation." },
  ],
  cta: {
    title: "Ready to transform your technology stack?",
    description:
      "Let's discuss how we unlock your full potential with AI-first digital transformation.",
    button: "Transform your technology stack",
  },
} as const;

export const careersPage = {
  hero: {
    title: "Hire elite AI & engineering talent, on-demand",
    description:
      "Ship faster with pre-vetted builders, fractional leaders, and outcome-driven squads that plug into your roadmap from day one.",
  },
  impactSnapshots: [
    {
      metric: "30% faster resolution",
      title: "Support Copilot",
      description: "Retrieval-augmented workflows for GenAI support.",
    },
    {
      metric: "Trusted by Finance",
      title: "Data Revamp",
      description: "Migrated to modern ELT + semantic layer.",
    },
    {
      metric: "Lighthouse 95+",
      title: "Frontend Push",
      description: "20% higher conversion after two-week sprint.",
    },
  ],
  valueProps: [
    { title: "Shortlists in days", description: "Always-warm bench across AI, data, and product." },
    { title: "Vetted for outcomes", description: "Graded on real delivery patterns, not just LeetCode." },
    { title: "Pods or individuals", description: "Single specialist or managed squad with PM and QA." },
    { title: "Time-zone coverage", description: "India, EMEA, and US overlap windows." },
    { title: "Security-first", description: "NDAs, IP assignment, and audited workflows." },
    { title: "Aligned incentives", description: "Outcome-based models tied to features, not hours." },
  ],
  howItWorks: [
    { step: "01", title: "Intake & Design", description: "Scope outcomes, skills, and budget in 24–48h." },
    { step: "02", title: "Shortlist", description: "Receive 3–5 pre-vetted fits with delivery notes." },
    { step: "03", title: "Trial Sprint", description: "Optional one-week pilot to validate velocity." },
    { step: "04", title: "Onboard & Scale", description: "Seamless ramp-up as your roadmap grows." },
  ],
  vetting: [
    "Technical screen, systems thinking under constraints",
    "Hands-on build, repo-based domain challenges",
    "Pair programming, collaboration and framing",
    "Code review, maintainability and observability",
    "Delivery behaviors, estimation and PR discipline",
    "References, verified manager track record",
  ],
  engagementModels: [
    { title: "Staff Augmentation", description: "1–3 experts embedded into your team." },
    { title: "Managed Squads", description: "Outcome-based pods with sprint commitments." },
    { title: "Fractional Leadership", description: "Part-time CTO or Architect to shape direction." },
    { title: "Build-Operate-Transfer", description: "We build the team and transition it to you." },
  ],
  slas: [
    { title: "Response SLA", description: "Shortlist within 3–5 business days for common roles." },
    { title: "Continuity", description: "Rapid replacement if availability or needs change." },
    { title: "Quality Gates", description: "Periodic code audits and velocity reviews." },
    { title: "IP & Security", description: "Standard assignment agreements and environment isolation." },
  ],
  pricing: [
    { title: "Individuals", detail: "Monthly retainer billed per role seniority." },
    { title: "Squads", detail: "Outcome-based, tied to features and story points." },
    { title: "Fractional Leaders", detail: "Fixed weekly allocation blocks." },
  ],
  faq: [
    { q: "How fast can we start?", a: "Often within a week after intake. Complex roles may need longer." },
    { q: "Can you match our stack and rituals?", a: "Yes, your tracker, your stand-ups, plus our quality gates." },
    { q: "Do you provide time-zone overlap?", a: "We staff to your overlap requirement during intake." },
    { q: "What if the fit isn't right?", a: "We replace quickly and help stabilize the roadmap." },
    { q: "Can you help define the role?", a: "Most requests start with outcomes, then skills." },
    { q: "Do you support security reviews?", a: "Vendor assessments, onboarding artifacts, and access controls." },
  ],
} as const;

export const contactPage = {
  hero: {
    eyebrow: "CONTACT US",
    title: "Transition from Architecture to Production",
    description:
      "Partner with our engineers to evaluate your system requirements, audit data dependencies, and deploy secure AI infrastructure tailored to your core business operations.",
  },
  protocol:
    "Enterprise Advisory Protocol: Every discovery session is led directly by a senior architect, not a sales representative. All technical audits and system disclosures are strictly protected by a mutual NDA.",
  primaryCta: "Schedule Architecture Scoping",
  secondaryCta: "Submit Technical Requirements Specs",
  discovery: {
    title: "Technical Discovery",
    description:
      "Direct Calendar Sync, Book a 30-minute scoping session to analyze your infrastructure challenges and outline specific engineering requirements.",
    durationLabel: "30-minute scoping session",
  },
  inbound: {
    title: "Submit Technical Requirements Specs",
  },
  channels: [
    {
      label: "Contact",
      value: "prajwal@astrentech.com",
      href: "mailto:prajwal@astrentech.com",
    },
    {
      label: "Number",
      value: "+91 8384016763",
      href: "tel:+918384016763",
    },
  ],
  headquarters: {
    title: "Address",
    address: "C-18, Sector 105, Noida",
    hours: "IST (UTC+5:30) | Monday – Friday",
  },
  timeSlots: [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
  ],
  inquiryTypes: [
    "Architecture Scoping",
    "Submit Technical Requirements Specs",
    "Partnership",
    "General Inquiry",
  ],
} as const;

export const methodology = {
  partA: {
    title: "Find the bottleneck. Focus the force.",
    description:
      "We don't just add AI, we solve for flow. By analyzing your whole system, from latency to failure modes, we identify constraints holding you back. Maximizing leverage at the constraint unlocks step-change ROI.",
    quote: "Maximizing leverage at the constraint is how we unlock ROI.",
  },
} as const;

export const partnerLogos = [
  "OpenAI",
  "Anthropic",
  "Google",
  "Meta",
  "AWS",
  "Microsoft",
  "Snowflake",
  "Databricks",
] as const;
