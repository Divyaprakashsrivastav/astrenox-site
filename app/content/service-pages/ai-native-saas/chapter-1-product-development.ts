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
          "We bypass outdated documentation. Our systems scan your active codebases, git history, and CI/CD pipelines to map the actual architecture and establish a factual operational baseline.",
      },
      {
        title: "Dissect & Delegate",
        description:
          "We decompose complex architectural initiatives into independent, parallel threads. AI agents execute code authoring, test cases, and Infrastructure as Code (IaC), while senior engineers retain absolute authority over scoping, technical trade-offs, and validation.",
      },
      {
        title: "Automated Governance",
        description:
          "Quality, security, and compliance controls are embedded directly into the execution flow, allowing development to accelerate without introducing deployment risk.",
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
          "We safely untangle technical debt. Our teams utilize AI-assisted refactoring to rebuild outdated platforms at pace, recovering trapped value locked in legacy systems without operational disruption.",
        ],
      },
      {
        title: "Internal Capability Transfer",
        icon: "Users",
        paragraphs: [
          "We do not just deliver code; we upskill your engineering bench. By embedding AI-native workflows into your daily operations, your team becomes fully autonomous.",
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
    intro:
      "We operate on a strict, proof-of-value methodology, demonstrating deterministic throughput gains on live work before scaling:",
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
          "Output scales without proportional headcount increases. By leveraging AI to handle low-leverage work, senior engineers increase their impact, directly improving the commercial valuation of your digital products.",
      },
    ],
  },
};
