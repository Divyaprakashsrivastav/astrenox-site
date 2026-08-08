"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Gauge,
  Search,
  Database,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { ServicePageContent } from "@/app/content/service-pages/types";
import FormattedText from "../ui/FormattedText";
import { EASE_PREMIUM } from "../v2/motion";

type ServiceOfferingsSection = NonNullable<ServicePageContent["serviceOfferings"]>;

const SERVICE_ICONS: LucideIcon[] = [Compass, Gauge, Search, Database, ShieldCheck];

function OfferingRow({
  item,
  index,
}: {
  item: ServiceOfferingsSection["items"][number];
  index: number;
}) {
  const Icon = SERVICE_ICONS[index] ?? Compass;

  return (
    <motion.article
      className="adv-offering-row"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE_PREMIUM }}
    >
      <div className="adv-offering-row-edge" aria-hidden>
        <span className="adv-offering-row-progress" />
        <span className="adv-offering-row-accent" />
      </div>

      <div className="adv-offering-row-body">
        <div className="adv-offering-row-head">
          <span className="adv-offering-row-icon">
            <Icon size={16} strokeWidth={1.65} aria-hidden />
          </span>
          <h3>{item.service}</h3>
        </div>
        <p>
          <FormattedText text={item.outcome} />
        </p>
      </div>

      <span className="adv-offering-row-sweep" aria-hidden />
    </motion.article>
  );
}

function AdvisoryServiceOfferings({
  serviceOfferings,
}: {
  serviceOfferings: ServiceOfferingsSection;
}) {
  return (
    <section
      className="adv-offerings"
      aria-labelledby="adv-offerings-title"
    >
      <div className="adv-offerings-bg" aria-hidden>
        <div className="adv-offerings-bg-glow" />
        <div className="adv-offerings-bg-noise" />
        {Array.from({ length: 4 }, (_, i) => (
          <span
            key={i}
            className="adv-offerings-bg-particle"
            style={{
              left: `${(i * 19 + 6) % 92}%`,
              top: `${(i * 23 + 12) % 85}%`,
              animationDelay: `${i * 0.85}s`,
              animationDuration: `${9 + (i % 3) * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="mvp-inner adv-offerings-inner">
        <header className="adv-offerings-header">
          {serviceOfferings.label ? (
            <p className="mvp-eyebrow">{serviceOfferings.label}</p>
          ) : null}
          <h2 id="adv-offerings-title" className="mvp-section-title">
            {serviceOfferings.title}
          </h2>
          {serviceOfferings.intro ? (
            <p className="mvp-section-intro"><FormattedText text={serviceOfferings.intro} /></p>
          ) : null}
        </header>

        <div className="adv-offerings-list">
          {serviceOfferings.items.map((item, index) => (
            <OfferingRow key={item.service} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(AdvisoryServiceOfferings);
