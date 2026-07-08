import type { ServicePageContent } from "./types";

export const centerOfExcellenceContent: ServicePageContent = {
  metadata: {
    title: "Center of Excellence (CoE) | Astrenox",
    description:
      "Establish AI, data, and platform Centers of Excellence with governance frameworks, capability building, and organizational design for enterprise scale.",
  },
  hero: {
    label: "Digital Consulting",
    title: "Build Your Center\nof Excellence.",
    subtitle:
      "Design and launch Centers of Excellence for AI, data, and platform engineering—with governance, standards, and enablement that transform how your organization innovates.",
    primaryCta: "Start CoE Discovery",
    secondaryCta: "View Framework",
    primaryHref: "/contact",
    secondaryHref: "#workflow",
  },
  overview: {
    title: "Centers of Excellence that drive lasting change",
    paragraphs: [
      "A Center of Excellence is more than a team—it's an organizational capability that sets standards, builds skills, and governs innovation at scale. Astrenox helps enterprises design and launch CoEs that outlast individual projects and leadership changes.",
      "Our practice covers CoE charter development, operating models, governance frameworks, technology standards, and enablement programs. We work with C-suite sponsors to align CoE missions with business strategy and measurable outcomes.",
      "Whether you're establishing an AI CoE, a data platform guild, or an enterprise architecture board, we provide the structure, playbooks, and initial staffing to make it operational within quarters—not years.",
      "From global banks building AI governance to manufacturers standardizing IoT platforms, we bring patterns that balance innovation velocity with enterprise risk management.",
    ],
  },
  capabilities: {
    label: "Capabilities",
    title: "CoE design and launch services",
    items: [
      {
        title: "CoE Strategy & Charter",
        description: "Mission definition, stakeholder alignment, funding models, and success metrics for sustainable CoE operations.",
        icon: "Target",
      },
      {
        title: "Governance Frameworks",
        description: "Decision rights, review boards, architecture standards, and exception processes for controlled innovation.",
        icon: "Scale",
      },
      {
        title: "Capability Building",
        description: "Training curricula, certification paths, and mentorship programs that upskill internal teams.",
        icon: "BookOpen",
      },
      {
        title: "Technology Standards",
        description: "Reference architectures, approved technology lists, and pattern libraries for consistent implementation.",
        icon: "Layers",
      },
      {
        title: "Knowledge Management",
        description: "Playbooks, runbooks, and internal portals that capture institutional knowledge and best practices.",
        icon: "Database",
      },
      {
        title: "AI & Data Governance",
        description: "Model risk frameworks, data lineage standards, and ethical AI policies for regulated environments.",
        icon: "Brain",
      },
    ],
  },
  workflow: {
    id: "workflow",
    label: "Process",
    title: "CoE establishment workflow",
    steps: [
      {
        name: "Discover",
        description: "Assess organizational readiness, stakeholder landscape, and existing capabilities across business units.",
      },
      {
        name: "Design",
        description: "Define CoE charter, operating model, governance structure, and initial priority initiatives.",
      },
      {
        name: "Staff",
        description: "Identify CoE leadership, core team, and extended community of practice members.",
      },
      {
        name: "Launch",
        description: "Publish standards, deliver initial enablement programs, and run pilot initiatives demonstrating value.",
      },
      {
        name: "Scale",
        description: "Expand adoption, refine governance based on feedback, and transition to self-sustaining operations.",
      },
    ],
  },
  stack: {
    label: "Technology",
    title: "CoE platform stack",
    items: [
      "Confluence",
      "Jira",
      "ServiceNow",
      "MLflow",
      "Databricks",
      "Terraform",
      "Backstage",
      "GitHub",
      "Power BI",
      "Collibra",
      "OpenAI",
      "Kubernetes",
    ],
  },
  outcomes: {
    label: "Outcomes",
    title: "CoE impact metrics",
    items: [
      { value: 12, suffix: "+", label: "CoEs Established" },
      { value: 85, suffix: "%", label: "Adoption Rate Year One" },
      { value: 3, suffix: "x", label: "Faster Standard Deployment" },
      { value: 40, suffix: "%", label: "Reduction in Shadow IT" },
    ],
  },
  projects: {
    label: "Portfolio",
    title: "Featured CoE engagements",
    items: [
      {
        name: "Enterprise AI CoE",
        industry: "Financial Services",
        timeline: "6 months",
        stack: ["MLflow", "Governance", "Training"],
        outcome: "Launched AI CoE governing 23 models with standardized risk assessment and approval workflows.",
      },
      {
        name: "Data Platform Guild",
        industry: "Retail",
        timeline: "5 months",
        stack: ["Databricks", "Collibra", "Terraform"],
        outcome: "Unified data practices across 8 business units, reducing duplicate pipelines by 54%.",
      },
      {
        name: "Cloud Platform CoE",
        industry: "Healthcare",
        timeline: "4 months",
        stack: ["Kubernetes", "Backstage", "Terraform"],
        outcome: "Established self-service platform used by 120+ engineers with 99% compliance to security standards.",
      },
    ],
  },
  industries: {
    label: "Industries",
    title: "Sectors we establish CoEs in",
    items: [
      { name: "Financial Services", icon: "Landmark" },
      { name: "Healthcare", icon: "HeartPulse" },
      { name: "Manufacturing", icon: "Factory" },
      { name: "Retail", icon: "Globe" },
      { name: "Energy", icon: "Zap" },
      { name: "Telecommunications", icon: "Network" },
      { name: "Government", icon: "Building2" },
      { name: "Insurance", icon: "ShieldCheck" },
    ],
  },
  testimonials: {
    label: "Testimonials",
    title: "What executives say",
    items: [
      {
        quote:
          "Our AI CoE went from a PowerPoint concept to an operational body in five months. They defined governance our board approved and engineers actually follow.",
        author: "Richard Hayes",
        role: "Chief Data Officer, First Meridian Bank",
      },
      {
        quote:
          "The capability matrix they built showed us exactly where our gaps were. We've since trained 200 engineers through their certification program.",
        author: "Yuki Tanaka",
        role: "SVP Technology, OmniRetail Global",
      },
      {
        quote:
          "Shadow IT was our biggest risk. The platform CoE gave teams a governed path to self-service that satisfied both developers and security.",
        author: "Patricia Gomez",
        role: "CIO, National Health Network",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Center of Excellence questions",
    items: [
      {
        q: "What types of CoEs do you help establish?",
        a: "AI/ML, data platform, cloud/platform engineering, enterprise architecture, and DevOps CoEs—each tailored to your organizational context.",
      },
      {
        q: "How long does it take to launch a CoE?",
        a: "Most CoEs reach operational status in 4–6 months, with initial standards published and pilot initiatives demonstrating value within the first quarter.",
      },
      {
        q: "How do you ensure adoption across business units?",
        a: "We design CoEs with distributed champions, executive sponsorship, and quick-win pilots that prove value before mandating standards.",
      },
      {
        q: "Can you help staff the CoE initially?",
        a: "Yes. We provide interim leadership and core team members while recruiting and training your permanent CoE staff.",
      },
      {
        q: "How do CoEs balance innovation and governance?",
        a: "Our frameworks include innovation sandboxes, tiered approval processes, and exception paths—governance that enables speed rather than blocking it.",
      },
    ],
  },
  cta: {
    title: "Launch Your Center of Excellence.",
    subtitle:
      "Schedule a CoE discovery workshop with our organizational design leads. We'll assess readiness, propose a charter, and outline a launch roadmap.",
    primaryCta: "Book Discovery Call",
    secondaryCta: "Download Capability Deck",
    primaryHref: "/contact",
    secondaryHref: "/contact",
  },
};
