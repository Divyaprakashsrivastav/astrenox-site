"use client";

import { memo } from "react";
import type { ServicePageContent } from "@/app/content/service-pages/types";
import StrategyJourneyTimeline from "../service-page/StrategyJourneyTimeline";

type WorkflowSection = NonNullable<ServicePageContent["workflow"]>;

function AdvisoryStrategyJourney({ workflow }: { workflow: WorkflowSection }) {
  return (
    <StrategyJourneyTimeline
      id={workflow.id}
      label={workflow.label}
      title={workflow.title}
      intro={workflow.intro}
      steps={workflow.steps}
      titleId="adv-journey-title"
    />
  );
}

export default memo(AdvisoryStrategyJourney);
