import type { ServicePageContent } from "./types";

export const aiNativeProductContent: ServicePageContent = {
  metadata: {
    title: "AI-Native Product Engineering | Astrenox",
    description:
      "End-to-end product engineering for AI-first software, architecture, UX, ML pipelines, and production deployment in one accountable team.",
  },
  hero: {
    label: "Digital Consulting",
    title: "Engineer Products\nBorn AI Native.",
    subtitle:
      "Build software where intelligence is core infrastructure, not a bolt-on feature. From architecture to deployment, we engineer AI-native products for enterprise scale.",
    primaryCta: "Start Product Discovery",
    secondaryCta: "View Engineering Process",
    primaryHref: "/contact",
    secondaryHref: "#workflow",
  },
  overview: {
    title: "Product engineering for the intelligence era",
    paragraphs: [
      "AI-native product engineering means designing systems where models, agents, and data pipelines are first-class citizens, not afterthoughts layered onto traditional architectures. Astrenox builds products with this philosophy from day one.",
      "Our teams combine product managers, UX designers, full-stack engineers, and ML practitioners in unified squads. We ship features that leverage LLMs, computer vision, and predictive analytics with governance and observability built in.",
      "Every product engagement includes a design system, API contracts, model evaluation frameworks, and cost controls. We engineer for the reality that AI features evolve rapidly and need continuous iteration.",
      "From copilot interfaces to autonomous workflow agents, we help enterprises move from AI experiments to products their customers and employees rely on daily.",
    ],
  },
  capabilities: {
    label: "Capabilities",
    title: "Full-stack AI product engineering",
    items: [
      {
        title: "AI Product Architecture",
        description: "System designs that treat models, vector stores, and agent orchestration as core platform primitives.",
        icon: "Layers",
      },
      {
        title: "Intelligent UX Design",
        description: "Interfaces for copilots, conversational flows, and human-in-the-loop AI with trust and transparency.",
        icon: "Palette",
      },
      {
        title: "LLM & Agent Engineering",
        description: "RAG pipelines, tool-use agents, and prompt orchestration with evaluation and guardrail frameworks.",
        icon: "Brain",
      },
      {
        title: "Full-Stack Development",
        description: "React, Next.js, and Node.js frontends with scalable APIs and real-time data synchronization.",
        icon: "Monitor",
      },
      {
        title: "MLOps & Observability",
        description: "Model versioning, A/B testing, latency monitoring, and cost attribution for production AI features.",
        icon: "BarChart3",
      },
      {
        title: "Product Strategy",
        description: "Roadmap prioritization, metric design, and competitive positioning for AI-powered products.",
        icon: "Target",
      },
    ],
  },
  workflow: {
    id: "workflow",
    label: "Process",
    title: "AI product engineering workflow",
    steps: [
      {
        name: "Discover",
        description: "Define user problems, AI feasibility, data requirements, and success metrics with cross-functional workshops.",
      },
      {
        name: "Prototype",
        description: "Build rapid prototypes with real models and user flows to validate assumptions before full investment.",
      },
      {
        name: "Engineer",
        description: "Develop production architecture, design system, APIs, and ML pipelines in integrated two-week sprints.",
      },
      {
        name: "Evaluate",
        description: "Run model benchmarks, user testing, and security review with continuous quality gates.",
      },
      {
        name: "Launch",
        description: "Deploy with feature flags, monitoring dashboards, and iteration plans for model improvement.",
      },
    ],
  },
  stack: {
    label: "Technology",
    title: "AI-native technology stack",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "OpenAI",
      "LangChain",
      "Pinecone",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
      "AWS",
      "Weights & Biases",
    ],
  },
  outcomes: {
    label: "Outcomes",
    title: "Engineering outcomes that matter",
    items: [
      { value: 18, suffix: "+", label: "AI Products Shipped" },
      { value: 3, suffix: "x", label: "Faster Time to Market" },
      { value: 95, suffix: "%", label: "Model Accuracy Targets Met" },
      { value: 40, suffix: "%", label: "Avg. Inference Cost Reduction" },
    ],
  },
  projects: {
    label: "Portfolio",
    title: "Featured AI product engagements",
    items: [
      {
        name: "Enterprise Copilot Platform",
        industry: "Professional Services",
        timeline: "14 weeks",
        stack: ["Next.js", "OpenAI", "Pinecone"],
        outcome: "Deployed internal copilot used by 4,200 employees, reducing document search time by 67%.",
      },
      {
        name: "Clinical Decision Support",
        industry: "Healthcare",
        timeline: "16 weeks",
        stack: ["React", "Python", "Azure ML"],
        outcome: "FDA-aligned decision support tool piloted across 8 clinics with 91% clinician satisfaction.",
      },
      {
        name: "Intelligent Document Processing",
        industry: "Legal",
        timeline: "11 weeks",
        stack: ["Next.js", "LangChain", "AWS"],
        outcome: "Automated 73% of contract review tasks with human-in-the-loop escalation workflows.",
      },
    ],
  },
  industries: {
    label: "Industries",
    title: "Sectors we build for",
    items: [
      { name: "Healthcare", icon: "HeartPulse" },
      { name: "Financial Services", icon: "Landmark" },
      { name: "Legal & Compliance", icon: "Scale" },
      { name: "Professional Services", icon: "Briefcase" },
      { name: "Technology", icon: "Cpu" },
      { name: "Retail", icon: "Globe" },
      { name: "Education", icon: "BookOpen" },
      { name: "Manufacturing", icon: "Factory" },
    ],
  },
  testimonials: {
    label: "Testimonials",
    title: "What product leaders say",
    items: [
      {
        quote:
          "They didn't treat AI as a demo feature. The copilot they built handles edge cases, logs every interaction, and has cost controls our finance team approved.",
        author: "Nathan Brooks",
        role: "Chief Product Officer, Align Consulting",
      },
      {
        quote:
          "Our previous vendor delivered a prototype. Astrenox delivered a product, with a design system, API docs, and an MLOps pipeline our team now owns.",
        author: "Dr. Emily Hart",
        role: "VP Digital Health, MedCore Systems",
      },
      {
        quote:
          "The agent architecture they designed lets us swap models without rewriting the application layer. That flexibility has been invaluable as the AI landscape shifts.",
        author: "Kevin Osei",
        role: "Head of Engineering, LexAutomate",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "AI product engineering questions",
    items: [
      {
        q: "How is AI-native engineering different from adding AI to existing products?",
        a: "AI-native means intelligence is designed into the architecture, data flows, UX patterns, and infrastructure are built for models and agents from the start, not retrofitted.",
      },
      {
        q: "Which LLM providers do you support?",
        a: "We're provider-agnostic: OpenAI, Anthropic, Azure OpenAI, and open-source models. We design abstraction layers so you can switch providers as needed.",
      },
      {
        q: "How do you handle AI governance and safety?",
        a: "Every product includes guardrails, content filtering, audit logging, and human-in-the-loop workflows. We align with your compliance and risk frameworks.",
      },
      {
        q: "Can you work with our existing product team?",
        a: "Yes. We embed alongside your PMs, designers, and engineers, accelerating delivery while transferring AI engineering practices.",
      },
      {
        q: "What does ongoing model improvement look like?",
        a: "We set up evaluation pipelines, feedback loops, and retraining schedules so your AI features improve continuously post-launch.",
      },
    ],
  },
  cta: {
    title: "Build Your AI Native Product.",
    subtitle:
      "Schedule a product discovery session. We'll assess your use case, outline an engineering approach, and share relevant case studies from your industry.",
    primaryCta: "Book Discovery Call",
    secondaryCta: "Download Capability Deck",
    primaryHref: "/contact",
    secondaryHref: "/contact",
  },
};
