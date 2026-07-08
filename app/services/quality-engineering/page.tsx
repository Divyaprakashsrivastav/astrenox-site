import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ServicePage from "@/app/component/service-page/ServicePage";
import { qualityEngineeringContent } from "@/app/content/service-pages";

export const metadata: Metadata = {
  title: qualityEngineeringContent.metadata.title,
  description: qualityEngineeringContent.metadata.description,
};

export default function QualityEngineeringPage() {
  return (
    <SiteLayout>
      <ServicePage content={qualityEngineeringContent} visual="quality" />
    </SiteLayout>
  );
}
