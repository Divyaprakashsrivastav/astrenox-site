"use client";

import { type ReactNode } from "react";
import FormattedText from "../ui/FormattedText";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Map,
  AppWindow,
  RefreshCw,
  Cloud,
  Plug,
  Building2,
  Database,
  Brain,
  CloudUpload,
  Code2,
  Boxes,
  GitBranch,
  DollarSign,
  Rocket,
  Shield,
  Sparkles,
  Container,
  Layers,
  Package,
  Network,
  Puzzle,
  Terminal,
  Lock,
  HardDrive,
  Activity,
  Globe2,
  ShieldAlert,
  Monitor,
  Workflow,
  Zap,
  TestTube,
  FileCode,
  ScanSearch,
  Wrench,
  Calculator,
  Users,
  BadgeCheck,
  Infinity,
} from "lucide-react";
import { itServicesPageContent } from "@/app/content/it-services-content";
import { EASE_PREMIUM } from "../v2/motion";
import NocInfrastructureVisual from "./NocInfrastructureVisual";
import "../mvp-studio/mvp-studio.css";
import "./it-services.css";

const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: EASE_PREMIUM },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: EASE_PREMIUM },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: EASE_PREMIUM },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const OFFERING_ICONS = [Map, AppWindow, RefreshCw, Cloud, Plug] as const;
const BLUEPRINT_ICONS = [Building2, Database, Brain, CloudUpload] as const;
const BUILD_ICONS = [Code2, Boxes, GitBranch] as const;
const ADV1_ICONS = [DollarSign, Rocket, Shield, Sparkles] as const;
const CLOUD_ICONS = [Container, Layers, RefreshCw, Package, Network, Puzzle] as const;
const INFRA_ICONS = [
  Terminal,
  Lock,
  HardDrive,
  Activity,
  Globe2,
  ShieldAlert,
  Monitor,
] as const;
const HOW_ICONS = [
  Workflow,
  Zap,
  TestTube,
  FileCode,
  ScanSearch,
  Wrench,
  Calculator,
] as const;
const WHY_ICONS = [Users, Brain, DollarSign, Users, BadgeCheck, Infinity] as const;

function Canvas({ children }: { children: ReactNode }) {
  return (
    <div className="mvp-canvas it-page">
      <div className="mvp-ambient" aria-hidden />
      <div className="it-ambient-scan" aria-hidden />
      {children}
    </div>
  );
}

function FeatureTile({
  title,
  description,
  icon: Icon,
  index,
  from = "up",
}: {
  title: string;
  description: string;
  icon: (typeof OFFERING_ICONS)[number];
  index: number;
  from?: "left" | "right" | "up";
}) {
  const variants = from === "left" ? fadeLeft : from === "right" ? fadeRight : fadeUp;
  return (
    <motion.article
      className="mvp-glass it-tile"
      custom={index}
      variants={variants}
    >
      <div className="mvp-icon it-tile-icon">
        <Icon size={18} aria-hidden />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.article>
  );
}

