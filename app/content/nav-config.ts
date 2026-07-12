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
      label: "MVP Studio",
      href: "/services/mvp-studio",
      description: "Investor-ready MVPs shipped in weeks, not quarters.",
    },
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
  items: [
    {
      label: "Our Products",
      href: "/products",
      description: "Enterprise AI infrastructure, platforms, and product suite.",
    },
  ],
  sections: [
    {
      title: "Inside Astrenox",
      items: [
        {
          label: "Engineered White-Label Commerce Platforms",
          href: "/inside-astrenox/whitelabel-commerce-platforms",
          description: "100% whitelabel commerce architectures under your brand.",
        },
        {
          label: "AI Native Software Factory",
          href: "/products/ai-native-software-factory",
          description: "Autonomous SDLC control plane for regulated enterprises.",
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
      label: "Enterprise Cloud & Managed Services",
      href: "/infrastructure-solutions/enterprise-cloud-managed-services",
      description:
        "Resilient, AI-ready cloud architecture with proactive managed services and DevOps automation.",
    },
    {
      label: "Building Management System (BMS) Integration",
      href: "/infrastructure-solutions/building-management-system-integration",
      description:
        "Enterprise BMS implementation bridging facility infrastructure with centralized digital control.",
    },
    {
      label: "Smart Parking & Traffic Solutions",
      href: "/infrastructure-solutions/smart-parking-traffic-solutions",
      description:
        "AI-driven parking and traffic systems with IoT sensors, computer vision, and real-time analytics.",
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
