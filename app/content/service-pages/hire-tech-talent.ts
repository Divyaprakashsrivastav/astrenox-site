import type { ServicePageContent } from "./types";

export const hireTechTalentContent: ServicePageContent = {
  metadata: {
    title: "Hire Tech Talent & Embedded Teams | Astrenox",
    description:
      "Senior engineers, ML specialists, and DevOps squads embedded in your team, vetted, accountable, and production-ready from week one.",
  },
  hero: {
    label: "Digital Consulting",
    title: "Elite Engineers,\nEmbedded On Demand.",
    subtitle:
      "Scale your engineering capacity with senior talent that integrates into your workflows, standards, and delivery cadence, not a disconnected vendor bench.",
    primaryCta: "Request Talent Shortlist",
    secondaryCta: "View Engagement Model",
    primaryHref: "/contact",
    secondaryHref: "#workflow",
  },
  overview: {
    title: "Embedded teams built for enterprise velocity",
    paragraphs: [
      "Astrenox provides embedded engineering squads for organizations that need senior capacity without the overhead of a six-month hiring cycle. Our practitioners join your standups, PR reviews, and architecture forums as an extension of your team.",
      "Every engineer is vetted through live technical assessments, system design interviews, and reference checks focused on production experience, not algorithm trivia. We staff frontend, backend, ML, data, and platform roles at staff and principal levels.",
      "Engagements are structured with clear SLAs, timezone alignment, and knowledge transfer milestones. Whether you need a single principal architect or a full product squad, we match skills to your stack and domain.",
      "From fintech compliance workflows to healthcare data platforms, our embedded teams have supported Fortune 500 transformations and high-growth scale-ups with the same rigor and accountability.",
    ],
  },
  capabilities: {
    label: "Capabilities",
    title: "Talent across every layer of the stack",
    items: [
      {
        title: "Staff Augmentation",
        description: "Individual senior engineers embedded in your sprints with full accountability to your engineering manager.",
        icon: "Users",
      },
      {
        title: "Dedicated Squads",
        description: "Cross-functional pods with tech lead, engineers, and QA aligned to a product outcome or platform initiative.",
        icon: "Layers",
      },
      {
        title: "ML & AI Specialists",
        description: "Practitioners experienced in LLM integration, MLOps, computer vision, and production model governance.",
        icon: "Brain",
      },
      {
        title: "Platform & DevOps",
        description: "Infrastructure engineers for Kubernetes, CI/CD, observability, and cloud cost optimization.",
        icon: "Cloud",
      },
      {
        title: "Technical Leadership",
        description: "Interim CTOs, principal architects, and engineering managers to stabilize delivery and mentor internal teams.",
        icon: "Target",
      },
      {
        title: "Rapid Team Spin-Up",
        description: "Shortlist delivery within 5 business days with engineers who can contribute meaningfully in week one.",
        icon: "Rocket",
      },
    ],
  },
  workflow: {
    id: "workflow",
    label: "Process",
    title: "Engagement workflow",
    steps: [
      {
        name: "Scope",
        description: "Define roles, seniority, tech stack, timezone requirements, and integration model with your engineering org.",
      },
      {
        name: "Shortlist",
        description: "Receive curated profiles within five business days, each vetted for domain fit and communication standards.",
      },
      {
        name: "Interview",
        description: "Conduct final interviews with your team. We facilitate technical deep-dives and culture alignment sessions.",
      },
      {
        name: "Embed",
        description: "Engineers onboard to your tooling, rituals, and security protocols with a structured 2-week ramp plan.",
      },
      {
        name: "Scale",
        description: "Expand, rotate, or transition teams with continuity planning and documented knowledge transfer.",
      },
    ],
  },
  stack: {
    label: "Technology",
    title: "Stacks our engineers ship in production",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Go",
      "Node.js",
      "Kubernetes",
      "AWS",
      "TensorFlow",
      "PyTorch",
      "PostgreSQL",
      "Terraform",
    ],
  },
  outcomes: {
    label: "Outcomes",
    title: "Measurable impact for engineering leaders",
    items: [
      { value: 5, suffix: " days", label: "Avg. Shortlist Delivery" },
      { value: 94, suffix: "%", label: "Placement Retention" },
      { value: 200, suffix: "+", label: "Engineers Deployed" },
      { value: 48, suffix: "hr", label: "Replacement Guarantee" },
    ],
  },
  projects: {
    label: "Portfolio",
    title: "Embedded team engagements",
    items: [
      {
        name: "Payments Platform Scale-Up",
        industry: "Financial Services",
        timeline: "14 months embedded",
        stack: ["Java", "Kubernetes", "AWS"],
        outcome: "Scaled transaction processing capacity 4x while reducing incident rate by 62%.",
      },
      {
        name: "Health Data Integration Squad",
        industry: "Healthcare",
        timeline: "9 months embedded",
        stack: ["Python", "FHIR", "Azure"],
        outcome: "Delivered HIPAA-compliant data pipeline connecting 12 EHR systems ahead of regulatory deadline.",
      },
      {
        name: "ML Platform Engineering Pod",
        industry: "Retail",
        timeline: "6 months embedded",
        stack: ["Python", "Kubeflow", "GCP"],
        outcome: "Reduced model deployment cycle from 3 weeks to 2 days with automated governance gates.",
      },
    ],
  },
  industries: {
    label: "Industries",
    title: "Sectors we support",
    items: [
      { name: "Financial Services", icon: "Landmark" },
      { name: "Healthcare", icon: "HeartPulse" },
      { name: "Technology", icon: "Cpu" },
      { name: "Retail & E-Commerce", icon: "Globe" },
      { name: "Manufacturing", icon: "Factory" },
      { name: "Logistics", icon: "Truck" },
      { name: "Energy", icon: "Zap" },
      { name: "Public Sector", icon: "Building2" },
    ],
  },
  testimonials: {
    label: "Testimonials",
    title: "What engineering leaders say",
    items: [
      {
        quote:
          "We needed three senior backend engineers in under two weeks. Astrenox delivered vetted candidates who passed our architecture review on day one and shipped production code by week two.",
        author: "David Park",
        role: "VP Engineering, Clearwater Financial",
      },
      {
        quote:
          "The embedded squad felt like our own team, they adopted our coding standards, participated in on-call, and left comprehensive documentation when we transitioned to internal hires.",
        author: "Rachel Morrison",
        role: "CTO, NovaHealth Systems",
      },
      {
        quote:
          "Unlike staffing agencies, Astrenox understood our compliance requirements and staffed engineers with prior regulated-industry experience. That context saved months of ramp time.",
        author: "Marcus Webb",
        role: "Director of Platform, Atlas Retail Group",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Hiring questions",
    items: [
      {
        q: "How quickly can engineers start?",
        a: "Most embedded engineers begin within 10–15 business days after final interview approval. Expedited placements are available for critical roles.",
      },
      {
        q: "What seniority levels do you staff?",
        a: "We focus on mid-senior through principal levels. Every candidate has shipped production systems and can operate with minimal supervision.",
      },
      {
        q: "Do engineers work in our timezone?",
        a: "Yes. We align coverage to your core working hours across US, EU, and APAC with overlap windows defined in the engagement agreement.",
      },
      {
        q: "What if an engineer isn't the right fit?",
        a: "We provide a 48-hour replacement guarantee. If fit issues arise in the first 30 days, we replace at no additional sourcing cost.",
      },
      {
        q: "Can we convert embedded engineers to full-time hires?",
        a: "Yes. Conversion terms are outlined upfront with transparent fee structures, many clients use embedded engagements as a trial period for permanent hires.",
      },
    ],
  },
  cta: {
    title: "Scale Your Engineering Team Today.",
    subtitle:
      "Tell us your stack, timeline, and team structure. We'll deliver a curated shortlist of senior engineers ready to embed within days.",
    primaryCta: "Book Discovery Call",
    secondaryCta: "Download Capability Deck",
    primaryHref: "/contact",
    secondaryHref: "/contact",
  },
};
