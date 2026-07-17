/**
 * Unified product catalog — maps verbatim products-content into explorer nav + showcase.
 */

import {
  flagshipProducts,
  customCrmSection,
  genAiSection,
  softwareFactorySection,
  missionCriticalSection,
  publicSectorSection,
  infrastructureSection,
  industrySolutionsSection,
  productsCta,
  productsHero,
} from "./products-content";

export type CatalogChip = {
  id: string;
  label: string;
  title: string;
  text: string;
};

export type CatalogAccordion = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: readonly string[];
};

export type CatalogTimelineStep = {
  title: string;
  text: string;
};

export type CatalogTable = {
  headers: string[];
  rows: string[][];
};

export type ProductCatalogItem = {
  id: string;
  title: string;
  summary: string;
  icon: string;
  illustration: string;
  eyebrow?: string;
  subtitle?: string;
  overview: string[];
  timeline?: CatalogTimelineStep[];
  chips: CatalogChip[];
  accordions: CatalogAccordion[];
  deployment?: readonly string[];
  security?: readonly string[];
  useCases?: readonly string[];
  businessOutcomes?: readonly string[];
  table?: CatalogTable;
  ctas?: { label: string; href: string; primary?: boolean }[];
};

function chipFromBullet(bullet: string, index: number, prefix: string): CatalogChip {
  const colon = bullet.indexOf(":");
  if (colon > 0 && colon < 80) {
    const label = bullet.slice(0, colon).trim();
    return {
      id: `${prefix}-${index}`,
      label: label.length > 28 ? `${label.slice(0, 26)}…` : label,
      title: label,
      text: bullet.slice(colon + 1).trim(),
    };
  }
  const label = bullet.split(" ").slice(0, 2).join(" ");
  return { id: `${prefix}-${index}`, label, title: label, text: bullet };
}

function chipsFromBullets(bullets: readonly string[], prefix: string): CatalogChip[] {
  return bullets.map((b, i) => chipFromBullet(b, i, prefix));
}

function flagshipItem(
  product: (typeof flagshipProducts)[number]
): ProductCatalogItem {
  return {
    id: product.id,
    title: product.name,
    summary: product.tagline,
    icon: product.id === "solvoris" ? "brain" : product.id === "astrenai" ? "workflow" : "git-branch",
    illustration: product.id,
    eyebrow: "Core Products",
    subtitle: `${product.name} | ${product.tagline}`,
    overview: [product.description],
    chips: product.features.map((f, i) => ({
      id: `${product.id}-f-${i}`,
      label: f.label.length > 24 ? `${f.label.slice(0, 22)}…` : f.label,
      title: f.label,
      text: f.text,
    })),
    accordions: [
      {
        id: `${product.id}-arch`,
        title: "Architecture",
        paragraphs: [product.description],
        bullets: product.features.map((f) => `${f.label}: ${f.text}`),
      },
      {
        id: `${product.id}-impl`,
        title: "Implementation",
        paragraphs: product.features.map((f) => f.text),
      },
      {
        id: `${product.id}-biz`,
        title: "Business Value",
        paragraphs: product.features.map((f) => `${f.label} — ${f.text}`),
      },
    ],
    ctas: [
      { label: "Book Architecture Call", href: "/contact?intent=scoping", primary: true },
      { label: "View Platform", href: "/platform" },
    ],
  };
}

const flagshipItems = flagshipProducts.map(flagshipItem);

const customCrmItem: ProductCatalogItem = {
  id: "custom-crm",
  title: "Custom AI-Powered CRM",
  summary: "AI-native CRM architectures with full data ownership",
  icon: "users",
  illustration: "crm",
  eyebrow: customCrmSection.label,
  subtitle: customCrmSection.title,
  overview: [customCrmSection.description],
  chips: customCrmSection.subsections.flatMap((sub, si) =>
    sub.bullets.map((b, bi) => chipFromBullet(b, bi, `crm-${si}`))
  ),
  accordions: customCrmSection.subsections.map((sub) => ({
    id: sub.id,
    title: sub.title,
    paragraphs: [sub.intro],
    bullets: [...sub.bullets],
  })),
  deployment: [
    ...(customCrmSection.subsections.find((s) => s.id === "deployment")?.bullets ?? []),
  ],
  security: [
    ...(customCrmSection.subsections.find((s) => s.id === "lifecycle")?.bullets ?? []),
  ],
  businessOutcomes: [customCrmSection.description],
  ctas: [
    { label: "Scope CRM Build", href: "/contact?intent=crm", primary: true },
    { label: "Services", href: "/services" },
  ],
};

