import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const ServicePage = dynamic(() => import("@/components/service-page/ServicePage"));
import { enterpriseAiOpsContent } from "@/app/content/service-pages";

export const metadata: Metadata = {
  title: enterpriseAiOpsContent.metadata.title,
  description: enterpriseAiOpsContent.metadata.description,
};

export default function EnterpriseAiOpsPage() {
  return (
    <SiteLayout>
      <ServicePage content={enterpriseAiOpsContent} visual="aiOps" />
    </SiteLayout>
  );
}
