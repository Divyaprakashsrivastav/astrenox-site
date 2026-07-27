import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const AIEngineeringPageClient = dynamic(() => import("@/components/ai-engineering/AIEngineeringPageClient"));
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
