"use client";

import type { ComponentType } from "react";
import type { ServicePageContent } from "@/app/content/service-pages/types";
import MVPStudioCanvas from "../mvp-studio/MVPStudioCanvas";
import ServicePageHero from "./ServicePageHero";
import ServicePageSections from "./ServicePageSections";
import ServicePageChapterSections from "./ServicePageChapterSections";
import type { HeroVisualVariant } from "./hero-visual-configs";

type WorkflowSection = NonNullable<ServicePageContent["workflow"]>;
type CapabilitiesSection = NonNullable<ServicePageContent["capabilities"]>;
type OverviewSection = NonNullable<ServicePageContent["overview"]>;
type ServiceOfferingsSection = NonNullable<ServicePageContent["serviceOfferings"]>;

type ServicePageProps = {
  content: ServicePageContent;
  visual: HeroVisualVariant;
  HeroComponent?: ComponentType<{ hero: ServicePageContent["hero"] }>;
  OverviewComponent?: ComponentType<{ overview: OverviewSection }>;
  WorkflowComponent?: ComponentType<{ workflow: WorkflowSection }>;
  CapabilitiesComponent?: ComponentType<{ capabilities: CapabilitiesSection }>;
  ServiceOfferingsComponent?: ComponentType<{ serviceOfferings: ServiceOfferingsSection }>;
  heroVisual?: ComponentType;
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
  return (
    <MVPStudioCanvas>
      {HeroComponent ? (
        <HeroComponent hero={content.hero} />
      ) : (
        <ServicePageHero
          hero={content.hero}
          visual={visual}
          HeroVisualComponent={heroVisual}
          HeroAmbientComponent={heroAmbient}
          heroSectionClassName={heroSectionClassName}
        />
      )}
      {content.chapters ? (
        <ServicePageChapterSections chapters={content.chapters} />
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
