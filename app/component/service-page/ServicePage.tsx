"use client";

import type { ServicePageContent } from "@/app/content/service-pages/types";
import MVPStudioCanvas from "../mvp-studio/MVPStudioCanvas";
import ServicePageHero from "./ServicePageHero";
import ServicePageSections from "./ServicePageSections";
import type { HeroVisualVariant } from "./hero-visual-configs";

type ServicePageProps = {
  content: ServicePageContent;
  visual: HeroVisualVariant;
};

export default function ServicePage({ content, visual }: ServicePageProps) {
  return (
    <MVPStudioCanvas>
      <ServicePageHero hero={content.hero} visual={visual} />
      <ServicePageSections content={content} />
    </MVPStudioCanvas>
  );
}
