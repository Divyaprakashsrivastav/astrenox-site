import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ITServicesPageClient from "@/app/component/it-services/ITServicesPageClient";
import { itServicesPageContent } from "@/app/content/it-services-content";

export const metadata: Metadata = {
  title: "IT Services & Consulting | Astrenox",
  description: itServicesPageContent.hero.description,
};

export default function ITServicesPage() {
  return (
    <SiteLayout>
      <ITServicesPageClient />
    </SiteLayout>
  );
}
