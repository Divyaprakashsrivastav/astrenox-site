import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import AIEngineeringPageClient from "@/app/component/ai-engineering/AIEngineeringPageClient";
import { aiEngineeringPageContent } from "@/app/content/ai-engineering-content";

export const metadata: Metadata = {
  title: aiEngineeringPageContent.metadata.title,
  description: aiEngineeringPageContent.metadata.description,
};

export default function AIEngineeringPage() {
  return (
    <SiteLayout>
      <AIEngineeringPageClient />
    </SiteLayout>
  );
}
