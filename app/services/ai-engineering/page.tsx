import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ServicePage from "@/app/component/service-page/ServicePage";
import { aiEngineeringContent } from "@/app/content/service-pages";

export const metadata: Metadata = {
  title: aiEngineeringContent.metadata.title,
  description: aiEngineeringContent.metadata.description,
};

export default function AIEngineeringPage() {
  return (
    <SiteLayout>
      <ServicePage content={aiEngineeringContent} visual="aiEngineering" />
    </SiteLayout>
  );
}