const genAiItem: ProductCatalogItem = {
  id: "gen-ai",
  title: "Enterprise Gen AI Boilerplates",
  summary: "Battle-tested Gen AI frameworks from prototype to production",
  icon: "sparkles",
  illustration: "genai",
  eyebrow: genAiSection.label,
  subtitle: genAiSection.title,
  overview: [genAiSection.description],
  chips: [
    ...chipsFromBullets(genAiSection.pillars.items, "gen-pillar"),
    ...genAiSection.industries.flatMap((ind, ii) =>
      ind.solutions.map((s, si) => chipFromBullet(s, si, `gen-${ii}`))
    ),
  ],
  timeline: genAiSection.industries.map((ind) => ({
    title: ind.title,
    text: ind.solutions.join(" "),
  })),
  accordions: [
    {
      id: "gen-pillars",
      title: "Architecture",
      paragraphs: [genAiSection.pillars.title],
      bullets: [...genAiSection.pillars.items],
    },
    {
      id: "gen-industries",
      title: "Implementation",
      paragraphs: [genAiSection.industriesTitle],
      bullets: genAiSection.industries.flatMap((ind) =>
        ind.solutions.map((s) => `[${ind.title}] ${s}`)
      ),
    },
    ...genAiSection.industries.map((ind) => ({
      id: `gen-${ind.id}`,
      title: ind.title,
      paragraphs: [...ind.solutions],
    })),
    {
      id: "gen-deploy",
      title: "Deployment",
      paragraphs: [genAiSection.description],
      bullets: [...genAiSection.pillars.items],
    },
    {
      id: "gen-biz",
      title: "Business Value",
      paragraphs: [genAiSection.description],
    },
  ],
  ctas: [{ label: "Accelerate Deployment", href: "/contact", primary: true }],
};

const softwareFactoryItem: ProductCatalogItem = {
  id: "software-factory",
  title: "AI-Native Software Factory",
  summary: "SDLC control plane for regulated enterprise engineering",
  icon: "factory",
  illustration: "factory",
  eyebrow: softwareFactorySection.label,
  subtitle: softwareFactorySection.title,
  overview: [...softwareFactorySection.intro],
  timeline: softwareFactorySection.sections.map((s) => ({
    title: `${s.number}. ${s.title}`,
    text: s.intro,
  })),
  chips: softwareFactorySection.sections.flatMap((s, si) =>
    s.bullets.map((b, bi) => chipFromBullet(b, bi, `sf-${si}`))
  ),
  accordions: softwareFactorySection.sections.map((s) => ({
    id: `sf-${s.number}`,
    title: s.title,
    paragraphs: [s.intro],
    bullets: [...s.bullets],
  })),
  deployment: [
    ...(softwareFactorySection.sections[2]?.bullets.filter((b) =>
      b.includes("Air-Gapped") || b.includes("VPC")
    ) ?? []),
  ],
  security: [
    ...(softwareFactorySection.sections[2]?.bullets.filter((b) =>
      b.includes("ISO") || b.includes("OWASP") || b.includes("SAML")
    ) ?? []),
  ],
  businessOutcomes: [...softwareFactorySection.intro],
  ctas: [{ label: "Engage Software Factory", href: "/contact", primary: true }],
};

