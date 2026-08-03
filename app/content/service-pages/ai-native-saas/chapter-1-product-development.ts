import type { ServicePageChapter } from "../types";

export const chapter1ProductDevelopment: ServicePageChapter = {
  id: "section-1",
  title: "Enterprise AI-Native Product Development",
  overview: {
    paragraphs: [
      "Re-engineer how your organization ships software. We integrate agentic workflows, execute complex legacy modernization, and transform your SDLC to radically compress delivery cycles without sacrificing architectural integrity.",
    ],
  },
  methodology: {
    title: "Our Methodology",
    intro:
      "AI scaling is a coordination challenge, not a computation problem. We redesign product development to maximize speed by shifting from sequential handoffs to parallel, agentic execution. This methodology relies on a shared context engine that captures architecture decisions, dependencies, and governance rules, ensuring AI agents and senior engineers operate synchronously without code drift.",
    items: [
      {
        title: "Diagnose via Code",
        description:
          "We validate available documentation against active codebases, Git history, and CI/CD pipelines to establish a factual view of the current architecture and delivery environment.",
      },
      {
        title: "Dissect & Delegate",
        description:
          "We decompose complex architectural initiatives into independent, parallel threads. AI agents execute code authoring, test cases, and Infrastructure as Code (IaC), while senior engineers retain absolute authority over scoping, technical trade-offs, and validation.",
      },
      {
        title: "Automated Governance",
        description:
          "Quality, security, and compliance controls are embedded directly into the execution flow, helping teams accelerate delivery while managing deployment risk.",
      },
    ],
  },
  capabilities: {
    title: "Engineering Capabilities",
    items: [
      {
        title: "AI-Native SDLC Transformation",
        icon: "Workflow",
        paragraphs: [
          "We inject specialized AI agents directly into your development lifecycle to eliminate process bottlenecks, enforce architectural standards, and radically accelerate code generation.",
        ],
      },
      {
        title: "Agentic Legacy Modernization",
        icon: "Layers",
        paragraphs: [
          "We use AI-assisted analysis and refactoring to modernize selected components, reduce technical debt, and protect continuity across critical operations.",
        ],
      },
      {
        title: "Internal Capability Transfer",
        icon: "Users",
        paragraphs: [
          "We combine delivery with capability transfer, helping internal engineering teams operate and improve AI-native workflows after implementation.",
        ],
      },
      {
        title: "All Builders, Zero Overhead",
        icon: "Rocket",
        paragraphs: [
          "Our technical consulting model eliminates the coordination tax. Everyone on your engagement writes code, designs systems, or shapes the product, deploying senior expertise as force multipliers rather than managers.",
        ],
      },
    ],
  },
  impact: {
    title: "Business Impact",
    intro: "",
    items: [
      {
        title: "30% to 70% sustained productivity gains",
        description:
          "across the product lifecycle by replacing manual coordination overhead with specialized AI execution.",
      },
      {
        title: "Compressed Time-to-Market",
        description:
          "Radically accelerated delivery cycles move engineering effort away from maintenance and into revenue-generating product releases.",
      },
      {
        title: "Defensible ROI",
        description:
          "AI is applied to repeatable, lower-leverage work so senior engineers can focus on architecture, product decisions, and higher-value delivery. Results are evaluated against agreed productivity, quality, and delivery metrics.",
      },
    ],
  },
};
