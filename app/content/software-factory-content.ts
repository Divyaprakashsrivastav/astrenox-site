/**
 * Official content — AI Native Software Factory page.
 * Verbatim from Astrenox product content (softwareFactorySection).
 */

export const softwareFactoryContent = {
  metadata: {
    title: "AI Native Software Factory | Astrenox",
    description:
      'As an AI-native software development and consulting firm, we deploy a centralized Software Development Life Cycle (SDLC) control plane designed specifically for regulated enterprises.',
  },

  label: "AI-Native Software Factory",
  title: "The AI-Native Software Factory: Architecting Autonomous Enterprise Engineering",
  intro: [
    "As an AI-native software development and consulting firm, we deploy a centralized Software Development Life Cycle (SDLC) control plane designed specifically for regulated enterprises.",
    'The industry focus on pure "code generation" often results in fast but architecturally misaligned software. We reverse this paradigm. The Software Factory fundamentally redesigns the engineering pipeline by capturing strict business intent and system architecture before any code is written. By moving engineering judgment upstream, human leadership dictates the architectural boundaries, while specialized AI agents handle the deterministic execution of coding, testing, and deployment.',
  ],

  sections: [
    {
      number: 1,
      title: "Upstream SDLC Governance & Core Architecture",
      intro:
        "Most AI development tools operate in silos without understanding the broader system, leading to technical debt and structural drift. Our architecture establishes a single, continuous source of truth, giving AI agents the exact structured context they need to produce correct, aligned code.",
      bullets: [
        "Full-SDLC Agentic Orchestration: We deploy a centralized SDLC control plane where human engineers define high-level business intent, while multi-agent systems autonomously execute planning, coding, testing, and deployment workflows.",
        "Upstream Architecture & Requirements: We lock in strict product requirements, requirements definition pipelines, and system blueprints pre-execution. AI agents build directly from this canonical documentation rather than unstructured prompts, completely eliminating architectural guesswork.",
        "Agentic Work Orders: Product requirements are translated into deterministic, machine-readable work orders. Specialized AI models operate across a unified workspace to sequence tasks and generate production-ready code with minimal manual syntax intervention.",
        "Dynamic Knowledge Graphs: We maintain a living system map connecting your initial requirements directly to the active codebase. Context flows seamlessly across the pipeline, eliminating tribal knowledge, protecting against employee turnover, and preventing long-term architectural degradation.",
        "Automated Validation & Drift Control: High-velocity code generation demands rigorous governance. We enforce automated PR evaluations and continuous drift detection, verifying all agent-written code against the original blueprints before any merge to production.",
        "Automated Feedback Validation: Validation modules capture unstructured user feedback, bug reports, and customer signals, automatically converting them into clear, actionable development tasks that feed directly back into the structured work pipeline.",
      ],
    },
    {
      number: 2,
      title: "Agentic Execution: Autonomous Engineering Workflows",
      intro:
        'Once business intent is locked into structured blueprints, we augment your workforce with an integrated layer of specialized AI agents (or "Droids"). These agents operate continuously across your CLI, web interfaces, and CI/CD pipelines to close the SDLC loop.',
      bullets: [
        "Ticket-to-Code Orchestration: Background AI agents autonomously ingest structured work orders, navigate your repository, and implement fully functional features. This encompasses generating necessary database migrations, resolving edge-case logic, and writing unit tests before autonomously opening a pull request.",
        "Automated Pull Request & Code Review: Every pull request is autonomously reviewed in minutes. Specialized agents inspect the diff against the original blueprints, flagging architectural deviations, STRIDE-based security vulnerabilities, and logic flaws with zero false positives.",
        "Legacy Modernization Assembly Lines: For monolithic architectures, we ingest entire codebases into the platform to map and document legacy behaviors. Once the system understands the operational patterns, AI agents systematically refactor, update, and migrate legacy components across modern technology stacks.",
      ],
    },
    {
      number: 3,
      title: "Enterprise Infrastructure: Security, Observability, and Control",
      intro:
        "Built for high-stakes environments—including Healthcare, Financial Services, and the Federal Government—the Software Factory ensures that autonomous AI adoption strengthens your security posture rather than compromising it.",
      bullets: [
        "Fully Air-Gapped & Compliant Deployments: The entire platform can be deployed on your private hardware or Virtual Private Cloud (VPC) with zero internet dependency. The system requires no external network calls, ensuring proprietary codebase telemetry never leaves your security perimeter. Our architecture strictly aligns with ISO 27001 and OWASP standards.",
        "Native OpenTelemetry (OTEL) Integration: We export deep traces, metrics, and agent execution logs directly into your existing observability stack (e.g., Datadog, Grafana, Honeycomb). This provides absolute, real-time visibility into AI decision-making processes and system health.",
        "Centralized Org Configuration & Cost Controls: We deploy a single administrative surface to manage AI model routing, agent permissions, and identity provisioning via SAML 2.0/OIDC. Engineering leadership can enforce strict token consumption budgets at the project level, utilizing automated cutoff thresholds to optimize spend and prevent runaway agent usage.",
      ],
    },
  ],

  cta: {
    headline: "Build Software Like an AI Native Company",
    primaryCta: "Book Engineering Workshop",
    primaryHref: "/contact?intent=workshop",
    secondaryCta: "Talk to Platform Architects",
    secondaryHref: "/contact?intent=architects",
  },
} as const;

export const softwareFactorySdlcStages = [
  "Source Code",
  "AI Planning",
  "Architecture",
  "Code Generation",
  "Testing",
  "Security Scan",
  "Build",
  "Deployment",
  "Monitoring",
] as const;
