import type { ServicePageContent } from "../service-pages/types";

export const cloudNetworkGccContent: ServicePageContent = {
  metadata: {
    title: "Cloud, Network Infrastructure and GCC Solutions | Astrenox",
    description:
      "We help organisations assess their current environment, define the target operating model and manage transformation from strategy through implementation and ongoing operations.",
  },
  hero: {
    label: "Infrastructure Solutions",
    title: "Cloud, Network Infrastructure\nand GCC Solutions",
    subtitle: "",
    primaryCta: "Talk to an Infrastructure Expert",
    secondaryCta: "Explore Capabilities",
    primaryHref: "/contact",
    secondaryHref: "#cloud-managed-services",
  },
  intro: {
    paragraphs: [
      "Astrenox helps enterprises unify cloud, network, physical infrastructure, and operating models into a secure, scalable technology environment, from current-state assessment through transformation and ongoing operations.",
    ],
  },
  chapters: [
    {
      id: "cloud-managed-services",
      label: "Enterprise Cloud",
      title: "Enterprise Cloud and Managed Services",
      subtitle:
        "We design, modernise and operate secure cloud environments aligned with workload requirements, regulatory obligations and long-term business priorities.",
      capabilities: {
        title: "Cloud Capabilities",
        items: [
          {
            title: "Cloud Strategy and Modernisation",
            paragraphs: [
              "We assess applications, dependencies, infrastructure utilisation, security requirements and operating costs before defining the appropriate modernisation path.",
              "Workloads may be rehosted, re-platformed, refactored or retired based on business value and technical readiness. This prevents enterprises from simply transferring legacy complexity into the cloud without improving performance or resilience.",
            ],
            icon: "Target",
          },
          {
            title: "Public, Private and Hybrid Cloud",
            paragraphs: [
              "We architect public, private and hybrid environments according to workload criticality, data sensitivity, latency and compliance requirements.",
              "Private-cloud environments provide greater control for sensitive workloads, while hybrid models allow organisations to retain critical systems and selectively use public-cloud capacity where flexibility is required.",
            ],
            icon: "Cloud",
          },
          {
            title: "Migration and Platform Automation",
            paragraphs: [
              "We plan phased migrations with dependency mapping, validation and rollback controls to minimise operational disruption.",
              "Infrastructure as Code, automated provisioning and CI/CD integration create consistent environments across development, testing and production while improving release reliability and infrastructure governance.",
            ],
            icon: "GitBranch",
          },
          {
            title: "Managed Cloud Operations",
            paragraphs: ["Our managed-services scope can include:"],
            enables: [
              "Infrastructure and application monitoring",
              "Application and database administration",
              "Security patching and vulnerability remediation",
              "Backup and disaster recovery",
              "Capacity and performance management",
              "Cloud utilisation and cost optimisation",
            ],
            enablesLabel: "Managed services scope",
            afterEnables: [
              "Continuous telemetry helps identify performance, security and capacity issues before they affect business services.",
            ],
            icon: "Gauge",
          },
        ],
      },
    },
    {
      id: "network-infrastructure-epc",
      label: "Network & EPC",
      title: "Network, Infrastructure and EPC Solutions",
      subtitle:
        "We design and deliver secure digital and physical infrastructure for distributed enterprises, mission-critical operations, smart facilities and AI-ready environments.",
      capabilities: {
        title: "Network and EPC Capabilities",
        items: [
          {
            title: "Enterprise Network Transformation",
            paragraphs: [
              "We evaluate application traffic, site requirements, network performance and security exposure before defining the target architecture.",
              "Solutions can include SD-WAN, enterprise LAN and WLAN, core routing, secure remote access, network segmentation, edge connectivity and resilient links across offices, facilities and data centres.",
            ],
            icon: "Network",
          },
          {
            title: "AI-Ready Core Infrastructure",
            paragraphs: [
              "We implement low-latency, high-availability environments with redundancy, granular access controls and Zero-Trust segmentation.",
              "The supporting infrastructure can include:",
            ],
            enables: [
              "Hyper-converged compute and virtualisation",
              "GPU-enabled and AI-ready compute environments",
              "High-performance storage and immutable backup",
              "Edge infrastructure and IoT connectivity",
              "Physical access, surveillance and environmental monitoring",
            ],
            enablesLabel: "Supporting infrastructure",
            icon: "Cpu",
          },
          {
            title: "Turnkey EPC Delivery",
            paragraphs: [
              "We manage complex infrastructure programmes from engineering and procurement through installation and commissioning.",
              "Our scope can cover site surveys, detailed design, OEM coordination, structured cabling, power distribution, cooling, access control, equipment installation, testing and handover.",
              "Post-deployment support can include maintenance, asset management, upgrades, vendor coordination and service-level reporting.",
            ],
            icon: "Building2",
          },
        ],
      },
    },
    {
      id: "gcc-solutions",
      label: "Global Capability Centres",
      title: "High-Performance GCC Establishment and Management",
      subtitle:
        "We help global enterprises build and operate Global Capability Centres as strategic extensions of their organisation rather than conventional offshore staffing units.",
      capabilities: {
        title: "GCC Capabilities",
        items: [
          {
            title: "GCC Strategy and Establishment",
            paragraphs: [
              "We work with leadership teams to define the GCC mandate, capability roadmap, location strategy, governance model and long-term ownership structure.",
              "The centre can support software engineering, data and AI, cloud platforms, cybersecurity, enterprise operations, finance, shared services and research functions.",
              "We coordinate the operational foundations required for launch, including:",
            ],
            enables: [
              "Entity and compliance support",
              "Workspace and infrastructure planning",
              "IT security and access controls",
              "Talent acquisition and onboarding",
              "HR, payroll and benefits setup",
              "Vendor and facilities coordination",
              "Integration with global delivery processes",
            ],
            enablesLabel: "Operational foundations",
            icon: "Landmark",
          },
          {
            title: "Managed GCC Operations",
            paragraphs: [
              "We can manage ongoing operations across HR, payroll, finance, facilities, IT support, security, compliance and employee engagement.",
              "Governance mechanisms connect the GCC with global leadership, product teams, engineering standards and delivery pipelines, ensuring it operates as an integrated part of the enterprise.",
            ],
            icon: "Users",
          },
          {
            title: "Flexible Engagement Models",
            paragraphs: [
              "Engagement options can include fully managed GCCs, dedicated global teams, Build-Operate-Transfer and phased transition to client ownership.",
              "Under a Build-Operate-Transfer model, we establish and operate the centre until the teams, systems and controls are mature, then support the structured transfer of knowledge and operational ownership.",
              "The objective is to create a scalable Centre of Excellence that develops institutional capability, protects intellectual property and contributes directly to enterprise growth.",
            ],
            icon: "Workflow",
          },
        ],
      },
      cta: {
        title: "Plan Your Infrastructure Transformation",
        paragraphs: [
          "From cloud strategy and network transformation to turnkey EPC delivery and GCC establishment, we manage the full journey from assessment through implementation and ongoing operations.",
        ],
        primaryCta: "Talk to an Infrastructure Expert",
        primaryHref: "/contact",
      },
    },
  ],
};
