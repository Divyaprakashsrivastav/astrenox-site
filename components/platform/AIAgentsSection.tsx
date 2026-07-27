"use client";

import { motion } from "framer-motion";
import FormattedText from "../ui/FormattedText";
import {
  BookOpen,
  Microscope,
  Workflow,
  BarChart3,
  FileBarChart,
  Cog,
  type LucideIcon,
} from "lucide-react";
import PlatformSection from "./PlatformSection";
import { intelligencePlatform } from "@/app/content/platform-content";

const agentIcons: Record<string, LucideIcon> = {
  retrieval: BookOpen,
  research: Microscope,
  workflow: Workflow,
  analysis: BarChart3,
  reporting: FileBarChart,
  automation: Cog,
};

export default function AIAgentsSection() {
  const s = intelligencePlatform.aiAgents;

  return (
    <PlatformSection id={s.id} label={s.label} title={s.title} description={s.description}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {s.agents.map((agent, i) => {
          const Icon = agentIcons[agent.id] ?? Cog;
          return (
            <motion.article
              key={agent.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="enterprise-card p-5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center">
                  <Icon size={18} className="text-primary" strokeWidth={2} />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted">
                  Agent
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-text">{agent.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed"><FormattedText text={agent.description} /></p>
            </motion.article>
          );
        })}
      </div>
    </PlatformSection>
  );
}
