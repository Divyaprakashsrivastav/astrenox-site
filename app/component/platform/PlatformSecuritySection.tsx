"use client";

import { motion } from "framer-motion";
import { Shield, Lock, ScrollText, Server } from "lucide-react";
import PlatformSection from "./PlatformSection";
import { intelligencePlatform } from "@/app/content/platform-content";

const pillarIcons = [Shield, Lock, ScrollText, Server];

export default function PlatformSecuritySection() {
  const s = intelligencePlatform.security;

  return (
    <PlatformSection id={s.id} label={s.label} title={s.title} description={s.description}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {s.pillars.map((pillar, i) => {
          const Icon = pillarIcons[i] ?? Shield;
          return (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="enterprise-card p-5 flex gap-4"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-background border border-border flex items-center justify-center">
                <Icon size={18} className="text-primary" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-text">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{pillar.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-6 flex flex-wrap justify-center gap-3"
      >
        {s.certifications.map((cert) => (
          <li
            key={cert}
            className="text-xs font-medium px-4 py-2 rounded-full border border-border bg-card text-muted"
          >
            {cert}
          </li>
        ))}
      </motion.ul>
    </PlatformSection>
  );
}
