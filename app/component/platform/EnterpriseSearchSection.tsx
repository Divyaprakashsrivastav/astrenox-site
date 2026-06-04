"use client";

import { motion } from "framer-motion";
import { Search, FileText, Database } from "lucide-react";
import PlatformSection from "./PlatformSection";
import { intelligencePlatform } from "@/app/content/platform-content";

const sourceIcons: Record<string, typeof Search> = {
  google: Search,
  microsoft: Search,
  slack: Search,
  jira: FileText,
  confluence: FileText,
  notion: FileText,
  databases: Database,
};

export default function EnterpriseSearchSection() {
  const s = intelligencePlatform.enterpriseSearch;

  return (
    <PlatformSection id={s.id} label={s.label} title={s.title} description={s.description}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 premium-card p-5 lg:p-6 platform-search-console"
        >
          <div className="flex items-center gap-2 mb-4">
            <Search size={18} className="text-primary" strokeWidth={2} />
            <span className="text-sm font-medium text-text">Unified enterprise search</span>
          </div>
          <div className="platform-search-input-wrap">
            <motion.span
              className="platform-search-cursor"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              aria-hidden
            />
            <p className="text-sm text-muted leading-relaxed pr-2">{s.queryPlaceholder}</p>
          </div>
          <motion.div
            className="mt-4 space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {[
              "3 cited answers from Slack · Jira · Confluence",
              "Permission scope: Engineering leadership",
            ].map((line) => (
              <p key={line} className="text-xs text-muted flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-secondary" />
                {line}
              </p>
            ))}
          </motion.div>
        </motion.div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          <ul className="space-y-2">
            {s.capabilities.map((cap, i) => (
              <motion.li
                key={cap}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="text-sm text-muted flex gap-2"
              >
                <span className="text-primary font-medium shrink-0">→</span>
                {cap}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
      >
        {s.sources.map((source, i) => {
          const Icon = sourceIcons[source.id] ?? Search;
          return (
            <motion.article
              key={source.id}
              whileHover={{ y: -2 }}
              className="premium-card p-4 platform-source-card"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center mb-3">
                <Icon size={16} className="text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-sm font-semibold text-text">{source.name}</h3>
              <p className="text-[11px] text-muted mt-1">{source.category}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </PlatformSection>
  );
}