const missionCriticalItem: ProductCatalogItem = {
  id: "mission-critical",
  title: "Mission Critical AI",
  summary: "Resilience, deterministic outputs, secure orchestration",
  icon: "shield",
  illustration: "mission",
  eyebrow: missionCriticalSection.label,
  subtitle: missionCriticalSection.title,
  overview: [missionCriticalSection.description],
  chips: missionCriticalSection.methodology.items.map((item, i) =>
    chipFromBullet(item, i, "mc")
  ),
  accordions: [
    {
      id: "mc-methodology",
      title: "Architecture",
      paragraphs: [missionCriticalSection.methodology.intro],
      bullets: [...missionCriticalSection.methodology.items],
    },
    {
      id: "mc-deploy",
      title: "Deployment",
      paragraphs: [missionCriticalSection.description],
      bullets: [...missionCriticalSection.methodology.items],
    },
    {
      id: "mc-security",
      title: "Security",
      paragraphs: missionCriticalSection.methodology.items.filter((i) =>
        i.includes("Guardrails") || i.includes("Grounding")
      ),
      bullets: missionCriticalSection.methodology.items.filter((i) =>
        i.includes("Guardrails") || i.includes("Verification")
      ),
    },
    {
      id: "mc-biz",
      title: "Business Value",
      paragraphs: [missionCriticalSection.description],
    },
  ],
  ctas: [{ label: "Discuss Mission-Critical AI", href: "/contact", primary: true }],
};

const publicSectorItem: ProductCatalogItem = {
  id: "public-sector",
  title: "Public Sector AI",
  summary: "AI-first governance for citizen services and public safety",
  icon: "landmark",
  illustration: "public",
  eyebrow: publicSectorSection.label,
  subtitle: publicSectorSection.title,
  overview: [publicSectorSection.description],
  table: {
    headers: ["Domain", "AI Application", "Operational Impact"],
    rows: publicSectorSection.table.map((r) => [
      r.domain,
      r.aiApplication,
      r.operationalImpact,
    ]),
  },
  useCases: publicSectorSection.table.map(
    (r) => `${r.domain}: ${r.aiApplication} — ${r.operationalImpact}`
  ),
  chips: publicSectorSection.challenges.barriers.map((b, i) =>
    chipFromBullet(b, i, "ps")
  ),
  accordions: [
    {
      id: "ps-usecases",
      title: "Use Cases",
      paragraphs: [publicSectorSection.useCasesTitle],
      bullets: publicSectorSection.table.map(
        (r) =>
          `${r.domain} | ${r.aiApplication} | ${r.operationalImpact}`
      ),
    },
    {
      id: "ps-challenges",
      title: "Architecture",
      paragraphs: [
        publicSectorSection.challenges.title,
        publicSectorSection.challenges.intro,
      ],
      bullets: [...publicSectorSection.challenges.barriers],
    },
    {
      id: "ps-barriers",
      title: "Implementation",
      paragraphs: [publicSectorSection.challenges.barriersTitle],
      bullets: [...publicSectorSection.challenges.barriers],
    },
    {
      id: "ps-security",
      title: "Security",
      paragraphs: publicSectorSection.challenges.barriers.filter((b) =>
        b.includes("Security") || b.includes("Privacy")
      ),
    },
    {
      id: "ps-biz",
      title: "Business Value",
      paragraphs: [publicSectorSection.description],
    },
  ],
  ctas: [{ label: "Public Sector Consultation", href: "/contact", primary: true }],
};

function infrastructureItem(
  panel: (typeof infrastructureSection.panels)[number]
): ProductCatalogItem {
  const allBullets = panel.subsections.flatMap((s) => s.bullets);
  return {
    id: `infra-${panel.id}`,
    title: panel.title,
    summary: panel.description.slice(0, 90) + (panel.description.length > 90 ? "…" : ""),
    icon:
      panel.id === "cloud"
        ? "cloud"
        : panel.id === "network"
          ? "network"
          : panel.id === "gcc"
            ? "globe"
            : panel.id === "bms"
              ? "building"
              : panel.id === "parking"
                ? "car"
                : "server",
    illustration: `infra-${panel.id}`,
    eyebrow: infrastructureSection.label,
    subtitle: panel.title,
    overview: [panel.description],
    chips: chipsFromBullets(allBullets, panel.id),
    timeline: panel.subsections.map((s) => ({
      title: s.title,
      text: s.intro,
    })),
    accordions: panel.subsections.map((sub, i) => ({
      id: `${panel.id}-sub-${i}`,
      title: sub.title,
      paragraphs: [sub.intro],
      bullets: sub.bullets.length ? [...sub.bullets] : undefined,
    })),
    deployment: allBullets.filter(
      (b) =>
        b.toLowerCase().includes("deploy") ||
        b.toLowerCase().includes("migration") ||
        b.toLowerCase().includes("provision")
    ),
    security: allBullets.filter(
      (b) =>
        b.toLowerCase().includes("security") ||
        b.toLowerCase().includes("zero-trust") ||
        b.toLowerCase().includes("ztna")
    ),
    businessOutcomes: [panel.description],
    ctas: [{ label: "Scope Infrastructure", href: "/contact", primary: true }],
  };
}

