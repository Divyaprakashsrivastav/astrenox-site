/** Homepage content (part 2) */

export const homeFlagshipProjects = {
  label: "FLAGSHIP PROJECTS & PRODUCTS",
  title: "Applied AI Systems Built for Measurable Business Outcomes",
  description:
    "Astrenox builds **AI-native systems** around real operational problems, not standalone demos.\n\nOur work combines domain workflows, enterprise data, automation, and secure system architecture to deliver solutions that can operate reliably in production.\n\nOur flagship projects span **healthcare access and care coordination**, **real estate operations and property management**, **construction ERP and project execution**, **tender intelligence and bid preparation**, **computer vision and facility analytics**, **supply chain execution and logistics coordination**, **private equity deal intelligence and portfolio monitoring**, **enterprise-grade workflow integration**, and **secure deployment with measurable ROI**.\n\nAstrenox approaches **AI transformation** by identifying real operational bottlenecks, integrating with existing enterprise systems and workflows, and building production-ready solutions that improve efficiency, decision-making, and measurable business outcomes.",
  items: [
    {
      id: "carelink" as const,
      title: "CareLink Health Platform",
      category:
        "AI-Native Platform for Doctor Appointments, Therapy Booking, and Patient Intake",
      description:
        "**The Challenge:**\n\nHealthcare providers often manage appointments, patient intake, therapy sessions, reminders, records, and follow-ups across disconnected tools. Patients struggle to find the right doctor or therapist, submit their information repeatedly, track appointments, and receive timely care coordination. Clinics and care teams lose time managing manual scheduling, intake forms, cancellations, and follow-up communication.\n\n**The Solution:**\n\nCareLink Health Platform was designed as an **AI-native healthcare coordination system** that brings appointment booking, therapy scheduling, patient intake, care navigation, and follow-up workflows into one platform. The system helps patients discover relevant providers, book appointments, complete guided intake forms, receive reminders, and access care instructions. For clinics, it organizes patient information, appointment history, session notes, provider availability, and follow-up tasks in a structured workflow.",
      outcome:
        "**The Outcome:**\n\nThe platform reduced manual scheduling work, improved patient intake quality, and gave healthcare teams a cleaner system for managing appointments, therapy sessions, and ongoing care coordination.",
      status: "Flagship" as const,
      techStack: [
        "Doctor and therapist discovery",
        "Appointment and session booking",
        "AI-assisted patient intake forms",
        "Automated reminders and follow-ups",
        "Provider availability management",
        "Patient history and care coordination workspace",
      ],
      metrics: [
        { value: "Doctor and therapist discovery", label: "Key Capabilities" },
        { value: "Appointment and session booking", label: "Key Capabilities" },
        { value: "AI-assisted patient intake forms", label: "Key Capabilities" },
      ],
      href: "/projects",
    },
    {
      id: "estateflow" as const,
      title: "EstateFlow Property Platform",
      category:
        "AI-Powered Real Estate Platform for Property Management, Tenant Operations, and Sales Workflows",
      description:
        "**The Challenge:**\n\nReal estate teams often manage listings, tenant queries, property documents, maintenance requests, site visits, owner updates, and payment workflows across spreadsheets, calls, WhatsApp messages, emails, and disconnected CRMs. This creates delays in lead follow-up, tenant support, document tracking, maintenance resolution, and owner communication.\n\n**The Solution:**\n\nEstateFlow was built as a **real estate operations platform** that centralizes property listings, tenant interactions, maintenance requests, lease documents, owner dashboards, and sales pipeline activity. The system uses AI to classify tenant requests, summarize property conversations, route maintenance issues, organize documents, and help sales teams respond faster to interested buyers or renters.",
      outcome:
        "**The Outcome:**\n\nEstateFlow improved property workflow visibility, reduced manual coordination between tenants, owners, brokers, and maintenance teams, and helped real estate teams manage sales and operations from one structured platform.",
      status: "Flagship" as const,
      techStack: [
        "Property listing management",
        "Tenant and buyer inquiry tracking",
        "Maintenance request routing",
        "Lease and document organization",
        "Owner and broker dashboards",
        "AI-assisted follow-up and query summaries",
      ],
      metrics: [
        { value: "Property listing management", label: "Key Capabilities" },
        { value: "Tenant and buyer inquiry tracking", label: "Key Capabilities" },
        { value: "Maintenance request routing", label: "Key Capabilities" },
      ],
      href: "/projects",
    },
    {
      id: "buildsync" as const,
      title: "BuildSync Construction ERP Intelligence",
      category: "AI-Powered ERP Layer for Pre-Construction and Project Execution",
      description:
        "**The Challenge:**\n\nConstruction teams struggle to keep drawings, RFIs, estimates, contracts, change orders, procurement updates, field reports, and cost records aligned while the project is moving. When project information is scattered across PDFs, CAD files, spreadsheets, emails, ERP systems, and field notes, teams lose time searching for context, identifying scope changes, preparing estimates, and tracking project risk.\n\n**The Solution:**\n\nBuildSync was engineered as an **AI-powered construction ERP intelligence layer** that converts unstructured construction data into live project intelligence. The system extracts information from drawings, specifications, RFIs, schedules, contracts, cost sheets, and field reports. It structures scope items, quantities, project constraints, changes, and risk signals so estimating, procurement, finance, and field teams can work from the same source of truth.",
      outcome:
        "**The Outcome:**\n\nBuildSync helped construction teams reduce manual document review, improve scope visibility, respond to RFIs faster, and identify execution risks before they created cost or schedule impact.",
      status: "Flagship" as const,
      techStack: [
        "Drawing and specification intelligence",
        "Quantity and scope extraction",
        "RFI context retrieval",
        "Change order and scope drift detection",
        "Procurement and material tracking",
        "Field-to-office synchronization",
      ],
      metrics: [
        { value: "Drawing and specification intelligence", label: "Key Capabilities" },
        { value: "Quantity and scope extraction", label: "Key Capabilities" },
        { value: "RFI context retrieval", label: "Key Capabilities" },
      ],
      href: "/projects",
    },
    {
      id: "tendervault" as const,
      title: "TenderVault RFx Intelligence Platform",
      category:
        "AI-Native Platform for Tender Analysis, Bid Preparation, and Contract Review",
      description:
        "**The Challenge:**\n\nTendering teams do not lose time only because documents are long. They lose time because eligibility criteria, technical specifications, commercial terms, forms, annexures, risks, and clarifications are spread across hundreds or thousands of pages. Bid, legal, finance, technical, and leadership teams often work under tight deadlines with incomplete visibility into requirements, risks, contradictions, and submission readiness.\n\n**The Solution:**\n\nTenderVault was built as a custom **RFx intelligence platform** designed around tender discovery, qualification, document analysis, risk review, proposal drafting, and bid submission workflows. The system converts tender packs, RFPs, annexures, corrigenda, BOQs, contract conditions, and company qualification material into structured, reviewable, and action-ready bid intelligence.",
      outcome:
        "**The Outcome:**\n\nTenderVault helped bid teams analyze tender documents faster, reduce missed requirements, prepare stronger submissions, and improve coordination between commercial, legal, technical, and leadership stakeholders.",
      status: "Flagship" as const,
      techStack: [
        "Tender discovery and shortlisting",
        "Qualification and go / no-go support",
        "Tender synopsis generation",
        "Source-backed document search",
        "Risk and compliance review",
        "Pre-bid clarification drafting",
        "Bid package preparation and proposal drafting",
      ],
      metrics: [
        { value: "Tender discovery and shortlisting", label: "Key Capabilities" },
        { value: "Qualification and go / no-go support", label: "Key Capabilities" },
        { value: "Tender synopsis generation", label: "Key Capabilities" },
      ],
      href: "/projects",
    },
    {
      id: "visionops" as const,
      title: "VisionOps Intelligence Platform",
      category:
        "Computer Vision Platform for Safety, Security, Quality, and Facility Operations",
      description:
        "**The Challenge:**\n\nMost organizations already have cameras across plants, warehouses, campuses, stores, public spaces, and commercial facilities. But in many cases, those cameras only record events after they happen. Security teams, operations teams, and facility managers still depend on manual monitoring, retrospective footage review, and delayed incident reporting.\n\n**The Solution:**\n\nVisionOps was built as a **computer vision and video analytics platform** that turns existing CCTV, IP camera, DVR, NVR, and VMS infrastructure into an active intelligence layer. The system detects events, flags anomalies, tracks movement patterns, monitors compliance, generates alerts, and helps teams understand physical operations in real time.",
      outcome:
        "**The Outcome:**\n\nVisionOps helped organizations reduce manual camera monitoring, improve safety compliance, detect incidents faster, and generate higher operational value from existing surveillance infrastructure.",
      status: "Flagship" as const,
      techStack: [
        "Live video intelligence dashboard",
        "Real-time alert engine",
        "PPE and safety compliance detection",
        "Perimeter and intrusion monitoring",
        "Crowd, queue, and footfall analytics",
        "Vehicle and ANPR-based movement tracking",
        "Visual quality inspection",
      ],
      metrics: [
        { value: "Live video intelligence dashboard", label: "Key Capabilities" },
        { value: "Real-time alert engine", label: "Key Capabilities" },
        { value: "PPE and safety compliance detection", label: "Key Capabilities" },
      ],
      href: "/projects",
    },
    {
      id: "flowchain" as const,
      title: "FlowChain Supply Operations Platform",
      category:
        "AI Execution Layer for Supply Chain Visibility, Procurement, and Logistics Coordination",
      description:
        "**The Challenge:**\n\nSupply chain teams rarely suffer from lack of data. They suffer because data is fragmented across ERP systems, WMS, TMS, supplier portals, procurement tools, freight documents, spreadsheets, emails, and planning dashboards. This creates delays in replenishment, supplier follow-up, inventory planning, logistics reconciliation, and operational exception handling.\n\n**The Solution:**\n\nFlowChain was built as an **AI execution layer for supply chain operations** that connects inventory, procurement, logistics, and supplier signals into one coordinated workspace. The system extracts freight and procurement documents, monitors replenishment risk, routes logistics exceptions, and helps teams act on disruptions with clearer ownership across planning and fulfilment workflows.",
      outcome:
        "**The Outcome:**\n\nFlowChain improved supply chain visibility, reduced manual coordination across procurement and logistics teams, and helped organisations respond faster to inventory, supplier, and fulfilment exceptions.",
      status: "Flagship" as const,
      techStack: [
        "Inventory and replenishment intelligence",
        "Supplier performance tracking",
        "Freight and procurement document extraction",
        "ERP and WMS synchronization",
        "Logistics exception routing",
        "Demand and disruption risk monitoring",
        "Scenario simulation for supply chain decisions",
      ],
      metrics: [
        { value: "Inventory and replenishment intelligence", label: "Key Capabilities" },
        { value: "Supplier performance tracking", label: "Key Capabilities" },
        { value: "Freight and procurement document extraction", label: "Key Capabilities" },
      ],
      href: "/projects",
    },
    {
      id: "dealcore" as const,
      title: "DealCore Private Equity Intelligence Platform",
      category:
        "Institutional Intelligence for Deal Execution and Portfolio Value Creation",
      description:
        "**The Challenge:**\n\nPrivate equity firms do not lack information. They lack a system that turns scattered deal knowledge into repeatable conviction. Deal rooms, CIMs, financial models, expert calls, CRM notes, IC memos, portfolio reports, and historical investment decisions often remain fragmented across folders, inboxes, spreadsheets, and individual partner memory.\n\n**The Solution:**\n\nDealCore was built as a secure **private equity intelligence platform** that unifies deal data, diligence material, investment logic, expert call insights, IC documentation, and portfolio performance signals into one structured system. The platform helps deal teams analyze data rooms, score opportunities, draft IC materials, synthesize expert calls, monitor portfolio companies, and preserve institutional memory across every deal reviewed.",
      outcome:
        "**The Outcome:**\n\nDealCore helped investment teams reduce repetitive diligence work, improve consistency across deal evaluation, preserve firm knowledge, and monitor portfolio performance with stronger source-backed intelligence.",
      status: "Flagship" as const,
      techStack: [
        "Firm-wide context graph",
        "Data room and diligence intelligence",
        "Investment thesis and risk scoring",
        "IC memo and deal document generation",
        "Deal flow prioritization",
        "Expert call synthesis",
        "Portfolio monitoring and value creation tracking",
      ],
      metrics: [
        { value: "Firm-wide context graph", label: "Key Capabilities" },
        { value: "Data room and diligence intelligence", label: "Key Capabilities" },
        { value: "Investment thesis and risk scoring", label: "Key Capabilities" },
      ],
      href: "/projects",
    },
  ],
} as const;

