export type NavMegaItem = {
  label: string;
  href: string;
  description: string;
};

export type NavMegaLayout = "grid" | "stack" | "catalog";

export type NavMegaGroup = {
  label: string;
  items: NavMegaItem[];
  /** Optional nested section inside a mega menu (e.g. Inside Astrenox) */
  sections?: { title: string; items: NavMegaItem[] }[];
  /** Premium catalog layout: paired grid + centered featured last item */
  layout?: NavMegaLayout;
};

export const navAiServices: NavMegaGroup = {
  label: "AI Services",
  items: [
    {
      label: "AI Consulting & Advisory",
      href: "/services/ai-consulting-advisory",
      description: "Strategy, roadmaps, and executive advisory for enterprise AI adoption.",
    },
    {
      label: "AI Engineering & Development",
      href: "/services/ai-engineering",
      description: "Production-ready AI systems built by senior engineering squads.",
    },
    {
      label: "AI Transformation, Engineering & AI Enablement Training",
      href: "/services/ai-transformation",
      description: "Organization-wide AI transformation programs and enablement.",
    },
    {
      label: "Intelligent Enterprise Automation Builder",
      href: "/services/intelligent-automations",
      description: "Agentic workflows and intelligent automation at enterprise scale.",
    },
    {
      label: "AI Native Software as a Service",
      href: "/services/ai-native-saas",
      description: "Deployable AI-native SaaS modules for rapid enterprise rollout.",
    },
    {
      label: "Custom-Built Computer Vision & Video Analytics",
      href: "/services/computer-vision-video-analytics",
      description: "Vision pipelines for inspection, surveillance, and analytics.",
    },
    {
      label: "Enterprise AI Ops & Governance",
      href: "/services/enterprise-ai-ops-governance",
      description: "MLOps, observability, compliance, and model governance frameworks.",
    },
  ],
};

export const navDigitalConsulting: NavMegaGroup = {
  label: "Digital Consulting & IT Services",
  layout: "catalog",
  items: [
    {
      label: "Hire Tech Talent & Embedded Teams",
      href: "/careers",
      description: "Embedded engineers, ML specialists, and DevOps squads on demand.",
    },
    {
      label: "Blockchain & Web3 Consulting",
      href: "/services/blockchain-web3-consulting",
      description: "Enterprise blockchain architecture and smart contract engineering.",
    },
    {
      label: "IT Services & Consulting",
      href: "/services/digital-it-consulting",
      description: "Digital transformation, cloud, and IT strategy consulting.",
    },
    {
      label: "AI-Native Product Engineering",
      href: "/services/ai-native-product-engineering",
      description: "End-to-end product engineering for AI-first software.",
    },
    {
      label: "Quality Engineering & Software Testing",
      href: "/services/quality-engineering",
      description: "Automated QA, performance testing, and release governance.",
    },
    {
      label: "CoE",
      href: "/services/center-of-excellence",
      description: "Dedicated CoE setup for AI, data, and platform engineering.",
    },
  ],
};

export const navProducts: NavMegaGroup = {
  label: "Products",
  layout: "stack",
  items: [
    {
      label: "Solvoris",
      href: "/products/solvoris",
      description: "Autonomous company brain and personal assistant.",
    },
    {
      label: "Astren",
      href: "/products/astren",
      description: "AI adoption and transformation engine.",
    },
    {
      label: "Akiren",
      href: "/products/akiren",
      description: "AI-native company OS.",
    },
    {
      label: "Orzora",
      href: "/products/orzora",
      description: "Deal desk and RFx pipeline.",
    },
  ],
  sections: [
    {
      title: "Product Offerings",
      items: [
        {
          label: "Ready-to-Deploy AI Solutions",
          href: "/products/ready-to-deploy-ai-solutions",
          description: "Applied AI platforms, Gen AI boilerplates, and custom CRM engineering.",
        },
        {
          label: "MVP Studio & Custom SaaS",
          href: "/services/mvp-studio",
          description: "Launch your MVP in 3 weeks with AI-native production architecture.",
        },
        {
          label: "AI Native Software Factory",
          href: "/products/ai-native-software-factory",
          description: "Governed, agentic engineering for the enterprise SDLC.",
        },
      ],
    },
  ],
};

export const navInfrastructureHref = "/infrastructure-solutions";

export const navInfrastructure: NavMegaGroup = {
  label: "Infrastructure Solutions",
  layout: "stack",
  items: [
    {
      label: "Cloud, Network Infrastructure & GCC Solutions",
      href: "/infrastructure-solutions/cloud-network-gcc",
      description: "Enterprise cloud, network transformation, EPC delivery, and GCC establishment.",
    },
    {
      label: "Building Management & Smart Parking Solutions",
      href: "/infrastructure-solutions/bms-smart-parking",
      description: "Integrated BMS, facility automation, and smart parking systems.",
    },
    {
      label: "Enterprise Compute Cloud & Data Centre Managed Services",
      href: "/infrastructure-solutions/data-centre-compute-cloud",
      description: "Compute cloud, LLM infrastructure, and data centre operations.",
    },
  ],
};

export const navIndustriesHref = "/services/industries";

export const navResearchHref = "/research";

export const navContactHref = "/contact";

/** Collect all hrefs under a mega group for active-route detection */
export function collectMegaHrefs(group: NavMegaGroup): string[] {
  const hrefs = group.items.map((i) => i.href);
  group.sections?.forEach((s) => s.items.forEach((i) => hrefs.push(i.href)));
  return hrefs;
}

export function isMegaGroupActive(pathname: string, group: NavMegaGroup): boolean {
  return collectMegaHrefs(group).some(
    (href) => pathname === href || pathname.startsWith(`${href}/`)
  );
}

export function isInfrastructureActive(pathname: string): boolean {
  if (pathname === navInfrastructureHref || pathname.startsWith(`${navInfrastructureHref}/`)) {
    return true;
  }
  return isMegaGroupActive(pathname, navInfrastructure);
}
