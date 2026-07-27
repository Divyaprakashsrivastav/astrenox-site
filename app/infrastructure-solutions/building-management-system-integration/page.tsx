import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const BmsPageClient = dynamic(() => import("@/components/bms-page/BmsPageClient"));
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
