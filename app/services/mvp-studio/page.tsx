import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import MVPStudioPageClient from "@/app/component/mvp-studio/MVPStudioPageClient";
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
