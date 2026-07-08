import type { ServicePageContent } from "./types";

export const qualityEngineeringContent: ServicePageContent = {
  metadata: {
    title: "Quality Engineering & Software Testing | Astrenox",
    description:
      "Automated QA, performance testing, and release governance that gives engineering leaders confidence to ship at enterprise velocity.",
  },
  hero: {
    label: "Digital Consulting",
    title: "Ship With Confidence,\nEvery Release.",
    subtitle:
      "Quality engineering and software testing services that embed automation, performance benchmarks, and release governance into your delivery pipeline.",
    primaryCta: "Request QA Assessment",
    secondaryCta: "View Testing Process",
    primaryHref: "/contact",
    secondaryHref: "#workflow",
  },
  overview: {
    title: "Quality engineering for modern delivery",
    paragraphs: [
      "Astrenox helps engineering organizations build quality into the delivery pipeline—not bolt it on before release. We design test automation frameworks, performance benchmarks, and release gates that accelerate shipping while reducing production incidents.",
      "Our practice covers test strategy, automation engineering, performance and load testing, accessibility compliance, and release governance. We work as an extension of your engineering team with the same sprint cadence and accountability.",
      "Every engagement establishes measurable quality metrics: defect escape rate, test coverage, mean time to detect, and release confidence scores. Dashboards make quality visible to engineering managers and executives alike.",
      "From Series B startups establishing QA discipline to enterprises modernizing legacy test suites, we deliver frameworks your team can maintain and extend independently.",
    ],
  },
  capabilities: {
    label: "Capabilities",
    title: "Comprehensive quality engineering",
    items: [
      {
        title: "Test Automation",
        description: "UI, API, and integration test suites with CI integration and flaky test detection.",
        icon: "TestTube2",
      },
      {
        title: "Performance Testing",
        description: "Load, stress, and endurance testing with bottleneck analysis and capacity planning.",
        icon: "Gauge",
      },
      {
        title: "API & Contract Testing",
        description: "Schema validation, contract testing, and backward compatibility checks across services.",
        icon: "Network",
      },
      {
        title: "Security Testing",
        description: "SAST, DAST, and dependency scanning integrated into the development workflow.",
        icon: "ShieldCheck",
      },
      {
        title: "Release Governance",
        description: "Quality gates, release checklists, and go/no-go frameworks with stakeholder sign-off.",
        icon: "FileCheck",
      },
      {
        title: "QA Strategy & Advisory",
        description: "Test pyramid design, tooling selection, and team structure for sustainable quality practices.",
        icon: "Target",
      },
    ],
  },
  workflow: {
    id: "workflow",
    label: "Process",
    title: "Quality engineering workflow",
    steps: [
      {
        name: "Assess",
        description: "Audit current test coverage, defect trends, and release processes. Identify highest-risk quality gaps.",
      },
      {
        name: "Strategy",
        description: "Design test pyramid, automation roadmap, and quality metrics aligned to business risk tolerance.",
      },
      {
        name: "Automate",
        description: "Build test frameworks, integrate with CI/CD, and establish data management for test environments.",
      },
      {
        name: "Validate",
        description: "Run performance baselines, security scans, and release dry-runs before production cutover.",
      },
      {
        name: "Govern",
        description: "Implement quality gates, reporting dashboards, and continuous improvement cadences.",
      },
    ],
  },
  stack: {
    label: "Technology",
    title: "Quality engineering stack",
    items: [
      "Playwright",
      "Cypress",
      "Selenium",
      "Jest",
      "Postman",
      "k6",
      "JMeter",
      "Snyk",
      "SonarQube",
      "GitHub Actions",
      "TestRail",
      "Datadog",
    ],
  },
  outcomes: {
    label: "Outcomes",
    title: "Quality metrics we improve",
    items: [
      { value: 75, suffix: "%", label: "Reduction in Production Defects" },
      { value: 90, suffix: "%", label: "Test Automation Coverage" },
      { value: 50, suffix: "%", label: "Faster Release Cycles" },
      { value: 60, suffix: "%", label: "Lower QA Manual Effort" },
    ],
  },
  projects: {
    label: "Portfolio",
    title: "Featured QA engagements",
    items: [
      {
        name: "E-Commerce Test Automation",
        industry: "Retail",
        timeline: "10 weeks",
        stack: ["Playwright", "k6", "GitHub Actions"],
        outcome: "Achieved 92% automation coverage, reducing release regression time from 3 days to 4 hours.",
      },
      {
        name: "Banking API Quality Platform",
        industry: "Financial Services",
        timeline: "14 weeks",
        stack: ["Postman", "JMeter", "SonarQube"],
        outcome: "Zero critical defects escaped to production over 6 consecutive release cycles.",
      },
      {
        name: "Healthcare Release Governance",
        industry: "Healthcare",
        timeline: "8 weeks",
        stack: ["Cypress", "TestRail", "Azure DevOps"],
        outcome: "Established FDA-aligned validation framework with full audit trail for software releases.",
      },
    ],
  },
  industries: {
    label: "Industries",
    title: "Sectors we test for",
    items: [
      { name: "Financial Services", icon: "Landmark" },
      { name: "Healthcare", icon: "HeartPulse" },
      { name: "E-Commerce", icon: "Globe" },
      { name: "SaaS", icon: "Cpu" },
      { name: "Telecommunications", icon: "Network" },
      { name: "Insurance", icon: "ShieldCheck" },
      { name: "Manufacturing", icon: "Factory" },
      { name: "Government", icon: "Building2" },
    ],
  },
  testimonials: {
    label: "Testimonials",
    title: "What engineering leaders say",
    items: [
      {
        quote:
          "Our release confidence went from 'hope and pray' to data-driven go/no-go decisions. The automation framework they built runs 2,400 tests on every PR.",
        author: "Michelle Tran",
        role: "Engineering Director, CartWise",
      },
      {
        quote:
          "Performance testing uncovered a database bottleneck that would have caused a production outage during our product launch. That alone justified the engagement.",
        author: "Daniel Okafor",
        role: "VP Engineering, TrustBank Digital",
      },
      {
        quote:
          "They didn't just write tests—they redesigned our quality culture. Developers now own test automation as part of their definition of done.",
        author: "Sandra Mitchell",
        role: "QA Lead, HealthBridge",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Quality engineering questions",
    items: [
      {
        q: "How do you integrate with our CI/CD pipeline?",
        a: "We build test suites that run on every pull request and deployment stage. Failed tests block merges with clear reporting for developers.",
      },
      {
        q: "Do you replace our internal QA team?",
        a: "No. We augment your team—building frameworks, training engineers, and establishing practices your organization sustains independently.",
      },
      {
        q: "What types of testing do you cover?",
        a: "Functional, integration, API, performance, security, accessibility, and visual regression—with prioritization based on business risk.",
      },
      {
        q: "How do you handle test data management?",
        a: "We design synthetic data strategies, environment provisioning, and data masking that satisfy privacy requirements while enabling realistic testing.",
      },
      {
        q: "Can you support regulated industry validation?",
        a: "Yes. We align test documentation and traceability to FDA, GxP, and financial services validation requirements.",
      },
    ],
  },
  cta: {
    title: "Elevate Your Release Quality.",
    subtitle:
      "Schedule a QA assessment with our quality engineering leads. We'll review your current practices and propose an automation and governance roadmap.",
    primaryCta: "Book Discovery Call",
    secondaryCta: "Download Capability Deck",
    primaryHref: "/contact",
    secondaryHref: "/contact",
  },
};
