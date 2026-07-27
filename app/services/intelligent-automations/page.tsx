import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const ServicePage = dynamic(() => import("@/components/service-page/ServicePage"));
import { intelligentAutomationsContent } from "@/app/content/service-pages";

export const metadata: Metadata = {
  title: intelligentAutomationsContent.metadata.title,
  description: intelligentAutomationsContent.metadata.description,
};

export default function IntelligentAutomationsPage() {
  return (
    <SiteLayout>
      <ServicePage content={intelligentAutomationsContent} visual="automations" heroVisual={null} />
    </SiteLayout>
  );
}
