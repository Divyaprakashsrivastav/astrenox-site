"use client";

import { memo } from "react";
import type { ServicePageContent } from "@/app/content/service-pages/types";
import StrategyJourneyTimeline from "../service-page/StrategyJourneyTimeline";

type WorkflowSection = NonNullable<ServicePageContent["workflow"]>;
type ServiceOfferingsSection = NonNullable<ServicePageContent["serviceOfferings"]>;

export function TransformationWorkflowJourney({
  workflow,
}: {
  workflow: WorkflowSection;
}) {
  return (
    <StrategyJourneyTimeline
      id={workflow.id}
      label={workflow.label}
      title={workflow.title}
      intro={workflow.intro}
      steps={workflow.steps}
      titleId="service-workflow-title"
    />
  );
}

export function TransformationRoadmapJourney({
  serviceOfferings,
}: {
  serviceOfferings: ServiceOfferingsSection;
}) {
  return (
    <StrategyJourneyTimeline
      id="transformation-roadmap"
      label={serviceOfferings.label}
      title={serviceOfferings.title}
      intro={serviceOfferings.intro}
      titleId="service-offerings-title"
      steps={serviceOfferings.items.map((item) => ({
        name: item.service,
        description: item.outcome,
      }))}
    />
  );
}

export default memo(TransformationWorkflowJourney);
