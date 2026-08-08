import type { ServicePageChapter } from "../types";

export const chapter2SupplyChain: ServicePageChapter = {
  id: "section-2",
  label: "Section 2",
  title: "Engineering AI for Supply Chain Operations",
  subtitle: "From Supply Chain Visibility to Autonomous Execution",
  overview: {
    layout: "timeline",
    paragraphs: [],
    steps: [
      {
        name: "The visibility gap",
        description: "Dashboards tell you what happened.",
      },
      {
        name: "Decision over reporting",
        description:
          "Modern supply chains need systems that can decide what should happen next.",
      },
      {
        name: "Connected execution layer",
        description:
          "We engineer AI-powered supply chain execution layers that connect demand signals, inventory positions, supplier performance, purchase orders, logistics events, and ERP data into one operational intelligence system.",
      },
      {
        name: "Agents inside your stack",
        description:
          "Instead of adding another reporting dashboard, we build AI pipelines and autonomous agents that work inside your existing ERP, WMS, TMS, procurement tools, and planning workflows , helping teams act faster, reduce manual follow-ups, and respond to disruptions before they become expensive.",
      },
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
        title: "Autonomous Replenishment",
        paragraphs: [
          "AI agents continuously monitor inventory levels, demand movement, supplier lead times, safety stock thresholds, and open purchase orders.",
          "When inventory risk is detected, the system can recommend replenishment actions, draft purchase orders, validate them against business rules, and route them for approval.",
          "For low-risk, predefined scenarios, replenishment workflows can be executed automatically. For higher-risk decisions, the system escalates to the right planner or procurement owner with full context.",
        ],
        enables: [
          "Faster replenishment decisions",
          "Reduced stockout risk",
          "Lower manual PO tracking",
          "Better supplier follow-up discipline",
          "Clear separation between auto-executable and human-approved actions",
        ],
        icon: "Truck",
      },
      {
        title: "Predictive Demand Modeling",
        paragraphs: [
          "Traditional forecasting often breaks when demand shifts suddenly due to promotions, seasonality, channel changes, supply shocks, pricing movement, or external market signals.",
          "We deploy AI forecasting engines that combine historical sales, inventory movement, customer orders, market patterns, and operational constraints to generate more adaptive demand predictions.",
          "The system does not only forecast demand. It highlights confidence levels, explains drivers, and shows where human review is required.",
        ],
        enables: [
          "Better demand planning accuracy",
          "Faster detection of demand shifts",
          "Reduced overstock and understock risk",
          "More informed production and procurement planning",
          "Forecasting logic that improves as new operational signals enter the system",
        ],
        icon: "LineChart",
      },
      {
        title: "Deterministic Scenario Simulation",
        paragraphs: [
          "Supply chains are affected by constant changes: supplier delays, freight disruptions, tariff shifts, warehouse constraints, demand spikes, and material shortages.",
          "We build simulation engines that use live ERP, WMS, TMS, and procurement data to model the operational and financial impact of these changes.",
          "Teams can ask practical questions such as:",
          "What happens if this supplier is delayed by 10 days?",
          "Which orders are at risk if this lane becomes unavailable?",
          "How much working capital is locked in excess inventory?",
          "Which alternate supplier protects service levels at the lowest cost?",
          "What is the cost impact of expediting this shipment?",
          "The system converts these questions into structured simulations, showing cost, service-level, and operational trade-offs before a decision is made.",
        ],
        enables: [
          "Faster response to supply shocks",
          "Better trade-off visibility",
          "Reduced emergency decision-making",
          "More accurate cost-to-serve analysis",
          "Stronger planning under uncertainty",
        ],
        icon: "Target",
      },
      {
        title: "Supplier Intelligence and Vendor Selection",
        paragraphs: [
          "Supplier data is often scattered across quotes, contracts, delivery records, email threads, payment history, and performance logs.",
          "We create a unified supplier intelligence layer that tracks pricing, reliability, responsiveness, risk, contract terms, and approval constraints.",
          "When teams need to select a vendor, the system compares suppliers against your own business rules , not generic scoring models.",
          "It can evaluate price, lead time, past performance, quality issues, compliance requirements, and current operational risk before recommending the best-fit supplier.",
        ],
        enables: [
          "Faster supplier comparison",
          "Better vendor selection decisions",
          "Reduced dependency on tribal knowledge",
          "Clearer procurement approval logic",
          "More consistent sourcing decisions across teams and sites",
        ],
        icon: "Users",
      },
      {
        title: "Unstructured Logistics and Procurement Data Extraction",
        paragraphs: [
          "A large amount of supply chain work still depends on messy, unstructured documents.",
          "Freight invoices, bills of lading, compliance PDFs, supplier quotes, customs documents, delivery notes, and email attachments often require manual reading and reconciliation.",
          "We use computer vision, OCR, and NLP pipelines to extract structured data from these documents and validate it against ERP, WMS, TMS, or procurement records.",
          "The system flags missing fields, mismatched quantities, duplicate entries, unusual charges, and compliance gaps before they create downstream errors.",
        ],
        enables: [
          "Reduced manual reconciliation",
          "Cleaner logistics and procurement data",
          "Faster invoice and document processing",
          "Better compliance visibility",
          "Fewer errors caused by spreadsheet-based operations",
        ],
        icon: "FileCheck",
      },
      {
        title: "Workflow Automation and Exception Routing",
        paragraphs: [
          "Many supply chain delays are not caused by lack of information.",
          "They are caused by slow approvals, unclear ownership, manual follow-ups, and disconnected communication.",
          "We build AI workflow agents that route requests, assign owners, track status, escalate exceptions, and push updates into the tools your team already uses.",
          "For example, the system can detect a delayed shipment, identify affected orders, notify the planner, draft a supplier follow-up, check alternate inventory, and escalate only if the issue crosses a predefined risk threshold.",
        ],
        enables: [
          "Faster exception management",
          "Reduced approval latency",
          "Less manual chasing",
          "Better ownership visibility",
          "More reliable movement from issue detection to resolution",
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
