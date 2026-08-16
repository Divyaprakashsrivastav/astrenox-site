import type { ServicePageContent } from "./types";

export const aiTransformationContent: ServicePageContent = {
  metadata: {
    title: "AI Transformation Engineering and AI Enablement Training | Astrenox",
    description:
      "Most enterprises struggle with AI because their workflows are fragmented across systems, teams, and undocumented processes. Astren AI maps how the organization operates, identifies high-value automation opportunities, deploys secure AI workflows, enables employee adoption, and manages governance and ROI across the transformation lifecycle.",
  },
  hero: {
    label: "AI Transformation Engineering and AI Enablement Training",
    title: "Astren AI:\nThe Transformation Engine for Becoming AI Native",
    subtitle:
      "Most enterprises struggle with AI because their workflows are fragmented across systems, teams, and undocumented processes. Astren AI maps how the organization operates, identifies high-value automation opportunities, deploys secure AI workflows, enables employee adoption, and manages governance and ROI across the transformation lifecycle.",
    primaryCta: "Book a Transformation & Capability Audit",
    primaryHref: "/contact",
    trustLine:
      "AI transformation powered by operational discovery, agentic automation, and workforce enablement inside one governed platform.",
  },
  overview: {
    title: "The Enterprise AI Gap: Why Most Initiatives Fail",
    paragraphs: [
      "Most organizations treat AI as a software rollout. But becoming AI-native is not only a tooling problem. It is an operating model problem.",
      "AI transformation requires a coordinated shift across strategy, workflows, people, data, governance, and execution.",
    ],
    sideImage: "/images/overview/enterprise-ai-gap.png",
  },
  interventions: {
    label: "The Gaps",
    title: "Where enterprise AI initiatives break down",
    items: [
      {
        title: "The Discovery Gap",
        description:
          "Leadership often sees dashboards, reports, and KPIs, but not the real workflow underneath. The actual process lives inside employee judgment, informal workarounds, undocumented approvals, manual checks, and cross-team handoffs. Astren AI captures this hidden operating context through structured employee interviews, workflow mapping, system analysis, and operational data review.",
        icon: "BarChart3",
      },
      {
        title: "The Consulting Gap",
        description:
          "Traditional consulting often produces long strategy documents without the engineering capability to build the systems. Astren AI does not stop at recommendations. The platform converts discovered workflows into prioritized automation opportunities, implementation roadmaps, and deployable AI agents.",
        icon: "Briefcase",
      },
      {
        title: "The Adoption Gap",
        description:
          "Even strong AI systems fail when employees do not understand how to use them. Astren AI includes role-specific enablement so teams learn how to work with the AI workflows built for their actual daily tasks.",
        icon: "Users",
      },
      {
        title: "The Governance Gap",
        description:
          "Without a centralized platform, employees may use disconnected AI tools or paste sensitive company data into public systems. Astren AI gives the enterprise one governed environment for AI workflows, employee training, usage tracking, permissions, and auditability.",
        icon: "ShieldCheck",
      },
    ],
  },
  workflow: {
    id: "how-it-works",
    label: "PROCESS",
    title: "How Astren AI Works",
    intro:
      "Astren AI acts as the operational brain for enterprise transformation. It does not begin with generic AI use cases. It begins by understanding how your company actually works.",
    steps: [
      {
        name: "Step 1",
        description:
          "Astren AI conducts structured discovery across teams, roles, workflows, tools, and operating constraints to build a clear view of how work actually happens across the organization.",
        bullets: [
          "What each team does and how work is performed",
          "Tools, systems, and data used across workflows",
          "Handoffs, dependencies, and approval bottlenecks",
          "Repetitive and manual tasks suitable for automation",
          "Decisions that require human judgment or oversight",
          "Workflows ready for AI automation",
          "Workflows that require process redesign first",
          "A live operational map of the organization to guide transformation priorities",
        ],
      },
      {
        name: "Step 2",
        description:
          "Astren AI analyzes mapped workflows to identify where time, cost, and execution quality are being lost, then prioritizes the highest-value opportunities for automation.",
        bullets: [
          "Manual and repetitive task volume",
          "Approval and decision-making delays",
          "Repeated data entry and process duplication",
          "Knowledge gaps and information bottlenecks",
          "Tool-switching and workflow friction",
          "High-error or inconsistent processes",
          "Unclear ownership and process dependencies",
          "Undocumented workarounds and manual interventions",
          "Repetitive decision patterns suited for AI",
        ],
        after:
          "Each opportunity is ranked by ROI potential, feasibility, operational risk, data readiness, and implementation complexity, helping leadership prioritize where AI can create the most measurable impact first.",
      },
      {
        name: "Step 3",
        description:
          "After prioritization, Astren AI turns high-value opportunities into secure, production-ready AI workflows built directly into the platform.",
        bullets: [
          "Internal AI assistants and enterprise copilots",
          "Multi-agent workflow automation",
          "Enterprise knowledge search",
          "RAG-based document intelligence",
          "Approval and routing agents",
          "CRM, ERP, billing, and back-office automations",
          "Automated reporting and insight generation",
          "Customer support agents",
          "Finance, HR, operations, and sales workflows",
        ],
        after:
          "Astren AI becomes the central environment where these workflows are deployed, managed, monitored, and continuously improved.",
      },
      {
        name: "Step 4",
        description:
          "Astren AI embeds workforce enablement directly into deployment, providing role-specific training aligned with the AI workflows introduced across each function.",
        bullets: [
          "Sales: CRM updates, proposal drafting, objection handling, and pipeline intelligence",
          "Finance: Reconciliation, reporting, close-cycle support, and anomaly review",
          "HR: Employee support, policy search, onboarding, and workforce analytics",
          "Operations: Process monitoring, exception routing, and workflow execution",
          "Leadership: AI governance, ROI tracking, adoption oversight, and transformation prioritization",
        ],
        after:
          "This ensures employees are trained to use AI within their actual day-to-day workflows, accelerating adoption and measurable business impact.",
      },
      {
        name: "Step 5",
        description:
          "Astren AI gives leadership a unified view of AI transformation, making adoption, performance, and business impact measurable across the organization.",
        bullets: [
          "AI adoption across teams and departments",
          "Active workflows and automation usage",
          "Reduction in manual work and process effort",
          "Employee friction and adoption gaps",
          "ROI delivered by deployed automations",
          "Outputs requiring human review or approval",
          "Teams requiring additional training or support",
          "Emerging opportunities for further automation",
        ],
        after:
          "This gives leadership a clear view of what is working, where intervention is needed, and where AI can create additional value.",
      },
    ],
  },
  capabilities: {
    label: "Pillar 1",
    title: "AI Transformation Engineering",
    intro:
      "We use Astren AI to move from process discovery to deployed automation. Our team acts as your transformation engineering squad, using the platform to identify bottlenecks, build AI workflows, and continuously improve operational execution.",
    items: [
      {
        title: "Deep Workflow Audits",
        description:
          "Astren AI maps how work moves across people, tools, departments, and decision points. It identifies the highest-friction workflows and converts them into a ranked transformation roadmap. Business Outcome: A practical AI execution roadmap based on real operational bottlenecks, not assumptions.",
        icon: "Workflow",
        image: "/images/transformation/deep-workflow-audits.png",
      },
      {
        title: "Process Redesign and Automation",
        description:
          "We redesign manual workflows and convert them into AI-assisted or AI-executed processes. Astren AI agents can retrieve information, classify requests, draft outputs, route approvals, update systems, and escalate exceptions when human judgment is required. Business Outcome: Reduced manual effort across repetitive workflows while keeping human control over sensitive decisions.",
        icon: "Zap",
        image: "/images/transformation/process-redesign-automation.png",
      },
      {
        title: "Enterprise Memory Systems",
        description:
          "Astren AI creates a secure company memory layer by connecting documents, SOPs, policies, CRM data, project knowledge, and internal workflows. Employees can ask questions and receive grounded answers based on approved company knowledge. Business Outcome: Faster access to institutional knowledge and reduced dependency on scattered documents or individual memory.",
        icon: "Brain",
        image: "/images/transformation/enterprise-memory-systems.png",
      },
      {
        title: "Continuous MLOps and Improvement",
        description:
          "Every workflow inside Astren AI is monitored for usage, accuracy, latency, cost, human overrides, and output quality. This allows the system to improve continuously instead of becoming another static enterprise tool. Business Outcome: Stable AI workflows that can be measured, audited, and improved over time.",
        icon: "Gauge",
        image: "/images/transformation/continuous-mlops.png",
      },
    ],
  },
  deliverables: {
    label: "Pillar 2",
    title: "AI Enablement and Workforce Training",
    intro:
      "Technology adoption fails when people are left behind. Astren AI includes enablement directly inside the transformation journey, so teams learn using the workflows they will actually use in daily operations.",
    items: [
      {
        title: "Leadership and Strategic Alignment",
        description:
          "We run executive sessions to define the company's AI goals, governance model, acceptable use policy, priority workflows, and success metrics. Business Outcome: Clear leadership alignment and a unified mandate for AI adoption.",
        icon: "Target",
      },
      {
        title: "Role-Specific AI Bootcamps",
        description:
          "Training is customized by department and role. Employees learn how to use Astren AI for the exact workflows relevant to their jobs, rather than receiving generic prompt engineering training. Business Outcome: Teams become confident AI operators who can use AI safely and productively in their daily work.",
        icon: "BookOpen",
      },
      {
        title: "AI Champions and Change Management",
        description:
          "We identify and train internal AI Champions who help drive adoption across departments. Astren AI tracks usage and friction points so enablement can be adjusted where teams need support. Business Outcome: Higher adoption, lower resistance, and a stronger internal culture of AI-enabled work.",
        icon: "Users",
      },
    ],
  },
  stack: {
    label: "Platform",
    title: "Powered by Astren AI: One Platform for the Entire Transformation",
    intro:
      "Astren AI is not just where the final automations live. It is where the transformation happens. The platform supports the complete journey from discovery to execution:",
    items: [
      {
        title: "Workforce Discovery Agent",
        description:
          "Astren AI interviews employees and stakeholders to understand how work actually gets done. It captures undocumented processes, hidden dependencies, manual workarounds, and bottlenecks that traditional dashboards cannot see.",
        icon: "Users",
      },
      {
        title: "Operational Mapping Layer",
        description:
          "The platform converts discovery inputs into structured workflow maps, process gaps, automation candidates, and transformation priorities.",
        icon: "Workflow",
      },
      {
        title: "Agent Hub",
        description:
          "Astren AI manages custom AI agents, copilots, workflow automations, approval agents, document intelligence agents, and enterprise memory systems from one governed workspace. Each agent is configured around a specific business workflow, department, or operational bottleneck.",
        icon: "Brain",
      },
      {
        title: "Training and Enablement Layer",
        description:
          "Employees access department-specific AI training, workflow instructions, and guided adoption paths directly inside the platform. Training is tied to the actual workflows and agents deployed for each department, so teams learn AI inside their daily operating environment.",
        icon: "BookOpen",
      },
      {
        title: "Governance and Permission Layer",
        description:
          "Astren AI enforces access controls, approval flows, human-in-the-loop review, audit logs, safe-use boundaries, role-based permissions, and workflow-level governance.",
        icon: "ShieldCheck",
      },
      {
        title: "ROI and Telemetry Dashboard",
        description:
          "Leadership can monitor adoption, usage, hours saved, workflow completion, automation performance, and the next best transformation opportunities.",
        icon: "LineChart",
      },
    ],
  },
  serviceOfferings: {
    label: "Roadmap",
    title: "The Astren AI Transformation Roadmap",
    items: [
      {
        service: "Step 1: Discover and Assess",
        outcome:
          "Astren AI develops a clear view of the organization's teams, workflows, systems, operational dependencies, and data readiness.",
      },
      {
        service: "Step 2: Map and Prioritize",
        outcome:
          "Astren AI translates the findings into an organizational map, AI-readiness assessment, prioritized opportunity backlog, and practical transformation roadmap.\n\n**Initial Audit Timeline:** The discovery, assessment, mapping, and prioritization process is completed within 10 working days.",
      },
      {
        service: "Step 3: Build and Deploy",
        outcome:
          "Validated opportunities move into implementation through a scope-based build and deployment process shaped around workflow complexity, integrations, security requirements, and organizational priorities.",
      },
      {
        service: "Step 4: Optimize and Scale",
        outcome:
          "Performance, adoption, governance, and workflow effectiveness are continuously reviewed to improve existing capabilities and expand validated use cases.",
      },
    ],
  },
  cta: {
    title: "Start Your Enterprise Transformation Audit",
    subtitle:
      "Move from isolated AI initiatives to a coordinated enterprise transformation model. Use Astren AI to understand how your organization works, identify what should be prioritized first, deploy secure AI workflows, enable your workforce, and measure transformation outcomes through one governed platform.",
    primaryCta: "Start Your Enterprise Transformation Audit",
    primaryHref: "/contact",
  },
};
