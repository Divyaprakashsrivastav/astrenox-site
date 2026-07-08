import type { ServicePageContent } from "./types";

export const devOpsSecurityContent: ServicePageContent = {
  metadata: {
    title: "DevOps & Enterprise IT Security Consulting | Astrenox",
    description:
      "CI/CD pipelines, infrastructure hardening, Kubernetes operations, and enterprise security posture management for regulated organizations.",
  },
  hero: {
    label: "Digital Consulting",
    title: "Secure Infrastructure,\nDelivered Continuously.",
    subtitle:
      "DevOps and security consulting that unifies delivery velocity with enterprise-grade compliance—CI/CD, cloud hardening, and observability in one practice.",
    primaryCta: "Request Security Assessment",
    secondaryCta: "View DevOps Process",
    primaryHref: "/contact",
    secondaryHref: "#workflow",
  },
  overview: {
    title: "DevOps and security for enterprise scale",
    paragraphs: [
      "Astrenox helps engineering organizations ship faster without compromising security posture. We design CI/CD pipelines, container platforms, and security controls that satisfy both developers and compliance auditors.",
      "Our practice spans infrastructure as code, Kubernetes operations, secrets management, zero-trust networking, and SOC 2 / ISO 27001 readiness. We treat security as an enabler of velocity—not a gate at the end of the pipeline.",
      "Every engagement includes automated security scanning, policy-as-code, and incident response runbooks. We embed with your platform team to build capabilities that persist beyond the consulting engagement.",
      "From startups preparing for enterprise sales to Fortune 500 firms consolidating fragmented tooling, we bring production-tested patterns and measurable outcomes.",
    ],
  },
  capabilities: {
    label: "Capabilities",
    title: "DevOps and security capabilities",
    items: [
      {
        title: "CI/CD Pipeline Design",
        description: "Automated build, test, and deploy pipelines with quality gates, artifact signing, and rollback strategies.",
        icon: "GitBranch",
      },
      {
        title: "Kubernetes Operations",
        description: "Cluster design, GitOps workflows, service mesh, and cost-optimized autoscaling for production workloads.",
        icon: "Cloud",
      },
      {
        title: "Security Hardening",
        description: "CIS benchmarks, vulnerability management, WAF configuration, and penetration test remediation.",
        icon: "ShieldCheck",
      },
      {
        title: "Identity & Access Management",
        description: "SSO, RBAC, secrets rotation, and zero-trust policies across cloud and on-premise environments.",
        icon: "Lock",
      },
      {
        title: "Observability & SRE",
        description: "Metrics, logging, tracing, and SLO-based alerting with on-call runbooks and incident management.",
        icon: "LineChart",
      },
      {
        title: "Compliance Readiness",
        description: "SOC 2, ISO 27001, HIPAA, and PCI-DSS control mapping with evidence collection automation.",
        icon: "FileCheck",
      },
    ],
  },
  workflow: {
    id: "workflow",
    label: "Process",
    title: "DevOps & security workflow",
    steps: [
      {
        name: "Assess",
        description: "Audit current pipelines, infrastructure, and security controls. Identify gaps against target compliance frameworks.",
      },
      {
        name: "Design",
        description: "Architect target platform with IaC templates, pipeline blueprints, and security control matrix.",
      },
      {
        name: "Implement",
        description: "Build pipelines, deploy clusters, and configure security tooling with pair-programming on your team.",
      },
      {
        name: "Validate",
        description: "Run chaos tests, penetration tests, and compliance dry-runs before production cutover.",
      },
      {
        name: "Operate",
        description: "Establish SRE practices, on-call rotations, and continuous improvement cadences.",
      },
    ],
  },
  stack: {
    label: "Technology",
    title: "DevOps & security stack",
    items: [
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "ArgoCD",
      "Docker",
      "AWS",
      "Azure",
      "Datadog",
      "Vault",
      "Snyk",
      "Istio",
      "PagerDuty",
    ],
  },
  outcomes: {
    label: "Outcomes",
    title: "Platform engineering outcomes",
    items: [
      { value: 80, suffix: "%", label: "Faster Deployment Frequency" },
      { value: 70, suffix: "%", label: "Reduction in Critical Vulnerabilities" },
      { value: 99, suffix: ".9%", label: "Platform Uptime Achieved" },
      { value: 45, suffix: "+", label: "Compliance Audits Passed" },
    ],
  },
  projects: {
    label: "Portfolio",
    title: "Featured DevOps engagements",
    items: [
      {
        name: "Platform Engineering Transformation",
        industry: "Fintech",
        timeline: "12 weeks",
        stack: ["Kubernetes", "Terraform", "ArgoCD"],
        outcome: "Reduced deployment time from 2 weeks to 45 minutes with automated compliance checks.",
      },
      {
        name: "SOC 2 Type II Readiness",
        industry: "SaaS",
        timeline: "16 weeks",
        stack: ["AWS", "Vault", "Datadog"],
        outcome: "Achieved SOC 2 certification in one audit cycle with zero critical findings.",
      },
      {
        name: "Multi-Region Kubernetes Platform",
        industry: "E-Commerce",
        timeline: "10 weeks",
        stack: ["EKS", "Istio", "GitHub Actions"],
        outcome: "Built active-active platform handling 50K RPS with 99.95% availability during peak season.",
      },
    ],
  },
  industries: {
    label: "Industries",
    title: "Regulated sectors we support",
    items: [
      { name: "Financial Services", icon: "Landmark" },
      { name: "Healthcare", icon: "HeartPulse" },
      { name: "SaaS & Technology", icon: "Cpu" },
      { name: "E-Commerce", icon: "Globe" },
      { name: "Government", icon: "Building2" },
      { name: "Insurance", icon: "ShieldCheck" },
      { name: "Energy", icon: "Zap" },
      { name: "Telecommunications", icon: "Network" },
    ],
  },
  testimonials: {
    label: "Testimonials",
    title: "What platform leaders say",
    items: [
      {
        quote:
          "They rebuilt our CI/CD from scratch in ten weeks. Deployments went from monthly releases with weekend war rooms to multiple daily deploys with confidence.",
        author: "Alex Rivera",
        role: "VP Platform Engineering, PayStream",
      },
      {
        quote:
          "Our SOC 2 audit had always been painful. Astrenox automated evidence collection and mapped controls to our actual infrastructure—not generic templates.",
        author: "Jennifer Liu",
        role: "CISO, CloudMetrics",
      },
      {
        quote:
          "The Kubernetes platform they designed handles our Black Friday traffic without manual intervention. Our ops team finally sleeps during peak season.",
        author: "Chris Dalton",
        role: "Director of Infrastructure, ShopNova",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "DevOps & security questions",
    items: [
      {
        q: "Do you work with our existing cloud provider?",
        a: "Yes. We're experienced across AWS, Azure, and GCP. We design for your current environment and plan migrations only when there's clear business value.",
      },
      {
        q: "How do you balance speed and security?",
        a: "Security controls are automated in the pipeline—scanning, policy checks, and approvals happen continuously, not as a final gate that blocks releases.",
      },
      {
        q: "Can you help us achieve compliance certifications?",
        a: "We map controls to SOC 2, ISO 27001, HIPAA, and PCI-DSS requirements, automate evidence collection, and prepare your team for auditor interviews.",
      },
      {
        q: "Do you provide 24/7 on-call support?",
        a: "We offer managed SRE retainers with defined SLAs. Most clients transition to internal on-call after knowledge transfer during the engagement.",
      },
      {
        q: "What about legacy infrastructure?",
        a: "We design hybrid approaches—containerizing where possible, building secure integration layers where not—without forcing premature rewrites.",
      },
    ],
  },
  cta: {
    title: "Accelerate Delivery. Strengthen Security.",
    subtitle:
      "Book a platform assessment with our DevOps and security leads. We'll audit your current state and propose a roadmap for velocity and compliance.",
    primaryCta: "Book Discovery Call",
    secondaryCta: "Download Capability Deck",
    primaryHref: "/contact",
    secondaryHref: "/contact",
  },
};
