import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const MVPStudioPageClient = dynamic(() => import("@/components/mvp-studio/MVPStudioPageClient"));
import { mvpStudioContent } from "@/app/content/mvp-studio-content";

export const metadata: Metadata = {
  title: "MVP Studio | Astrenox",
  description: mvpStudioContent.hero.description,
};

export default function MVPStudioPage() {
  return (
    <SiteLayout>
      <MVPStudioPageClient />
    </SiteLayout>
  );
}
