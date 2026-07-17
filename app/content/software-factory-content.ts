/**
 * Page 3, AI Native Software Factory
 */

export const softwareFactoryContent = {
  metadata: {
    title: "AI Native Software Factory | Astrenox",
    description:
      "Governed, agentic engineering for the enterprise. Redesign how business requirements, architecture, development, validation, release and operations function together.",
  },

  label: "AI-Native Software Factory",
  title: "Governed, Agentic Engineering for the Enterprise",
  intro: [
    "Enterprise AI adoption creates value only when it improves the complete engineering system, not when it simply generates more code. We work with enterprises to redesign how business requirements, architecture, development, validation, release and operations function together.",
    "Our Software Factory supports existing Software Development Lifecycle (SDLC) workflows while enabling the AI-native Development Lifecycle (AIDLC). Specialized engineering agents execute structured work across planning, implementation, testing, review, deployment and operations, while human leaders define architecture, policies, quality standards and risk boundaries.",
    "Human-on-the-loop governance allows validated workflows to operate with continuous oversight and exception-based intervention. Human-in-the-loop approvals remain mandatory for architectural decisions, security-sensitive changes and production releases.",
  ],

  sections: [
    {
      number: 1,
      title: "Consultative Transformation and Lifecycle Design",
      intro:
        "Every engagement begins with an assessment of the enterprise's current engineering environment. We review repositories, application architecture, documentation, testing maturity, delivery pipelines, security controls, operational dependencies and team workflows to identify where agentic automation can create measurable value.",
      bullets: [
        "Responsibilities across product teams, engineers and AI agents",
        "Lifecycle stages suitable for automation",
        "Architecture, security and data-handling guardrails",
        "Human approval and escalation points",
        "Repository, ticketing, CI/CD and observability integrations",
        "Measures for delivery velocity, quality, reliability and adoption",
        "Implementation can begin with a focused pilot and expand across teams and repositories as governance, workflow reliability and business outcomes are validated. This consultative approach helps enterprises move from isolated coding assistants to a scalable engineering operating model.",
      ],
    },
    {
      number: 2,
      title: "Unified AIDLC and SDLC Control Plane",
      intro:
        "The Software Factory coordinates work from intake and planning through implementation, validation, release and production operations.",
      bullets: [
        "Structured Intent and Work Orchestration: Feature requests, defects, security findings, modernization initiatives, operational alerts and customer feedback enter through a common intake layer. The system prioritizes work, identifies dependencies and routes each request into the appropriate governed workflow. Approved requirements capture functional scope, acceptance criteria, architectural constraints, security expectations and release conditions. These requirements are converted into machine-readable work orders that give agents a clear execution contract instead of relying on unstructured prompts.",
        "Persistent Engineering Context: A shared context layer connects requirements, architecture decisions, repositories, APIs, dependencies, documentation, tickets and operational history. This improves understanding across large codebases, reduces repeated discovery and preserves institutional knowledge across teams and agent sessions. Enterprise policies are enforced at runtime across model access, repository permissions, approved tools, secure coding rules, testing thresholds, autonomy levels and deployment gates.",
      ],
    },
    {
      number: 3,
      title: "Agentic Execution with Human Governance",
      intro:
        "Within approved boundaries, specialized agents can analyze work orders, create implementation plans, modify application logic, build features, generate migrations, resolve defects, write tests, update documentation and open review-ready pull requests.",
      bullets: [
        "Multiple agents can work in parallel across independent tasks or lifecycle stages using the same organizational context and governance policies. Background workflows can support dependency upgrades, vulnerability remediation, test generation, documentation maintenance and recurring engineering operations.",
        "Validation, Review and Security: Every change can pass through automated testing, code review, security analysis and policy validation before merge or release. Review agents assess architectural alignment, functional correctness, maintainability, test coverage, contract changes, regression risk and policy compliance. Security workflows can identify authentication issues, unsafe data handling, exposed secrets, vulnerable dependencies, insecure configurations and threat-model deviations. High-risk findings are routed to designated reviewers, while objective acceptance criteria reduce the risk of agents validating their own assumptions.",
        "Modernization and Operations: The Software Factory can map legacy codebases, dependencies, undocumented business rules and operational behaviour before executing controlled modernization. Agents can support framework upgrades, monolith decomposition, cloud or database migration, API modernization, test-suite generation and technical-debt reduction through incremental, reviewable work orders. The same model extends into production operations. Agents can analyze alerts, logs, traces, recent deployments and repository history to support incident triage, root-cause analysis, remediation planning, patch generation and runbook updates, within enterprise-defined boundaries for autonomous action.",
        "Oversight and Traceability: Autonomy is configured according to workflow maturity and business risk. Low-risk tasks may operate automatically or progress to pull-request creation, while architecture changes, security-sensitive modifications and production releases require explicit approval. Each workflow records business intent, approved requirements, agent actions, accessed systems, code changes, validation results, policy exceptions, approvals and deployment outcomes. Continuous drift checks compare changes against requirements, architecture standards, security policies and service contracts before release.",
      ],
    },
    {
      number: 4,
      title: "Enterprise Security, Deployment and Control",
      intro:
        "The Software Factory is designed for regulated and security-sensitive environments where source code, intellectual property and engineering telemetry require strict control.",
      bullets: [
        "It can operate across enterprise cloud, hybrid cloud, private VPC, on-premises, customer-managed and fully air-gapped environments. Model endpoints, agent runtimes, code access and telemetry can remain within the organization's security boundary.",
        "Enterprise identity and access controls can include SSO, SAML, OIDC, automated provisioning and role-based permissions. Administrators can govern who may launch agents, which repositories and environments agents can access, which models and tools are permitted, what autonomy level applies, and who approves sensitive actions.",
        "Engineering leaders also receive centralized controls for model routing, project-level usage, workflow limits and spending thresholds.",
        "OpenTelemetry-compatible logs, metrics and traces can integrate with existing observability and security platforms to monitor agent sessions, tool use, code changes, validation outcomes, policy violations, failures and deployments.",
        "Comprehensive audit trails support internal governance and alignment with applicable security, software-assurance and AI-management requirements. The exact control framework is defined according to the client's industry, deployment model and regulatory obligations.",
      ],
    },
  ],

  closing:
    "The AI-Native Software Factory combines consultative transformation, structured lifecycle governance, persistent engineering context, specialized agents and enterprise controls within one coordinated delivery system. It helps organizations increase engineering capacity and modernize software delivery while preserving architectural integrity, security, traceability and human accountability.",

  cta: {
    headline: "From AI Assistance to an Enterprise Engineering System",
    primaryCta: "Book Engineering Workshop",
    primaryHref: "/contact?intent=workshop",
    secondaryCta: "Talk to Platform Architects",
    secondaryHref: "/contact?intent=architects",
  },
} as const;

export const softwareFactorySdlcStages = [
  "Intake",
  "Planning",
  "Implementation",
  "Validation",
  "Review",
  "Release",
  "Operations",
] as const;
