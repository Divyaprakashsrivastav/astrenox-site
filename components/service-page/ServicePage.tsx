"use client";

import type { ComponentType } from "react";
import type { ServicePageChapter, ServicePageContent } from "@/app/content/service-pages/types";
import MVPStudioCanvas from "../mvp-studio/MVPStudioCanvas";
import ServicePageHero from "./ServicePageHero";
import ServicePageSections from "./ServicePageSections";
import ServicePageChapterSections from "./ServicePageChapterSections";
import type { HeroVisualVariant } from "./hero-visual-configs";

type WorkflowSection = NonNullable<ServicePageContent["workflow"]>;
type CapabilitiesSection = NonNullable<ServicePageContent["capabilities"]>;
type OverviewSection = NonNullable<ServicePageContent["overview"]>;
type ServiceOfferingsSection = NonNullable<ServicePageContent["serviceOfferings"]>;

function isSimpleLeadChapter(chapter?: ServicePageChapter) {
  const overview = chapter?.overview;
  if (!chapter || !overview?.paragraphs?.length) return false;
  return !overview.layout;
}

type ServicePageProps = {
  content: ServicePageContent;
  visual: HeroVisualVariant;
  HeroComponent?: ComponentType<{ hero: ServicePageContent["hero"] }>;
  OverviewComponent?: ComponentType<{ overview: OverviewSection }>;
  WorkflowComponent?: ComponentType<{ workflow: WorkflowSection }>;
  CapabilitiesComponent?: ComponentType<{ capabilities: CapabilitiesSection }>;
  ServiceOfferingsComponent?: ComponentType<{ serviceOfferings: ServiceOfferingsSection }>;
  heroVisual?: ComponentType | null;
  heroAmbient?: ComponentType;
  heroSectionClassName?: string;
};

export default function ServicePage({
  content,
  visual,
  HeroComponent,
  OverviewComponent,
  WorkflowComponent,
  CapabilitiesComponent,
  ServiceOfferingsComponent,
  heroVisual,
  heroAmbient,
  heroSectionClassName,
}: ServicePageProps) {
  const leadChapter = isSimpleLeadChapter(content.chapters?.[0])
    ? content.chapters?.[0]
    : undefined;

  return (
    <MVPStudioCanvas>
      {HeroComponent ? (
        <HeroComponent hero={content.hero} />
      ) : (
        <ServicePageHero
          hero={content.hero}
          intro={content.intro}
          visual={visual}
          HeroVisualComponent={heroVisual}
          HeroAmbientComponent={heroAmbient}
          heroSectionClassName={heroSectionClassName}
          leadChapter={leadChapter}
        />
      )}
      {content.chapters ? (
        <ServicePageChapterSections
          chapters={content.chapters}
          omitFirstIntro={Boolean(leadChapter)}
        />
      ) : (
        <ServicePageSections
          content={content}
          OverviewComponent={OverviewComponent}
          WorkflowComponent={WorkflowComponent}
          CapabilitiesComponent={CapabilitiesComponent}
          ServiceOfferingsComponent={ServiceOfferingsComponent}
        />
      )}
    </MVPStudioCanvas>
  );
}
