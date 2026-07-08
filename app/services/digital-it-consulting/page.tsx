import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ServicePage from "@/app/component/service-page/ServicePage";
import { itServicesContent } from "@/app/content/service-pages";

export const metadata: Metadata = {
  title: itServicesContent.metadata.title,
  description: itServicesContent.metadata.description,
};

export default function ITServicesPage() {
  return (
    <SiteLayout>
      <ServicePage content={itServicesContent} visual="it" />
    </SiteLayout>
  );
}
