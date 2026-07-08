import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ServicePage from "@/app/component/service-page/ServicePage";
import { devOpsSecurityContent } from "@/app/content/service-pages";

export const metadata: Metadata = {
  title: devOpsSecurityContent.metadata.title,
  description: devOpsSecurityContent.metadata.description,
};

export default function DevOpsEnterpriseSecurityPage() {
  return (
    <SiteLayout>
      <ServicePage content={devOpsSecurityContent} visual="devops" />
    </SiteLayout>
  );
}
