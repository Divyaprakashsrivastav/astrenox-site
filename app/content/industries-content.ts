/** Industries page, verbatim industry transformation content. */

export const industriesContent = {
  hero: {
    label: "Industries We Transform",
    title: "Industry transformation built around measurable business value",
    primaryCta: "Start Transformation",
    primaryHref: "/contact",
    secondaryCta: "Our Model",
    secondaryHref: "#transformation-model",
  },
  intro: {
    paragraphs: [
      "Astrenox helps enterprises turn AI into scalable industry transformation by connecting strategy, workflows, data, engineering, cloud, security, and operations.",
      "We identify high-value opportunities, build the required technology, and support adoption, governance, and continuous improvement across the enterprise.",
    ],
  },
  transformationModel: {
    id: "transformation-model",
    label: "",
    title: "Our Transformation Model",
    steps: [
      { name: "Diagnose operations", description: "Map workflows, systems, data dependencies, and operational bottlenecks." },
      { name: "Prioritize opportunities", description: "Rank initiatives by business value, feasibility, risk, and organizational readiness." },
      { name: "Engineer solutions", description: "Build governed technology integrated with your enterprise environment." },
      { name: "Scale and optimize", description: "Support adoption, governance, and continuous improvement at scale." },
    ],
    pillars: [
      {
        title: "Astren AI",
        description:
          "Astren AI supports workflow discovery, process debt analysis, AI readiness, opportunity prioritization, governance, adoption, and value measurement.",
      },
      {
        title: "Astren Enterprise",
        description:
          "Astren Enterprise delivers custom agents, intelligent workflows, enterprise applications, integrations, data platforms, cloud environments, security controls, and managed operations.",
      },
    ],
  },
  sectors: [
    {
      id: "banking-fintech",
      title: "Banking, Financial Services and FinTech",
      tagline: "Modernizing financial operations with trusted intelligence",
      intro: [
        "Financial institutions must modernize legacy environments while responding to changing customer expectations, regulatory obligations, financial crime, and pressure on operating margins.",
        "Astrenox helps banks, FinTech companies, insurers, wealth managers, and investment platforms modernize their digital core and deploy governed intelligence across customer, risk, compliance, and transaction workflows.",
      ],
      blocks: [
        {
          title: "Digital Banking, Lending, and Payments",
          paragraphs: [
            "We develop digital banking platforms, customer onboarding journeys, payment systems, account management applications, loan origination workflows, servicing platforms, and secure financial APIs.",
            "Legacy systems can be progressively separated into modular services, allowing institutions to introduce new products and connect external financial ecosystems without replacing the entire core environment.",
          ],
        },
        {
          title: "Financial Crime, Identity, and Compliance",
          paragraphs: [
            "AI supported risk systems can analyse transactions, identity signals, documents, account activity, and network relationships to assist fraud detection, AML monitoring, KYC review, and investigation prioritization.",
            "Document intelligence and governed AI workflows can support regulatory reporting, policy analysis, audit preparation, customer due diligence, and compliance case management. Sensitive decisions retain human review, access controls, approvals, and traceability.",
          ],
        },
        {
          title: "Wealth, Markets, and Insurance",
          paragraphs: [
            "Astrenox builds systems for portfolio monitoring, investment research, market analysis, risk modelling, trading operations, claims administration, underwriting review, policy servicing, and customer lifecycle management.",
            "Governed enterprise assistants can bring together research, client information, portfolio data, policy documents, and internal knowledge within a secure workspace.",
          ],
        },
      ],
      impact: {
        label: "Business Impact",
        description:
          "The objective is to shorten operational cycles, reduce repetitive review, strengthen auditability, modernize customer journeys, and create a scalable foundation for new financial products.",
      },
    },
    {
      id: "logistics-supply-chain",
      title: "Logistics and Supply Chain",
      tagline: "Creating visible, adaptive, and connected supply chains",
      intro: [
        "Supply chains must balance inventory availability, delivery performance, transportation costs, supplier risk, and unpredictable demand. Yet critical information often remains fragmented across ERP platforms, warehouses, carriers, spreadsheets, emails, and manual processes.",
        "Astrenox connects planning, procurement, warehousing, transportation, fulfilment, and customer delivery through intelligent software and trusted data.",
      ],
      blocks: [
        {
          title: "Demand, Inventory, and Procurement",
          paragraphs: [
            "Predictive planning systems combine sales history, seasonality, promotions, supplier lead times, market signals, and operational constraints to improve forecasting and inventory decisions.",
            "These capabilities can support automated replenishment, procurement recommendations, supplier performance analysis, material planning, safety stock management, and inventory allocation.",
          ],
        },
        {
          title: "Transportation and Fleet Operations",
          paragraphs: [
            "We develop transportation management systems, fleet platforms, driver applications, dispatching systems, freight cost engines, and dynamic routing capabilities.",
            "AI models can evaluate traffic, delivery windows, vehicle capacity, weather, driver availability, fuel consumption, and service commitments. GPS and telematics integrations provide real time visibility into vehicles, assets, delays, and delivery performance.",
          ],
        },
        {
          title: "Warehouse and Supply Chain Control",
          paragraphs: [
            "Custom warehouse platforms can coordinate receiving, storage, picking, packing, dispatch, returns, and inventory reconciliation.",
            "Computer vision, barcode, RFID, and IoT technologies can assist asset tracking, damage detection, label recognition, stock movement, safety monitoring, and fulfilment verification.",
            "Supply chain control towers can consolidate information from carriers, suppliers, warehouses, procurement systems, and internal ERP environments. AI agents can monitor disruptions, summarize exceptions, identify likely causes, and recommend corrective actions.",
          ],
        },
      ],
      impact: {
        label: "Business Impact",
        description:
          "Astrenox helps improve inventory accuracy, delivery reliability, exception resolution, transportation efficiency, and end to end visibility across the supply chain.",
      },
    },
    {
      id: "healthcare-life-sciences",
      title: "Healthcare and Life Sciences",
      tagline: "Connecting care, research, data, and operations",
      intro: [
        "Healthcare and life sciences organizations must improve patient and clinician experiences while protecting sensitive information, meeting regulatory obligations, and managing operating costs.",
        "Astrenox helps healthcare providers, pharmaceutical companies, biotechnology organizations, clinical research teams, and medical technology businesses modernize workflows, connect fragmented systems, and introduce governed AI.",
      ],
      blocks: [
        {
          title: "Patient Access and Care Coordination",
          paragraphs: [
            "We develop patient portals, appointment systems, telemedicine platforms, digital intake workflows, care navigation tools, reminders, and patient communication applications.",
            "AI assistants can help patients locate services, complete structured intake, understand care instructions, and manage appointments. Healthcare teams can use the same environment to coordinate referrals, provider availability, follow ups, and support tasks.",
          ],
        },
        {
          title: "Clinical Data and Decision Support",
          paragraphs: [
            "Natural language processing can structure information from clinical notes, medical histories, reports, and other unstructured records.",
            "Computer vision and machine learning can support medical imaging review, remote monitoring, patient risk identification, and triage. These systems are designed as decision support capabilities with appropriate professional oversight.",
          ],
        },
        {
          title: "Research, Interoperability, and Healthcare Operations",
          paragraphs: [
            "Astrenox engineers clinical trial management systems, laboratory information platforms, research workspaces, patient data applications, medical device software, healthcare CRM systems, pharmacy platforms, and administrative workflows.",
            "Secure APIs and data pipelines can connect EHR, EMR, laboratory, payer, billing, pharmacy, and patient engagement systems using standards such as HL7 and FHIR.",
            "Intelligent automation can reduce repetitive work across scheduling, documentation, claims administration, inventory, coding support, research review, and internal services.",
          ],
        },
      ],
      impact: {
        label: "Business Impact",
        description:
          "The goal is to improve patient access, reduce administrative burden, connect care delivery, strengthen information availability, and accelerate clinical and research operations.",
      },
    },
    {
      id: "retail-commerce",
      title: "Retail, Consumer, and Digital Commerce",
      tagline: "Connecting customer experience with profitable execution",
      intro: [
        "Retailers must respond to changing demand while protecting margins, managing inventory, improving customer loyalty, and delivering consistent experiences across digital and physical channels.",
        "Astrenox connects customer intelligence, merchandising, pricing, inventory, store operations, fulfilment, and supply chain data to create a more responsive retail operating model.",
      ],
      blocks: [
        {
          title: "Personalized Commerce and Customer Engagement",
          paragraphs: [
            "We build recommendation engines, personalized search, visual search, conversational shopping assistants, customer service agents, loyalty systems, and targeted engagement workflows.",
            "These capabilities can use browsing behaviour, purchase history, product information, session context, and customer preferences to create more relevant experiences across websites, mobile applications, service channels, and physical stores.",
          ],
        },
        {
          title: "Merchandising, Pricing, and Demand Planning",
          paragraphs: [
            "Predictive systems can support demand forecasting, sales planning, assortment optimization, promotion analysis, replenishment, competitor monitoring, and markdown decisions.",
            "Dynamic pricing and merchandising tools can combine inventory, demand, product performance, competitor information, and business rules to help commercial teams make faster decisions while retaining management control.",
          ],
        },
        {
          title: "Store, Inventory, and Fulfilment Operations",
          paragraphs: [
            "Computer vision can assist shelf monitoring, planogram analysis, queue visibility, stock detection, product placement, loss prevention, and store safety.",
            "Astrenox also develops omnichannel inventory systems, order management platforms, warehouse integrations, returns workflows, mobile store applications, supplier coordination systems, and fulfilment solutions across stores, warehouses, and digital channels.",
          ],
        },
      ],
      impact: {
        label: "Business Impact",
        description:
          "The objective is to improve conversion, strengthen customer lifetime value, reduce stockouts and excess inventory, improve pricing effectiveness, and create a connected omnichannel experience.",
      },
    },
    {
      id: "manufacturing-industrial",
      title: "Manufacturing and Industrial Operations",
      tagline: "Building a connected and resilient industrial enterprise",
      intro: [
        "Manufacturers must improve throughput, quality, asset utilization, workforce safety, supply chain resilience, and sustainability while continuing to operate across complex legacy environments.",
        "Astrenox helps industrial organizations connect operational technology, enterprise systems, engineering data, factory assets, and workforce knowledge without compromising production continuity.",
      ],
      blocks: [
        {
          title: "Production Intelligence and Asset Reliability",
          paragraphs: [
            "We build predictive maintenance systems, factory analytics platforms, work order applications, asset monitoring solutions, and production performance dashboards.",
            "Sensor information such as vibration, temperature, pressure, acoustics, and energy usage can be analysed to identify abnormal patterns and support maintenance planning. Digital twins can help teams test production changes and capacity scenarios before physical implementation.",
          ],
        },
        {
          title: "Quality, Safety, and Visual Operations",
          paragraphs: [
            "Computer vision systems can support defect detection, assembly verification, equipment monitoring, label recognition, facility safety, and compliance with operating procedures.",
            "Quality information can be connected with supplier, production, equipment, and maintenance data to help teams identify the causes of recurring defects. Human review can be incorporated where automated decisions require validation.",
          ],
        },
        {
          title: "Connected Industrial Systems and Workforce Operations",
          paragraphs: [
            "Astrenox develops and modernizes manufacturing execution systems, quality management applications, product lifecycle platforms, industrial data systems, and engineering workspaces.",
            "Integration layers can connect MES, ERP, SCADA, warehouse systems, procurement platforms, building management systems, and factory equipment.",
            "Digital workforce solutions can support training, staff allocation, technical knowledge access, work instructions, safety monitoring, and operational collaboration.",
          ],
        },
      ],
      impact: {
        label: "Business Impact",
        description:
          "Astrenox helps manufacturers improve asset availability, production visibility, quality consistency, workforce safety, and operational resilience while reducing avoidable downtime and waste.",
      },
    },
  ],
  deliveryCapabilities: {
    label: "Integrated Delivery Capabilities",
    intro:
      "Astrenox adapts each engagement to the organization's priorities, technology environment, and internal capabilities.",
    items: [
      {
        title: "Transformation and Technology Advisory",
        description:
          "Operating model assessment, AI readiness, opportunity prioritization, architecture planning, data strategy, security design, and transformation roadmaps.",
        photo: "/images/delivery/advisory.jpg",
      },
      {
        title: "Astren AI Transformation",
        description:
          "Workflow discovery, process debt analysis, governance, employee adoption, AI enablement, performance monitoring, and value measurement.",
        photo: "/images/delivery/ai-transformation.png",
      },
      {
        title: "Astren Enterprise Engineering",
        description:
          "Custom AI agents, intelligent automation, enterprise knowledge systems, digital products, integrations, data platforms, private AI environments, and industry specific software.",
        photo: "/images/delivery/enterprise-eng.jpg",
      },
      {
        title: "Software Factory and MVP Studio",
        description:
          "Product discovery, rapid validation, interface design, full stack engineering, AI integration, quality assurance, deployment, and technical handover.",
        photo: "/images/delivery/mvp-studio.jpg",
      },
      {
        title: "Agentic Managed Services",
        description:
          "Ongoing operation, monitoring, optimization, and maintenance of enterprise agents, workflows, models, applications, and supporting infrastructure.",
        photo: "/images/delivery/managed-services.jpg",
      },
      {
        title: "Embedded Teams and Fractional Leadership",
        description:
          "Dedicated AI, data, product, cloud, security, and software professionals supported by fractional technology and product leadership where required.",
        photo: "/images/delivery/embedded-teams.jpg",
      },
      {
        title: "Infrastructure and Managed Operations",
        description:
          "Cloud and data centre management, DevOps, observability, database operations, security monitoring, disaster recovery, testing, maintenance, and continuous optimization.",
        photo: "/images/delivery/infrastructure.jpg",
      },
    ],
  },
  cta: {
    title: "From Industry Ambition to Operational Impact",
    paragraphs: [
      "Astrenox combines consulting, engineering, infrastructure, and managed operations to turn transformation strategy into deployed, measurable business outcomes across the enterprise.",
    ],
    primaryCta: "Request a Consult",
    primaryHref: "/contact",
  },
} as const;

export type IndustriesSector = (typeof industriesContent.sectors)[number];
