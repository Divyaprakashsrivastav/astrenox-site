import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import QualityEngineeringPageClient from "@/app/component/quality-engineering/QualityEngineeringPageClient";
import { qualityEngineeringPageContent } from "@/app/content/quality-engineering-content";

export const metadata: Metadata = {
  title: "Quality Engineering & Software Testing | Astrenox",
  description: qualityEngineeringPageContent.hero.description,
};

export default function QualityEngineeringPage() {
  return (
    <SiteLayout>
      <QualityEngineeringPageClient />
    </SiteLayout>
  );
}
