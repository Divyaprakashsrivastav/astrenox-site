"use client";

import { type MouseEvent, type ReactNode } from "react";
import FormattedText from "../ui/FormattedText";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { centerOfExcellencePageContent } from "@/app/content/center-of-excellence-content";
import { EASE_PREMIUM } from "../v2/motion";
import EnterpriseIntelligenceVisual from "./EnterpriseIntelligenceVisual";
import "./center-of-excellence.css";

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="coe-shell">
      <div className="coe-bg" aria-hidden>
        <div className="coe-bg-blueprint" />
        <div className="coe-bg-constellation" />
        <div className="coe-bg-particles" />
        <div className="coe-bg-vignette" />
      </div>
      {children}
    </div>
  );
}

function SectionHead({
  title,
  description,
  center,
}: {
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`coe-section-head ${center ? "coe-section-head--center" : ""}`}>
      <h2>{title}</h2>
      {description ? <p className="coe-section-desc">{description}</p> : null}
    </div>
  );
}

export default function CenterOfExcellencePageClient() {
  const {
    brand,
    hero,
    technologyPortfolio,
    deliveryMethodology,
    sapCapabilities,
    industryAlignment,
    resourcePool,
    whyPartner,
    closing,
  } = centerOfExcellencePageContent;

  const onCtaMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    e.currentTarget.style.setProperty("--y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <Shell>
      <section className="coe-inner coe-hero" aria-labelledby="coe-brand">
        <div className="coe-hero-grid">
          <div className="coe-hero-copy">
            <motion.p
              className="coe-eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_PREMIUM }}
            >
              {brand}
            </motion.p>
            <motion.h1
              id="coe-brand"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06, ease: EASE_PREMIUM }}
            >
              {hero.title}
            </motion.h1>
            <motion.p
              className="coe-hero-lead"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: EASE_PREMIUM }}
            >
              {hero.lead}
            </motion.p>
            <motion.p
              className="coe-hero-body"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: EASE_PREMIUM }}
            >
              {hero.body}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_PREMIUM }}
          >
            <EnterpriseIntelligenceVisual />
          </motion.div>
        </div>
      </section>

      <section className="coe-inner coe-block coe-platform-section" aria-labelledby="coe-portfolio">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: EASE_PREMIUM }}
        >
          <SectionHead
            title={technologyPortfolio.title}
            description={technologyPortfolio.description}
          />
          <div className="coe-platform-matrix" role="table" aria-label={technologyPortfolio.title}>
            {technologyPortfolio.table.rows.map((row, index) => (
              <motion.article
                key={row.platform}
                className="coe-platform-card"
                role="row"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: EASE_PREMIUM }}
              >
                <div role="rowheader">
                  <h3 className="coe-platform-name">{row.platform}</h3>
                </div>
                <div role="cell">
                  <span className="coe-platform-label">{technologyPortfolio.table.headers[1]}</span>
                  <p className="coe-platform-text">{row.services}</p>
                </div>
                <div role="cell">
                  <span className="coe-platform-label">{technologyPortfolio.table.headers[2]}</span>
                  <p className="coe-platform-text">{row.products}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        className="coe-inner coe-block coe-block--alt coe-delivery"
        aria-labelledby="coe-delivery"
      >
        <div className="coe-delivery-layout">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            <SectionHead
              title={deliveryMethodology.title}
              description={deliveryMethodology.description}
            />
          </motion.div>
          <div className="coe-roadmap" id="coe-delivery">
            {deliveryMethodology.items.map((item, index) => (
              <motion.article
                key={item}
                className="coe-roadmap-item"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.48, delay: index * 0.05, ease: EASE_PREMIUM }}
              >
                <span className="coe-roadmap-step" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{item}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="coe-inner coe-block" aria-labelledby="coe-sap">
        <div className="coe-sap-layout">
          <motion.div
            className="coe-sap-intro"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            <SectionHead title={sapCapabilities.title} description={sapCapabilities.description} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE_PREMIUM }}
          >
            <h3 id="coe-sap" className="coe-section-kicker" style={{ marginBottom: "1rem" }}>
              {sapCapabilities.operationalFocus.title}
            </h3>
            <div className="coe-matrix-wrap">
              <table className="coe-matrix-table">
                <thead>
                  <tr>
                    {sapCapabilities.operationalFocus.table.headers.map((header) => (
                      <th key={header} scope="col">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sapCapabilities.operationalFocus.table.rows.map((row) => (
                    <tr key={row.focus}>
                      <td>{row.focus}</td>
                      <td>{row.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="coe-inner coe-block coe-block--alt" aria-labelledby="coe-industry">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: EASE_PREMIUM }}
        >
          <SectionHead
            title={industryAlignment.title}
            description={industryAlignment.description}
            center
          />
          <div className="coe-industry-grid" id="coe-industry">
            {industryAlignment.table.rows.map((row, index) => (
              <motion.article
                key={row.cluster}
                className="coe-industry-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.48, delay: index * 0.06, ease: EASE_PREMIUM }}
              >
                <h3>{row.cluster}</h3>
                <p>{row.subSectors}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="coe-inner coe-block coe-talent-section" aria-labelledby="coe-talent">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: EASE_PREMIUM }}
        >
          <SectionHead title={resourcePool.title} center />
          <div className="coe-talent-panel" id="coe-talent">
            <div className="coe-talent-grid" role="table" aria-label={resourcePool.title}>
              {resourcePool.table.rows.map((row, index) => (
                <motion.article
                  key={row.type}
                  className="coe-talent-card"
                  role="row"
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.45, delay: index * 0.05, ease: EASE_PREMIUM }}
                >
                  <strong role="rowheader">{row.type}</strong>
                  <span className="coe-talent-metric" role="cell">
                    {row.experience}
                  </span>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="coe-inner coe-block coe-block--alt" aria-labelledby="coe-why">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: EASE_PREMIUM }}
        >
          <SectionHead title={whyPartner.title} center />
          <div className="coe-why-grid" id="coe-why">
            {whyPartner.items.map((item, index) => (
              <motion.article
                key={item}
                className="coe-why-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.48, delay: index * 0.06, ease: EASE_PREMIUM }}
              >
                <p>{item}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="coe-inner coe-closing" aria-labelledby="coe-closing">
        <motion.div
          className="coe-closing-panel"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          <h2 id="coe-closing">{closing.title}</h2>
          <p><FormattedText text={closing.description} /></p>
          <Link href="/contact" className="coe-cta" onMouseMove={onCtaMove}>
            {closing.cta}
            <ArrowRight size={16} strokeWidth={2.25} aria-hidden />
          </Link>
        </motion.div>
      </section>
    </Shell>
  );
}
