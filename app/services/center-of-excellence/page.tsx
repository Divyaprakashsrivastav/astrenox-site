import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import CenterOfExcellencePageClient from "@/app/component/center-of-excellence/CenterOfExcellencePageClient";
import { centerOfExcellencePageContent } from "@/app/content/center-of-excellence-content";

export const metadata: Metadata = {
  title: "Center of Excellence (CoE) | Astrenox",
  description: centerOfExcellencePageContent.hero.lead,
};

export default function CenterOfExcellencePage() {
  return (
    <SiteLayout>
      <CenterOfExcellencePageClient />
    </SiteLayout>
  );
}
