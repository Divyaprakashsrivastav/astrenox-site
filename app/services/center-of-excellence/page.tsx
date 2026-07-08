import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ServicePage from "@/app/component/service-page/ServicePage";
import { centerOfExcellenceContent } from "@/app/content/service-pages";

export const metadata: Metadata = {
  title: centerOfExcellenceContent.metadata.title,
  description: centerOfExcellenceContent.metadata.description,
};

export default function CenterOfExcellencePage() {
  return (
    <SiteLayout>
      <ServicePage content={centerOfExcellenceContent} visual="coe" />
    </SiteLayout>
  );
}
