import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const ServicePage = dynamic(() => import("@/components/service-page/ServicePage"));
import { aiTransformationContent } from "@/app/content/service-pages";

export const metadata: Metadata = {
  title: aiTransformationContent.metadata.title,
  description: aiTransformationContent.metadata.description,
};

export default function AITransformationPage() {
  return (
    <SiteLayout>
      <ServicePage content={aiTransformationContent} visual="aiTransformation" />
    </SiteLayout>
  );
}
