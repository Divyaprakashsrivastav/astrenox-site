"use client";

import NexusCoreVisual from "./visuals/NexusCoreVisual";
import SynapseVisual from "./visuals/SynapseVisual";
import CodeForgeVisual from "./visuals/CodeForgeVisual";
import SovereignVisual from "./visuals/SovereignVisual";
import ClinicalVisual from "./visuals/ClinicalVisual";

export type ProjectVisualId =
  | "nexuscore"
  | "synapse"
  | "codeforge"
  | "sovereign"
  | "clinical";

interface ProjectCaseVisualProps {
  projectId: ProjectVisualId;
  active?: boolean;
}

const VISUALS = {
  nexuscore: NexusCoreVisual,
  synapse: SynapseVisual,
  codeforge: CodeForgeVisual,
  sovereign: SovereignVisual,
  clinical: ClinicalVisual,
} as const;

export default function ProjectCaseVisual({ projectId, active = false }: ProjectCaseVisualProps) {
  const Visual = VISUALS[projectId];
  return <Visual active={active} />;
}
