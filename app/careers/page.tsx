import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const HireTechTalentPageClient = dynamic(() => import("@/components/hire-tech-talent/HireTechTalentPageClient"));
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
