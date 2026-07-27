import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const ITServicesPageClient = dynamic(() => import("@/components/it-services/ITServicesPageClient"));
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
