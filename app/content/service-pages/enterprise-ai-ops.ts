import type { ServicePageContent } from "./types";

export const enterpriseAiOpsContent: ServicePageContent = {
  metadata: {
    title: "Enterprise AI Ops & Governance | Astrenox",
    description:
      "MLOps, governance, and observability for production AI, controls that satisfy risk, finance, and engineering together.",
  },
  hero: {
    label: "AI Services",
    title: "Govern AI in\nProduction.",
    subtitle:
      "MLOps, governance, and observability for production AI, so models stay reliable, auditable, and within cost and risk bounds.",
    primaryCta: "Assess AI Ops Maturity",
    secondaryCta: "View Capabilities",
    primaryHref: "/contact",
    secondaryHref: "#workflow",
  },
  overview: {
    title: "Operate intelligence like critical infrastructure",
    paragraphs: [
      "Enterprises don't fail AI at the demo, they fail at operations. Astrenox builds the control planes that keep models evaluated, monitored, versioned, and accountable after launch.",
      "We connect engineering, risk, and finance: eval suites, incident response, access policies, spend attribution, and audit evidence that regulators and boards can inspect.",
      "From prompt and model registries to runtime guardrails and human escalation, we make production AI visible and manageable across teams and business units.",
      "Whether you run a single copilot or a fleet of agents, we leave you with platforms and playbooks your teams own, not a black box consultant dependency.",
    ],
  },
  capabilities: {
    label: "Capabilities",
    title: "AI ops & governance we install",
    items: [
      {
        title: "MLOps Pipelines",
        description: "Training, eval, promotion, and rollback workflows with environment gates.",
        icon: "GitBranch",
      },
      {
        title: "Model & Prompt Registry",
        description: "Versioned artifacts, owners, and change history across providers.",
        icon: "Layers",
      },
      {
        title: "Runtime Observability",
        description: "Latency, quality, drift, and failure dashboards tied to on-call.",
        icon: "BarChart3",
      },
      {
        title: "Policy & Guardrails",
        description: "Content filters, tool allowlists, PII controls, and escalation paths.",
        icon: "ShieldCheck",
      },
      {
        title: "Cost & FinOps",
        description: "Token and infra spend attribution by product, tenant, and team.",
        icon: "LineChart",
      },
      {
        title: "Audit & Compliance",
        description: "Evidence packs for model risk, privacy, and internal audit reviews.",
        icon: "FileCheck",
      },
    ],
  },
  workflow: {
    id: "workflow",
    label: "Process",
    title: "How we harden AI operations",
    steps: [
      {
        name: "Assess",
        description: "Map current models, owners, risks, tooling gaps, and incident blind spots.",
      },
      {
        name: "Design",
        description: "Define control tower architecture, policies, and RACI across risk and eng.",
      },
      {
        name: "Instrument",
        description: "Stand up registries, evals, monitoring, and cost telemetry in your cloud.",
      },
      {
        name: "Govern",
        description: "Install change boards, promotion gates, and audit-ready documentation.",
      },
      {
        name: "Operate",
        description: "Runbooks, on-call, and continuous improvement until your teams own the plane.",
      },
    ],
  },
  stack: {
    label: "Technology",
    title: "AI ops stack",
    items: [
      "MLflow",
      "Weights & Biases",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "LangSmith",
      "AWS",
      "Azure",
      "PostgreSQL",
      "Terraform",
      "PagerDuty",
    ],
  },
  outcomes: {
    label: "Outcomes",
    title: "Ops outcomes that matter",
    items: [
      { value: 80, suffix: "%", label: "Faster Incident Triage" },
      { value: 100, suffix: "%", label: "Models With Owners" },
      { value: 35, suffix: "%", label: "Avg. Inference Cost Cut" },
      { value: 0, suffix: "", label: "Unaudited Production Models" },
    ],
  },
  projects: {
    label: "Portfolio",
    title: "Featured AI ops engagements",
    items: [
      {
        name: "Enterprise AI Control Tower",
        industry: "Banking",
        timeline: "14 weeks",
        stack: ["MLflow", "Grafana", "Policy Engine"],
        outcome: "Central registry and promotion gates for 40+ models with audit evidence packs.",
      },
      {
        name: "Agent Observability Layer",
        industry: "Insurance",
        timeline: "9 weeks",
        stack: ["OpenTelemetry", "LangSmith", "PagerDuty"],
        outcome: "MTTR on agent failures dropped from hours to under 25 minutes.",
      },
      {
        name: "FinOps for GenAI",
        industry: "Technology",
        timeline: "6 weeks",
        stack: ["Cost Telemetry", "Budgets", "SSO"],
        outcome: "Product-level spend visibility cut runaway token usage 37% in one quarter.",
      },
    ],
  },
  industries: {
    label: "Industries",
    title: "Where governance is non-negotiable",
    items: [
      { name: "Financial Services", icon: "Landmark" },
      { name: "Insurance", icon: "ShieldCheck" },
      { name: "Healthcare", icon: "HeartPulse" },
      { name: "Public Sector", icon: "Building2" },
      { name: "Technology", icon: "Cpu" },
      { name: "Telecom", icon: "Network" },
      { name: "Energy", icon: "Gauge" },
      { name: "Professional Services", icon: "Briefcase" },
    ],
  },
  testimonials: {
    label: "Testimonials",
    title: "What risk and platform leaders say",
    items: [
      {
        quote:
          "We finally have one place that answers who owns every model, what changed last week, and whether evals passed before production.",
        author: "Diane Vos",
        role: "Head of Model Risk, Summit Bank",
      },
      {
        quote:
          "On-call for AI used to mean guessing. Now we have traces, quality signals, and runbooks our SREs trust.",
        author: "Omar Haddad",
        role: "Director of Platform, Intacture",
      },
      {
        quote:
          "Finance stopped treating GenAI as a black hole. Cost attribution by product changed how we approve new launches.",
        author: "Claire Ng",
        role: "CFO Office, Brightlayer",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "AI ops & governance questions",
    items: [
      {
        q: "Do you replace our ML platform team?",
        a: "No. We install controls and transfer ownership, accelerating your team rather than creating a permanent dependency.",
      },
      {
        q: "Does this work with multiple model providers?",
        a: "Yes. Registries and guardrails are provider-agnostic across OpenAI, Anthropic, Azure, open-source, and custom models.",
      },
      {
        q: "How do you handle regulated industries?",
        a: "We align artifacts and gates to your existing model risk, privacy, and audit processes, not a one-size policy deck.",
      },
      {
        q: "Can you start with one production system?",
        a: "Absolutely. We often begin with a high-risk or high-spend system, prove the control plane, then expand.",
      },
      {
        q: "What does success look like in 90 days?",
        a: "Inventories with owners, eval gates on promotions, live observability, and a first audit-ready evidence pack.",
      },
    ],
  },
  cta: {
    title: "Make Production AI Auditable.",
    subtitle:
      "Schedule a maturity assessment. We'll map gaps across ops, risk, and cost, and outline a control-tower path you can staff and own.",
    primaryCta: "Book AI Ops Review",
    secondaryCta: "Explore AI Transformation",
    primaryHref: "/contact",
    secondaryHref: "/services/ai-transformation",
  },
};