export const homeTestimonials = {
  label: "TESTIMONIALS",
  title: "Verified Client Impact",
  description:
    "We reduce execution risk, accelerate product delivery, and build **AI-native systems** that create measurable business outcomes. Here is how leaders evaluate our work across healthcare, real estate, construction, tendering, **computer vision**, supply chain, and private capital workflows.",
  items: [
    {
      quote:
        "Astrenox helped us move from fragmented scheduling and intake workflows to a unified **care coordination platform**. The system gave patients a smoother booking experience while helping our internal teams manage appointments, therapy sessions, reminders, and follow-ups with far less manual effort.",
      author: "Client: Anonymous Healthcare Services Company",
      role: "Chief Operating Officer",
      projectType: "Healthcare Platform Engineering",
      outcome: "Healthcare Platform Engineering",
    },
    {
      quote:
        "Our property, tenant, and maintenance workflows were spread across calls, spreadsheets, emails, and disconnected tools. Astrenox helped us build a structured platform that improved visibility across listings, tenant requests, owner updates, and operational follow-ups. It gave our teams a clearer way to manage daily **real estate operations**.",
      author: "Client: Anonymous Real Estate and Property Management Firm",
      role: "Head of Operations",
      projectType: "Real Estate Operations Platform",
      outcome: "Real Estate Operations Platform",
    },
    {
      quote:
        "Astrenox helped us turn drawings, RFIs, estimates, change orders, and field updates into a more connected **project execution layer**. Their system improved how our pre-construction and project teams accessed project context, tracked scope changes, and coordinated between office and site workflows.",
      author: "Client: Anonymous Construction and Infrastructure Company",
      role: "Director of Project Controls",
      projectType: "Construction ERP Intelligence",
      outcome: "Construction ERP Intelligence",
    },
    {
      quote:
        "Tender review was one of our most time-consuming workflows. Astrenox built an **AI-native RFx intelligence system** that helped our bid teams analyze tender packs faster, identify key risks, prepare clarification questions, and assemble stronger bid documents with better control over requirements and submission readiness.",
      author: "Client: Anonymous Engineering and Contracting Enterprise",
      role: "Head of Bid Management",
      projectType: "Tender and RFx Intelligence",
      outcome: "Tender and RFx Intelligence",
    },
    {
      quote:
        "Astrenox helped us convert existing camera infrastructure into a **real-time operational intelligence layer**. The platform improved visibility into safety compliance, perimeter activity, movement patterns, and incident response without requiring a full replacement of our surveillance systems.",
      author: "Client: Anonymous Manufacturing and Facilities Group",
      role: "VP of Operations",
      projectType: "Computer Vision and Facility Analytics",
      outcome: "Computer Vision and Facility Analytics",
    },
    {
      quote:
        "Astrenox helped us connect fragmented supplier, inventory, procurement, and logistics data into a more actionable **execution layer**. The system reduced manual coordination, improved exception visibility, and helped our teams respond faster to disruptions across planning and fulfilment workflows.",
      author: "Client: Anonymous Supply Chain and Logistics Enterprise",
      role: "Chief Supply Chain Officer",
      projectType: "Supply Chain Execution Intelligence",
      outcome: "Supply Chain Execution Intelligence",
    },
    {
      quote:
        "Astrenox helped us structure fragmented deal knowledge across data rooms, CIMs, expert calls, IC materials, CRM notes, and portfolio updates. The platform gave our deal team stronger **source-backed diligence support** and helped preserve institutional knowledge across opportunities and portfolio reviews.",
      author: "Client: Anonymous Private Equity Firm",
      role: "Managing Director",
      projectType: "Private Equity Deal Intelligence",
      outcome: "Private Equity Deal Intelligence",
    },
  ],
} as const;

