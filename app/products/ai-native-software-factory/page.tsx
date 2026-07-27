import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const SoftwareFactoryPageClient = dynamic(() => import("@/components/software-factory/SoftwareFactoryPageClient"));
import { softwareFactoryContent } from "@/app/content/software-factory-content";

export const metadata: Metadata = {
  title: softwareFactoryContent.metadata.title,
  description: softwareFactoryContent.metadata.description,
};

export default function SoftwareFactoryPage() {
  return (
    <SiteLayout>
      <SoftwareFactoryPageClient />
    </SiteLayout>
  );
}
