export type FlagshipCard = {
  title: string;
  body: string;
};

export type FlagshipProduct = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  brief: readonly FlagshipCard[];
  features: readonly FlagshipCard[];
  cta: { label: string; href: string };
};

export const flagshipProducts: readonly FlagshipProduct[] = [
  {
    id: "solvoris",
    slug: "solvoris",
    name: "Solvoris",
    tagline: "Autonomous company brain and personal assistant",
    description:
      "Solvoris is an autonomous company brain and personal assistant that unifies institutional knowledge, contextual memory, and AI-assisted reasoning across your organisation.",
    image: "/images/products/solvoris.png",
    brief: [
      {
        title: "Company Brain & Personal Assistant",
        body: "Solvoris is a Company Brain and Personal Assistant that connects enterprise knowledge, conversations, documents, decisions, tasks, and contextual memory within one intelligent workspace.",
      },
      {
        title: "Unified Access to Knowledge & Decisions",
        body: "It gives teams a reliable interface to find information, understand past decisions, manage priorities, and act across connected business systems.",
      },
      {
        title: "Cross-Platform Context Organization",
        body: "It continuously organizes company context across tools such as Google Drive, Confluence, Slack, Microsoft 365, Notion, Jira, and other enterprise applications.",
      },
      {
        title: "From Search to Action Workflow",
        body: "It combines enterprise search, organizational memory, task intelligence, workflow execution, and knowledge discovery so teams can move from question to decision to action within the same environment.",
      },
      {
        title: "Persistent Organizational Intelligence Layer",
        body: "The result is a persistent intelligence layer that helps organizations reduce knowledge fragmentation, preserve institutional context, and improve execution across teams.",
      },
    ],
    features: [
      {
        title: "Enterprise Assistant",
        body: "Ask questions across company systems and receive context-aware answers grounded in organizational knowledge, documents, conversations, and historical activity.",
      },
      {
        title: "Company Knowledge Graph",
        body: "Connects documents, teams, projects, decisions, policies, conversations, and business entities to reveal relationships and provide richer organizational context.",
      },
      {
        title: "Contextual Memory",
        body: "Preserves relevant conversations, decisions, priorities, and historical context so users can understand not only what happened, but why decisions were made.",
      },
      {
        title: "Unified Knowledge Search",
        body: "Searches across connected enterprise applications and information sources through a single interface, reducing dependency on fragmented repositories and manual lookup.",
      },
      {
        title: "Documents & Conversations",
        body: "Brings important files, meeting records, discussions, and updates into one searchable workspace while maintaining their relationship to ongoing projects and decisions.",
      },
      {
        title: "Decision Intelligence",
        body: "Captures important organizational decisions, their supporting context, status, and related information to create a persistent record of how the business is operating.",
      },
      {
        title: "Tasks & Priorities",
        body: "Consolidates individual and team priorities, identifies open actions, and provides visibility into ownership, deadlines, and execution status.",
      },
      {
        title: "AI Workflows & Quick Actions",
        body: "Enables users to summarize meetings, retrieve policies, draft responses, create follow-ups, assign tasks, and initiate business workflows directly from the assistant.",
      },
      {
        title: "Enterprise Integrations",
        body: "Connects with existing productivity, collaboration, project management, and knowledge systems so Solvoris operates across the organization's current technology environment.",
      },
      {
        title: "Knowledge & Activity Analytics",
        body: "Tracks knowledge interactions, frequently accessed topics, workflow activity, and adoption patterns to give teams visibility into how organizational intelligence is being used.",
      },
    ],
    cta: { label: "Book a Demo", href: "/contact?product=solvoris" },
  },
  {
    id: "astren",
    slug: "astren",
    name: "Astren",
    tagline: "AI adoption and transformation engine",
    description:
      "Astren is an AI adoption and transformation engine that helps organisations move from isolated experiments to governed, scalable AI adoption.",
    image: "/images/products/astren.png",
    brief: [
      {
        title: "AI Transformation Engine",
        body: "Astren is an AI Adoption and Transformation Engine that helps enterprises assess readiness, identify high-value AI opportunities, and build a structured roadmap from strategy to execution.",
      },
      {
        title: "Enterprise Readiness Assessment",
        body: "It evaluates business priorities, technology, data, processes, people, and governance to establish a clear transformation baseline.",
      },
      {
        title: "AI Prioritization Framework",
        body: "Astren helps leadership prioritize AI initiatives based on business impact, feasibility, readiness, implementation effort, and expected ROI.",
      },
      {
        title: "End-to-End AI Lifecycle Management",
        body: "It provides a unified environment to plan initiatives, track implementation, measure adoption, and monitor business outcomes across the AI transformation lifecycle.",
      },
      {
        title: "From Readiness to Value Realization",
        body: "The result is a practical, measurable path from AI readiness assessment to enterprise-wide adoption and value realization.",
      },
    ],
    features: [
      {
        title: "AI Readiness Assessment",
        body: "Evaluates organisational readiness across strategy, technology, data, processes, governance, and people to identify capability gaps before implementation.",
      },
      {
        title: "Capability & Data Readiness",
        body: "Assesses existing technical capabilities, data availability, system maturity, and organisational constraints that influence AI deployment.",
      },
      {
        title: "Opportunity Explorer",
        body: "Identifies and structures potential AI use cases across business functions, helping teams focus on opportunities with meaningful operational and financial impact.",
      },
      {
        title: "Use Case Prioritization",
        body: "Ranks AI initiatives based on expected value, feasibility, implementation complexity, readiness, and strategic alignment.",
      },
      {
        title: "AI Adoption Roadmap",
        body: "Converts identified opportunities into phased transformation plans across foundation, pilot, scale, and enterprise adoption stages.",
      },
      {
        title: "Initiative & Resource Planning",
        body: "Structures transformation initiatives, ownership, dependencies, resources, and execution priorities across business and technology teams.",
      },
      {
        title: "Implementation Tracking",
        body: "Monitors active AI initiatives, deployment progress, milestones, and execution status from pilot through production.",
      },
      {
        title: "Governance & Controls",
        body: "Establishes governance requirements, accountability, review mechanisms, and operational controls for responsible enterprise AI adoption.",
      },
      {
        title: "KPIs & Business Impact",
        body: "Tracks productivity improvement, cost savings, ROI, business value, adoption, and other measurable outcomes generated by AI initiatives.",
      },
      {
        title: "Executive Transformation Dashboard",
        body: "Gives leadership a consolidated view of AI readiness, priority opportunities, roadmap progress, active initiatives, and realised business impact.",
      },
    ],
    cta: { label: "Book a Demo", href: "/contact?product=astren" },
  },
  {
    id: "akiren",
    slug: "akiren",
    name: "Akiren",
    tagline: "AI-native company OS",
    description:
      "Akiren is an AI-native company operating system that connects workflows, data, agents, and operational controls in one execution environment.",
    image: "/images/products/akiren.png",
    brief: [
      {
        title: "AI-Native Company OS",
        body: "Akiren is an AI-Native Company OS that connects business systems, workflows, enterprise data, teams, and AI agents within one governed operating environment.",
      },
      {
        title: "Unified Business Layer",
        body: "It enables organizations to build, deploy, manage, and scale AI agents that execute work across departments and existing enterprise applications.",
      },
      {
        title: "Agent Orchestration Layer",
        body: "Akiren provides a shared execution layer for coordinating agents, workflows, approvals, system actions, and operational knowledge across the business.",
      },
      {
        title: "Enterprise Integrations",
        body: "It integrates with existing systems such as CRM, ERP, email, collaboration platforms, document repositories, and data warehouses without replacing the underlying technology stack.",
      },
      {
        title: "Governed Automation at Scale",
        body: "The result is a governed AI operating layer that helps enterprises automate repetitive work, coordinate cross-functional execution, and scale agent-driven operations safely.",
      },
    ],
    features: [
      {
        title: "Enterprise Agent Runtime",
        body: "Deploys and manages specialized AI agents across sales, finance, HR, procurement, operations, support, and other business functions.",
      },
      {
        title: "Multi-Agent Orchestration",
        body: "Coordinates multiple agents, tools, business rules, and human approvals to execute complex workflows across departments.",
      },
      {
        title: "Workflow Automation",
        body: "Automates repetitive operational processes while managing dependencies, exceptions, approvals, and system updates within the same execution environment.",
      },
      {
        title: "Enterprise Integrations",
        body: "Connects AI agents with CRM, ERP, email, collaboration tools, document systems, databases, and other enterprise applications required to complete work.",
      },
      {
        title: "Department-Level Agent Environments",
        body: "Organizes agents and workflows around individual business functions while maintaining shared enterprise context, controls, and interoperability.",
      },
      {
        title: "Knowledge & Context Layer",
        body: "Gives agents access to relevant company knowledge, policies, documents, business data, and operational context required for reliable execution.",
      },
      {
        title: "Governance & Controls",
        body: "Applies permissions, approval rules, policy checks, execution limits, and human-review requirements to agent actions across the organization.",
      },
      {
        title: "Audit & Traceability",
        body: "Records agent decisions, workflow activity, system actions, approvals, and execution history to support operational review and compliance.",
      },
      {
        title: "Execution Monitoring",
        body: "Provides visibility into active agents, workflow completion, connected systems, failures, exceptions, and operational performance.",
      },
      {
        title: "Agent & Workflow Analytics",
        body: "Measures automation volume, agent utilization, department coverage, execution quality, and operational impact across the company.",
      },
    ],
    cta: { label: "Book a Demo", href: "/contact?product=akiren" },
  },
  {
    id: "orzora",
    slug: "orzora",
    name: "Orzora",
    tagline: "Deal desk and RFx pipeline",
    description:
      "Orzora is an AI-powered deal desk and RFx pipeline that streamlines qualification, document analysis, proposal development, and collaborative deal execution.",
    image: "/images/products/orzora.png",
    brief: [
      {
        title: "Deal Desk & RFx Workspace",
        body: "Orzora is an AI-powered Deal Desk and Custom RFx Pipeline that brings opportunities, tenders, requirements, proposals, approvals, documents, and team collaboration into one operating workspace.",
      },
      {
        title: "Opportunity Lifecycle Management",
        body: "It helps teams discover and qualify opportunities, analyse RFx requirements, prepare responses, manage compliance, coordinate approvals, and track submissions end to end.",
      },
      {
        title: "Requirement & Compliance Structuring",
        body: "Orzora converts complex tender packs and bid documents into structured requirements, compliance actions, risks, responsibilities, and response workflows.",
      },
      {
        title: "AI Drawing-to-BOQ Takeoff (Construction & Engineering)",
        body: "For construction and engineering use cases, Orzora also supports AI-assisted Drawing-to-BOQ Takeoff, converting civil and MEP drawings into structured quantities and BOQ outputs for estimation and bid preparation.",
      },
      {
        title: "End-to-End Bid Execution Layer",
        body: "The result is a connected RFx execution layer that improves bid turnaround, compliance control, collaboration, and proposal quality across the opportunity lifecycle.",
      },
    ],
    features: [
      {
        title: "RFx Opportunity Pipeline",
        body: "Centralises tenders, RFPs, RFQs, opportunities, deadlines, owners, values, and bid stages within one structured pipeline.",
      },
      {
        title: "AI Opportunity Qualification",
        body: "Analyses tender requirements, strategic fit, eligibility, complexity, commercial potential, and delivery constraints to support bid/no-bid decisions.",
      },
      {
        title: "Tender & Requirement Intelligence",
        body: "Extracts eligibility criteria, technical specifications, commercial conditions, submission requirements, forms, annexures, deadlines, and mandatory clauses from large RFx packs.",
      },
      {
        title: "Compliance Matrix Generation",
        body: "Converts tender requirements into a structured compliance matrix with ownership, response status, evidence requirements, exceptions, and unresolved gaps.",
      },
      {
        title: "AI Proposal Drafting",
        body: "Generates first-draft technical and commercial responses using tender requirements, approved company content, previous submissions, credentials, case studies, and solution information.",
      },
      {
        title: "Drawing-to-BOQ Takeoff",
        body: "Analyses civil, architectural, electrical, plumbing, HVAC, fire-fighting, and other MEP drawings to identify measurable components, extract quantities, and generate structured BOQ and takeoff outputs for estimation workflows.",
      },
      {
        title: "Bid Collaboration Workspace",
        body: "Coordinates contributors across sales, engineering, commercial, finance, legal, procurement, and leadership while maintaining comments, versions, responsibilities, and review status.",
      },
      {
        title: "Approval & Review Workflows",
        body: "Routes technical, pricing, legal, compliance, and management approvals according to defined authority levels and submission timelines.",
      },
      {
        title: "Document & Knowledge Intelligence",
        body: "Maintains reusable proposal content, credentials, product information, policies, certifications, contracts, and historical bid responses for faster retrieval and reuse.",
      },
      {
        title: "Contract & Risk Review",
        body: "Identifies commercial obligations, liability clauses, payment conditions, delivery commitments, penalties, deviations, and contractual risks requiring legal or commercial review.",
      },
      {
        title: "Submission & Deadline Management",
        body: "Tracks bid milestones, pending requirements, approvals, clarifications, document completion, and final submission readiness across active opportunities.",
      },
      {
        title: "RFx Analytics",
        body: "Measures pipeline value, response turnaround, win rates, compliance status, approval delays, team activity, and proposal performance to improve future bidding decisions.",
      },
    ],
    cta: { label: "Book a Demo", href: "/contact?product=orzora" },
  },
] as const;

export function getFlagshipProduct(slug: string): FlagshipProduct | undefined {
  return flagshipProducts.find((p) => p.slug === slug);
}
