import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ServicePage from "@/app/component/service-page/ServicePage";
import { computerVisionContent } from "@/app/content/service-pages";

export const metadata: Metadata = {
  title: computerVisionContent.metadata.title,
  description: computerVisionContent.metadata.description,
};

export default function ComputerVisionPage() {
  return (
    <SiteLayout>
      <ServicePage content={computerVisionContent} visual="vision" heroVisual={null} />
    </SiteLayout>
  );
}
