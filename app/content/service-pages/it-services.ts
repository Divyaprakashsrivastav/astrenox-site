import type { ServicePageContent } from "./types";

export const itServicesContent: ServicePageContent = {
  metadata: {
    title: "IT Services & Consulting | Astrenox",
    description:
      "Digital transformation, cloud strategy, and enterprise IT consulting that aligns technology investments with measurable business outcomes.",
  },
  hero: {
    label: "Digital Consulting",
    title: "Transform IT Into\na Growth Engine.",
    subtitle:
      "Strategic IT consulting and managed services for enterprises modernizing legacy systems, migrating to cloud, and building digital operating models.",
    primaryCta: "Schedule IT Assessment",
    secondaryCta: "Explore Services",
    primaryHref: "/contact",
    secondaryHref: "#workflow",
  },
  overview: {
    title: "IT consulting for the AI era",
    paragraphs: [
      "Astrenox partners with CIOs and technology leaders to modernize IT estates without disrupting business continuity. We combine strategy, architecture, and hands-on delivery in a single accountable engagement model.",
      "Our practice spans cloud migration, application rationalization, integration architecture, and IT operating model design. Every recommendation ties to a business metric—cost reduction, time-to-market, or risk mitigation.",
      "We don't deliver shelfware strategy decks. Our consultants embed with your teams to execute roadmaps, transfer knowledge, and leave behind capabilities your organization can sustain independently.",
      "From mid-market firms outgrowing their infrastructure to global enterprises consolidating data centers, we bring the same rigor: assess, architect, implement, and optimize with clear governance.",
    ],
  },
  capabilities: {
    label: "Capabilities",
    title: "Comprehensive IT services",
    items: [
      {
        title: "Cloud Strategy & Migration",
        description: "Assess, plan, and execute cloud migrations with workload prioritization and cost modeling.",
        icon: "Cloud",
      },
      {
        title: "Enterprise Architecture",
        description: "Target-state architectures, integration patterns, and technology standards for scalable growth.",
        icon: "Layers",
      },
      {
        title: "Legacy Modernization",
        description: "Incremental modernization of monoliths via strangler patterns, APIs, and event-driven decomposition.",
        icon: "Server",
      },
      {
        title: "IT Operating Model",
        description: "Org design, vendor management frameworks, and FinOps practices for technology governance.",
        icon: "Workflow",
      },
      {
        title: "Integration & APIs",
        description: "Enterprise service buses, API gateways, and data fabric architectures connecting siloed systems.",
        icon: "Network",
      },
      {
        title: "Managed Services",
        description: "Ongoing monitoring, incident management, and optimization for cloud and hybrid environments.",
        icon: "Monitor",
      },
    ],
  },
  workflow: {
    id: "workflow",
    label: "Process",
    title: "IT transformation workflow",
    steps: [
      {
        name: "Assess",
        description: "Inventory applications, infrastructure, and processes. Identify quick wins and structural constraints.",
      },
      {
        name: "Strategize",
        description: "Define target architecture, migration waves, and investment priorities with executive alignment.",
      },
      {
        name: "Plan",
        description: "Build detailed roadmaps with dependencies, resource plans, and risk mitigation strategies.",
      },
      {
        name: "Execute",
        description: "Deliver migrations and modernizations in phases with continuous stakeholder communication.",
      },
      {
        name: "Optimize",
        description: "Measure outcomes, tune performance, and establish ongoing governance and FinOps practices.",
      },
    ],
  },
  stack: {
    label: "Technology",
    title: "Enterprise technology stack",
    items: [
      "AWS",
      "Azure",
      "GCP",
      "VMware",
      "Kubernetes",
      "Terraform",
      "ServiceNow",
      "SAP",
      "MuleSoft",
      "Datadog",
      "Splunk",
      "PostgreSQL",
    ],
  },
  outcomes: {
    label: "Outcomes",
    title: "Business outcomes we deliver",
    items: [
      { value: 40, suffix: "%", label: "Avg. Cloud Cost Reduction" },
      { value: 60, suffix: "%", label: "Faster Release Cycles" },
      { value: 50, suffix: "+", label: "Enterprise Transformations" },
      { value: 99, suffix: ".5%", label: "Migration Success Rate" },
    ],
  },
  projects: {
    label: "Portfolio",
    title: "Featured IT engagements",
    items: [
      {
        name: "Global Cloud Migration",
        industry: "Insurance",
        timeline: "18 months",
        stack: ["Azure", "Kubernetes", "Terraform"],
        outcome: "Migrated 340 workloads to cloud, reducing data center costs by $4.2M annually.",
      },
      {
        name: "ERP Integration Platform",
        industry: "Manufacturing",
        timeline: "10 months",
        stack: ["MuleSoft", "SAP", "AWS"],
        outcome: "Unified 14 legacy systems into a single integration layer, cutting order processing errors by 71%.",
      },
      {
        name: "IT Operating Model Redesign",
        industry: "Financial Services",
        timeline: "6 months",
        stack: ["ServiceNow", "FinOps", "Agile"],
        outcome: "Reduced vendor spend 22% while improving SLA attainment from 94% to 99.7%.",
      },
    ],
  },
  industries: {
    label: "Industries",
    title: "Industries we serve",
    items: [
      { name: "Financial Services", icon: "Landmark" },
      { name: "Healthcare", icon: "HeartPulse" },
      { name: "Manufacturing", icon: "Factory" },
      { name: "Insurance", icon: "ShieldCheck" },
      { name: "Retail", icon: "Globe" },
      { name: "Energy", icon: "Zap" },
      { name: "Telecommunications", icon: "Network" },
      { name: "Public Sector", icon: "Building2" },
    ],
  },
  testimonials: {
    label: "Testimonials",
    title: "What CIOs say",
    items: [
      {
        quote:
          "Astrenox didn't just hand us a cloud strategy—they sat in our war rooms during migration weekends and owned outcomes alongside our internal team.",
        author: "Catherine Walsh",
        role: "CIO, Guardian Insurance Group",
      },
      {
        quote:
          "Our legacy modernization had stalled for two years. Their strangler-fig approach let us deliver value every quarter instead of waiting for a big-bang cutover.",
        author: "Robert Kim",
        role: "VP Technology, Precision Manufacturing",
      },
      {
        quote:
          "The FinOps framework they implemented gave our CFO visibility into cloud spend that we never had. Savings funded our AI initiatives.",
        author: "Laura Mendez",
        role: "CTO, Horizon Financial",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "IT consulting questions",
    items: [
      {
        q: "How do you approach legacy system modernization?",
        a: "We use incremental patterns—API facades, event extraction, and phased migrations—that deliver value without big-bang risk. Each wave has clear rollback plans.",
      },
      {
        q: "Do you work with multi-cloud environments?",
        a: "Yes. We design for portability where it matters and optimize for native services where it doesn't. Governance spans all cloud providers.",
      },
      {
        q: "Can you support ongoing operations after transformation?",
        a: "Our managed services practice covers monitoring, incident response, patching, and continuous optimization with defined SLAs.",
      },
      {
        q: "How do you measure transformation success?",
        a: "Every engagement defines KPIs upfront—cost, velocity, reliability, and user satisfaction—with dashboards tracking progress monthly.",
      },
      {
        q: "Do you integrate AI into IT transformation roadmaps?",
        a: "Absolutely. We assess AI readiness, identify high-value use cases, and ensure infrastructure can support ML workloads at scale.",
      },
    ],
  },
  cta: {
    title: "Modernize Your IT Foundation.",
    subtitle:
      "Book an IT assessment with our consulting leads. We'll review your current state, identify transformation opportunities, and outline a phased roadmap.",
    primaryCta: "Book Discovery Call",
    secondaryCta: "Download Capability Deck",
    primaryHref: "/contact",
    secondaryHref: "/contact",
  },
};