function industryOverviewItem(
  overview: (typeof industrySolutionsSection.overviews)[number]
): ProductCatalogItem {
  return {
    id: overview.id,
    title: overview.title,
    summary: overview.strategicOverview.text.slice(0, 88) + "…",
    icon: "heart-pulse",
    illustration: "industry",
    eyebrow: industrySolutionsSection.label,
    subtitle: industrySolutionsSection.subtitle,
    overview: [
      overview.strategicOverview.text,
      overview.businessValue.text,
    ],
    chips: overview.portfolio.items.map((item, i) => chipFromBullet(item, i, overview.id)),
    useCases: [...overview.portfolio.items],
    businessOutcomes: [overview.businessValue.text],
    accordions: [
      {
        id: `${overview.id}-strategic`,
        title: "Architecture",
        paragraphs: [
          `${overview.strategicOverview.title}: ${overview.strategicOverview.text}`,
        ],
      },
      {
        id: `${overview.id}-portfolio`,
        title: "Key Features",
        paragraphs: [overview.portfolio.title],
        bullets: [...overview.portfolio.items],
      },
      {
        id: `${overview.id}-deploy`,
        title: "Deployment",
        paragraphs: [overview.businessValue.text],
      },
      {
        id: `${overview.id}-biz`,
        title: "Business Value",
        paragraphs: [
          `${overview.businessValue.title}: ${overview.businessValue.text}`,
        ],
      },
    ],
    ctas: [{ label: "Industry Consultation", href: "/contact", primary: true }],
  };
}

function industryDetailedItem(
  detail: (typeof industrySolutionsSection.detailed)[number]
): ProductCatalogItem {
  const allBullets = [...detail.aiSolutions.items, ...detail.customDev.items];
  return {
    id: detail.id,
    title: detail.title,
    summary: detail.intro.slice(0, 88) + "…",
    icon: "briefcase",
    illustration: "industry-detail",
    eyebrow: industrySolutionsSection.detailedTitle,
    subtitle: detail.title,
    overview: [detail.intro],
    chips: allBullets.map((b, i) => chipFromBullet(b, i, detail.id)),
    accordions: [
      {
        id: `${detail.id}-ai`,
        title: "Architecture",
        paragraphs: [detail.aiSolutions.title],
        bullets: [...detail.aiSolutions.items],
      },
      {
        id: `${detail.id}-custom`,
        title: "Implementation",
        paragraphs: [detail.customDev.title],
        bullets: [...detail.customDev.items],
      },
      {
        id: `${detail.id}-deploy`,
        title: "Deployment",
        paragraphs: [detail.intro],
        bullets: [...detail.customDev.items],
      },
      {
        id: `${detail.id}-biz`,
        title: "Business Value",
        paragraphs: [detail.intro],
      },
    ],
    useCases: [...detail.aiSolutions.items],
    businessOutcomes: [detail.intro],
    ctas: [{ label: "Build Custom Solution", href: "/contact", primary: true }],
  };
}

const ctaItem: ProductCatalogItem = {
  id: "cta",
  title: "Get Started",
  summary: productsCta.description.slice(0, 80) + "…",
  icon: "arrow-right",
  illustration: "cta",
  eyebrow: productsCta.eyebrow,
  subtitle: productsCta.title,
  overview: [productsCta.description],
  chips: [],
  accordions: [],
  ctas: [
    { label: productsCta.primaryCta, href: productsCta.primaryHref, primary: true },
    { label: productsCta.secondaryCta, href: productsCta.secondaryHref },
  ],
};

export const productsCatalog: ProductCatalogItem[] = [
  ...flagshipItems,
  customCrmItem,
  genAiItem,
  softwareFactoryItem,
  missionCriticalItem,
  publicSectorItem,
  ...infrastructureSection.panels.map(infrastructureItem),
  ...industrySolutionsSection.overviews.map(industryOverviewItem),
  ...industrySolutionsSection.detailed.map(industryDetailedItem),
  ctaItem,
];

export const productsExplorerHero = productsHero;
