import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import MVPStudioCanvas from "@/app/component/mvp-studio/MVPStudioCanvas";
import MVPStudioHero from "@/app/component/mvp-studio/MVPStudioHero";
import MVPStudioSections from "@/app/component/mvp-studio/MVPStudioSections";
import { mvpStudioContent } from "@/app/content/mvp-studio-content";

export const metadata: Metadata = {
  title: "MVP Studio | Astrenox",
  description: mvpStudioContent.hero.subtitle,
};

export default function MVPStudioPage() {
  return (
    <SiteLayout>
      <MVPStudioCanvas>
        <MVPStudioHero />
        <MVPStudioSections />
      </MVPStudioCanvas>
    </SiteLayout>
  );
}
