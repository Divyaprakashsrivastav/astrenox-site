"use client";

import { motion } from "framer-motion";
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
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="premium-card p-5 platform-agent-card group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                  <Icon size={18} className="text-primary" strokeWidth={2} />
                </div>
                <span className="platform-agent-pulse text-[10px] font-medium uppercase tracking-wider text-muted">
                  Agent
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-text">{agent.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{agent.description}</p>
              <div className="mt-4 h-1 rounded-full bg-border overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "72%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.05 }}
                />
              </div>
            </motion.article>
          );
        })}
      </div>
    </PlatformSection>
  );
}
