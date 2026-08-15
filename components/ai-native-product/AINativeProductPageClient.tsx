"use client";

import { useRef, type ReactNode } from "react";
import FormattedText from "../ui/FormattedText";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Map,
  Brain,
  Database,
  Gauge,
  MessageSquare,
  Layers,
  Bot,
  Cpu,
  Shield,
  SlidersHorizontal,
  Scan,
  ClipboardCheck,
  Workflow,
  Lock,
  TestTube,
  GitBranch,
  Server,
  Activity,
  Rocket,
  Boxes,
  KeyRound,
  Coins,
  Users,
  Code2,
  Cloud,
  Puzzle,
  Palette,
  Search,
  Network,
  Container,
  Route,
  ScanSearch,
  Split,
  FileCheck,
  Languages,
  CircleOff,
  DollarSign,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { aiNativeProductPageContent } from "@/app/content/ai-native-product-content";
import { EASE_PREMIUM } from "../v2/motion";
import "./ai-native-product.css";

const S1_SERVICE_ICONS = [
  Map,
  Brain,
  Database,
  Gauge,
  MessageSquare,
  Layers,
  Bot,
  Cpu,
  Shield,
  SlidersHorizontal,
  Scan,
] as const;

const S1_HOW_ICONS = [
  ClipboardCheck,
  Workflow,
  Lock,
  TestTube,
  GitBranch,
  Server,
] as const;

const S1_WHY_ICONS = [Activity, Rocket, Boxes, KeyRound, Coins, Users] as const;

const S2_SERVICE_ICONS = [
  Code2,
  Cloud,
  Database,
  Puzzle,
  Palette,
  Search,
  Network,
  GitBranch,
  Server,
  Container,
] as const;

const S2_HOW_ICONS = [
  Route,
  ScanSearch,
  Split,
  Shield,
  FileCheck,
  Languages,
] as const;

const S2_WHY_ICONS = [CircleOff, DollarSign, Zap, Brain, Boxes, ShieldCheck] as const;

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="aipe-shell">
      <div className="aipe-bg" aria-hidden>
        <div className="aipe-bg-grid" />
        <div className="aipe-bg-particles" />
        <div className="aipe-bg-paths" />
        <div className="aipe-bg-glow" />
      </div>
      {children}
    </div>
  );
}

function CircuitCard({
  title,
  description,
  icon: Icon,
  index,
  variant = "circuit",
}: {
  title: string;
  description: string;
  icon: (typeof S1_SERVICE_ICONS)[number];
  index: number;
  variant?: "circuit" | "float" | "code";
}) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const transform = useMotionTemplate`perspective(800px) rotateX(${y}deg) rotateY(${x}deg)`;

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    x.set((px - 0.5) * 8);
    y.set((0.5 - py) * 8);
  };

  return (
    <motion.article
      ref={ref}
      className={`aipe-card aipe-card--${variant}`}
      style={{ transform }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.05, ease: EASE_PREMIUM }}
    >
      <div className="aipe-card-circuit" aria-hidden />
      <div className="aipe-card-head">
        <span className="aipe-card-icon">
          <Icon size={18} aria-hidden />
        </span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="aipe-card-edge" aria-hidden />
    </motion.article>
  );
}

