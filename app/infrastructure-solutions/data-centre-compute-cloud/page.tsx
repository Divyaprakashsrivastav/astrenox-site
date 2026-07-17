import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ServicePage from "@/app/component/service-page/ServicePage";
import { dataCentreComputeCloudContent } from "@/app/content/infrastructure/data-centre-compute-cloud";

export const metadata: Metadata = {
  title: dataCentreComputeCloudContent.metadata.title,
  description: dataCentreComputeCloudContent.metadata.description,
};

export default function DataCentreComputeCloudPage() {
  return (
    <SiteLayout>
      <ServicePage content={dataCentreComputeCloudContent} visual="devops" heroVisual={null} />
    </SiteLayout>
  );
}
