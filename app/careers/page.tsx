import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import HireTechTalentPageClient from "@/app/component/hire-tech-talent/HireTechTalentPageClient";
import { hireTechTalentPageContent } from "@/app/content/hire-tech-talent-content";

export const metadata: Metadata = {
  title: "Hire Tech Talent & Embedded Teams | Astrenox",
  description: hireTechTalentPageContent.hero.description,
};

export default function HireTechTalentPage() {
  return (
    <SiteLayout>
      <HireTechTalentPageClient />
    </SiteLayout>
  );
}
