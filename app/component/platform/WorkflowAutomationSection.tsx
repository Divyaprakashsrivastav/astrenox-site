"use client";

import { motion } from "framer-motion";
import { Factory, Plane, Rocket, Bot, BrainCircuit } from "lucide-react";
import PlatformSection from "./PlatformSection";
import { intelligencePlatform } from "@/app/content/platform-content";

const useCaseIcons = {
  manufacturing: Factory,
  drones: Plane,
  aerospace: Rocket,
  robotics: Bot,
  decision: BrainCircuit,
} as const;

export default function WorkflowAutomationSection() {
  const s = intelligencePlatform.workflowAutomation;

  return (
    <PlatformSection
      id={s.id}
      label={s.label}
      title={s.title}
      description={s.description}
      variant="muted"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {s.useCases.map((uc, i) => {
          const Icon = useCaseIcons[uc.id as keyof typeof useCaseIcons] ?? Factory;
          return (
            <motion.article
              key={uc.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`premium-card p-5 ${uc.id === "decision" ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center">
                  <Icon size={18} className="text-primary" strokeWidth={2} />
                </div>
                <span className="text-xs font-semibold text-primary">{uc.metric}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-text">{uc.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{uc.description}</p>
            </motion.article>
          );
        })}
      </div>
    </PlatformSection>
  );
}
