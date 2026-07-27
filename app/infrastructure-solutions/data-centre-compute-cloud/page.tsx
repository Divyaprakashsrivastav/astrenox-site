import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const ServicePage = dynamic(() => import("@/components/service-page/ServicePage"));
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
