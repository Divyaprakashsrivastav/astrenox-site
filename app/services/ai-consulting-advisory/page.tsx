import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ServicePage from "@/app/component/service-page/ServicePage";
import { aiConsultingAdvisoryContent } from "@/app/content/service-pages";

export const metadata: Metadata = {
  title: aiConsultingAdvisoryContent.metadata.title,
  description: aiConsultingAdvisoryContent.metadata.description,
};

export default function AIConsultingAdvisoryPage() {
  return (
    <SiteLayout>
      <ServicePage content={aiConsultingAdvisoryContent} visual="advisory" />
    </SiteLayout>
  );
}
