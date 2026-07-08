/** Verbatim from MVP studio.docx only. */
export const mvpStudioContent = {
  brand: "MVP Studio",
  process: {
    id: "process",
    title: "How It Works: From Idea to Live Product in 21 Days",
    intro:
      "We don’t do endless planning loops. Our process is engineered to remove uncertainty and get your product into users' hands fast so you can start gathering real data.",
    steps: [
      {
        heading: "1.Define & Scope (Days 1-3):Workshop & Alignment.",
        description:
          'We align on your core problem and separate the "must-haves" from the "nice-to-haves."',
        activities:
          "Activities: Jobs-to-be-done framing, technical architecture planning, and UI/UX wireframing.",
        deliverables:
          "Deliverables: A confirmed one-page spec, screen map, and a prioritized sprint backlog.",
      },
      {
        heading: "2.Build & Instrument (Days 4-16):Heads-down Engineering.",
        description:
          "Our team sets up the infrastructure and builds your core product features with clean, scalable code.",
        activities:
          "Activities: Front-end/back-end development, API integrations, authentication, and setting up CI/CD pipelines.",
        deliverables:
          "Deliverables: A fully functional, deployed MVP with built-in telemetry (logs, metrics, and error tracking) so you can see exactly how users interact with the app.",
      },
      {
        heading: "3.Launch & Handoff (Days 17-21):Beta Rollout & Next Steps.",
        description:
          "We test, launch, and prepare your team to take the reins (or continue with us for the next iteration).",
        activities:
          "Activities: Quality assurance, beta deployment to your first users, and handover sessions.",
        deliverables:
          "Deliverables: Live application URL, full source code access, an operational runbook, and a recommended v0.1 backlog based on initial usage signals.",
      },
    ],
  },
  pricing: {
    title: "Transparent Pricing",
    intro:
      "We charge based on value and scope, not hourly estimates that creep up over time.",
    cardTitle: "The 3-Week MVP Sprint",
    price: "Starts from $1,500",
    bestFor: "Best for well-scoped products with up to 3 core user flows.",
    includedTitle: "What’s Included:",
    included: [
      "Product strategy workshop & UI kit",
      "Full-stack development (App, API, Database)",
      "Core infrastructure: Auth, Payments (e.g., Stripe), Email, and Analytics",
      "Cloud or Vercel deployment with full handoff",
      "Two-week post-launch warranty for critical bug fixes",
    ],
  },
  addons: {
    title: "Fixed-Fee Add-ons:",
    intro:
      "Need more horsepower? We offer transparent, flat-rate pricing for complex requirements:",
    items: [
      "Custom AI models, RAG systems, or intelligent agents",
      "Complex data migrations",
      "Additional 3rd-party software integrations",
      "SOC 2-ready foundation and security compliance",
    ],
  },
  advantages: {
    items: [
      {
        title: "AI-First Architecture",
        description:
          "We do not bolt AI onto legacy frameworks. We natively integrate LLMs, RAG pipelines, and multi-agent orchestration directly into your application logic from day one.",
      },
      {
        title: "Accelerated Go-to-Market (GTM)",
        description:
          "By leveraging our pre-configured compute infrastructure and QualityOps frameworks, we collapse standard development lifecycles. We transition from architectural scoping to a deployable, high-fidelity application in weeks through rigid sprint cycles.",
      },
      {
        title: "Production-Ready Codebases",
        description:
          "Speed does not excuse fragile architecture. We deliver modular, containerized microservices equipped with automated CI/CD pipelines, robust unit testing, and integrated telemetry to absorb immediate user scale.",
      },
      {
        title: "Strict Scoping & Seamless Handoff",
        description: "We enforce deterministic scopes to pr.",
        continuation:
          "event feature creep. Once product-market fit is validated, we provide a clean transfer of the codebase, API documentation, and operational dashboards to your internal developers for continuous scaling",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        q: "Who owns the intellectual property (IP) and source code?",
        a: "You do. 100%. Upon final payment and project handover, all code, designs, and assets are fully transferred to your company.",
      },
      {
        q: "What do you need from us to get started?",
        a: "We need focused time from the founder for our initial scoping workshop, a single decisive point of contact, and access to any existing brand assets, APIs, or tools you want us to integrate.",
      },
      {
        q: "What tech stack do you use?",
        a: "We build on modern, scalable, and widely supported frameworks (like React/Next.js, Node, and cloud-native databases) ensuring that any future developer can easily pick up the codebase.",
      },
      {
        q: "Will this MVP scale if we get a sudden spike in users?",
        a: 'Absolutely. We don\'t build "throwaway" code. We engineer MVPs with clean modules, environment configurations, and production-ready CI/CD pipelines from the very first commit.',
      },
      {
        q: "What if my idea requires more than 3 core flows?",
        a: 'If your product is too complex for a 3-week sprint, we will identify the absolute core value proposition to build first. Anything beyond that can be handled as a fixed-fee add-on or moved into an immediate "Phase 2" sprint after launch.',
      },
      {
        q: "What happens after the MVP is launched?",
        a: "You have options. We provide a complete handover with documentation if you want your internal team to take over. Alternatively, you can retain us on a month-to-month basis for continuous iteration and feature releases based on user feedback.",
      },
    ],
  },
} as const;
