/**
 * Products page, verbatim content from Astrenox_Product_Content.txt
 */

export const productsHero = {
  title: "Enterprise AI Infrastructure",
  headlineAccent: "for Modern Businesses",
  description:
    "Our proprietary suite provides the foundational architecture to build, deploy, and monitor AI systems at scale, unifying orchestration, agents, and telemetry across your enterprise stack.",
  primaryCta: "Explore Products",
  primaryHref: "#product-explorer",
  secondaryCta: "Book Architecture Call",
  secondaryHref: "/contact?intent=scoping",
} as const;

export const productsFlagship = {
  label: "Enterprise AI Infrastructure",
  title: "Select a platform to review technical specifications and deployment schemas.",
} as const;

export type ProductId = "solvoris" | "astrenai" | "akiren";

export const flagshipProducts = [
  {
    id: "solvoris" as const,
    name: "Solvoris",
    tagline: "Centralized Knowledge & Telemetry",
    description:
      "Solvoris operates as the cognitive layer for enterprise environments, combining secure data indexing with comprehensive LLM observability.",
    features: [
      {
        label: "Knowledge Orchestration",
        text: "Utilizes advanced vector retrieval to synthesize internal enterprise data into secure, context-aware AI interactions.",
      },
      {
        label: "Operational Telemetry",
        text: "Features native integration for granular tracing, latency monitoring, token analytics, and prompt evaluation to maintain compliance and control compute costs.",
      },
    ],
  },
  {
    id: "astrenai" as const,
    name: "AstrenAI",
    tagline: "Deterministic Autonomous Workflows",
    description:
      "AstrenAI bridges generative AI capabilities with strict operational logic, enabling the deployment of reliable, multi-step agents.",
    features: [
      {
        label: "Agentic Execution",
        text: "Constructs and runs complex business workflows using structured prompt templates and verified data inputs.",
      },
      {
        label: "Conditional Automation",
        text: "Ensures generative outputs adhere to deterministic routing, executing API calls and data transformations reliably to prevent hallucination-induced drift.",
      },
    ],
  },
  {
    id: "akiren" as const,
    name: "AkiRen",
    tagline: "Unified Data Pipelines & LLMOps",
    description:
      "AkiRen solves infrastructure fragmentation by managing data engineering and prompt lifecycles through a shared, high-performance execution engine.",
    features: [
      {
        label: "Aki (Pipeline Orchestration)",
        text: "A technical interface for building, routing, and monitoring complex data ingestion streams to feed AI models in real time.",
      },
      {
        label: "Ren (Prompt Engineering)",
        text: "An LLMOps workspace for prompt version control, parameter tuning, and rigorous A/B testing against historical datasets prior to production deployment.",
      },
    ],
  },
] as const;

export const customCrmSection = {
  label: "Custom AI-Powered CRM Engineering",
  title: "Custom AI-Powered CRM: Architect Your Own Customer Intelligence Platform",
  description:
    "As official implementation partners of Twenty, we engineer and deploy fully customizable, AI-native CRM architectures. Moving beyond rigid SaaS limitations, we provide a foundational building system where enterprises maintain absolute ownership over data governance, system logic, and infrastructure.",
  subsections: [
    {
      id: "core-architectural",
      title: "Core Architectural Customization",
      intro:
        "We architect a dedicated system that maps exactly to your operational hierarchies rather than forcing workflows to adapt to standard software.",
      bullets: [
        "Extensible Data Modeling: We modify the base schema to support complex, multi-relational custom objects and tailored data pipelines that match your internal enterprise taxonomy.",
        "API-First Infrastructure: Built on a headless architecture utilizing REST and GraphQL endpoints, ensuring seamless data synchronization with existing ERPs, billing platforms, and proprietary databases.",
        "Modular Interface Configuration: We engineer specialized, role-based dashboards, stripping away UI bloat to present only targeted telemetry and precise workflow controls to the end-user.",
      ],
    },
    {
      id: "ai-workflow",
      title: "AI-Native Workflow Orchestration",
      intro:
        "We embed intelligent execution directly into the CRM's core logic layer, automating complex data operations.",
      bullets: [
        "Custom LLM Integration: We deploy secure language models to process proprietary data, enabling automated semantic search, contextual summarization of interactions, and drafted technical communications.",
        "Automated Data Structuring: Unstructured inputs from emails, support tickets, and call transcripts are autonomously parsed, categorized, and routed to correct relational objects to ensure data fidelity.",
        "Predictive Telemetry: Background workflows monitor account health and engagement metrics, triggering automated alerts or complex execution sequences when specific operational thresholds are met.",
      ],
    },
    {
      id: "deployment",
      title: "Flexible Deployment Infrastructure",
      intro:
        "Your environment is provisioned strictly according to your internal security frameworks and compliance protocols.",
      bullets: [
        "Secure On-Premise Provisioning: For strict data residency requirements, we deploy the CRM architecture entirely behind your corporate firewall on private hardware, ensuring zero external data leakage.",
        "Managed Cloud Hosting: We architect isolated cloud environments utilizing dedicated Virtual Private Clouds (VPCs), load balancing, and auto-scaling groups for high availability and low latency.",
        "Containerized Scalability: Deployed via modern containerization (Docker, Kubernetes) to allow rapid computational scaling under load and modular, zero-downtime system updates.",
      ],
    },
    {
      id: "lifecycle",
      title: "Lifecycle Engineering & Maintenance",
      intro:
        "We function as your extended engineering team, providing continuous technical oversight to scale the system alongside your operations.",
      bullets: [
        "Continuous Observability: We implement rigorous monitoring of API latency, database query efficiency, and AI execution times to proactively resolve performance bottlenecks.",
        "Architecture Iteration: We continuously refine the underlying code, optimizing data structures and upgrading AI models to newer versions without disrupting live workflows.",
        "Security Posture Management: The system receives continuous security auditing, dependency patching, and vulnerability testing to maintain application integrity and evolving compliance standards.",
      ],
    },
  ],
} as const;