export const homeContactCta = {
  eyebrow: "CONTACT US",
  title: "Transition from Architecture to Production",
  description:
    "Partner with our engineers to evaluate your system requirements, audit data dependencies, and deploy **secure AI infrastructure** tailored to your core business operations.\n\n**Enterprise Advisory Protocol.** Every discovery session is led directly by a senior architect, not a sales representative. All technical audits and system disclosures are strictly protected by a mutual NDA.",
  primaryCta: "Schedule Architecture Scoping",
  primaryHref: "/contact?intent=scoping",
  secondaryCta: "Submit RFP / Technical Specs",
  secondaryHref: "/contact?intent=rfp",
  infoRows: [
    {
      icon: "calendar" as const,
      label: "Technical Discovery",
      value:
        "Book a 30-minute scoping session to analyze your infrastructure challenges and outline specific engineering requirements.",
      href: "/contact?intent=scoping",
    },
    {
      icon: "file" as const,
      label: "Targeted Inbound",
      value:
        "Route your project documentation or RFPs directly to our engineering queues for a rapid evaluation.",
      href: "/contact?intent=rfp",
    },
    {
      icon: "mail" as const,
      label: "Architecture & RFPs",
      value: "architecture@astrenox.com",
      href: "mailto:architecture@astrenox.com",
    },
    {
      icon: "mail" as const,
      label: "Partnerships",
      value: "networks@astrenox.com",
      href: "mailto:networks@astrenox.com",
    },
    {
      icon: "phone" as const,
      label: "Direct Line",
      value: "[Insert Phone Number]",
      href: "tel:+910000000000",
    },
    {
      icon: "map" as const,
      label: "Engineering Headquarters",
      value:
        "Corporate Address: [Insert Street Address / Suite] [Insert City, State, ZIP] Operating Hours: [Timezone] | Monday – Friday",
      href: "/contact",
    },
  ],
  channels: [
    {
      label: "Technical Discovery",
      value:
        "Book a 30-minute scoping session to analyze your infrastructure challenges and outline specific engineering requirements.",
    },
    { label: "Action Link", value: "[Insert Calendly Portal]" },
    {
      label: "Targeted Inbound",
      value:
        "Route your project documentation or RFPs directly to our engineering queues for a rapid evaluation.",
    },
    { label: "Architecture & RFPs", value: "architecture@astrenox.com" },
    { label: "Partnerships", value: "networks@astrenox.com" },
    { label: "Direct Line", value: "[Insert Phone Number]" },
    {
      label: "Engineering Headquarters",
      value:
        "Corporate Address: [Insert Street Address / Suite] [Insert City, State, ZIP] Operating Hours: [Timezone] | Monday – Friday",
    },
  ],
} as const;

