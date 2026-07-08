import type { ServicePageContent } from "./types";
import { chapter1ProductDevelopment } from "./ai-native-saas/chapter-1-product-development";
import { chapter2SupplyChain } from "./ai-native-saas/chapter-2-supply-chain";
import { chapter3PrivateEquity } from "./ai-native-saas/chapter-3-private-equity";
import { chapter4RfpIntelligence } from "./ai-native-saas/chapter-4-rfp-intelligence";
import { chapter5ConstructionErp } from "./ai-native-saas/chapter-5-construction-erp";

export const aiNativeSaasContent: ServicePageContent = {
  metadata: {
    title: "AI Native Services as a Software | Astrenox",
    description:
      "AI-native product development, supply chain execution, private equity intelligence, RFP automation, and construction ERP systems—engineered as deployable software inside your enterprise stack.",
  },
  hero: {
    label: "AI Native Services",
    title: "AI Native Services as a Software",
    subtitle: "",
    primaryCta: "Book a Discovery Session",
    secondaryCta: "Explore Section 1",
    primaryHref: "/contact",
    secondaryHref: "#section-1",
  },
  chapters: [
    chapter1ProductDevelopment,
    chapter2SupplyChain,
    chapter3PrivateEquity,
    chapter4RfpIntelligence,
    chapter5ConstructionErp,
  ],
};