export const genAiSection = {
  label: "Enterprise Gen AI Boilerplates",
  title: "Enterprise Gen AI Boilerplates",
  description:
    "We bypass foundational development bottlenecks by deploying battle-tested Generative AI boilerplates. These modular frameworks move your infrastructure from conceptual prototypes to enterprise-grade production environments, accelerating deployment velocity and time-to-value from months to weeks.",
  pillars: {
    title: "Core Engineering Pillars",
    items: [
      "Agentic AI & Orchestration: We deploy multi-agent architectures where specialized models execute complex, multi-step tasks under a centralized orchestration layer. The infrastructure automates quality assurance, data analytics, and operational workflows with self-correcting precision loops.",
      "Legacy Modernization Engine: The framework autonomously extracts entrenched business logic from legacy codebases to generate clean, production-ready code across modern technical stacks. This accelerates refactoring, reduces technical debt, and preserves original system intent.",
      "Governance & Compliance-by-Design: Architected for highly regulated sectors, the platform integrates rigorous MLOps pipelines, deterministic explainability layers, and comprehensive audit logging to meet strict enterprise security and data privacy mandates.",
      "Seamless Core Integration: To prevent operational silos, we embed generative capabilities directly into existing enterprise resource planning (ERP) systems, customer relationship management (CRM) platforms, and internal telemetry networks.",
    ],
  },
  industriesTitle: "Ready-to-Deploy Industry Solutions",
  industries: [
    {
      id: "bfsi",
      title: "BFSI & Investment Operations",
      solutions: [
        "Startup Intelligence Platform: A multimodal, GPT-powered architecture engineered for venture capital and private equity. It autonomously parses complex legal documents, pitch decks, podcast transcripts, and video telemetry to generate real-time portfolio insights and execute deep due diligence queries.",
        "Portfolio Document Retrieval Engine: A Claude-powered RAG (Retrieval-Augmented Generation) infrastructure designed to process dense financial portfolios. It enables instant semantic querying across unstructured data lakes and automates comparative reporting, reducing document processing times by 60%.",
        "Credit Analysis NLP Agent: A specialized natural language processing workflow that evaluates structured and unstructured credit reports. By isolating risk factors and surfacing actionable intelligence, it accelerates credit evaluations by 80% to optimize data-driven loan approvals.",
      ],
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Retail",
      solutions: [
        "Conversational Recommendation Engine: An AWS-hosted NLP interface built for hyper-personalized product matching. By evaluating dynamic user preferences and real-time semantic intent, it simplifies complex purchasing decisions, historically driving a 40% lift in direct sales.",
        "Retail Operations Telemetry: An AI-driven analytics architecture that aggregates decentralized inventory and point-of-sale data. It provides predictive, real-time insights into stock velocity, enabling agile inventory routing and driving up to a 40% revenue increase.",
      ],
    },
    {
      id: "realestate",
      title: "Real Estate Operations",
      solutions: [
        "Autonomous Leasing Assistant: An LLM-driven conversational agent engineered for high-volume property management. It fully automates tenant inquiry routing, qualification filtering, and calendar scheduling, reducing response latency by 40% and boosting conversions by 60%.",
        "Visual Asset Processing Pipeline: An automated computer vision and metadata workflow for property listings. The system executes bulk image enhancements, watermark removal, and generative descriptions, eliminating 85% of substandard imagery and cutting manual review time by 75%.",
      ],
    },
    {
      id: "edtech",
      title: "EdTech & Content Engineering",
      solutions: [
        "Academic Reasoning Engine: A specialized AI architecture utilizing a Llama-3 model fine-tuned on 3 million complex academic problems. It functions as an autonomous tutoring agent, delivering 95% analytical accuracy while improving study preparation efficiency by 80%.",
        "Interactive Content Generation Pipeline: A scalable production framework for digital publishers. It orchestrates text-generation LLMs and generative image models to autonomously author narratives and corresponding illustrations, reducing interactive book creation time by 30%.",
      ],
    },
  ],
} as const;

export const softwareFactorySection = {
  label: "AI-Native Software Factory",
  title: "The AI-Native Software Factory: Architecting Autonomous Enterprise Engineering",
  intro: [
    "As an AI-native software development and consulting firm, we deploy a centralized Software Development Life Cycle (SDLC) control plane designed specifically for regulated enterprises.",
    'The industry focus on pure "code generation" often results in fast but architecturally misaligned software. We reverse this paradigm. The Software Factory fundamentally redesigns the engineering pipeline by capturing strict business intent and system architecture before any code is written. By moving engineering judgment upstream, human leadership dictates the architectural boundaries, while specialized AI agents handle the deterministic execution of coding, testing, and deployment.',
  ],
  sections: [
    {
      number: 1,
      title: "Upstream SDLC Governance & Core Architecture",
      intro:
        "Most AI development tools operate in silos without understanding the broader system, leading to technical debt and structural drift. Our architecture establishes a single, continuous source of truth, giving AI agents the exact structured context they need to produce correct, aligned code.",
      bullets: [
        "Full-SDLC Agentic Orchestration: We deploy a centralized SDLC control plane where human engineers define high-level business intent, while multi-agent systems autonomously execute planning, coding, testing, and deployment workflows.",
        "Upstream Architecture & Requirements: We lock in strict product requirements, requirements definition pipelines, and system blueprints pre-execution. AI agents build directly from this canonical documentation rather than unstructured prompts, completely eliminating architectural guesswork.",
        "Agentic Work Orders: Product requirements are translated into deterministic, machine-readable work orders. Specialized AI models operate across a unified workspace to sequence tasks and generate production-ready code with minimal manual syntax intervention.",
        "Dynamic Knowledge Graphs: We maintain a living system map connecting your initial requirements directly to the active codebase. Context flows seamlessly across the pipeline, eliminating tribal knowledge, protecting against employee turnover, and preventing long-term architectural degradation.",
        "Automated Validation & Drift Control: High-velocity code generation demands rigorous governance. We enforce automated PR evaluations and continuous drift detection, verifying all agent-written code against the original blueprints before any merge to production.",
        "Automated Feedback Validation: Validation modules capture unstructured user feedback, bug reports, and customer signals, automatically converting them into clear, actionable development tasks that feed directly back into the structured work pipeline.",
      ],
    },
    {
      number: 2,
      title: "Agentic Execution: Autonomous Engineering Workflows",
      intro:
        'Once business intent is locked into structured blueprints, we augment your workforce with an integrated layer of specialized AI agents (or "Droids"). These agents operate continuously across your CLI, web interfaces, and CI/CD pipelines to close the SDLC loop.',
      bullets: [
        "Ticket-to-Code Orchestration: Background AI agents autonomously ingest structured work orders, navigate your repository, and implement fully functional features. This encompasses generating necessary database migrations, resolving edge-case logic, and writing unit tests before autonomously opening a pull request.",
        "Automated Pull Request & Code Review: Every pull request is autonomously reviewed in minutes. Specialized agents inspect the diff against the original blueprints, flagging architectural deviations, STRIDE-based security vulnerabilities, and logic flaws with zero false positives.",
        "Legacy Modernization Assembly Lines: For monolithic architectures, we ingest entire codebases into the platform to map and document legacy behaviors. Once the system understands the operational patterns, AI agents systematically refactor, update, and migrate legacy components across modern technology stacks.",
      ],
    },
    {
      number: 3,
      title: "Enterprise Infrastructure: Security, Observability, and Control",
      intro:
        "Built for high-stakes environments, including Healthcare, Financial Services, and the Federal Government, the Software Factory ensures that autonomous AI adoption strengthens your security posture rather than compromising it.",
      bullets: [
        "Fully Air-Gapped & Compliant Deployments: The entire platform can be deployed on your private hardware or Virtual Private Cloud (VPC) with zero internet dependency. The system requires no external network calls, ensuring proprietary codebase telemetry never leaves your security perimeter. Our architecture strictly aligns with ISO 27001 and OWASP standards.",
        "Native OpenTelemetry (OTEL) Integration: We export deep traces, metrics, and agent execution logs directly into your existing observability stack (e.g. Datadog, Grafana, Honeycomb). This provides absolute, real-time visibility into AI decision-making processes and system health.",
        "Centralized Org Configuration & Cost Controls: We deploy a single administrative surface to manage AI model routing, agent permissions, and identity provisioning via SAML 2.0/OIDC. Engineering leadership can enforce strict token consumption budgets at the project level, utilizing automated cutoff thresholds to optimize spend and prevent runaway agent usage.",
      ],
    },
  ],
} as const;

