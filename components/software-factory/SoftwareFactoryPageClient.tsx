"use client";

import { useRef, type ReactNode } from "react";
import FormattedText from "../ui/FormattedText";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { softwareFactoryContent as c } from "@/app/content/software-factory-content";
import { EASE_PREMIUM } from "../v2/motion";
import SoftwareFactoryHero from "./SoftwareFactoryHero";
import SoftwareFactoryHeroBackdrop from "./SoftwareFactoryHeroBackdrop";
import "./software-factory.css";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
      transition={{ duration: 0.58, delay, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  );
}

export default function SoftwareFactoryPageClient() {
  return (
    <div className="asf-page">
      <SoftwareFactoryHero />

      {c.sections.map((section, sectionIndex) => (
        <section
          key={section.number}
          id={`asf-section-${section.number}`}
          className={`asf-sdlc${sectionIndex % 2 === 1 ? " asf-sdlc--alt" : ""}`}
          aria-labelledby={`asf-section-${section.number}-title`}
        >
          <div className="asf-container asf-sdlc-grid">
            <div className="asf-sdlc-rail-col">
              <Reveal>
                <h2 id={`asf-section-${section.number}-title`} className="asf-section-title">
                  {section.title}
                </h2>
                <p className="asf-section-intro"><FormattedText text={section.intro} /></p>
              </Reveal>
            </div>
            <div className="asf-sdlc-bullets">
              {section.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.04}>
                  <article className="asf-sdlc-bullet-card">
                    <h3 className="asf-card-title">{item.title}</h3>
                    <p className="asf-body">{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {"closingImage" in c && c.closingImage ? (
        <section className="asf-closing" aria-label={c.closingImageAlt}>
          <div className="asf-container">
            <Reveal>
              <figure className="asf-closing-figure">
                <img
                  src={c.closingImage}
                  alt={c.closingImageAlt}
                  className="asf-closing-image"
                />
              </figure>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="asf-cta" aria-labelledby="asf-cta-title">
        <div className="asf-cta-backdrop">
          <SoftwareFactoryHeroBackdrop />
        </div>
        <motion.div
          className="asf-cta-inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE_PREMIUM }}
        >
          <span className="asf-cta-sweep" aria-hidden />
          <h2 id="asf-cta-title" className="asf-cta-title">
            {c.cta.headline}
          </h2>
          <div className="asf-cta-actions">
            <Link href={c.cta.primaryHref} className="asf-btn asf-btn--primary">
              {c.cta.primaryCta}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
