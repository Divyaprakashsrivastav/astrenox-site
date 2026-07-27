import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const ServicePage = dynamic(() => import("@/components/service-page/ServicePage"));
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
