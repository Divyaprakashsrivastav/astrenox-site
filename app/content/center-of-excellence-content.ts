/** Verbatim from Content.docx, Enterprise Technology & SAP Centre of Excellence. */
export const centerOfExcellencePageContent = {
  brand: "Enterprise Technology & SAP Centre of Excellence",
  hero: {
    title: "Enterprise Technology & SAP Centre of Excellence",
    lead:
      "Build, modernize, and scale enterprise platforms with a single technology partner across SAP, Microsoft Azure, Oracle Cloud, Salesforce, and ServiceNow.",
    body: "We transition organizations from fragmented legacy systems to integrated, secure, and outcome-driven technology ecosystems. We consolidate advisory, implementation, migration, custom development, and managed services to maximize your operational efficiency and platform resilience.",
  },
  technologyPortfolio: {
    title: "Our Technology Portfolio",
    description:
      "Our COE combines architectural expertise across five core enterprise environments, reducing vendor complexity and accelerating modernization.",
    table: {
      headers: ["Platform COE", "Services Provided", "Products & Keywords Covered"] as const,
      rows: [
        {
          platform: "Microsoft Azure",
          services:
            "Azure consulting, cloud migration, Azure DevOps, CI/CD, data analytics, legacy app modernization, managed services, app development, disaster recovery.",
          products:
            "Azure Cognitive Services, Purview, Key Vault, IoT Hub, Machine Learning, HDInsight, SQL DB, Stream Analytics, Data Explorer, Databricks, Redis Cache, Kubernetes Service.",
        },
        {
          platform: "Oracle Cloud",
          services:
            "Oracle cloud advisory, OCI infrastructure services, implementation, OCI migration, cloud security, managed services, digital integration, Oracle analytics.",
          products:
            "Oracle Cloud Infrastructure, ERP Cloud, HCM, EPM, SCM Cloud, PaaS Cloud, CX Cloud, virtual networks, DNS services, serverless, DevOps tools, AI, ML, IoT.",
        },
        {
          platform: "Salesforce",
          services:
            "Implementation consulting, managed services, integration, CRM development, CRM migration, customization, security services, marketing automation, adoption planning.",
          products:
            "Marketing Cloud, Sales Cloud, Service Cloud, Financial Services Cloud, Data Cloud, Health Cloud, CRM, customer data platforms, workflow automation.",
        },
        {
          platform: "ServiceNow",
          services:
            "ServiceNow consulting, migration, custom app development, platform support, managed services, testing, customization, process automation, service management.",
          products:
            "ServiceNow ITSM, ITOM, ITBM, Asset Management, HR Service Delivery, Security Management, SecOps, enterprise workflow automation, centralized delivery.",
        },
        {
          platform: "SAP",
          services:
            "Greenfield implementations, re-implementations, module rollouts, infrastructure migration to cloud, database migration, EHP and S/4HANA upgrades, integration.",
          products:
            "SAP ERP, S/4HANA, Suite on HANA, ABAP, FI/CO, SD, MM/PP, PM/QM, PS, Business Intelligence, HCM, UI5, CRM, Basis, portal services, document management.",
        },
      ],
    },
  },
  deliveryMethodology: {
    title: "Service Delivery Methodology & Scope",
    description:
      "We manage the enterprise technology lifecycle through a business-first delivery model, evaluating current workloads and data dependencies before technical execution.",
    items: [
      "Strategy, Consulting, and Advisory: Assessing infrastructure, workflows, master data, and compliance to define precise cloud and SAP implementation roadmaps.",
      "Implementations and Rollouts: Executing greenfield deployments, re-implementations, and template rollouts, including new module deployment and geographical expansion, without disrupting business continuity.",
      "Migration and Cloud Modernization: Transitioning on-premise or fragmented environments to scalable infrastructure (Azure, OCI), encompassing serverless re-architecture, database migrations, and SAP S/4HANA transitions.",
      "Process Automation: Automating repetitive workflows across operations and service desks via ServiceNow (ITOM/ITSM), Salesforce, and digitized goods movement (RF scanners/barcodes).",
      "Enterprise Integration: Engineering a single operating view by connecting CRM, ERP, cloud workloads, third-party apps, weighbridges, biometrics, e-commerce, and POS systems.",
      "Security and Governance: Embedding identity management, role-based access control, compliance auditing, and continuous data protection across the application lifecycle.",
      "Managed Application Support: Providing 24x7 SLA-driven support, incident escalation, performance monitoring, EHP upgrades, user training, and cost-control analysis.",
    ],
  },
  sapCapabilities: {
    title: "SAP-Specific Capabilities & Focus Areas",
    description:
      "Our SAP COE handles complex production, supply chain, and operational requirements to improve process visibility, automate manual interventions, and ensure data integrity.",
    operationalFocus: {
      title: "Operational Focus Areas",
      table: {
        headers: ["Focus Area", "Expected Business Outcome"] as const,
        rows: [
          {
            focus: "Product Development",
            outcome:
              "Better control across the product lifecycle, production planning, and manufacturing execution.",
          },
          {
            focus: "Master Data Management",
            outcome:
              "Clean, simplified management of materials, bills of materials (BOM), routing, vendors, and transporters.",
          },
          {
            focus: "Production Planning",
            outcome:
              "Full support for make-to-stock (MTS), make-to-order (MTO), and customized production workflows.",
          },
          {
            focus: "Material Requirement",
            outcome:
              "Improved procurement planning, precise inventory visibility, and verified production readiness.",
          },
          {
            focus: "Cost & Profitability",
            outcome:
              "Direct visibility into planned vs. actual costs, work-in-progress, tender costing, and profitability.",
          },
          {
            focus: "Waste Management",
            outcome: "Systematic tracking and reduction of production waste across operations and the shop floor.",
          },
          {
            focus: "Shop Floor Automation",
            outcome:
              "Accelerated execution integrating barcode systems, RF scanners, and direct equipment feeds.",
          },
          {
            focus: "Goods Movement",
            outcome:
              "Digitized, highly accurate material movement utilizing system-led workflows and scanning.",
          },
          {
            focus: "Traceability",
            outcome:
              "End-to-end product tracking powered by batch management, serialization, and barcode deployment.",
          },
          {
            focus: "Portal Enablement",
            outcome:
              "Dedicated customer, vendor, and transporter portals to facilitate external collaboration.",
          },
        ],
      },
    },
  },
  industryAlignment: {
    title: "Industry Alignment",
    description:
      "We map systems directly to industry-specific regulatory and operational realities.",
    table: {
      headers: ["Industry Cluster", "Sub-Sectors Covered"] as const,
      rows: [
        {
          cluster: "Manufacturing",
          subSectors:
            "Automotive, auto ancillaries, metals/alloys, consumer durables, PVC pipes, precast products, textiles, wood, mill products, transformers, electrical components, mobile phones, chemicals, tyres, industrial/agri equipment, FMCG, solar panels.",
        },
        {
          cluster: "Trading & Services",
          subSectors:
            "Medical equipment, mobile devices, telecom, ISP, power, green energy, fast-moving consumer goods, chemical trading.",
        },
        {
          cluster: "Infrastructure",
          subSectors:
            "Construction, large-scale real estate development, and EPC (Engineering, Procurement, Construction).",
        },
        {
          cluster: "E-Commerce",
          subSectors: "Garments, consumer durables, FMCG, and mobile commerce operations.",
        },
        {
          cluster: "Public Sector & Utilities",
          subSectors:
            "Thermal power generation, printing, minting, lignite extraction, and PSU-linked environments.",
        },
      ],
    },
  },
  resourcePool: {
    title: "Resource Pool and Talent Capability",
    table: {
      headers: ["Consultant Type", "Average Experience"] as const,
      rows: [
        { type: "Project Managers & Solution Architects", experience: "8+ years" },
        { type: "PS Consultants & Portal/UI5 Consultants", experience: "8+ years" },
        { type: "CRM Consultants", experience: "7+ years" },
        { type: "Business Intelligence & HCM Consultants", experience: "7 years" },
        { type: "Basis Consultants", experience: "6+ years" },
        { type: "ABAP, FI/CO, SD, MM/PP, PM/QM Consultants", experience: "6 years" },
      ],
    },
  },
  whyPartner: {
    title: "Why Partner With Astrenox ",
    items: [
      "Business-First Consulting: We map your operational gaps before selecting toolsets, ensuring every architecture decision drives measurable process efficiency and value.",
      "Unified Delivery Model: By housing Azure, Oracle, Salesforce, ServiceNow, and SAP capabilities under one roof, we eliminate vendor silos and accelerate seamless integrations.",
      "Automation-Led Execution: We actively replace manual effort with system logic, from shop floor material tracking to advanced workflow routing in enterprise service platforms.",
      "Built-In Scalability: Our managed support models utilize stringent SLAs and proactive monitoring to guarantee long-term stability across all your cloud and enterprise applications.",
    ],
  },
  closing: {
    title: "Build a Technology Foundation That Scales",
    description:
      "Whether migrating core infrastructure, implementing enterprise CRM, automating IT operations, or modernizing SAP to S/4HANA, AppSierra provides the architectural clarity and technical execution required to succeed.",
    cta: "Connect With Our Technology COE Experts",
  },
} as const;