export default function AINativeProductPageClient() {
  const { brand, hero, section1, section2 } = aiNativeProductPageContent;

  return (
    <Shell>
      <section className="aipe-hero" aria-labelledby="aipe-brand">
        <div className="aipe-inner aipe-hero-overlay">
          <motion.p
            className="aipe-chip"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_PREMIUM }}
          >
            {hero.label}
          </motion.p>
          <motion.h1
            id="aipe-brand"
            className="aipe-display"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE_PREMIUM }}
          >
            {hero.title}
          </motion.h1>
          <motion.p
            className="aipe-lede"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE_PREMIUM }}
          >
            <FormattedText text={hero.description} />
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="aipe-inner aipe-block" aria-labelledby="aipe-s1-services">
        <h3 id="aipe-s1-services" className="aipe-h3">{section1.services.title}</h3>
        <div className="aipe-float-grid">
          {section1.services.items.map((item, i) => (
            <CircuitCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={S1_SERVICE_ICONS[i]}
              index={i}
              variant={i % 3 === 0 ? "float" : "circuit"}
            />
          ))}
        </div>
      </section>

      {/* How, horizontal engineering pipeline */}
      <section className="aipe-block aipe-block--pipeline" aria-labelledby="aipe-how">
        <div className="aipe-inner">
          <h2 id="aipe-how" className="aipe-h2 aipe-h2--center">
            {section1.how.title}
          </h2>
        </div>
        <div className="aipe-h-pipeline">
          {section1.how.items.map((item, i) => {
            const Icon = S1_HOW_ICONS[i];
            return (
              <motion.article
                key={item.title}
                className="aipe-h-step"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE_PREMIUM }}
              >
                <div className="aipe-h-connector" aria-hidden>
                  <span className="aipe-h-num">{i + 1}</span>
                  {i < section1.how.items.length - 1 && <span className="aipe-h-beam" />}
                </div>
                <div className="aipe-h-panel">
                  <Icon size={18} className="aipe-h-ico" aria-hidden />
                  <h3>{item.title}</h3>
                  <p><FormattedText text={item.description} /></p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Why, code-inspired stacked panels */}
      <section className="aipe-inner aipe-block" aria-labelledby="aipe-why">
        <h2 id="aipe-why" className="aipe-h2 aipe-h2--center">
          {section1.why.title}
        </h2>
        <div className="aipe-code-stack">
          {section1.why.items.map((item, i) => {
            const Icon = S1_WHY_ICONS[i];
            return (
              <motion.article
                key={item.title}
                className="aipe-code-row"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: EASE_PREMIUM }}
              >
                <span className="aipe-code-gutter">{String(i + 1).padStart(2, "0")}</span>
                <span className="aipe-code-icon">
                  <Icon size={16} aria-hidden />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p><FormattedText text={item.description} /></p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Section 2 */}
      <section id="section-2" className="aipe-inner aipe-block" aria-labelledby="aipe-s2">
        <div className="aipe-arch-banner">
          <motion.h2
            id="aipe-s2"
            className="aipe-h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            {section2.heading}
          </motion.h2>
          <motion.p
            className="aipe-body"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE_PREMIUM }}
          >
            {section2.intro}
          </motion.p>
        </div>

        <h3 className="aipe-h3">{section2.services.title}</h3>
        <div className="aipe-bento">
          {section2.services.items.map((item, i) => (
            <CircuitCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={S2_SERVICE_ICONS[i]}
              index={i}
              variant={i === 0 || i === 5 ? "code" : "circuit"}
            />
          ))}
        </div>

        <h3 className="aipe-h3 aipe-h3--spaced">{section2.how.title}</h3>
        <div className="aipe-zigzag">
          {section2.how.items.map((item, i) => {
            const Icon = S2_HOW_ICONS[i];
            return (
              <motion.article
                key={item.title}
                className={`aipe-zig ${i % 2 ? "is-right" : "is-left"}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE_PREMIUM }}
              >
                <div className="aipe-zig-mark">{i + 1}</div>
                <div className="aipe-zig-body">
                  <Icon size={18} aria-hidden />
                  <h3>{item.title}</h3>
                  <p><FormattedText text={item.description} /></p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <h3 className="aipe-h3 aipe-h3--spaced">{section2.why.title}</h3>
        <div className="aipe-hex-grid">
          {section2.why.items.map((item, i) => {
            const Icon = S2_WHY_ICONS[i];
            return (
              <motion.article
                key={item.title}
                className="aipe-hex"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE_PREMIUM }}
              >
                <Icon size={18} className="aipe-hex-ico" aria-hidden />
                <h3>{item.title}</h3>
                <p><FormattedText text={item.description} /></p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="aipe-inner aipe-block" aria-label={brand}>
        <div className="aipe-final">
          <h2>{brand}</h2>
          <div className="aipe-actions">
            <Link href="/contact" className="aipe-btn aipe-btn--primary">
              Contact Us
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
