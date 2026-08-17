import type { ServicePageContent } from "../service-pages/types";

export const dataCentreComputeCloudContent: ServicePageContent = {
  metadata: {
    title: "Enterprise Compute Cloud and Data Centre Managed Services | Astrenox",
    description:
      "We help organisations assess their existing infrastructure, define the appropriate deployment model and operate environments across private cloud, hybrid infrastructure, colocation facilities and enterprise data centres.",
  },
  hero: {
    label: "Infrastructure Solutions",
    title: "Enterprise Compute Cloud and\nData Centre Managed Services",
    subtitle: "",
    primaryCta: "Assess Your Infrastructure",
    secondaryCta: "Explore Capabilities",
    primaryHref: "/contact",
    secondaryHref: "#enterprise-compute-cloud",
  },
  intro: {
    paragraphs: [
      "Astrenox helps enterprises design and operate secure, scalable infrastructure across private cloud, hybrid environments, colocation, and data centres, aligning compute, storage, networking, security, and operations with modern AI and digital workloads.",
    ],
  },
  chapters: [
    {
      id: "enterprise-compute-cloud",
      label: "Section 1",
      title: "Enterprise Compute Cloud",
      subtitle:
        "We architect, deploy and manage scalable, globally distributed compute environments for enterprise applications, data platforms, analytics and large language model workloads.",
      capabilities: {
        title: "Compute Cloud Capabilities",
        items: [
          {
            title: "Workload and Capacity Strategy",
            paragraphs: [
              "We assess application dependencies, infrastructure utilisation, latency requirements, resilience objectives, data sensitivity and future demand before defining the target compute architecture.",
              "This determines which workloads should remain on dedicated infrastructure, move to private cloud, operate across hybrid environments or use distributed and accelerated computing resources.",
              "Capacity planning is aligned with business priorities, application demand and growth projections. This allows enterprises to maintain dependable capacity for critical systems while accessing additional resources when workload demand increases.",
            ],
            icon: "Target",
          },
          {
            title: "Private, Hybrid and High Performance Compute",
            paragraphs: [
              "We implement virtualised and software defined environments that bring compute, storage and networking together within a centrally managed platform.",
              "Private cloud environments provide dedicated capacity, greater administrative control and predictable performance for critical workloads. Hybrid models allow organisations to retain sensitive systems within controlled environments while using distributed cloud capacity for scalability, regional availability and temporary demand.",
              "We architect globally distributed environments across supported cloud providers and regions, with workload placement based on availability, performance, latency and data residency requirements.",
            ],
            enables: [
              "GPU enabled compute resources",
              "Rapid container and workload provisioning",
              "High throughput networking",
              "Scalable and persistent storage",
              "Secure workload isolation",
              "Regional workload placement and monitoring",
            ],
            enablesLabel: "Core capabilities",
            afterEnables: [
              "These environments can support enterprise applications, data processing, model deployment, fine tuning and production inference without requiring permanently overprovisioned infrastructure.",
            ],
            icon: "Cpu",
          },
          {
            title: "Large Language Model Infrastructure",
            paragraphs: [
              "We design production infrastructure for deploying open source, customised and enterprise large language models across private, hybrid and distributed cloud environments.",
              "The architecture can support real time inference for interactive applications and batch inference for document processing, evaluation, embedding generation, classification and data enrichment.",
            ],
            enables: [
              "Custom and open source model deployment",
              "Inference architectures designed for low latency",
              "Batch inference optimised for high throughput",
              "Elastic GPU allocation",
              "Persistent model and application data storage",
              "API access, observability and evaluation support",
            ],
            enablesLabel: "Key capabilities",
            afterEnables: [
              "Infrastructure can be configured around the organisation's preferred models, frameworks, security controls and performance requirements. This provides greater flexibility than relying on a fixed model or a single managed AI service.",
            ],
            icon: "Brain",
          },
          {
            title: "Automated Resource Management",
            paragraphs: [
              "Policy based orchestration allocates compute, GPU and storage resources according to workload priority, demand, performance requirements and regional availability.",
              "Autoscaling enables infrastructure to expand during periods of high demand and reduce capacity as workloads decline. Intermittent services can scale down to zero and expand automatically when demand returns, while high demand workloads can access distributed capacity across available cloud regions.",
              "Automated routing, provisioning and scheduling reduce idle capacity, improve resource utilisation and help maintain performance during periods of unpredictable demand. They also reduce manual infrastructure administration and provide greater control over operating expenditure.",
              "This enables compute capacity to operate as an elastic service rather than a fixed collection of servers and reserved resources.",
            ],
            icon: "Workflow",
          },
          {
            title: "Security, Resilience and Managed Operations",
            paragraphs: [
              "Compute environments can include identity and access controls, network segmentation, encryption, workload isolation, vulnerability management, backup, replication and disaster recovery.",
              "Centralised monitoring provides visibility across applications, containers and infrastructure resources. Logging, resource metrics and performance insights help operational teams identify failures, capacity constraints and service degradation.",
            ],
            enables: [
              "Infrastructure and platform monitoring",
              "Compute and GPU resource management",
              "Application and container deployment support",
              "Platform patching and lifecycle management",
              "Capacity, performance and cost optimisation",
              "Availability, security and incident management",
            ],
            enablesLabel: "Managed services scope",
            afterEnables: [
              "This allows internal teams to focus on application delivery, AI development and business outcomes while the underlying platform remains secure, resilient and operationally efficient.",
            ],
            icon: "ShieldCheck",
          },
        ],
      },
    },
    {
      id: "data-centre-managed-services",
      label: "Section 2",
      title: "Data Centre Managed Services",
      subtitle:
        "We advise, modernise and operate enterprise data centre environments across their strategic, technical, operational and physical lifecycle.",
      capabilities: {
        title: "Data Centre Capabilities",
        items: [
          {
            title: "Strategy, Capacity and Site Advisory",
            paragraphs: [
              "We assess workload growth, capacity demand, connectivity, power availability, geographic constraints, operational risk and sustainability requirements before recommending the appropriate enterprise data centre, colocation, edge or hybrid infrastructure model.",
            ],
            enables: [
              "Data centre and colocation evaluation",
              "Network, fibre and connectivity assessment",
              "Power and energy availability analysis",
              "Capacity and expansion planning",
              "Data residency and regulatory assessment",
              "Migration and transition roadmaps",
            ],
            enablesLabel: "Advisory services",
            afterEnables: [
              "This ensures infrastructure decisions are based on long term operational requirements, business growth and risk considerations rather than short term capacity demands.",
            ],
            icon: "Target",
          },
          {
            title: "Architecture, Networking and Interconnect",
            paragraphs: [
              "We design scalable data centre architectures that integrate compute, storage, networking, security and operational management.",
              "High throughput network architectures, software defined networking and resilient connectivity support increasing application traffic, data movement and AI workloads.",
              "Data Centre Interconnects connect enterprise facilities, cloud environments, colocation sites and edge locations through secure and low latency links, creating a unified infrastructure model across distributed environments.",
              "Architectures can include redundant network paths, secure cloud connectivity, traffic segmentation, load balancing, network performance monitoring and disaster recovery connectivity.",
              "Zero Trust controls, network segmentation and continuous monitoring help secure internal traffic and isolate critical applications, workloads and datasets.",
            ],
            icon: "Network",
          },
          {
            title: "AI Driven Infrastructure Operations",
            paragraphs: [
              "AIOps, infrastructure telemetry and operational analytics help shift data centre management from reactive intervention towards predictive and automated operations.",
              "Data from servers, networks, storage platforms, power systems, cooling equipment and environmental sensors can be consolidated to provide a continuous view of infrastructure health and performance.",
            ],
            enables: [
              "Predictive maintenance",
              "Thermal and environmental anomaly detection",
              "Capacity and demand forecasting",
              "Cooling and energy optimisation",
              "Incident detection and root cause analysis",
              "Automated operational and security reporting",
            ],
            enablesLabel: "Core use cases",
            afterEnables: [
              "These capabilities provide earlier visibility into emerging infrastructure risks and allow operational teams to respond before service availability or performance is affected.",
            ],
            icon: "LineChart",
          },
          {
            title: "Continuous Managed IT Operations",
            paragraphs: [
              "We provide continuous operational support across enterprise infrastructure, colocation facilities and hybrid environments.",
            ],
            enables: [
              "Network Operations Centre monitoring",
              "Incident, problem and change management",
              "Server, storage, network and database administration",
              "Operating system and firmware patching",
              "Backup, replication and disaster recovery",
              "Capacity and performance management",
              "Asset lifecycle, vendor and service governance",
            ],
            enablesLabel: "Managed services model",
            afterEnables: [
              "Unified monitoring provides a consistent view of infrastructure health, service availability, capacity and performance across data centres, colocation facilities and cloud environments.",
              "Standardised processes, escalation paths and service governance improve accountability while reducing fragmentation between internal teams, infrastructure providers and technology partners.",
            ],
            icon: "Monitor",
          },
          {
            title: "Infrastructure and Facility Transformation",
            paragraphs: [
              "We modernise existing environments through hardware consolidation, physical to virtual migration, network transformation, storage optimisation, cloud integration and backup modernisation.",
              "Transformation programmes can include legacy infrastructure assessment, server and storage consolidation, private cloud implementation, network modernisation, workload migration and infrastructure automation.",
              "Our scope can also extend to the physical systems supporting technology operations, including:",
            ],
            enables: [
              "Primary and backup power systems",
              "Cooling and environmental monitoring",
              "Fire and life safety systems",
              "Physical security and access controls",
              "Facility, equipment and space planning",
              "Energy and environmental telemetry",
            ],
            enablesLabel: "Physical systems scope",
            afterEnables: [
              "Energy telemetry, cooling optimization and equipment scheduling can improve Power Usage Effectiveness, or PUE, reduce operating costs and support wider sustainability objectives.",
            ],
            icon: "Building2",
          },
          {
            title: "Governance, Security and Compliance",
            paragraphs: [
              "We establish clear accountability across internal teams, technology partners, managed service providers and facility operators.",
              "Operational controls can cover identity and access management, data residency, change approvals, vulnerability remediation, continuity testing, incident escalation, asset management and regulatory reporting.",
              "Governance frameworks provide leadership teams with visibility into infrastructure risk, service performance, capacity, security and operational expenditure.",
            ],
            icon: "ShieldCheck",
          },
        ],
      },
      cta: {
        title: "Build Secure, Resilient Foundations for AI and Data Workloads",
        paragraphs: [
          "From infrastructure strategy and migration to continuous operations, we help enterprises reduce operational complexity, improve resource utilisation and build secure, resilient foundations for AI, data and business critical workloads.",
        ],
        primaryCta: "Assess Your Infrastructure",
        primaryHref: "/contact",
      },
    },
  ],
};
