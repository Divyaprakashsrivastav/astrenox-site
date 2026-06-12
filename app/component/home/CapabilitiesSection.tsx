"use client";

import { useState } from "react";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import { Stagger, StaggerItem } from "../design/FadeUp";
import CapabilityCard from "../capabilities/CapabilityCard";
import { AISystemsVisual } from "../features/visuals/AISystemsVisual";
import { DroneVisual } from "../features/visuals/DroneVisual";
import { RoboticsVisual } from "../features/visuals/RoboticsVisual";
import { AerospaceVisual } from "../features/visuals/AerospaceVisual";
import { useReducedMotion } from "../features/useReducedMotion";
import { homeCapabilities } from "@/app/content/homepage-content";

const VISUALS = {
  "enterprise-ai": AISystemsVisual,
  drones: DroneVisual,
  robotics: RoboticsVisual,
  aerospace: AerospaceVisual,
} as const;

export default function CapabilitiesSection() {
  const [active, setActive] = useState<string | null>(null);
  const reduced = useReducedMotion();

  return (
    <DesignSection id="capabilities" ambient="alt">
      <DesignHeader
        label={homeCapabilities.label}
        title={homeCapabilities.title}
        description={homeCapabilities.description}
      />
      <Stagger className="ax-cap-grid ax-cap-grid-premium">
        {homeCapabilities.items.map((cap) => {
          const Visual = VISUALS[cap.id];
          const isActive = active === cap.id;
          return (
            <StaggerItem key={cap.id}>
              <CapabilityCard
                title={cap.title}
                description={cap.description}
                metrics={cap.metrics}
                active={isActive}
                reduced={reduced}
                onEnter={() => setActive(cap.id)}
                onLeave={() => setActive(null)}
                visual={
                  <Visual active={isActive} reducedMotion={reduced} />
                }
              />
            </StaggerItem>
          );
        })}
      </Stagger>
    </DesignSection>
  );
}
