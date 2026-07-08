import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ServicePage from "@/app/component/service-page/ServicePage";
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