export const missionCriticalSection = {
  label: "Engineering Mission-Critical AI",
  title: "Engineering Mission-Critical AI",
  description:
    "Deploying Artificial Intelligence in high-stakes environments requires moving beyond basic model integration. Mission-critical AI demands a system-level methodology focused on resilience, deterministic outputs, and secure orchestration. Our approach ensures that AI systems can reliably execute complex workflows where failure is not an option",
  methodology: {
    title: "Orchestration Methodology",
    intro:
      "We build cognitive architectures that enforce strict operational boundaries, ensuring AI agents execute tasks with precision, traceability, and absolute compliance.",
    items: [
      "System-Level Orchestration: We design agentic workflows where specialized AI models collaborate under a central orchestration layer. This prevents single-point failures and ensures complex multi-step reasoning is broken down into verifiable sub-tasks.",
      "Deterministic Guardrails: High-stakes environments cannot tolerate hallucinations. We implement strict input/output validation, logical boundary enforcement, and fallback mechanisms that force the system into a safe state if confidence thresholds are not met.",
      "Contextual Grounding: We utilize advanced Retrieval-Augmented Generation (RAG) architectures securely tethered to enterprise data stores. This ensures the model's reasoning is continuously grounded in verified, real-time proprietary data rather than generalized training weights.",
      "Continuous Verification and HITL: We embed automated evaluation frameworks to monitor drift, accuracy, and latency in real time. For irreversible actions, we integrate Human-in-the-Loop (HITL) checkpoints to ensure final authorization remains with domain experts.",
    ],
  },
} as const;

export const publicSectorSection = {
  label: "Envisioning an AI-First Public Sector",
  title: "Envisioning an AI-First Public Sector",
  description:
    "Transitioning to an AI-first governance model requires deploying machine learning and automation to optimize citizen services, enhance public safety, and ensure efficient resource allocation.",
  useCasesTitle: "High-Impact Public Sector Use Cases",
  table: [
    {
      domain: "Citizen Services",
      aiApplication: "Multilingual conversational agents and intelligent document processing.",
      operationalImpact:
        "Automates grievance redressal, reduces wait times, and accelerates scheme enrollment.",
    },
    {
      domain: "Public Revenue",
      aiApplication: "Anomaly detection algorithms applied to tax filings and procurement data.",
      operationalImpact:
        "Identifies evasion patterns, reduces financial fraud, and improves audit targeting.",
    },
    {
      domain: "Healthcare",
      aiApplication: "Predictive epidemiological modeling and resource allocation.",
      operationalImpact:
        "Anticipates disease outbreaks and optimizes the distribution of medical supplies and personnel.",
    },
    {
      domain: "Urban Infrastructure",
      aiApplication: "Computer vision and IoT-driven predictive maintenance.",
      operationalImpact:
        "Monitors critical infrastructure (bridges, power grids) to detect stress points before failure.",
    },
  ],
  challenges: {
    title: "Architectural and Governance Challenges",
    intro:
      "Implementing AI within government frameworks presents distinct architectural and regulatory hurdles that require strategic mitigation.",
    barriersTitle: "Key Implementation Barriers",
    barriers: [
      "Legacy Infrastructure and Data Fragmentation: Government data often resides in disconnected, legacy databases. Building effective AI requires establishing unified data lakes and interoperability layers to overcome severe data silos.",
      "Security, Privacy, and Data Sovereignty: Public sector AI processes highly sensitive citizen data. Deployments require zero-trust architectures, on-premise or sovereign cloud hosting, and robust encryption to prevent breaches and ensure compliance with national data protection laws.",
      "Algorithmic Bias and Ethical Governance: AI systems trained on historical public data can inadvertently scale existing biases. Establishing strict fairness audits, explainability mandates (XAI), and transparent governance frameworks is critical to maintaining public trust.",
      "Talent Deficits and Procurement Latency: The rigid nature of government procurement cycles often lags behind the rapid pace of AI evolution. Additionally, bridging the technical skills gap within public departments remains a barrier to internal adoption and system maintenance.",
    ],
  },
} as const;

