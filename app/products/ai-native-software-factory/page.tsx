import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import SoftwareFactoryPageClient from "@/app/component/software-factory/SoftwareFactoryPageClient";
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