export const homeFooter = {
  about:
    "Astrenox helps organizations accelerate **digital transformation** through **AI engineering**, digital modernization, and **scalable technology solutions** designed to deliver measurable business outcomes.",
  aboutLink: { label: "About Astrenox", href: "/about" },
  companyLinks: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Platform", href: "/platform" },
    { label: "Contact", href: "/contact" },
  ],
  servicesLinks: [
    { label: "AI Transformation", href: "/services/ai-transformation" },
    { label: "Agentic Managed Services", href: "/services/intelligent-automations" },
    { label: "Software Factory & MVP Studio", href: "/services/mvp-studio" },
    { label: "Enterprise IT Modernization", href: "/services/digital-it-consulting" },
  ],
  resourcesLinks: [
    { label: "Manufacturing", href: "/services/industries" },
    { label: "Healthcare", href: "/services/industries" },
    { label: "Financial Services", href: "/services/industries" },
    { label: "Retail", href: "/services/industries" },
    { label: "Logistics", href: "/services/industries" },
    { label: "Technology", href: "/services/industries" },
  ],
  servicesLink: { label: "AI Consulting", href: "/services/ai-consulting-advisory" },
  industriesLink: { label: "Industries", href: "/services/industries" },
  github: { label: "GitHub", href: "https://github.com" },
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/company/astrenox/" },
  instagram: { label: "Instagram", href: "https://www.instagram.com/astrentech/" },
  x: { label: "X", href: "https://x.com/Astrentech" },
  email: "engineering@astrenox.com",
  copyright: "© 2026 Astrenox. All Rights Reserved.",
  madeWith: "",
} as const;
