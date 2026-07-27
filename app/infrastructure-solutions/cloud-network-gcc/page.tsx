import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const ServicePage = dynamic(() => import("@/components/service-page/ServicePage"));
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