export const infrastructureSection = {
  label: "Infrastructure Solutions - header",
  title: "Infrastructure Solutions",
  panels: [
    {
      id: "cloud",
      title: "Enterprise Cloud & Managed Services",
      description:
        "We engineer resilient, AI-ready infrastructure to replace legacy frameworks. By handling architectural design and proactive IT management, we offload operational complexities so your engineering teams can focus on core product development.",
      subsections: [
        {
          title: "Cloud Modernization & Architecture",
          intro:
            "We design high-availability architectures across public, private, and hybrid environments, prioritizing strategic refactoring over basic lift-and-shift.",
          bullets: [
            "Migration & Optimization: We execute zero-downtime migrations. Post-deployment, we continuously optimize compute, storage, and networking to maximize throughput and strictly control cloud spend.",
            "Private & Hybrid Environments: We architect dedicated private clouds for workloads requiring rigid compliance, ensuring complete administrative control and isolated data perimeters.",
            "DevOps & Automation: We embed CI/CD pipelines and Infrastructure as Code (IaC) to automate provisioning. This enables environments to scale dynamically for high concurrency and massive data throughput.",
          ],
        },
        {
          title: "Comprehensive Managed Services",
          intro:
            "Our managed framework provides the continuous telemetry and oversight required to maintain system integrity and prevent disruption.",
          bullets: [
            "Proactive Monitoring: We deploy deep telemetry and predictive analytics to resolve hardware constraints and network anomalies early, targeting 99.99% uptime.",
            "Security & Compliance: We integrate security directly at the infrastructure layer. We manage complex firewall states, IAM protocols, and continuous vulnerability patching.",
            "Application & Database Administration: We maintain the health of core applications and enterprise data lakes via automated backups, robust disaster recovery (DR) protocols, and routine performance tuning.",
          ],
        },
        {
          title: "Consultative Engineering",
          intro:
            "As an AI-native partner, we align cloud architecture with your business logic. Our agile methodology delivers scalable, compliant infrastructure tailored to your industry, from secure financial gateways to healthcare data pipelines.",
          bullets: [] as string[],
        },
      ],
    },
    {
      id: "network",
      title: "Network, Infrastructure & EPC Solutions",
      description:
        "We engineer resilient physical and network infrastructure for scale. From architectural design through procurement and construction, we deliver turnkey environments built for heavy data throughput and AI-native workloads.",
      subsections: [
        {
          title: "Enterprise Network Architecture",
          intro:
            "We design high-availability networks prioritizing bandwidth efficiency, low latency, and granular access control.",
          bullets: [
            "SD-WAN & Core Routing: We deploy SD-WAN and robust core routing to ensure high-throughput connectivity across distributed environments.",
            "Zero-Trust Security (ZTNA): We enforce strict Zero-Trust frameworks and micro-segmentation at the application layer to prevent the lateral movement of threats.",
            "High-Density Edge & Wireless: We architect enterprise WLANs and edge networks, processing data near the source to minimize latency for real-time applications and IoT.",
          ],
        },
        {
          title: "Core IT Infrastructure",
          intro:
            "We provision the underlying hardware frameworks required to run resource-intensive applications without computational bottlenecks.",
          bullets: [
            "Hyper-Converged Infrastructure (HCI): We consolidate compute, storage, and virtualization into unified platforms, reducing physical footprints while enabling dynamic resource allocation.",
            "AI-Ready Compute Architectures: We provision GPU-accelerated server clusters designed specifically for the parallel processing demands of machine learning and enterprise data lakes.",
            "High-IOPS Storage & Archival: We deploy tiered storage arrays optimized for high I/O, paired with immutable backup targets for guaranteed availability and ransomware resilience.",
          ],
        },
        {
          title: "Turnkey EPC (Engineering, Procurement, Construction)",
          intro:
            "We manage the complete physical lifecycle of your IT environments, serving as a single point of accountability for complex deployments.",
          bullets: [
            "Data Center Construction: We execute end-to-end build-outs, managing high-density structured cabling, enterprise PDUs, and precision thermal cooling systems.",
            "Strategic Procurement Logistics: Leveraging OEM partnerships, we secure enterprise-grade hardware and navigate supply chains to guarantee strict deployment timelines.",
            "Smart Facilities & IT/OT Integration: We bridge IT and Operational Technology (OT) by deploying IP surveillance, localized access control, and environmental IoT sensors.",
          ],
        },
      ],
    },
    {
      id: "gcc",
      title: "High-Performance GCC Establishment & Management",
      description:
        "We architect and manage Global Capability Centers (GCCs) from the ground up. By handling the underlying administrative and infrastructure complexities, we enable your technical leadership to focus entirely on core product development.",
      subsections: [
        {
          title: "Strategic GCC Architecture & Setup",
          intro:
            "We execute the foundational framework required for secure, high-performance offshore engineering operations.",
          bullets: [
            "Entity Formulation & Compliance: We manage end-to-end legal registration, tax structuring, and strict local labor compliance to establish your corporate presence without operational friction.",
            "Infrastructure Provisioning: We deploy secure physical and digital workspaces, equipping them with Zero-Trust Network Access (ZTNA) and enterprise compute hardware tailored for heavy development workloads.",
            "Precision Talent Acquisition: We utilize targeted technical sourcing to rapidly recruit elite software engineering, machine learning, and DevOps talent mapped directly to your architecture.",
          ],
        },
        {
          title: "Comprehensive Operational Management",
          intro:
            "We assume full responsibility for daily operations, maintaining system integrity and workforce productivity across time zones.",
          bullets: [
            "HR & Payroll Administration: We manage the complete human resources lifecycle, executing localized payroll, benefits administration, and technical retention programs.",
            "IT Governance & Security: We enforce your corporate security standards locally, managing endpoint protection, strict IAM protocols, and continuous vulnerability monitoring.",
            "Workflow & CI/CD Integration: We align offshore engineering units with your internal agile frameworks, ensuring adherence to standardized deployment pipelines and stable code delivery.",
          ],
        },
        {
          title: "Consultative Engineering Partnership",
          intro:
            "We build specialized Centers of Excellence (CoEs) rather than generic staffing models. By aligning the GCC directly with your product roadmap, we ensure your distributed teams are equipped to drive advanced data engineering, enterprise architecture, and machine learning development.",
          bullets: [] as string[],
        },
      ],
    },
    {
      id: "bms",
      title: "Building Management System (BMS) Integration",
      description:
        "We architect and deploy enterprise Building Management Systems (BMS). As implementation partners for platforms like Siemens and Honeywell, we bridge physical infrastructure with centralized digital control to completely unify facility operations.",
      subsections: [
        {
          title: "Enterprise Platform Implementation",
          intro:
            "We execute end-to-end integration of top-tier BMS frameworks, ensuring strict interoperability across all facility subsystems.",
          bullets: [
            "OEM Integration: We deploy, configure, and customize flagship environments (Siemens, Honeywell) mapped directly to your specific facility architecture.",
            "Protocol Standardization: We integrate disparate hardware using open communication standards (BACnet, Modbus, OPC) to eliminate vendor lock-in and consolidate data silos.",
            "IT/OT Convergence: We securely bridge Operational Technology (OT) hardware with core IT infrastructure, enforcing strict network segmentation for centralized monitoring.",
          ],
        },
        {
          title: "Core Facility Automation",
          intro:
            "We automate critical infrastructure to optimize resource consumption, maintain environmental control, and reduce manual oversight.",
          bullets: [
            "Precision HVAC Control: We configure dynamic climate regulation driven by real-time occupancy data and thermal load telemetry.",
            "Energy Resource Management: We deploy smart metering and execute automated load-shedding protocols to reduce peak utility expenditure.",
            "Unified Security & Life Safety: We integrate IP video surveillance, biometric access control, and fire detection into a single command interface.",
          ],
        },
        {
          title: "AI-Ready Smart Facilities",
          intro:
            "We establish the data foundation required to evolve traditional buildings into predictive, intelligent assets.",
          bullets: [
            "Predictive Maintenance: We capture continuous equipment telemetry to detect mechanical anomalies and hardware degradation before critical failures occur.",
            "High-Density IoT Deployment: We provision comprehensive sensor networks that feed granular environmental data to the core BMS for autonomous operational adjustments.",
          ],
        },
      ],
    },
    {
      id: "datacenter-managed",
      title: "Data Center Managed Services",
      description:
        "We operate and modernize enterprise data center environments. As an AI-native technology partner, we transition fragmented infrastructure into highly automated ecosystems built to sustain continuous availability and process heavy data workloads.",
      subsections: [
        {
          title: "AI-Driven Infrastructure Management",
          intro:
            "We leverage AIOps to automate routine tasks, optimize resource consumption, and eliminate human error across your infrastructure.",
          bullets: [
            "Predictive Maintenance: We apply machine learning models to deep telemetry and hardware sensors to detect mechanical degradation and thermal anomalies before they cause unplanned outages.",
            "Workload Orchestration: We utilize intelligent algorithms to dynamically allocate compute and storage across high-performance clusters, preventing server overloading and minimizing latency.",
            "Cooling & Energy Optimization: We deploy automated systems to adjust precision cooling and power distribution based on real-time server load, maximizing Power Usage Effectiveness (PUE).",
          ],
        },
        {
          title: "High-Performance Networking",
          intro:
            "We design and manage the internal network fabric required to execute parallel processing and rapid data transfers without computational bottlenecks.",
          bullets: [
            "Scalable Core Fabric: We deploy spine-leaf architectures and low-latency interconnects to facilitate high-throughput data transfer directly between compute nodes.",
            "Data Center Interconnects: We provision high-capacity links between distributed facilities and edge gateways, ensuring secure, seamless data routing across hybrid environments.",
            "Zero-Trust Traffic Management: We enforce continuous threat monitoring and micro-segmentation to secure East-West data center traffic at the application layer.",
          ],
        },
        {
          title: "Comprehensive IT Outsourcing",
          intro:
            "We assume complete operational accountability through structured, ITIL-led governance to offload internal engineering bandwidth.",
          bullets: [
            "Continuous NOC Operations: We manage 24/7 Network Operations Centers (NOC), executing proactive hardware lifecycle management and rapid incident remediation under strict SLAs.",
            "Infrastructure Consolidation: We execute seamless hardware consolidation and physical-to-virtual (P2V) migrations to reduce physical footprints while maximizing compute density.",
            "Automated Governance: We embed strict delivery protocols and automate compliance reporting, ensuring infrastructure adheres to data residency laws and security frameworks.",
          ],
        },
      ],
    },
    {
      id: "datacenter-enterprise",
      title: "Enterprise Data Center & Managed Services",
      description:
        "We engineer, operate, and modernize data center environments. By integrating AI automation, low-latency networking, and strategic facility lifecycle management, we transition complex infrastructure into high-availability ecosystems optimized for intense data workloads and enterprise AI.",
      subsections: [
        {
          title: "1 AI-Driven Operations & Infrastructure Automation",
          intro:
            "We deploy AIOps frameworks to transform infrastructure management from reactive to autonomous.",
          bullets: [
            "Predictive Telemetry: We deploy AI models against continuous hardware sensor streams to detect thermal anomalies and structural degradation early, preventing unplanned outages.",
            "Dynamic Workload Scaling: We implement predictive algorithms to automate resource allocation, dynamically shifting virtualized workloads to eliminate bottlenecks during peak concurrency.",
            "Automated Energy Optimization: We link server load metrics directly to environmental controls, dynamically adjusting cooling loops to maximize Power Usage Effectiveness (PUE) and meet sustainability targets.",
          ],
        },
        {
          title: "2 High-Performance Networking & Security",
          intro:
            "We architect low-latency network fabrics to execute secure, rapid data processing across distributed architectures.",
          bullets: [
            "Scalable Core Fabric: We deploy software-defined networking (SDN) and high-throughput spine-leaf topologies to facilitate non-blocking, line-rate routing between compute nodes.",
            "Data Center Interconnects (DCI): We engineer high-capacity links and edge network nodes, ensuring deterministic, secure routing across hybrid and multi-cloud environments.",
            "Zero-Trust Security Enforcement: We integrate automated threat detection and micro-segmentation across East-West traffic lanes, securing perimeters at the application layer to isolate critical datasets.",
          ],
        },
        {
          title: "3 Continuous Managed IT Services",
          intro:
            "We assume full operational accountability for your virtual and physical IT environments under ITIL-aligned governance.",
          bullets: [
            "24/7 NOC & Continuity: Our Network Operations Centers provide continuous monitoring, automated backup schedules, and immutable disaster recovery (DR) protocols to guarantee data availability.",
            "Infrastructure Transformation: We execute complex physical-to-virtual (P2V) migrations and hardware consolidation strategies, maximizing compute density while minimizing operational debt.",
            "Systems Administration: We manage the complete IT lifecycle, executing regular patch deployment, operating system optimization, and firmware upgrades across all server, storage, and database tiers.",
          ],
        },
        {
          title: "4 Facility Strategy & Physical Lifecycle Management",
          intro:
            "We provide end-to-end real estate and physical infrastructure advisory to scale operations and navigate deployment logistics.",
          bullets: [
            "Strategic Site Selection: We evaluate colocation options, regional fiber proximity, and power availability to determine the optimal physical placement for your data assets.",
            "Integrated Facilities Management: We oversee day-to-day physical operations under strict SLAs, ensuring compliance with localized data residency laws and physical security mandates.",
            "Decarbonization & Sustainability: We execute outcome-led strategies to reduce facility emissions, integrating renewable power models to future-proof your infrastructure against tightening environmental regulations.",
          ],
        },
      ],
    },
    {
      id: "parking",
      title: "Smart Parking & Traffic Solutions",
      description:
        "We architect and deploy AI-driven parking and traffic management systems. By integrating IoT sensors, computer vision, and structured data analytics, we transform manual operations into automated, frictionless ecosystems for commercial, residential, and smart city infrastructure.",
      subsections: [
        {
          title: "1 Core Architecture & Access Control",
          intro:
            "We deploy hybrid recognition technologies to automate entry, exit, and real-time space allocation without manual friction.",
          bullets: [
            "ANPR & FASTag Integration: We integrate Advanced Number Plate Recognition (ANPR) and FASTag RFID readers to facilitate seamless, ticketless multi-lane entry and exit.",
            "Dynamic Slot Allocation: We implement algorithms that assign parking slots sequentially or dynamically based on real-time availability, maximizing space and preventing entry-point congestion.",
            "Automated Barrier Operations: We deploy IoT boom barriers and flap gates linked directly to vehicle authentication frameworks for unified building access control.",
          ],
        },
        {
          title: "2 Navigation & Digital Booking",
          intro:
            "We implement precise guidance and tracking systems to optimize internal vehicle movement and reduce search times.",
          bullets: [
            "Real-Time Guidance Systems: We link ultrasonic and camera sensors directly to LED indicators and digital signage, routing drivers to open bays instantly.",
            "Offline Car Finding: We provide mobile-based tracking operating independently of internet connectivity, allowing users to locate vehicles via partial plate numbers and precise walking paths.",
            "QR Slot Booking & Payments: We enable advance reservations and cashless payments via dynamic QR codes, streamlining access for guests, employees, and VIPs.",
          ],
        },
        {
          title: "3 Enterprise Security & Visitor Management",
          intro:
            "We enforce strict perimeters at the parking layer to ensure only authorized vehicles and personnel access designated zones.",
          bullets: [
            "Digital Locks & Exit Barriers: Users can set specific exit times or toggle digital locks via mobile applications, auto-blocking exit barriers during unauthorized movement.",
            "Facial Recognition Mapping: We utilize AI to map drivers' faces to authorized vehicle profiles at entry, preventing vehicle theft and unauthorized facility access.",
            "Visitor Management Integration: We deploy guest modules combining automated registration, OTP verification, and temporary parking allocation into a single digital pass.",
          ],
        },
        {
          title: "4 Specialized Operational Modules",
          intro:
            "We adapt deployments to handle distinct operational workflows across diverse real estate portfolios.",
          bullets: [
            "Digital Valet Systems: We deploy ticketless valet management utilizing GPS tagging and secure OTP handoffs to manage vehicle tracking, drop-offs, and retrievals.",
            "Residential Management: We configure dedicated access parameters for residential complexes, managing permanent resident vehicles alongside visitor tracking.",
            "Analytics & Reconciliation: We provide centralized dashboards delivering role-based reporting, continuous occupancy metrics, and automated financial reconciliation.",
          ],
        },
      ],
    },
  ],
} as const;

