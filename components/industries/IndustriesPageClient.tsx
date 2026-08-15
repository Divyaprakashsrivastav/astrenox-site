"use client";

import { motion } from "framer-motion";
import FormattedText from "../ui/FormattedText";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industriesContent } from "@/app/content/industries-content";
import type { ServiceIconName } from "@/app/content/service-pages/types";
import { isActionableCtaHref } from "@/lib/cta";
import MVPStudioCanvas from "../mvp-studio/MVPStudioCanvas";
import GradientHeadline from "../ui/GradientHeadline";
import StackCarousel3D from "../service-page/StackCarousel3D";
import StrategyJourneyTimeline from "../service-page/StrategyJourneyTimeline";
import { EASE_PREMIUM } from "../v2/motion";
import IndustriesSectorShowcase from "./IndustriesSectorShowcase";
import "../mvp-studio/mvp-studio.css";
import "../service-page/service-page-extra.css";
import "./industries-page.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: EASE_PREMIUM },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const DELIVERY_CAPABILITY_ICONS: ServiceIconName[] = [
  "Target",
  "Workflow",
  "Code",
  "Rocket",
  "Layers",
  "Users",
  "Server",
];

export default function IndustriesPageClient() {
  const { hero, intro, transformationModel, deliveryCapabilities, cta } = industriesContent;

  return (
    <MVPStudioCanvas>
      {/* Hero */}
      <section
        className="mvp-inner mvp-hero-section mvp-hero-section--copy-only"
        aria-labelledby="ind-hero-title"
      >
        <motion.div
          className="mvp-hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          <p className="mvp-hero-label">{hero.label}</p>
          <GradientHeadline id="ind-hero-title" className="mvp-hero-headline">
            {hero.title}
          </GradientHeadline>

          <div className="mvp-hero-intro">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}><FormattedText text={paragraph} /></p>
            ))}
          </div>

          <div className="mvp-hero-ctas">
            <Link href={hero.primaryHref} className="mvp-btn-primary">
              {hero.primaryCta}
              <ArrowRight size={16} aria-hidden />
            </Link>
            {hero.secondaryCta && isActionableCtaHref(hero.secondaryHref) ? (
              <Link href={hero.secondaryHref} className="mvp-btn-secondary">
                {hero.secondaryCta}
              </Link>
            ) : null}
          </div>
        </motion.div>
      </section>

      {/* Transformation Model */}
      <StrategyJourneyTimeline
        id={transformationModel.id}
        label={transformationModel.label}
        title={transformationModel.title}
        steps={transformationModel.steps}
        titleId="ind-model-title"
      />

      <section
        className="mvp-inner mvp-section ind-page-pillars-section"
        aria-label="Transformation pillars"
      >
        <motion.div
          className="ind-page-pillars"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {transformationModel.pillars.map((pillar, i) => (
            <motion.article
              key={pillar.title}
              className="mvp-glass-card ind-page-pillar"
              custom={i}
              variants={fadeUp}
            >
              <h3>{pillar.title}</h3>
              <p>
                <FormattedText text={pillar.description} />
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Industry Sectors */}
      <div className="mvp-inner mvp-section ind-page-sectors-wrap">
        <IndustriesSectorShowcase />
      </div>

      {/* Delivery Capabilities */}
      <section className="mvp-inner mvp-section" aria-label={deliveryCapabilities.label}>
        <div className="mvp-section-header">
          <p className="mvp-eyebrow">{deliveryCapabilities.label}</p>
          <p className="mvp-section-intro"><FormattedText text={deliveryCapabilities.intro} /></p>
        </div>

        <StackCarousel3D
          variant="grid"
          items={deliveryCapabilities.items.map((item, i) => ({
            title: item.title,
            description: item.description,
            icon: DELIVERY_CAPABILITY_ICONS[i],
            photo: item.photo,
          }))}
        />
      </section>

      {/* CTA */}
      <section className="mvp-inner mvp-section" aria-labelledby="ind-cta-title">
        <motion.div
          className="mvp-glass-card mvp-cta-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          <h2 id="ind-cta-title">{cta.title}</h2>
          {cta.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}><FormattedText text={paragraph} /></p>
          ))}
          <div className="mvp-cta-buttons">
            <Link href={cta.primaryHref} className="mvp-btn-primary">
              {cta.primaryCta}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </motion.div>
      </section>
    </MVPStudioCanvas>
  );
}
