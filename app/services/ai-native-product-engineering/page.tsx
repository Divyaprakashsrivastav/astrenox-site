import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import AINativeProductPageClient from "@/app/component/ai-native-product/AINativeProductPageClient";
import { aiNativeProductPageContent } from "@/app/content/ai-native-product-content";

export const metadata: Metadata = {
  title: "AI-Native Product Engineering | Astrenox",
  description: aiNativeProductPageContent.hero.description,
};

export default function AINativeProductEngineeringPage() {
  return (
    <SiteLayout>
      <AINativeProductPageClient />
    </SiteLayout>
  );
}
