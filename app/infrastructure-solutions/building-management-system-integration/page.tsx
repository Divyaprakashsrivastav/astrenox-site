import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import BmsPageClient from "@/app/component/bms-page/BmsPageClient";
import { bmsPageContent } from "@/app/content/bms-page-content";

export const metadata: Metadata = {
  title: bmsPageContent.metadata.title,
  description: bmsPageContent.metadata.description,
};

export default function BuildingManagementSystemIntegrationPage() {
  return (
    <SiteLayout>
      <BmsPageClient />
    </SiteLayout>
  );
}
