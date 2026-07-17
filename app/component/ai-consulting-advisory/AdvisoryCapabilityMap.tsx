"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import type { ServicePageContent, ServiceIconName } from "@/app/content/service-pages/types";
import { SERVICE_ICONS } from "../service-page/service-icons";
import { EASE_PREMIUM } from "../v2/motion";

type CapabilitiesSection = NonNullable<ServicePageContent["capabilities"]>;

function CapabilityCard({
  item,
  index,
}: {
  item: CapabilitiesSection["items"][number];
  index: number;
}) {
  const Icon = SERVICE_ICONS[item.icon as ServiceIconName];
  const body = item.paragraphs ?? (item.description ? [item.description] : []);

  return (
    <motion.article
      className="adv-cap-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE_PREMIUM }}
    >
      <div className="adv-cap-card-sweep" aria-hidden />

      <div className="adv-cap-card-icon">
        <Icon size={28} strokeWidth={1.5} aria-hidden />
      </div>

      <span className="adv-cap-card-accent" aria-hidden />

      <h3>{item.title}</h3>
      {body.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}

      {item.enables && item.enables.length > 0 && (
        <div className="adv-cap-card-enables">
          <p className="adv-cap-card-enables-label">What it enables:</p>
          <ul>
            {item.enables.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </div>
      )}

      <span className="adv-cap-card-indicator" aria-hidden />
    </motion.article>
  );
}

function AdvisoryCapabilityMap({ capabilities }: { capabilities: CapabilitiesSection }) {
  return (
    <section
      id={capabilities.id}
      className="adv-cap-section"
      aria-labelledby="adv-cap-section-title"
    >
      <div className="adv-cap-section-bg" aria-hidden>
        <div className="adv-cap-section-bg-gradient" />
        <div className="adv-cap-section-bg-grid" />
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className="adv-cap-section-bg-particle"
            style={{
              left: `${(i * 17 + 8) % 92}%`,
              top: `${(i * 23 + 14) % 84}%`,
              animationDelay: `${i * 0.9}s`,
              animationDuration: `${8 + (i % 3) * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="mvp-inner adv-cap-section-inner">
        <header className="adv-cap-section-header">
          {capabilities.label ? <p className="mvp-eyebrow">{capabilities.label}</p> : null}
          <h2 id="adv-cap-section-title" className="mvp-section-title">
            {capabilities.title}
          </h2>
          {capabilities.intro ? <p className="mvp-section-intro">{capabilities.intro}</p> : null}
        </header>

        <div className="adv-cap-grid">
          {capabilities.items.map((item, index) => (
            <CapabilityCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(AdvisoryCapabilityMap);