export default function ITServicesPageClient() {
  const { brand, hero, section1, section2 } = itServicesPageContent;

  return (
    <Canvas>
      {/* Hero, NOC topology */}
      <section className="it-hero" aria-labelledby="it-brand">
        <motion.div
          className="it-hero-visual"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.15, ease: EASE_PREMIUM }}
          aria-hidden
        >
          <NocInfrastructureVisual />
        </motion.div>
        <div className="mvp-inner it-hero-grid">
          <div className="it-hero-copy">
            <motion.p
              className="it-hero-label"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE_PREMIUM }}
            >
              {hero.label}
            </motion.p>
            <motion.h1
              id="it-brand"
              className="mvp-hero-brand it-hero-title"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            >
              {hero.title}
            </motion.h1>
            <motion.p
              className="mvp-hero-subtitle it-hero-desc"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE_PREMIUM }}
            >
              {hero.description}
            </motion.p>
            <motion.div
              className="mvp-hero-ctas"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: EASE_PREMIUM }}
            >
              <Link href="/contact" className="mvp-btn-primary">
                Contact Us
                <ArrowRight size={16} aria-hidden />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1 overview */}
      <section className="mvp-inner mvp-section" aria-labelledby="it-s1">
        <div className="it-split">
          <motion.h2
            id="it-s1"
            className="mvp-section-title it-split-title"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            {section1.title}
          </motion.h2>
          <motion.p
            className="it-split-text"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE_PREMIUM }}
          >
            {section1.intro}
          </motion.p>
        </div>

        <motion.div
          className="it-offer-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {section1.offerings.map((item, i) => (
            <FeatureTile
              key={item.title}
              title={item.title}
              description={item.description}
              icon={OFFERING_ICONS[i]}
              index={i}
              from={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </motion.div>
      </section>

      {/* Architecture & Modernization, Blueprint / Build */}
      <section className="mvp-inner mvp-section" aria-labelledby="it-solutions">
        <div className="mvp-section-header">
          <h2 id="it-solutions" className="mvp-section-title">
            {section1.solutions.title}
          </h2>
          <p className="mvp-section-intro"><FormattedText text={section1.solutions.intro} /></p>
        </div>

        <div className="it-dual">
          <div className="it-dual-col">
            <h3 className="it-dual-heading">{section1.solutions.blueprint.title}</h3>
            <motion.div
              className="it-stack"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {section1.solutions.blueprint.items.map((item, i) => (
                <FeatureTile
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={BLUEPRINT_ICONS[i]}
                  index={i}
                  from="left"
                />
              ))}
            </motion.div>
          </div>
          <div className="it-dual-col">
            <h3 className="it-dual-heading it-dual-heading--build">
              {section1.solutions.build.title}
            </h3>
            <motion.div
              className="it-stack"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {section1.solutions.build.items.map((item, i) => (
                <FeatureTile
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={BUILD_ICONS[i]}
                  index={i}
                  from="right"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How & Why Astrenox */}
      <section className="mvp-inner mvp-section" aria-labelledby="it-how-why">
        <div className="mvp-section-header">
          <h2 id="it-how-why" className="mvp-section-title">
            {section1.howWhy.title}
          </h2>
        </div>

        <motion.div
          className="mvp-glass it-exec-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE_PREMIUM }}
        >
          <h3>{section1.howWhy.how.title}</h3>
          <p><FormattedText text={section1.howWhy.how.description} /></p>
        </motion.div>

        <div className="it-adv-block">
          <h3 className="it-subhead">{section1.howWhy.advantage.title}</h3>
          <p className="it-adv-intro"><FormattedText text={section1.howWhy.advantage.intro} /></p>
          <motion.div
            className="it-adv-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {section1.howWhy.advantage.items.map((item, i) => (
              <FeatureTile
                key={item.title}
                title={item.title}
                description={item.description}
                icon={ADV1_ICONS[i]}
                index={i}
                from="up"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="section-2"
        className="mvp-inner mvp-section"
        aria-labelledby="it-s2"
      >
        <div className="it-split it-split--stack">
          <motion.h2
            id="it-s2"
            className="mvp-section-title it-split-title"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            {section2.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE_PREMIUM }}
          >
            <p className="it-split-text"><FormattedText text={section2.intro} /></p>
          </motion.div>
        </div>

        <h3 className="it-subhead it-services-sol-title">
          {section2.servicesTitle}
        </h3>

        {/* Custom Cloud Application Engineering */}
        <div className="it-capability-block">
          <h4 className="it-capability-title">{section2.cloudEngineering.title}</h4>
          <motion.div
            className="it-cap-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {section2.cloudEngineering.items.map((item, i) => (
              <FeatureTile
                key={item.title}
                title={item.title}
                description={item.description}
                icon={CLOUD_ICONS[i]}
                index={i}
                from={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </motion.div>
        </div>

        {/* Enterprise IT Infrastructure Management */}
        <div className="it-capability-block">
          <h4 className="it-capability-title">{section2.infrastructure.title}</h4>
          <motion.div
            className="it-cap-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {section2.infrastructure.items.map((item, i) => (
              <FeatureTile
                key={item.title}
                title={item.title}
                description={item.description}
                icon={INFRA_ICONS[i]}
                index={i}
                from={i % 2 === 0 ? "right" : "left"}
              />
            ))}
          </motion.div>
        </div>

        {/* How Astrenox Does It, horizontal process rail */}
        <div className="it-capability-block">
          <h3 className="it-subhead">{section2.how.title}</h3>
          <div className="it-process-rail">
            {section2.how.items.map((item, i) => {
              const Icon = HOW_ICONS[i];
              return (
                <motion.article
                  key={item.title}
                  className="mvp-glass it-process-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.06,
                    ease: EASE_PREMIUM,
                  }}
                >
                  <div className="mvp-icon it-tile-icon">
                    <Icon size={16} aria-hidden />
                  </div>
                  <h4>{item.title}</h4>
                  <p><FormattedText text={item.description} /></p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Why Astrenox */}
        <div className="it-capability-block">
          <h3 className="it-subhead">{section2.why.title}</h3>
          <motion.div
            className="it-why-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {section2.why.items.map((item, i) => (
              <motion.article
                key={item.title}
                className="mvp-glass it-why-card"
                custom={i}
                variants={fadeUp}
              >
                <div className="mvp-icon it-tile-icon">
                  {(() => {
                    const Icon = WHY_ICONS[i];
                    return <Icon size={18} aria-hidden />;
                  })()}
                </div>
                <h4>{item.title}</h4>
                <p><FormattedText text={item.description} /></p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enterprise CTA, document brand + intros only */}
      <section className="mvp-inner mvp-section" aria-label={brand}>
        <div className="mvp-glass mvp-cta it-cta">
          <h2>{brand}</h2>
          <div className="mvp-cta-buttons">
            <Link href="/contact" className="mvp-btn-primary">
              Contact Us
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </Canvas>
  );
}
