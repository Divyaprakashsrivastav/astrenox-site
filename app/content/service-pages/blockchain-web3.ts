import type { ServicePageContent } from "./types";

export const blockchainWeb3Content: ServicePageContent = {
  metadata: {
    title: "Blockchain & Web3 Consulting | Astrenox",
    description:
      "Enterprise blockchain architecture, smart contract engineering, and distributed ledger strategy for regulated industries.",
  },
  hero: {
    label: "Digital Consulting",
    title: "Enterprise Blockchain,\nBuilt for Trust.",
    subtitle:
      "Design and deploy production-grade distributed systems with smart contract security, compliance frameworks, and architecture that scales beyond proof-of-concept.",
    primaryCta: "Start Architecture Review",
    secondaryCta: "View Capabilities",
    primaryHref: "/contact",
    secondaryHref: "#workflow",
  },
  overview: {
    title: "Blockchain consulting for regulated enterprises",
    paragraphs: [
      "Astrenox helps enterprises move beyond blockchain experiments to production systems that satisfy security auditors, compliance officers, and engineering teams alike. We bridge the gap between Web3 innovation and enterprise governance requirements.",
      "Our practice covers permissioned ledgers, public chain integrations, tokenization platforms, and cross-chain interoperability. Every engagement begins with a clear business case—not technology for its own sake.",
      "Smart contract development follows formal verification practices, comprehensive test coverage, and third-party audit preparation. We design for upgradeability, key management, and incident response from the architecture phase.",
      "Whether you're tokenizing real-world assets, building supply chain traceability, or modernizing settlement infrastructure, we deliver systems your board can approve and your engineers can maintain.",
    ],
  },
  capabilities: {
    label: "Capabilities",
    title: "End-to-end blockchain engineering",
    items: [
      {
        title: "Architecture & Strategy",
        description: "Ledger selection, consensus models, and integration patterns aligned to throughput, cost, and regulatory requirements.",
        icon: "Layers",
      },
      {
        title: "Smart Contract Development",
        description: "Solidity, Rust, and Move contracts with formal testing, gas optimization, and audit-ready documentation.",
        icon: "FileCheck",
      },
      {
        title: "Tokenization Platforms",
        description: "Asset tokenization workflows with custody integration, KYC/AML hooks, and investor-facing portals.",
        icon: "Blocks",
      },
      {
        title: "Enterprise Integration",
        description: "Connect blockchain layers to ERP, CRM, and payment systems via secure API gateways and event pipelines.",
        icon: "Network",
      },
      {
        title: "Security & Auditing",
        description: "Threat modeling, penetration testing coordination, and audit remediation with continuous monitoring.",
        icon: "ShieldCheck",
      },
      {
        title: "Compliance Frameworks",
        description: "Regulatory mapping for securities, commodities, and data privacy across jurisdictions.",
        icon: "Scale",
      },
    ],
  },
  workflow: {
    id: "workflow",
    label: "Process",
    title: "Blockchain delivery workflow",
    steps: [
      {
        name: "Assess",
        description: "Evaluate use case viability, regulatory landscape, and technical feasibility with stakeholder workshops.",
      },
      {
        name: "Architect",
        description: "Design ledger topology, smart contract modules, key management, and integration touchpoints.",
      },
      {
        name: "Build",
        description: "Develop contracts, off-chain services, and operator tooling with continuous security review.",
      },
      {
        name: "Audit",
        description: "Coordinate third-party audits, remediate findings, and establish on-chain monitoring and alerting.",
      },
      {
        name: "Operate",
        description: "Deploy to production with runbooks, governance processes, and ongoing protocol maintenance.",
      },
    ],
  },
  stack: {
    label: "Technology",
    title: "Blockchain technology stack",
    items: [
      "Ethereum",
      "Solidity",
      "Hyperledger Fabric",
      "Polygon",
      "Rust",
      "IPFS",
      "Hardhat",
      "Chainlink",
      "AWS Blockchain",
      "Fireblocks",
      "The Graph",
      "Zero-Knowledge Proofs",
    ],
  },
  outcomes: {
    label: "Outcomes",
    title: "Results that satisfy stakeholders",
    items: [
      { value: 30, suffix: "+", label: "Smart Contracts Audited" },
      { value: 99, suffix: ".9%", label: "Uptime on Production Nodes" },
      { value: 8, suffix: "", label: "Enterprise Deployments" },
      { value: 0, suffix: "", label: "Critical Exploits Post-Audit" },
    ],
  },
  projects: {
    label: "Portfolio",
    title: "Featured blockchain engagements",
    items: [
      {
        name: "Trade Finance Ledger",
        industry: "Financial Services",
        timeline: "16 weeks",
        stack: ["Hyperledger", "Node.js", "AWS"],
        outcome: "Reduced letter-of-credit settlement time from 5 days to 4 hours across 3 correspondent banks.",
      },
      {
        name: "Supply Chain Provenance",
        industry: "Manufacturing",
        timeline: "12 weeks",
        stack: ["Polygon", "Solidity", "IPFS"],
        outcome: "Enabled end-to-end traceability for 2M+ SKUs with tamper-proof audit trail for regulators.",
      },
      {
        name: "Digital Asset Custody Gateway",
        industry: "Fintech",
        timeline: "20 weeks",
        stack: ["Ethereum", "Fireblocks", "Python"],
        outcome: "Launched institutional custody platform processing $120M monthly with SOC 2 Type II compliance.",
      },
    ],
  },
  industries: {
    label: "Industries",
    title: "Sectors we serve",
    items: [
      { name: "Financial Services", icon: "Landmark" },
      { name: "Supply Chain", icon: "Truck" },
      { name: "Real Estate", icon: "Building2" },
      { name: "Healthcare", icon: "HeartPulse" },
      { name: "Energy & Commodities", icon: "Zap" },
      { name: "Government", icon: "Scale" },
      { name: "Insurance", icon: "ShieldCheck" },
      { name: "Media & IP", icon: "Globe" },
    ],
  },
  testimonials: {
    label: "Testimonials",
    title: "What leaders say",
    items: [
      {
        quote:
          "Astrenox translated our tokenization strategy into an architecture our compliance team approved. The smart contracts passed audit on the first cycle—rare in this space.",
        author: "Priya Nair",
        role: "Head of Digital Assets, Summit Capital",
      },
      {
        quote:
          "We needed blockchain expertise that understood enterprise integration, not just Solidity. Their team connected our ledger to SAP and built monitoring our ops team actually uses.",
        author: "Thomas Berger",
        role: "CIO, EuroManufacture AG",
      },
      {
        quote:
          "The architecture review alone saved us from a consensus model that wouldn't have met our throughput requirements. They think like engineers and speak like executives.",
        author: "Angela Torres",
        role: "VP Innovation, Pacific Trade Bank",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Blockchain questions",
    items: [
      {
        q: "Do you work with public or private blockchains?",
        a: "Both. We select ledger technology based on your use case—permissioned chains for regulated workflows, public chains for open ecosystems, and hybrid models where needed.",
      },
      {
        q: "How do you handle smart contract security?",
        a: "Every contract goes through internal review, comprehensive test suites, and coordination with third-party auditors. We also deploy monitoring for anomalous on-chain activity.",
      },
      {
        q: "Can you integrate with our existing enterprise systems?",
        a: "Yes. We build API gateways, event-driven pipelines, and middleware that connect blockchain layers to ERP, CRM, payment, and identity systems.",
      },
      {
        q: "What regulatory frameworks do you support?",
        a: "We map architectures to SEC, MiCA, FATF, and industry-specific requirements. Compliance is designed in—not bolted on after development.",
      },
      {
        q: "Do you provide ongoing protocol maintenance?",
        a: "Yes. Post-launch retainers cover upgrades, governance participation, incident response, and chain migration planning.",
      },
    ],
  },
  cta: {
    title: "Build Trusted Blockchain Infrastructure.",
    subtitle:
      "Schedule an architecture review with our blockchain practice leads. We'll assess feasibility, outline compliance requirements, and propose a delivery roadmap.",
    primaryCta: "Book Discovery Call",
    secondaryCta: "Download Capability Deck",
    primaryHref: "/contact",
    secondaryHref: "/contact",
  },
};
