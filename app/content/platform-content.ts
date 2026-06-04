/**
 * Astrenox Intelligence Platform — native enterprise AI operating system content.
 */

export const intelligencePlatform = {
  name: "Astrenox Intelligence Platform",
  shortName: "Intelligence Platform",
  positioning:
    "The AI operating system powering every Astrenox solution—search, graph, agents, and automation in one governable layer.",

  hero: {
    eyebrow: "Astrenox Intelligence Platform",
    title: "Enterprise AI with explainable decisions and workflow automation.",
    description:
      "Transform enterprise knowledge into autonomous action. From fragmented systems to intelligent operations—unified search, a live knowledge graph, and agents that execute with full observability.",
    taglines: [
      "Transform enterprise knowledge into autonomous action.",
      "From fragmented systems to intelligent operations.",
      "Enterprise AI with explainable decisions and workflow automation.",
    ],
    primaryCta: "Request a demo",
    primaryHref: "/contact?intent=platform-demo",
    secondaryCta: "Explore capabilities",
    secondaryHref: "#enterprise-search",
  },

  enterpriseSearch: {
    id: "enterprise-search",
    label: "Enterprise Search",
    title: "Natural language across your entire stack",
    description:
      "One query surface across workspace, collaboration, engineering, and internal systems—grounded answers with citations, access controls, and audit trails.",
    queryPlaceholder: "Which customer escalations in Slack tie to open Jira blockers this quarter?",
    capabilities: [
      "Semantic retrieval across structured and unstructured data",
      "Permission-aware results mapped to your identity provider",
      "Multi-hop reasoning with source lineage",
      "Saved queries and team knowledge bases",
    ],
    sources: [
      { id: "google", name: "Google Workspace", category: "Productivity" },
      { id: "microsoft", name: "Microsoft 365", category: "Productivity" },
      { id: "slack", name: "Slack", category: "Collaboration" },
      { id: "jira", name: "Jira", category: "Engineering" },
      { id: "confluence", name: "Confluence", category: "Knowledge" },
      { id: "notion", name: "Notion", category: "Knowledge" },
      { id: "databases", name: "Internal Databases", category: "Data" },
    ],
  },

  knowledgeGraph: {
    id: "knowledge-graph",
    label: "Knowledge Graph",
    title: "From siloed data to decision-ready context",
    description:
      "Astrenox continuously maps entities, relationships, and policies across your estate—so agents and leaders operate on the same live truth.",
    pipeline: [
      { id: "sources", title: "Enterprise Data Sources", subtitle: "Connectors · APIs · Warehouses" },
      { id: "graph", title: "Knowledge Graph", subtitle: "Entities · Relationships · Policies" },
      { id: "agents", title: "AI Agents", subtitle: "Retrieve · Reason · Execute" },
      { id: "decisions", title: "Business Decisions", subtitle: "Approvals · Actions · Outcomes" },
    ],
    stats: [
      { value: "Real-time", label: "Graph refresh" },
      { value: "Full lineage", label: "Explainable paths" },
      { value: "Policy-aware", label: "Every traversal" },
    ],
  },

  aiAgents: {
    id: "ai-agents",
    label: "AI Agents",
    title: "Autonomous operators for the enterprise",
    description:
      "Deploy governed agents that retrieve knowledge, run research, execute workflows, analyze data, generate reports, and automate operations—with human-in-the-loop where it matters.",
    agents: [
      {
        id: "retrieval",
        title: "Knowledge Retrieval",
        description: "Instant answers across docs, tickets, chats, and schemas with cited evidence.",
      },
      {
        id: "research",
        title: "Research",
        description: "Multi-step investigation across internal and approved external sources.",
      },
      {
        id: "workflow",
        title: "Workflow Execution",
        description: "Trigger approvals, updates, and orchestrations across your toolchain.",
      },
      {
        id: "analysis",
        title: "Data Analysis",
        description: "Query warehouses, build views, and surface anomalies with narrative context.",
      },
      {
        id: "reporting",
        title: "Reporting",
        description: "Scheduled and on-demand executive briefs with live data bindings.",
      },
      {
        id: "automation",
        title: "Enterprise Automation",
        description: "End-to-end automations with guardrails, rollback, and observability.",
      },
    ],
  },

  workflowAutomation: {
    id: "workflow-automation",
    label: "Workflow Automation",
    title: "Autonomous systems for complex operations",
    description:
      "Pre-built patterns and custom playbooks for high-stakes environments—manufacturing floors, fleets, aerospace, robotics, and enterprise decision intelligence.",
    useCases: [
      {
        id: "manufacturing",
        title: "Manufacturing Operations",
        description:
          "Production telemetry, quality signals, and supply exceptions unified into agent-driven runbooks.",
        metric: "↓ Downtime",
      },
      {
        id: "drones",
        title: "Drone Fleet Management",
        description:
          "Mission planning, airspace compliance, and maintenance cycles orchestrated from a single graph.",
        metric: "↑ Fleet uptime",
      },
      {
        id: "aerospace",
        title: "Aerospace Systems",
        description:
          "Requirements traceability, test artifacts, and release gates connected for audit-ready velocity.",
        metric: "Traceable releases",
      },
      {
        id: "robotics",
        title: "Robotics Operations",
        description:
          "Fleet health, task allocation, and human handoff workflows with real-time situational awareness.",
        metric: "Safer handoffs",
      },
      {
        id: "decision",
        title: "Enterprise Decision Intelligence",
        description:
          "Executive dashboards fed by live graph traversals—scenarios, approvals, and outcome tracking.",
        metric: "Faster decisions",
      },
    ],
  },

  integrations: {
    id: "integrations",
    label: "Integrations",
    title: "Your stack, connected to one intelligence layer",
    description:
      "Bi-directional connectors sync context into the Astrenox Knowledge Graph—agents and search stay current without rip-and-replace.",
    hubLabel: "Astrenox Intelligence Platform",
    connectors: [
      { id: "google", name: "Google Workspace", accent: "#4285F4" },
      { id: "microsoft", name: "Microsoft 365", accent: "#0078D4" },
      { id: "slack", name: "Slack", accent: "#4A154B" },
      { id: "jira", name: "Jira", accent: "#0052CC" },
      { id: "confluence", name: "Confluence", accent: "#172B4D" },
      { id: "notion", name: "Notion", accent: "#111111" },
      { id: "github", name: "GitHub", accent: "#24292F" },
    ],
  },

  security: {
    id: "security",
    label: "Security",
    title: "Enterprise-grade trust by design",
    description:
      "Built for regulated industries—identity-bound access, encryption everywhere, and explainable automation your security team can approve.",
    pillars: [
      {
        title: "Identity & access",
        description: "SSO, SCIM, RBAC, and workspace-scoped policies aligned to your IdP.",
      },
      {
        title: "Data protection",
        description: "Encryption in transit and at rest, tenant isolation, and configurable retention.",
      },
      {
        title: "Governance & audit",
        description: "Full agent action logs, citation lineage, and exportable compliance reports.",
      },
      {
        title: "Model & deployment control",
        description: "Bring your own models, VPC-ready deployment options, and data residency choices.",
      },
    ],
    certifications: ["SOC 2 aligned controls", "GDPR-ready processing", "Customer-managed keys (BYOK)"],
  },

  demo: {
    id: "request-demo",
    label: "Request Demo",
    title: "See the Intelligence Platform in your environment",
    description:
      "We'll map your sources, walk through the knowledge graph, and scope agents and automations against your highest-impact workflows.",
    primaryCta: "Request a demo",
    primaryHref: "/contact?intent=platform-demo",
    secondaryCta: "Talk to engineering",
    secondaryHref: "/contact",
  },
} as const;

export const platformNavAnchor = {
  label: "Intelligence Platform",
  href: "/platform",
} as const;