export const industrySolutionsSection = {
  label: "Industry page -header",
  subtitle: ".For AI solutions of  industry ",
  overviews: [
    {
      id: "healthcare-overview",
      title: "Healthcare & Life Sciences",
      strategicOverview: {
        title: "Strategic Overview",
        text: "Healthcare organizations face the dual challenge of improving patient outcomes while managing strict compliance and rising operational costs. An AI-native approach shifts operations from reactive care to predictive, data-driven health management, extracting actionable value from complex medical data without compromising security.",
      },
      portfolio: {
        title: "AI Solutions Portfolio",
        items: [
          "Clinical Decision Support: Using advanced Natural Language Processing (NLP) to analyze unstructured Electronic Health Records (EHR) and medical literature. This accelerates the diagnostic process by mapping complex medical data and surfacing evidence-based recommendations directly to clinicians.",
          "Predictive Patient Analytics: Machine learning models that continuously ingest real-time biometric data and patient history to predict critical risks, such as hospital readmissions or the onset of sepsis. This enables preemptive intervention and highly optimized ICU resource allocation.",
          "Accelerated Drug Discovery: Generative AI and structural modeling algorithms simulate molecular interactions at scale. This computational approach significantly cuts down the time and capital expenditure required to move novel therapeutics from early research to clinical trials.",
        ],
      },
      businessValue: {
        title: "Architectural & Business Value",
        text: "By utilizing privacy-preserving frameworks like federated learning, we ensure that model training occurs with absolute adherence to HIPAA and GDPR compliance. The resulting infrastructure lowers administrative overhead, accelerates pharmaceutical time-to-market, and drives systemic improvements in patient care.",
      },
    },
    {
      id: "fintech-overview",
      title: "Financial Services & FinTech",
      strategicOverview: {
        title: "Strategic Overview",
        text: "Financial institutions operate in high-stakes environments where risk management, regulatory adherence, and speed are critical. Custom AI solutions process massive transaction volumes to automate compliance workflows, protect assets, and uncover hidden market opportunities with algorithmic precision.",
      },
      portfolio: {
        title: "AI Solutions Portfolio",
        items: [
          "Real-Time Fraud Detection & AML: Advanced anomaly detection models analyze complex transaction networks in real time to isolate synthetic identity fraud and money laundering vectors. This approach drastically reduces false positives compared to legacy, rule-based systems.",
          "Automated Compliance (RegTech): Tailored Large Language Models (LLMs) continuously cross-reference internal institutional policies against changing global regulations. This ensures real-time audit readiness, automates regulatory reporting, and minimizes exposure to compliance infractions.",
          "Quantitative Risk & Alpha Generation: Predictive pipelines that analyze alternative data streams, such as geospatial imagery, global supply chain telemetry, and market sentiment, alongside traditional financial data to refine credit scoring and optimize investment portfolios.",
        ],
      },
      businessValue: {
        title: "Architectural & Business Value",
        text: "Built on highly resilient, low-latency cloud infrastructure, our solutions integrate robust MLOps practices to ensure continuous model accuracy against market shifts. This delivers optimized capital allocation, frictionless regulatory adherence, and a distinct quantitative edge.",
      },
    },
    {
      id: "manufacturing-overview",
      title: "Manufacturing & Industry 4.0",
      strategicOverview: {
        title: "Strategic Overview",
        text: "Modern manufacturing requires the continuous optimization of production lines and complex asset lifecycles. By embedding AI directly into the factory floor, we bridge the gap between Information Technology (IT) and Operational Technology (OT), enabling autonomous systems that minimize downtime and maximize yield.",
      },
      portfolio: {
        title: "AI Solutions Portfolio",
        items: [
          "Predictive Maintenance: Edge AI and IoT sensor fusion continuously monitor equipment vibration, temperature, and acoustics. By predicting mechanical wear and anomalies before a failure occurs, maintenance shifts from reactive to precisely scheduled, cost-saving interventions.",
          "Automated Quality Control: High-speed computer vision models deployed directly on assembly lines instantly detect microscopic surface defects and structural inconsistencies. This achieves a level of precision and speed that manual human inspection cannot match.",
          "Dynamic Supply Chain Routing: Reinforcement learning algorithms analyze macroeconomic shifts, weather patterns, and real-time demand signals to prescribe optimal logistics routing and inventory buffering, preventing bottlenecks before they form.",
        ],
      },
      businessValue: {
        title: "Architectural & Business Value",
        text: "Processing data directly at the edge ensures immediate action without relying on continuous cloud connectivity, safeguarding operations in isolated environments. This maximizes equipment lifespan, drives manufacturing defect rates toward zero, and builds highly resilient supply chains.",
      },
    },
    {
      id: "retail-overview",
      title: "Retail & Digital Commerce",
      strategicOverview: {
        title: "Strategic Overview",
        text: "Digital commerce demands hyper-personalization, agile inventory management, and seamless omnichannel user experiences. AI-native software transforms raw consumer behavior and transactional data into optimized pricing, targeted marketing, and efficient backend fulfillment.",
      },
      portfolio: {
        title: "AI Solutions Portfolio",
        items: [
          "Hyper-Personalized Recommendation Engines: Advanced filtering models analyze multi-touchpoint customer journeys to serve individualized product suggestions. These engines simultaneously execute dynamic pricing strategies to maximize conversion rates across the sales funnel.",
          "Precision Demand Forecasting: Predictive models synthesize historical sales, localized trends, and external economic variables to generate highly accurate, SKU-level demand forecasts. This allows for precise inventory allocation, preventing stockouts while minimizing excess carrying costs.",
          "Conversational Commerce & Support: Domain-specific AI agents that go far beyond basic decision-tree chatbots. They manage complex customer inquiries, seamlessly process returns, and handle transactions via natural language, significantly reducing the reliance on manual support tiers.",
        ],
      },
      businessValue: {
        title: "Architectural & Business Value",
        text: "Deployed on scalable, serverless architectures designed to handle extreme traffic spikes (such as holiday sales events) without performance degradation. These platforms directly increase Customer Lifetime Value (CLV), optimize profit margins, and streamline backend logistics.",
      },
    },
  ],
  detailedTitle: "Industry page names and custom solutions content",
  detailed: [
    {
      id: "banking",
      title: "Banking & Financial Services",
      intro:
        "Architect resilient, high-throughput financial infrastructure designed to modernize core operations, embed predictive intelligence, and ensure strict regulatory compliance. We partner with financial institutions to decouple legacy monoliths and deploy secure, distributed cloud-native ecosystems.",
      aiSolutions: {
        title: "AI-Native Solutions",
        items: [
          "Intelligent Fraud Detection Engines: We replace static, rule-based systems with dynamic risk engines. By utilizing real-time stream processing (Apache Kafka, Flink) and machine learning models, we analyze transaction telemetry to automate anomaly detection and drastically reduce false positives without adding latency to the transaction layer.",
          "Algorithmic Trading & Predictive Analytics: Deploy low-latency execution models that ingest multi-modal market data. Our AI models assist quantitative teams with predictive asset forecasting, automated portfolio rebalancing, and natural language data querying for real-time market sentiment analysis.",
          "Automated Regulatory & Compliance Reporting: Implement custom-tuned Large Language Models (LLMs) and NLP pipelines to automate the extraction, classification, and auditing of unstructured financial documentation, ensuring continuous compliance with PCI-DSS, GDPR, and PSD2 frameworks.",
        ],
      },
      customDev: {
        title: "Custom Software Development",
        items: [
          "Digital Core Banking Ecosystems: We engineer modular, API-first platforms that decouple legacy core systems. This microservices-based architecture enables rapid feature deployment for retail and corporate banking while sustaining high-volume transaction processing with sub-millisecond latency.",
          "WealthTech & Asset Management Platforms: Build secure, scalable infrastructure for wealth management, integrating seamlessly with FIX protocols, market data providers, and secure payment gateways.",
          "Enterprise Blockchain & Smart Contracts: Develop immutable financial ledgers using enterprise distributed ledger technology (Hyperledger, Corda) to bypass traditional clearinghouses, reducing cross-border settlement times and operational costs.",
        ],
      },
    },
    {
      id: "logistics",
      title: "Logistics & Supply Chain",
      intro:
        "Optimize routing, automate warehouse operations, and build resilient supply chains through data-driven software engineering. We develop scalable logistics platforms that ingest real-time telematics and provide end-to-end visibility across the entire distribution network.",
      aiSolutions: {
        title: "AI-Native Solutions",
        items: [
          "Machine Learning-Driven Demand Forecasting: Mitigate inventory stockouts and overstock scenarios by deploying predictive models that analyze historical sales data, seasonal fluctuations, and external market variables to optimize procurement and inventory staging.",
          "Dynamic Route Optimization Algorithms: We build AI-driven routing engines that process real-time traffic data, weather conditions, and vehicle capacity constraints to dynamically adjust delivery routes, minimizing fuel consumption and improving adherence to service-level agreements (SLAs).",
          "Computer Vision for Warehouse Automation: Implement computer vision protocols across warehouse camera feeds to automate quality control inspections, track inventory movement on the floor, and monitor compliance with operational safety standards.",
        ],
      },
      customDev: {
        title: "Custom Software Development",
        items: [
          "Custom Transportation Management Systems (TMS): We engineer robust TMS platforms that integrate directly with vehicle telematics hardware. These systems centralize dispatching, automate freight auditing, and provide granular, real-time fleet tracking via GPS API integrations.",
          "Warehouse Management Systems (WMS): Develop high-performance WMS solutions featuring automated picking workflows, barcode/RFID scanning integration, and automated inventory reconciliation to streamline fulfillment center operations.",
          "Supply Chain Visibility Dashboards: Architect custom data pipelines that aggregate fragmented logistics data from third-party carriers and internal ERPs into centralized, real-time analytics dashboards for precise operational oversight.",
        ],
      },
    },
    {
      id: "healthcare-detailed",
      title: "Healthcare & Life Sciences",
      intro:
        "Modernize clinical workflows and secure patient data with HIPAA/GDPR-compliant intelligent software. We build interoperable healthcare architectures that connect disparate medical systems and leverage predictive models to improve patient outcomes.",
      aiSolutions: {
        title: "AI-Native Solutions",
        items: [
          "Medical Image Analysis & Computer Vision: Develop advanced diagnostic assistance tools utilizing convolutional neural networks (CNNs) to analyze MRIs, X-rays, and CT scans, helping radiologists detect anomalies with high precision and speed.",
          "NLP for Electronic Health Records (EHR): Deploy natural language processing pipelines to parse unstructured physician notes and medical histories, automatically categorizing patient data to reduce administrative overhead and improve clinical decision support.",
          "Predictive Patient Triage: Utilize machine learning models to analyze patient vitals and historical health data in real-time, predicting deterioration risks and allowing clinical staff to allocate resources proactively.",
        ],
      },
      customDev: {
        title: "Custom Software Development",
        items: [
          "Telemedicine & Remote Monitoring Platforms: Engineer secure, low-latency video consultation platforms integrated with IoT medical devices. We ensure seamless data ingestion from wearable biosensors for continuous remote patient monitoring.",
          "EHR Integration & Interoperability: We resolve healthcare data silos by developing secure APIs and data pipelines that strictly adhere to HL7 and FHIR interoperability standards, ensuring seamless data exchange between clinical, billing, and pharmacy systems.",
          "Clinical Trial Management Systems (CTMS): Build secure, scalable platforms for life science organizations to manage trial data, track patient enrollment, and maintain rigorous audit trails for regulatory compliance.",
        ],
      },
    },
    {
      id: "retail-detailed",
      title: "Retail & E-Commerce",
      intro:
        "Architect high-throughput commerce platforms capable of handling massive seasonal traffic spikes while delivering hyper-personalized customer experiences. We modernize retail infrastructure to unify online and brick-and-mortar operations.",
      aiSolutions: {
        title: "AI-Native Solutions",
        items: [
          "Hyper-Personalized Recommendation Engines: Implement collaborative filtering and deep learning algorithms that analyze user browsing behavior, purchase history, and session context to serve highly relevant product recommendations in real-time.",
          "Dynamic Pricing Models: Deploy AI models that continuously scrape competitor pricing, monitor internal inventory levels, and assess real-time market demand to automatically adjust pricing strategies, maximizing margin and conversion rates.",
          "Visual Search & AI Chatbots: Enhance product discoverability by integrating computer vision for image-based search queries, alongside NLP-driven conversational agents that handle order tracking, returns, and complex customer inquiries autonomously.",
        ],
      },
      customDev: {
        title: "Custom Software Development",
        items: [
          "Headless Commerce Architectures: We decouple the frontend presentation layer from the backend commerce engine using GraphQL and RESTful APIs. This enables omnichannel content delivery across web, mobile, and IoT devices without compromising backend performance.",
          'Omnichannel Inventory Management: Engineer centralized systems that synchronize inventory across physical stores, warehouses, and digital storefronts in real-time, preventing overselling and enabling "buy online, pick up in-store" (BOPIS) workflows.',
          "High-Volume Payment Gateways: Develop secure, highly available checkout flows with integrated fraud detection, supporting localized payment methods and ensuring continuous compliance with PCI-DSS standards.",
        ],
      },
    },
    {
      id: "manufacturing-detailed",
      title: "Manufacturing & Industrial IoT",
      intro:
        "Bridge the gap between operational technology (OT) and information technology (IT) environments. We engineer smart factory ecosystems that utilize machine data to drive process optimization, reduce downtime, and enforce quality control.",
      aiSolutions: {
        title: "AI-Native Solutions",
        items: [
          "Predictive Maintenance (PdM): Ingest high-frequency sensor data (vibration, temperature, acoustics) from industrial equipment into machine learning models to predict mechanical failures before they occur, scheduling maintenance only when necessary and minimizing unplanned downtime.",
          "AI-Driven Quality Assurance: Deploy high-speed computer vision systems on the production line to detect microscopic defects in manufactured goods in real-time, automatically routing defective units out of the supply chain with sub-second latency.",
          "Digital Twin Modeling: Create highly accurate, data-driven virtual replicas of physical manufacturing environments. We use these digital twins to run complex AI simulations, optimizing production line layouts and testing process changes without disrupting physical operations.",
        ],
      },
      customDev: {
        title: "Custom Software Development",
        items: [
          "Industrial IoT (IIoT) Data Pipelines: Architect edge computing solutions and cloud data lakes capable of securely ingesting, normalizing, and storing massive volumes of time-series data generated by factory floor sensors and SCADA systems.",
          "Manufacturing Execution Systems (MES): Build customized MES platforms that bridge the gap between enterprise ERPs and factory floor equipment, providing real-time tracking of overall equipment effectiveness (OEE) and production throughput.",
          "Custom ERP Integrations: Develop automated middleware to synchronize inventory, procurement, and production schedules across fragmented enterprise systems, establishing a single source of truth for operational data.",
        ],
      },
    },
  ],
} as const;

export const productsCta = {
  eyebrow: "Enterprise AI Infrastructure",
  title: "Ready to build what's next?",
  description:
    "Our proprietary suite provides the foundational architecture to build, deploy, and monitor AI systems at scale. Select a platform to review technical specifications and deployment schemas.",
  primaryCta: "Get started",
  primaryHref: "/contact",
  secondaryCta: "Explore platforms",
  secondaryHref: "#product-explorer",
} as const;

/** @deprecated Use genAiSection, kept for type compatibility during migration */
export const genAiTimeline = genAiSection;
