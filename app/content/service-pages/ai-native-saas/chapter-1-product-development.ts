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
      "Scaling AI across engineering is fundamentally a coordination challenge. Our methodology restructures product development around parallel, AI-assisted execution rather than sequential handoffs, supported by a shared context layer that captures architecture decisions, dependencies, standards, and governance requirements so AI agents and senior engineers can work from the same technical foundation.",
    items: [
      {
        title: "Diagnose via Code",
        description:
          "We establish the engineering baseline from the systems that are actually running. Astrenox analyzes active codebases, Git history, architecture patterns, dependencies, CI/CD pipelines, infrastructure configurations, and development workflows to understand the current state, identify technical constraints, and surface the highest-impact opportunities for improvement.",
      },
      {
        title: "Dissect & Delegate",
        description:
          "We break complex engineering initiatives into clearly defined workstreams that can be executed in parallel. AI agents support code generation, testing, documentation, refactoring, and Infrastructure as Code, while senior engineers remain responsible for architecture, scope, technical trade-offs, integration decisions, and final validation.",
      },
      {
        title: "Automated Governance",
        description:
          "Security, quality, compliance, testing, and architectural controls are embedded directly into the development lifecycle rather than applied at the end. This enables engineering teams to increase delivery velocity while maintaining consistent standards, traceability, and deployment confidence.",
      },
    ],
  },
  capabilities: {
    title: "Engineering Capabilities",
    layout: "grid",
    items: [
      {
        title: "AI-Native SDLC Transformation",
        icon: "Workflow",
        image: "/images/overview/02-systems.jpg",
        paragraphs: [
          "We integrate specialized AI agents across planning, development, testing, documentation, review, and deployment to reduce engineering bottlenecks, improve consistency, enforce architectural standards, and accelerate the software delivery lifecycle without compromising technical governance.",
        ],
      },
      {
        title: "Agentic Legacy Modernization",
        icon: "Layers",
        image: "/images/advisory/infra-blueprint.jpg",
        paragraphs: [
          "We use AI-assisted code analysis, dependency mapping, refactoring, testing, and migration workflows to modernize legacy applications systematically. This allows enterprises to reduce technical debt, improve maintainability, modernize architecture, and recover value from critical systems while minimizing disruption to ongoing operations.",
        ],
      },
      {
        title: "Internal Capability Transfer",
        icon: "Users",
        image: "/images/delivery/embedded-teams.jpg",
        paragraphs: [
          "Every engagement is designed to strengthen the client's internal engineering capability. We embed AI-native development practices, tooling, standards, and workflows into day-to-day operations so internal teams can independently operate, extend, and continuously improve the systems introduced during the engagement.",
        ],
      },
      {
        title: "All Builders, Zero Overhead",
        icon: "Rocket",
        image: "/images/delivery/mvp-studio.jpg",
        paragraphs: [
          "Our delivery model prioritizes hands-on technical expertise over additional management layers. Engagement teams consist of engineers, architects, and product specialists who directly contribute to code, system design, technical decisions, and product execution, allowing senior expertise to function as an execution multiplier rather than coordination overhead.",
        ],
      },
    ],
  },
  impact: {
    title: "Business Impact",
    intro:
      "We follow a proof-of-value approach that demonstrates measurable improvements on real engineering workloads before broader transformation or scale.",
    items: [
      {
        title: "30% to 70% Productivity Improvement",
        description:
          "AI-assisted engineering can materially improve development throughput by reducing repetitive implementation work, manual coordination, testing overhead, documentation effort, and other low-leverage activities across the product lifecycle.",
      },
      {
        title: "Compressed Time-to-Market",
        description:
          "Parallel execution, automated engineering workflows, and reduced operational friction shorten development cycles, enabling teams to move engineering capacity away from maintenance and repetitive work toward higher-value product development and faster releases.",
      },
      {
        title: "Defensible ROI",
        description:
          "Engineering output can scale without requiring an equivalent increase in team size. By shifting repetitive and execution-heavy tasks to AI-assisted workflows, senior engineers can focus on architecture, complex problem solving, product differentiation, and other work that contributes directly to the commercial value of digital products.",
      },
    ],
  },
};
