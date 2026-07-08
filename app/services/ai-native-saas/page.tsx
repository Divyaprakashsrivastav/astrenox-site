import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ServicePage from "@/app/component/service-page/ServicePage";
import { aiNativeSaasContent } from "@/app/content/service-pages";

export const metadata: Metadata = {
  title: aiNativeSaasContent.metadata.title,
  description: aiNativeSaasContent.metadata.description,
};

export default function AINativeSaasPage() {
  return (
    <SiteLayout>
      <ServicePage content={aiNativeSaasContent} visual="saas" />
    </SiteLayout>
  );
}
