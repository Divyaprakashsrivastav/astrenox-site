import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  GraduationCap,
  Workflow,
  Cloud,
  ScanEye,
  ShieldCheck,
  Rocket,
  Users,
  Blocks,
  Server,
  Layers,
  Lock,
  TestTube2,
  Building2,
  Package,
  Sparkles,
  Factory,
  Store,
} from "lucide-react";

export type NavMegaItem = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export type NavMegaGroup = {
  label: string;
  items: NavMegaItem[];
  /** Optional nested section inside a mega menu (e.g. Inside Astrenox) */
  sections?: { title: string; items: NavMegaItem[] }[];
};

export const navAiServices: NavMegaGroup = {
  label: "AI Services",
  items: [
    {
      label: "AI Consulting & Advisory",
      href: "/services/ai-consulting-advisory",
      description: "Strategy, roadmaps, and executive advisory for enterprise AI adoption.",
      icon: Brain,
    },
    {
      label: "AI Engineering & Development",
      href: "/services/ai-engineering",
      description: "Production-ready AI systems built by senior engineering squads.",
      icon: Code2,
    },
    {
      label: "AI Transformation, Engineering & AI Enablement Training",
      href: "/services/ai-transformation",
      description: "Organization-wide AI transformation programs and enablement.",
      icon: GraduationCap,
    },
    {
      label: "Intelligent Enterprise Automation Builder",
      href: "/services/intelligent-automations",
      description: "Agentic workflows and intelligent automation at enterprise scale.",
      icon: Workflow,
    },
    {
      label: "AI Native Software as a Service",
      href: "/services/ai-native-saas",
      description: "Deployable AI-native SaaS modules for rapid enterprise rollout.",
      icon: Cloud,
    },
    {
      label: "Custom-Built Computer Vision & Video Analytics",
      href: "/services/computer-vision-video-analytics",
      description: "Vision pipelines for inspection, surveillance, and analytics.",
      icon: ScanEye,
    },
    {
      label: "Enterprise AI Ops & Governance",
      href: "/services/enterprise-ai-ops-governance",
      description: "MLOps, observability, compliance, and model governance frameworks.",
      icon: ShieldCheck,
    },
  ],
};

export const navDigitalConsulting: NavMegaGroup = {
  label: "Digital Consulting & IT Services",
  items: [
    {
      label: "MVP Studio",
      href: "/services/mvp-studio",
      description: "Investor-ready MVPs shipped in weeks, not quarters.",
      icon: Rocket,
    },
    {
      label: "Hire Tech Talent & Embedded Teams",
      href: "/careers",
      description: "Embedded engineers, ML specialists, and DevOps squads on demand.",
      icon: Users,
    },
    {
      label: "Blockchain & Web3 Consulting",
      href: "/services/blockchain-web3-consulting",
      description: "Enterprise blockchain architecture and smart contract engineering.",
      icon: Blocks,
    },
    {
      label: "IT Services & Consulting",
      href: "/services/digital-it-consulting",
      description: "Digital transformation, cloud, and IT strategy consulting.",
      icon: Server,
    },
    {
      label: "AI-Native Product Engineering",
      href: "/services/ai-native-product-engineering",
      description: "End-to-end product engineering for AI-first software.",
      icon: Layers,
    },
    {
      label: "DevOps & Enterprise IT Security Consulting",
      href: "/services/devops-enterprise-security",
      description: "CI/CD, infrastructure hardening, and security posture management.",
      icon: Lock,
    },
    {
      label: "Quality Engineering & Software Testing",
      href: "/services/quality-engineering",
      description: "Automated QA, performance testing, and release governance.",
      icon: TestTube2,
    },
    {
      label: "CoE",
      href: "/services/center-of-excellence",
      description: "Dedicated CoE setup for AI, data, and platform engineering.",
      icon: Building2,
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
      icon: Package,
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
          icon: Store,
        },
        {
          label: "AI Native Software Factory",
          href: "/products/ai-native-software-factory",
          description: "Autonomous SDLC control plane for regulated enterprises.",
          icon: Factory,
        },
      ],
    },
  ],
};

export const navInfrastructureHref = "/infrastructure-solutions";

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
  return pathname === navInfrastructureHref || pathname.startsWith(`${navInfrastructureHref}/`);
}
