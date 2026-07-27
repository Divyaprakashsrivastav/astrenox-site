import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const ServicePage = dynamic(() => import("@/components/service-page/ServicePage"));
import { aiNativeSaasContent } from "@/app/content/service-pages";

export const metadata: Metadata = {
  title: aiNativeSaasContent.metadata.title,
  description: aiNativeSaasContent.metadata.description,
};

export default function AINativeSaasPage() {
  return (
    <SiteLayout>
      <ServicePage content={aiNativeSaasContent} visual="saas" heroVisual={null} />
    </SiteLayout>
  );
}
