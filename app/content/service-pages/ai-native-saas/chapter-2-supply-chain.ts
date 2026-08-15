import type { ServicePageChapter } from "../types";

export const chapter2SupplyChain: ServicePageChapter = {
  id: "section-2",
  label: "Section 2",
  title: "Engineering AI for Supply Chain Operations",
  subtitle: "From Supply Chain Visibility to Autonomous Execution",
  overview: {
    title: "Solution Brief",
    paragraphs: [
      "Supply chain data is distributed across ERP, warehouse, transportation, procurement, supplier, finance, document, and communication systems, limiting end-to-end visibility and slowing operational decisions.",
      "Astrenox builds secure AI intelligence layers that connect demand, inventory, suppliers, purchase orders, logistics events, operational constraints, and financial impact within a unified execution environment.",
      "The system detects emerging risks, evaluates response options, recommends next actions, and automates approved workflows within enterprise-defined business rules and approval controls.",
      "AI is integrated into the existing supply chain technology environment rather than requiring a complete platform replacement, preserving established systems, processes, and controls.",
      "Routine, low-risk actions can be automated while high-value sourcing, procurement, supplier, and logistics decisions remain governed through permissions, thresholds, approvals, and human review.",
      "The outcome is faster decision-making, stronger supply continuity, improved working-capital control, reduced manual coordination, and greater operational visibility across the supply chain.",
    ],
  },
  contentSections: [
    {
      title: "Built for Real Supply Chain Complexity",
      tags: [
        "SUPPLIERS",
        "INVENTORY",
        "DEMAND",
        "PURCHASE ORDERS",
        "LOGISTICS",
        "APPROVALS",
        "RISK",
        "COST",
      ],
      paragraphs: [
        "Supply chain teams rarely suffer from lack of data.",
        "They suffer because the data is fragmented across systems, spreadsheets, emails, supplier portals, freight documents, and planning tools.",
        "Our AI systems convert this fragmented operational data into decision-ready intelligence. They identify what changed, what is at risk, who owns the next action, and which workflow should move forward.",
        "The goal is not passive visibility.",
        "The goal is controlled execution.",
      ],
    },
    {
      title: "From Passive Visibility to Governed Execution",
      paragraphs: [
        "Most supply chain platforms stop at alerts, reports, or forecasts.",
        "We go further by engineering agentic systems that can recommend, draft, route, validate, and execute operational workflows within strict business rules.",
        "The system does not replace planners, procurement teams, or supply chain analysts. It removes repetitive coordination work so they can focus on exceptions, supplier strategy, cost control, and high-value decisions.",
      ],
    },
  ],
  capabilities: {
    title: "Core Engineering Capabilities",
    items: [
      {
        title: "Supply Chain Context Graph & Operational Intelligence",
        paragraphs: [
          "Creates a connected operational layer across suppliers, materials, products, facilities, inventory, customer orders, purchase orders, contracts, logistics routes, and risk dependencies. This gives teams a unified view of how changes across the network affect production, service levels, customer commitments, working capital, and downstream operations.",
        ],
        icon: "Network",
      },
      {
        title: "Predictive Demand & Inventory Intelligence",
        paragraphs: [
          "Combines historical demand, customer orders, promotions, seasonality, inventory movements, market signals, and operational constraints to continuously update forecasts and inventory requirements. The system identifies demand shifts, stockout or excess inventory risks, forecast drivers, confidence levels, and situations requiring planner intervention.",
        ],
        icon: "LineChart",
      },
      {
        title: "Supplier Intelligence & Risk Monitoring",
        paragraphs: [
          "Consolidates supplier quotations, contracts, purchase history, delivery performance, quality records, lead times, compliance documents, communications, and external risk signals into one intelligence layer. Suppliers can be evaluated against enterprise-specific sourcing criteria while the system identifies performance risks, sourcing dependencies, alternative vendors, and the operational impact of supplier changes.",
        ],
        icon: "ShieldCheck",
      },
      {
        title: "Scenario Simulation & Network Optimization",
        paragraphs: [
          "Models the operational and financial impact of supplier delays, demand shifts, material shortages, logistics disruptions, capacity constraints, and regulatory changes. Teams can compare alternative suppliers, inventory reallocations, expedited shipments, production adjustments, and route changes before committing resources.",
        ],
        icon: "Target",
      },
      {
        title: "Autonomous Replenishment & Procurement",
        paragraphs: [
          "Governed AI agents monitor inventory thresholds, demand movement, supplier lead times, open purchase orders, production requirements, and sourcing policies. When replenishment is required, the system can recommend quantities, identify suppliers, prepare procurement documentation, validate requests, and route approvals, while keeping higher-value or exceptional decisions under human review.",
        ],
        icon: "Truck",
      },
      {
        title: "Logistics & Procurement Document Intelligence",
        paragraphs: [
          "Extracts, classifies, validates, and reconciles information from supplier quotations, freight invoices, bills of lading, delivery notes, customs documents, contracts, compliance records, and email attachments against ERP, warehouse, transportation, and procurement data. It surfaces missing fields, quantity mismatches, duplicate invoices, unusual charges, contractual inconsistencies, and compliance gaps before they affect downstream operations.",
        ],
        icon: "FileCheck",
      },
      {
        title: "Governed Workflow Orchestration & Exception Management",
        paragraphs: [
          "Coordinates actions across planning, procurement, logistics, finance, suppliers, and operational teams when exceptions occur. The system identifies affected orders, assigns ownership, evaluates response options, prepares communications, initiates approved actions, and escalates high-risk decisions through role-based access, approval policies, confidence thresholds, audit trails, and human-review checkpoints.",
        ],
        icon: "Workflow",
      },
    ],
  },
  integrations: {
    title: "The Integration Pipeline",
    items: [
      {
        title: "No Rip-and-Replace",
        photo: "/images/deliverables/integration-stack.jpg",
        paragraphs: [
          "We do not force a multi-year platform migration.",
          "Our AI layer connects to your existing operational stack and automates the workflows around it.",
          "This can include:",
        ],
        bullets: [
          "ERP systems",
          "Warehouse Management Systems",
          "Transportation Management Systems",
          "Procurement platforms",
          "Supplier portals",
          "Planning spreadsheets",
          "Internal databases",
          "BI dashboards",
          "Email and communication tools",
        ],
        afterBullets: [
          "The result is a connective intelligence layer that improves execution without disrupting the systems your team already depends on.",
        ],
      },
      {
        title: "Unified Data Layer",
        photo: "/images/deliverables/data-layer.jpg",
        paragraphs: [
          "We connect fragmented supply chain data into a governed operational layer.",
          "This gives teams a shared view of demand, inventory, suppliers, orders, logistics movement, exceptions, and cost impact.",
          "The system can support natural language querying, structured reporting, automated alerts, and agentic workflow execution , without requiring business teams to depend on data engineering teams for every question.",
        ],
      },
      {
        title: "Governed AI Outputs",
        photo: "/images/deliverables/governed-ai.jpg",
        paragraphs: [
          "Enterprise supply chains require control, not black-box automation.",
          "Every AI action is constrained by explicit business logic, role-based access control, approval thresholds, audit trails, and human-in-the-loop checkpoints.",
          "The system can recommend or execute only within approved rules.",
          "For example:",
        ],
        bullets: [
          "Low-value replenishment can be automated.",
          "High-value purchase orders can require manager approval.",
          "Supplier changes can require procurement review.",
          "Expedited shipments can require finance approval.",
          "Low-confidence AI outputs can be routed to a human owner.",
        ],
        afterBullets: [
          "This keeps automation safe, auditable, and aligned with operational policy.",
        ],
      },
    ],
  },
  workflow: {
    title: "How the System Works",
    steps: [
      {
        name: "Step 1: Supply Chain Workflow Audit",
        description:
          "We review your current planning, procurement, inventory, logistics, supplier management, and reporting workflows to identify the highest-friction operational loops.",
      },
      {
        name: "Step 2: Data and System Mapping",
        description:
          "We map where critical data lives across ERP, WMS, TMS, supplier portals, spreadsheets, and communication tools.",
      },
      {
        name: "Step 3: AI Pipeline Design",
        description:
          "We define the extraction, prediction, simulation, and workflow automation pipelines required for your supply chain environment.",
      },
      {
        name: "Step 4: Agent and Rule Configuration",
        description:
          "We configure AI agents with strict rules for approvals, escalation, replenishment, supplier communication, and exception handling.",
      },
      {
        name: "Step 5: Integration and Deployment",
        description:
          "We integrate the system into your existing tools and deploy the first production workflows in focused execution cycles.",
      },
      {
        name: "Step 6: Continuous Optimization",
        description:
          "We track workflow outcomes, planner overrides, approval delays, supplier responses, forecast accuracy, and cost impact to improve the system over time.",
      },
    ],
  },
  impact: {
    title: "Measurable Operational Impact",
    items: [
      {
        title: "Forecast Error Reduction",
        description:
          "AI forecasting engines capture non-linear demand signals and help reduce forecasting gaps caused by seasonality, market shifts, promotions, and supply constraints.",
      },
      {
        title: "Working Capital Optimization",
        description:
          "Dynamic inventory staging helps reduce excess stock, carrying costs, obsolete inventory, and cash locked in the wrong locations.",
      },
      {
        title: "Planner Productivity",
        description:
          "Routine PO tracking, supplier follow-ups, document reconciliation, and system updates are automated, allowing planners to focus on strategic exception management.",
      },
      {
        title: "Faster Disruption Response",
        description:
          "When delays, shortages, or demand spikes occur, the system identifies affected orders, simulates options, recommends action paths, and routes ownership immediately.",
      },
      {
        title: "Better Cost Control",
        description:
          "Every recommendation is linked to cost impact, service-level impact, and operational trade-offs, helping teams make decisions with financial clarity.",
      },
    ],
  },
};
