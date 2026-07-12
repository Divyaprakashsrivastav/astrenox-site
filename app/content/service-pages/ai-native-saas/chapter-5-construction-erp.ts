import type { ServicePageChapter } from "../types";

export const chapter5ConstructionErp: ServicePageChapter = {
  id: "section-5",
  title: "AI Powered ERP for Construction",
  subtitle: "Operational Intelligence for Pre-Construction and Project Execution",
  overview: {
    title: "Product Brief",
    layout: "grid",
    paragraphs: [],
    cards: [
      {
        heading: "Not a document problem",
        body: "Construction teams do not struggle because they lack documents.",
      },
      {
        heading: "Misaligned execution",
        body: "They struggle because drawings, RFIs, estimates, contracts, change orders, schedules, procurement updates, field reports, labour plans, and cost records rarely stay aligned while the project is moving.",
      },
      {
        heading: "Connected operating model",
        body: "We build AI-powered ERP intelligence systems as custom execution layers designed around your construction workflow. The system connects project documents, cost data, material movement, labour planning, scope changes, and field updates into a structured operational model that teams can search, track, validate, and act on.",
      },
      {
        heading: "Beyond dashboards",
        body: "Instead of functioning as another static dashboard, the system helps project teams coordinate what needs to happen next. It continuously aligns materials, labour, cost, scope, constraints, and decisions across pre-construction and execution workflows.",
      },
      {
        heading: "Single source of truth",
        body: "The result is a construction operating layer where estimating, scope control, RFI response, procurement tracking, risk analysis, and field-to-office coordination work from the same source of truth.",
      },
    ],
  },
  capabilities: {
    title: "Core Modules",
    items: [
      {
        title: "Project Data Structuring Agent",
        paragraphs: [
          "The system converts unstructured construction documents into structured project intelligence.",
          "It reads drawings, specifications, contracts, estimates, schedules, RFIs, change orders, inspection notes, field reports, and cost sheets to extract project-critical information.",
          "This creates a connected data layer where scope items, quantities, clauses, materials, tasks, risks, and dependencies can be searched, compared, validated, and routed into downstream workflows.",
        ],
        enables: [
          "Cleaner project data",
          "Faster document review",
          "Reduced manual extraction",
          "Better source-backed visibility",
          "More reliable execution planning",
        ],
        icon: "Database",
      },
      {
        title: "Drawing and Specification Intelligence Agent",
        paragraphs: [
          "The system uses document AI and layout-aware vision models to interpret architectural PDFs, CAD files, technical drawings, floor plans, finish schedules, MEP references, annotations, and specification documents.",
          "It extracts room-level scope, material quantities, dimensions, assemblies, drawing references, technical requirements, and specification-linked details.",
          "This gives estimators, project managers, and engineering teams a structured starting point instead of forcing them to manually review hundreds of pages.",
        ],
        enables: [
          "Faster quantity takeoffs",
          "Better scope visibility",
          "Reduced missed line items",
          "Cleaner bid preparation",
          "More consistent project documentation",
        ],
        icon: "FileCheck",
      },
      {
        title: "Pre-Construction Estimating Agent",
        paragraphs: [
          "Pre-construction teams spend significant time extracting quantities, comparing revisions, identifying scope gaps, and preparing bid inputs.",
          "This module automates the first layer of estimating work by extracting measurable quantities, organizing them by trade or work package, and highlighting unclear or missing information for human review.",
          "It does not replace the estimator. It gives the estimator a faster and cleaner foundation for pricing strategy, vendor coordination, bid competitiveness, and risk review.",
        ],
        enables: [
          "Faster estimate preparation",
          "More bids handled without increasing headcount",
          "Earlier identification of missing scope",
          "Standardized takeoff logic across projects",
          "Better pricing confidence before submission",
        ],
        icon: "Target",
      },
      {
        title: "RFI Context Agent",
        paragraphs: [
          "RFIs often slow projects because teams need to search across drawings, specifications, contracts, submittals, field notes, prior responses, and project decisions before replying.",
          "This module connects each field question to the correct source material and retrieves the relevant drawing references, contract language, specification clauses, past decisions, and related project context.",
          "It can generate a source-backed draft response for human review before submission.",
        ],
        enables: [
          "Faster RFI turnaround",
          "Fewer repeated document searches",
          "More consistent responses",
          "Stronger auditability",
          "Reduced communication gaps between field and office teams",
        ],
        icon: "Workflow",
      },
      {
        title: "Scope Drift and Change Detection Agent",
        paragraphs: [
          "Construction margins often leak through small undocumented changes such as revised drawings, missed alternates, unclear exclusions, informal field changes, and untracked scope shifts.",
          "This module monitors project documents as active data objects. When drawings, RFIs, contracts, field reports, or change orders are updated, the system detects what changed, where it changed, and which downstream work packages may be affected.",
          "It helps teams identify potential change orders, cost exposure, schedule impact, and commercial risk before the issue becomes expensive.",
        ],
        enables: [
          "Earlier change detection",
          "Better margin protection",
          "Clearer scope ownership",
          "Fewer undocumented field deviations",
          "Stronger commercial defensibility during disputes",
        ],
        icon: "Zap",
      },
      {
        title: "Constraint Tracking Agent",
        paragraphs: [
          "Construction execution depends on moving constraints such as material availability, labour readiness, approvals, procurement status, site access, sequencing dependencies, and unresolved RFIs.",
          "This module tracks active constraints across project workflows and surfaces what is blocking progress, who owns the next action, and which downstream tasks may be affected.",
          "Instead of waiting for issues to appear in status meetings, teams can see constraints while they are still manageable.",
        ],
        enables: [
          "Earlier visibility into blockers",
          "Clearer ownership of next actions",
          "Reduced coordination delays",
          "Better sequencing discipline",
          "Faster issue resolution before delays compound",
        ],
        icon: "Gauge",
      },
      {
        title: "Material and Procurement Alignment Agent",
        paragraphs: [
          "Material delays can disrupt labour planning, site sequencing, installation windows, and project cost control.",
          "This module aligns material requirements with procurement status, supplier updates, delivery timelines, site readiness, and work-package schedules.",
          "It helps teams understand which materials are needed, when they are needed, where delays exist, and what project activities may be affected.",
        ],
        enables: [
          "Better material readiness",
          "Fewer last-minute procurement surprises",
          "Improved supplier coordination",
          "Reduced site delays caused by late materials",
          "Clearer connection between procurement and execution",
        ],
        icon: "Truck",
      },
      {
        title: "Labour and Work Package Coordination Agent",
        paragraphs: [
          "Labour planning becomes difficult when schedules shift, materials arrive late, RFIs remain open, or prior trades are not ready.",
          "This module connects labour requirements with work packages, sequencing dependencies, site progress, material availability, and active constraints.",
          "It helps project teams understand whether labour is aligned with actual site readiness instead of only planned schedules.",
        ],
        enables: [
          "Better labour utilization",
          "Reduced idle time",
          "Cleaner trade coordination",
          "Improved sequencing visibility",
          "Stronger alignment between planning and field execution",
        ],
        icon: "Users",
      },
      {
        title: "Predictive Risk and Schedule Impact Agent",
        paragraphs: [
          "Project risks rarely stay isolated. A delayed material package can affect labour allocation, subcontractor sequencing, milestone dates, cost exposure, and downstream approvals.",
          "This module analyzes project data, cost movement, delay patterns, procurement updates, field progress, and schedule dependencies to model potential execution impact.",
          "It helps teams identify what is likely to happen next and where intervention is needed before risk compounds.",
        ],
        enables: [
          "Early warning for cost overruns",
          "Critical path risk visibility",
          "Delay impact analysis",
          "Better labour and material planning",
          "More proactive project decision-making",
        ],
        icon: "LineChart",
      },
      {
        title: "Cost and Margin Reconciliation Agent",
        paragraphs: [
          "Construction teams often lose margin when scope changes, procurement updates, labour shifts, and field conditions are not reconciled with cost records in time.",
          "This module compares cost sheets, estimates, change orders, procurement data, invoices, work-package progress, and project updates to identify margin exposure.",
          "It helps teams understand whether project execution is still aligned with the commercial plan.",
        ],
        enables: [
          "Better cost visibility",
          "Earlier margin-risk detection",
          "Cleaner change-order support",
          "Reduced financial blind spots",
          "Stronger commercial control during execution",
        ],
        icon: "BarChart3",
      },
      {
        title: "Field-to-Office Synchronization Agent",
        paragraphs: [
          "Execution breaks down when field realities and office systems are not aligned.",
          "This module connects field updates, RFI activity, inspection notes, drawing revisions, procurement movement, schedule changes, and ERP data into one shared intelligence layer.",
          "Project managers, estimators, finance teams, procurement teams, and site teams can work from the same operational context instead of fragmented documents and disconnected tools.",
        ],
        enables: [
          "Faster communication between site and office",
          "Real-time project visibility",
          "Reduced manual reporting",
          "Better cost and schedule alignment",
          "Cleaner handoff between pre-construction and execution",
        ],
        icon: "Building2",
      },
    ],
  },
};
