import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import IndustriesPageClient from "@/app/component/industries/IndustriesPageClient";
import { industriesContent } from "@/app/content/industries-content";

export const metadata: Metadata = {
  title: "Industries | Astrenox",
  description: industriesContent.intro.paragraphs[0],
};

export default function IndustriesPage() {
  return (
    <SiteLayout>
      <IndustriesPageClient />
    </SiteLayout>
  );
}
