import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ServicePage from "@/app/component/service-page/ServicePage";
import { bmsSmartParkingContent } from "@/app/content/infrastructure/bms-smart-parking";

export const metadata: Metadata = {
  title: bmsSmartParkingContent.metadata.title,
  description: bmsSmartParkingContent.metadata.description,
};

export default function BmsSmartParkingPage() {
  return (
    <SiteLayout>
      <ServicePage content={bmsSmartParkingContent} visual="coe" heroVisual={null} />
    </SiteLayout>
  );
}
