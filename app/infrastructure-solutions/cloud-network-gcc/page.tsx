import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ServicePage from "@/app/component/service-page/ServicePage";
import { cloudNetworkGccContent } from "@/app/content/infrastructure/cloud-network-gcc";

export const metadata: Metadata = {
  title: cloudNetworkGccContent.metadata.title,
  description: cloudNetworkGccContent.metadata.description,
};

export default function CloudNetworkGccPage() {
  return (
    <SiteLayout>
      <ServicePage content={cloudNetworkGccContent} visual="it" heroVisual={null} />
    </SiteLayout>
  );
}
