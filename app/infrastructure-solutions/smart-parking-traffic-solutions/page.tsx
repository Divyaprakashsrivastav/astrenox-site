import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import SptpPageClient from "@/app/component/smart-parking-page/SptpPageClient";
import { smartParkingPageContent } from "@/app/content/smart-parking-page-content";

export const metadata: Metadata = {
  title: smartParkingPageContent.metadata.title,
  description: smartParkingPageContent.metadata.description,
};

export default function SmartParkingTrafficSolutionsPage() {
  return (
    <SiteLayout>
      <SptpPageClient />
    </SiteLayout>
  );
}
