import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import WhitelabelCommercePageClient from "@/app/component/whitelabel-commerce/WhitelabelCommercePageClient";
import { whitelabelCommerceContent } from "@/app/content/whitelabel-commerce-content";

export const metadata: Metadata = {
  title: whitelabelCommerceContent.metadata.title,
  description: whitelabelCommerceContent.metadata.description,
};

export default function WhitelabelCommercePlatformsPage() {
  return (
    <SiteLayout>
      <WhitelabelCommercePageClient />
    </SiteLayout>
  );
}
