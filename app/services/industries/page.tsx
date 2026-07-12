import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import IndustriesPageClient from "@/app/component/industries-page/IndustriesPageClient";
import { industriesPageContent } from "@/app/content/industries-page-content";

export const metadata: Metadata = {
  title: industriesPageContent.metadata.title,
  description: industriesPageContent.metadata.description,
};

export default function IndustriesPage() {
  return (
    <SiteLayout>
      <IndustriesPageClient />
    </SiteLayout>
  );
}
