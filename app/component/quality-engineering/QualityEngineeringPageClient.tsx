"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Gauge,
  GitBranch,
  Boxes,
  CheckSquare,
  Network,
  ScanSearch,
  MoveLeft,
  Activity,
  BarChart3,
  Map,
  Workflow,
  ShieldCheck,
  Database,
  RefreshCw,
  Layers,
  Zap,
  Bug,
  TrendingUp,
  Brain,
  Users,
  Sparkles,
  BadgeCheck,
} from "lucide-react";
import { qualityEngineeringPageContent } from "@/app/content/quality-engineering-content";
import { EASE_PREMIUM } from "../v2/motion";
import QaCommandCenterVisual from "./QaCommandCenterVisual";
import "./quality-engineering.css";

const SERVICE_ICONS = [
  Bot,
  Gauge,
  GitBranch,
  Boxes,
  CheckSquare,
  Network,
  ScanSearch,
  MoveLeft,
  Activity,
  BarChart3,
] as const;

const HOW_ICONS = [Map, Workflow, ShieldCheck, Database, RefreshCw, Layers] as const;

const WHY_ICONS = [Zap, Bug, TrendingUp, Brain, Users, Sparkles, BadgeCheck] as const;

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="qe-shell">
      <div className="qe-bg" aria-hidden>
        <div className="qe-bg-grid" />
        <div className="qe-bg-scan" />
        <div className="qe-bg-glow" />
      </div>
      {children}
    </div>
  );
}

function MetricCard({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: (typeof SERVICE_ICONS)[number];
  index: number;
}) {
  return (
    <motion.article
      className="qe-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 5) * 0.05, ease: EASE_PREMIUM }}
    >
      <div className="qe-card-top">
        <span className="qe-card-icon">
          <Icon size={18} aria-hidden />
        </span>
        <span className="qe-card-progress" aria-hidden>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: `${68 + (index % 4) * 7}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          />
        </span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.article>
  );
}

export default function QualityEngineeringPageClient() {
  const { brand, hero, services, how, why } = qualityEngineeringPageContent;

  return (
    <Shell>
      <section className="qe-inner qe-hero" aria-labelledby="qe-brand">
        <div className="qe-hero-grid">
          <div className="qe-hero-copy">
            <motion.p
              className="qe-chip"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE_PREMIUM }}
            >
              {hero.label}
            </motion.p>
            <motion.h1
              id="qe-brand"
              className="qe-display"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            >
              {hero.title}
            </motion.h1>
            <motion.p
              className="qe-lede"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE_PREMIUM }}
            >
              {hero.description}
            </motion.p>
            <motion.div
              className="qe-actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: EASE_PREMIUM }}
            >
              <Link href="/contact" className="qe-btn qe-btn--primary">
                {brand}
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href="#qe-how" className="qe-btn qe-btn--ghost">
                {how.title}
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: EASE_PREMIUM }}
          >
            <QaCommandCenterVisual />
          </motion.div>
        </div>
      </section>

      <section className="qe-inner qe-block" aria-labelledby="qe-services">
        <div className="qe-section-head">
          <h2 id="qe-services" className="qe-h2">
            {services.title}
          </h2>
        </div>
        <div className="qe-cap-grid">
          {services.items.map((item, i) => (
            <MetricCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={SERVICE_ICONS[i]}
              index={i}
            />
          ))}
        </div>
      </section>

      <section id="qe-how" className="qe-block qe-block--flow" aria-labelledby="qe-how-title">
        <div className="qe-inner">
          <h2 id="qe-how-title" className="qe-h2 qe-h2--center">
            {how.title}
          </h2>
        </div>
        <div className="qe-flow">
          {how.items.map((item, i) => {
            const Icon = HOW_ICONS[i];
            return (
              <motion.article
                key={item.title}
                className="qe-flow-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE_PREMIUM }}
              >
                <div className="qe-flow-rail" aria-hidden>
                  <span className="qe-flow-num">{i + 1}</span>
                  {i < how.items.length - 1 && <span className="qe-flow-line" />}
                </div>
                <div className="qe-flow-panel">
                  <Icon size={18} className="qe-flow-ico" aria-hidden />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="qe-inner qe-block" aria-labelledby="qe-why">
        <h2 id="qe-why" className="qe-h2 qe-h2--center">
          {why.title}
        </h2>
        <div className="qe-why-grid">
          {why.items.map((item, i) => {
            const Icon = WHY_ICONS[i];
            return (
              <motion.article
                key={item.title}
                className="qe-why-card"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE_PREMIUM }}
              >
                <div className="qe-why-icon">
                  <Icon size={18} aria-hidden />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="qe-inner qe-block" aria-label={brand}>
        <div className="qe-final">
          <h2>{brand}</h2>
          <p>{hero.description}</p>
          <div className="qe-actions">
            <Link href="/contact" className="qe-btn qe-btn--primary">
              {brand}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="#qe-how" className="qe-btn qe-btn--ghost">
              {how.title}
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
