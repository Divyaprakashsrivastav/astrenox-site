import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ReadyToDeployPageClient from "@/app/component/products/ReadyToDeployPageClient";
import { readyToDeployContent } from "@/app/content/products/ready-to-deploy-content";

export const metadata: Metadata = {
  title: readyToDeployContent.metadata.title,
  description: readyToDeployContent.metadata.description,
};

export default function ReadyToDeployPage() {
  return (
    <SiteLayout>
      <ReadyToDeployPageClient />
    </SiteLayout>
  );
}
