export type FlagshipProduct = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: readonly string[];
  cta: { label: string; href: string };
};

export const flagshipProducts: readonly FlagshipProduct[] = [
  {
    id: "solvoris",
    slug: "solvoris",
    name: "Solvoris",
    tagline: "Autonomous company brain and personal assistant",
    description:
      "Solvoris is an autonomous company brain and personal assistant that unifies institutional knowledge, contextual memory, and AI-assisted reasoning across your organisation.",
    highlights: [
      "Secure indexing and retrieval across documents, conversations, and operational data",
      "Context-aware AI interactions grounded in your organisation's knowledge base",
      "Continuous learning from approved workflows, decisions, and institutional memory",
    ],
    cta: { label: "Book a Demo", href: "/contact?product=solvoris" },
  },
  {
    id: "astren",
    slug: "astren",
    name: "Astren",
    tagline: "AI adoption and transformation engine",
    description:
      "Astren is an AI adoption and transformation engine that helps organisations move from isolated experiments to governed, scalable AI adoption.",
    highlights: [
      "Use-case discovery, readiness assessment, and transformation roadmapping",
      "Workflow design aligned with business objectives and governance requirements",
      "Structured adoption paths from pilot to enterprise-scale deployment",
    ],
    cta: { label: "Book a Demo", href: "/contact?product=astren" },
  },
  {
    id: "akiren",
    slug: "akiren",
    name: "Akiren",
    tagline: "AI-native company OS",
    description:
      "Akiren is an AI-native company operating system that connects workflows, data, agents, and operational controls in one execution environment.",
    highlights: [
      "Unified operating layer for AI-native teams and business workflows",
      "Agent orchestration with approvals, governance, and auditability",
      "Integrated data, automation, and operational visibility",
    ],
    cta: { label: "Book a Demo", href: "/contact?product=akiren" },
  },
  {
    id: "orzora",
    slug: "orzora",
    name: "Orzora",
    tagline: "Deal desk and RFx pipeline",
    description:
      "Orzora is an AI-powered deal desk and RFx pipeline that streamlines qualification, document analysis, proposal development, and collaborative deal execution.",
    highlights: [
      "Centralised deal workspace for documents, tasks, and collaboration",
      "Automated RFx analysis, response drafting, and proposal workflows",
      "Configurable approvals, governance controls, and pipeline visibility",
    ],
    cta: { label: "Book a Demo", href: "/contact?product=orzora" },
  },
] as const;

export function getFlagshipProduct(slug: string): FlagshipProduct | undefined {
  return flagshipProducts.find((p) => p.slug === slug);
}
