import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ServicePage from "@/app/component/service-page/ServicePage";
import { intelligentAutomationsContent } from "@/app/content/service-pages";

export const metadata: Metadata = {
  title: intelligentAutomationsContent.metadata.title,
  description: intelligentAutomationsContent.metadata.description,
};

export default function IntelligentAutomationsPage() {
  return (
    <SiteLayout>
      <ServicePage content={intelligentAutomationsContent} visual="automations" />
    </SiteLayout>
  );
}
