export const mvpStudioContent = {
  hero: {
    label: "Digital Consulting",
    title: "Build Your MVP in Weeks,\nNot Months.",
    subtitle:
      "Launch investor-ready digital products with a senior engineering team focused on speed, architecture and scalability.",
    primaryCta: "Start Your MVP",
    secondaryCta: "View Process",
    primaryHref: "/contact",
    secondaryHref: "#process",
  },
  about: {
    title: "What is MVP Studio",
    paragraphs: [
      "MVP Studio is Astrenox's accelerated product engineering program for enterprises and funded startups that need to validate ideas in market—not in slide decks.",
      "We embed senior architects, product engineers, and delivery leads who have shipped production systems across fintech, healthtech, and enterprise SaaS. Every engagement is structured for clarity, velocity, and technical debt you won't regret later.",
      "From discovery workshops to production deployment, we own the full stack: product definition, UX flows, backend services, cloud infrastructure, and observability. You get a launch-ready MVP with documentation, handoff, and a roadmap for scale.",
      "Whether you're preparing for a Series A, testing a new revenue line, or replacing legacy workflows, MVP Studio compresses months of hiring and alignment into a single accountable delivery motion.",
    ],
    features: [
      {
        title: "Rapid Validation",
        description: "Test hypotheses with real users in weeks using production-grade builds, not prototypes that break under load.",
        icon: "Zap" as const,
      },
      {
        title: "Senior Engineers",
        description: "Work directly with staff-level engineers who have shipped at scale—no junior bench, no handoffs to offshore teams.",
        icon: "Users" as const,
      },
      {
        title: "Production Ready",
        description: "Every deliverable includes CI/CD, monitoring, security baselines, and deployment runbooks from day one.",
        icon: "ShieldCheck" as const,
      },
      {
        title: "Scalable Architecture",
        description: "Modular systems designed to evolve into full products without costly rewrites when traction arrives.",
        icon: "Layers" as const,
      },
    ],
  },
  process: {
    id: "process",
    label: "Process",
    title: "Development Process",
    steps: [
      {
        name: "Discover",
        description: "Align on problem space, success metrics, and technical constraints with stakeholders and engineering.",
      },
      {
        name: "Design",
        description: "Translate requirements into flows, system architecture, and a phased delivery plan with clear milestones.",
      },
      {
        name: "Develop",
        description: "Build in two-week sprints with weekly demos, integrated QA, and continuous deployment to staging.",
      },
      {
        name: "Validate",
        description: "Run structured user testing, performance benchmarks, and security review before production cutover.",
      },
      {
        name: "Launch",
        description: "Deploy to production, enable observability, and hand off documentation with a 30-day support window.",
      },
    ],
  },
  capabilities: {
    label: "Capabilities",
    title: "End-to-end product engineering",
    items: [
      {
        title: "UI/UX Design",
        description: "Enterprise-grade interfaces with design systems, accessibility, and responsive layouts.",
        icon: "Palette" as const,
      },
      {
        title: "Frontend Engineering",
        description: "React and Next.js applications with performance budgets and component libraries.",
        icon: "Monitor" as const,
      },
      {
        title: "Backend Systems",
        description: "APIs, microservices, event pipelines, and data models built for reliability.",
        icon: "Server" as const,
      },
      {
        title: "Cloud Deployment",
        description: "Infrastructure as code on AWS, Azure, or GCP with automated pipelines.",
        icon: "Cloud" as const,
      },
      {
        title: "AI Integration",
        description: "LLM workflows, RAG pipelines, and agentic features integrated into your product surface.",
        icon: "Brain" as const,
      },
      {
        title: "Product Strategy",
        description: "Roadmap prioritization, metric frameworks, and go-to-market alignment with engineering.",
        icon: "Target" as const,
      },
    ],
  },
  stack: {
    label: "Technology",
    title: "Technology Stack",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Azure",
      "OpenAI",
      "LangChain",
      "Redis",
      "Kubernetes",
    ],
  },
  projects: {
    label: "Portfolio",
    title: "Featured MVP Projects",
    items: [
      {
        name: "Nexus Trade Platform",
        industry: "Financial Services",
        timeline: "10 weeks",
        stack: ["Next.js", "PostgreSQL", "AWS"],
        outcome: "Secured $4.2M seed round with live demo to institutional investors.",
      },
      {
        name: "CarePath Clinical Portal",
        industry: "Healthcare",
        timeline: "12 weeks",
        stack: ["React", "Python", "Azure"],
        outcome: "Pilot deployed across 3 hospital networks with HIPAA-compliant audit trail.",
      },
      {
        name: "FleetOps Command Center",
        industry: "Logistics",
        timeline: "9 weeks",
        stack: ["Next.js", "Node.js", "Kubernetes"],
        outcome: "Reduced dispatch coordination time by 38% in first 60 days post-launch.",
      },
    ],
  },
  stats: {
    label: "Why Astrenox",
    title: "Proven delivery at enterprise scale",
    items: [
      { value: 25, suffix: "+", label: "Products Launched" },
      { value: 98, suffix: "%", label: "Client Satisfaction" },
      { value: 12, suffix: "", label: "Weeks Avg. MVP Delivery" },
      { value: 100, suffix: "%", label: "Production Ready" },
    ],
  },
  testimonials: {
    label: "Testimonials",
    title: "What leaders say",
    items: [
      {
        quote:
          "Astrenox delivered a production MVP in eleven weeks that our internal team estimated would take nine months. The architecture documentation alone saved us months of rework.",
        author: "Sarah Chen",
        role: "VP Product, Meridian Capital",
      },
      {
        quote:
          "We needed investor-grade software, not a clickable prototype. MVP Studio gave us both velocity and engineering rigor—we closed our round with the product as the centerpiece.",
        author: "James Okonkwo",
        role: "CEO, Veridian Health",
      },
      {
        quote:
          "The team embedded seamlessly with our compliance and security reviewers. Launch wasn't a scramble—it was a scheduled, observable cutover.",
        author: "Elena Vasquez",
        role: "CTO, Arcline Logistics",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Common questions",
    items: [
      {
        q: "How is MVP Studio different from a typical dev agency?",
        a: "We staff senior engineers only, own architecture decisions, and deliver production infrastructure—not throwaway code. Every engagement includes observability, security review, and handoff documentation.",
      },
      {
        q: "What is the typical timeline for an MVP?",
        a: "Most engagements run 8–14 weeks depending on scope. We define milestones in the discovery phase and hold weekly demos so stakeholders see progress continuously.",
      },
      {
        q: "Do you work with existing internal teams?",
        a: "Yes. We integrate with your product, design, and engineering leads. Our goal is acceleration with knowledge transfer, not dependency.",
      },
      {
        q: "What happens after launch?",
        a: "Every project includes a 30-day support window, full documentation, and an optional retainer for iteration or scale-up engineering.",
      },
      {
        q: "Can you integrate AI features into the MVP?",
        a: "Absolutely. We build RAG pipelines, agent workflows, and LLM-powered features with governance and cost controls from the start.",
      },
    ],
  },
  cta: {
    title: "Let's Build Your Next Product.",
    subtitle:
      "Schedule a discovery call with our product engineering leads. We'll assess fit, outline a delivery plan, and share relevant case studies from your industry.",
    primaryCta: "Book Discovery Call",
    secondaryCta: "Download Capability Deck",
    primaryHref: "/contact",
    secondaryHref: "/contact",
  },
};

export type MVPIconName =
  | "Zap"
  | "Users"
  | "ShieldCheck"
  | "Layers"
  | "Palette"
  | "Monitor"
  | "Server"
  | "Cloud"
  | "Brain"
  | "Target";
