import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ServicePage from "@/app/component/service-page/ServicePage";
import { aiNativeProductContent } from "@/app/content/service-pages";

export const metadata: Metadata = {
  title: aiNativeProductContent.metadata.title,
  description: aiNativeProductContent.metadata.description,
};

export default function AINativeProductEngineeringPage() {
  return (
    <SiteLayout>
      <ServicePage content={aiNativeProductContent} visual="aiProduct" />
    </SiteLayout>
  );
}
