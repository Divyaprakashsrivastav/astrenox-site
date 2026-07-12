"use client";

import "./sptp-page.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { smartParkingPageContent as c } from "@/app/content/smart-parking-page-content";
import { EASE_PREMIUM } from "../v2/motion";
import SptpHero from "./SptpHero";
import SptpTechMarquee from "./SptpTechMarquee";
import type { ReactNode } from "react";

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="sptp-shell">
      <div className="sptp-bg" aria-hidden>
        <div className="sptp-bg-grid" />
        <div className="sptp-bg-glow" />
        <div className="sptp-bg-noise" />
      </div>
      {children}
    </div>
  );
}

function Label({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <p className="sptp-label" id={id}>
      {children}
    </p>
  );
}

function Verbatim({ title, body }: { title: string; body: string }) {
  return (
    <p className="sptp-verbatim">
      <strong>{title}</strong> {body}
    </p>
  );
}

export default function SptpPageClient() {
  return (
    <Shell>
      <SptpHero />

      {/* 2 — Challenges */}
      <section className="sptp-block sptp-block--alt" aria-labelledby="sptp-challenges-label">
        <div className="sptp-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: EASE_PREMIUM }}
          >
            <Label id="sptp-challenges-label">Urban Mobility Challenges</Label>
          </motion.div>

          <div className="sptp-challenge-grid">
            {c.mobilityComparisons.map((comp, i) => (
              <motion.article
                key={i}
                className="sptp-challenge-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE_PREMIUM }}
                whileHover={{ y: -4 }}
              >
                <span className="sptp-card-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="sptp-challenge-split">
                  <div>
                    <span className="sptp-tag sptp-tag--muted">Traditional City</span>
                    <p className="sptp-card-intro">{comp.traditional}</p>
                  </div>
                  <div>
                    <span className="sptp-tag">AI Smart City</span>
                    {comp.smart.map((item) => (
                      <Verbatim key={item.title} title={item.title} body={item.body} />
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Solutions */}
      <section className="sptp-block" aria-labelledby="sptp-solutions-label">
        <div className="sptp-inner">
          <Label id="sptp-solutions-label">Smart Parking Platform</Label>
          <div className="sptp-solution-grid">
            {c.industryApplications.map((app, i) => (
              <motion.article
                key={app.title}
                className="sptp-solution-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE_PREMIUM }}
                whileHover={{ y: -4 }}
              >
                <span className="sptp-card-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{app.title}</h3>
                <p className="sptp-card-intro">{app.intro}</p>
                {app.items.map((item) => (
                  <Verbatim key={item.title} title={item.title} body={item.body} />
                ))}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Architecture */}
      <section className="sptp-block sptp-block--alt" aria-labelledby="sptp-arch-label">
        <div className="sptp-inner">
          <Label id="sptp-arch-label">System Architecture</Label>

          <h3 className="sptp-arch-sub">AI Traffic Management</h3>
          <div className="sptp-arch-grid">
            {c.trafficWorkflow.map((stage, i) => (
              <motion.article
                key={stage.id}
                className="sptp-arch-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: EASE_PREMIUM }}
              >
                <span className="sptp-card-num">{stage.label}</span>
                {stage.items.map((item) => (
                  <Verbatim key={item.title} title={item.title} body={item.body} />
                ))}
              </motion.article>
            ))}
          </div>

          <h3 className="sptp-arch-sub">Computer Vision Pipeline</h3>
          <div className="sptp-vision-flow" aria-hidden>
            {c.visionPipeline.map((stage, i) => (
              <span key={stage.id}>
                {i > 0 && <span className="sptp-vision-connector" />}
                <span className="sptp-vision-node">{stage.label}</span>
              </span>
            ))}
          </div>
          <div className="sptp-arch-grid">
            {c.visionPipeline.map((stage, i) => (
              <motion.article
                key={stage.id}
                className="sptp-arch-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: EASE_PREMIUM }}
              >
                <span className="sptp-card-num">{stage.label}</span>
                <Verbatim title={stage.title} body={stage.body} />
              </motion.article>
            ))}
          </div>

          <h3 className="sptp-arch-sub">Integrated City Ecosystem</h3>
          <div className="sptp-arch-grid">
            {c.ecosystemModules.map((mod, i) => (
              <motion.article
                key={mod.id}
                className="sptp-arch-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: EASE_PREMIUM }}
              >
                <span className="sptp-card-num">{mod.label}</span>
                <Verbatim title={mod.title} body={mod.body} />
              </motion.article>
            ))}
          </div>

          {c.ecosystemSectionIntros.map((sec) => (
            <div key={sec.title} className="sptp-arch-band">
              <h3 className="sptp-arch-band-title">{sec.title}</h3>
              <p className="sptp-card-intro">{sec.intro}</p>
              <div className="sptp-arch-grid sptp-arch-grid--3">
                {c.industryApplications
                  .find((a) => a.title === sec.title)
                  ?.items.map((item) => (
                    <article key={item.title} className="sptp-arch-card">
                      <Verbatim title={item.title} body={item.body} />
                    </article>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5 — Technology */}
      <section className="sptp-block" aria-labelledby="sptp-tech-label">
        <div className="sptp-inner">
          <Label id="sptp-tech-label">Technology Ecosystem</Label>
          <SptpTechMarquee />
          <div className="sptp-impact-grid">
            {c.businessImpact.map((item, i) => (
              <motion.article
                key={item.display}
                className="sptp-impact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: EASE_PREMIUM }}
              >
                <span className="sptp-impact-highlight">{item.display}</span>
                <p>{item.label}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — CTA */}
      <section className="sptp-block sptp-cta-block" aria-labelledby="sptp-cta-title">
        <div className="sptp-inner">
          <motion.div
            className="sptp-cta-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            <h2 id="sptp-cta-title">{c.cta.headline}</h2>
            <p className="sptp-cta-lead">{c.cta.supporting}</p>
            <div className="sptp-hero-actions">
              <Link href={c.cta.primaryHref} className="sptp-btn sptp-btn--primary">
                {c.cta.primary}
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href={c.cta.secondaryHref} className="sptp-btn sptp-btn--ghost">
                {c.cta.secondary}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Shell>
  );
}
