import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const EnterpriseCloudPageClient = dynamic(() => import("@/components/enterprise-cloud-page/EnterpriseCloudPageClient"));
import { enterpriseCloudPageContent } from "@/app/content/enterprise-cloud-page-content";

export const metadata: Metadata = {
  title: enterpriseCloudPageContent.metadata.title,
  description: enterpriseCloudPageContent.metadata.description,
};

export default function EnterpriseCloudManagedServicesPage() {
  return (
    <SiteLayout>
      <EnterpriseCloudPageClient />
    </SiteLayout>
  );
}
