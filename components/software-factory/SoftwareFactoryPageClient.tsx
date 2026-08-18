"use client";

import { type ReactNode } from "react";
import FormattedText from "../ui/FormattedText";
import { motion } from "framer-motion";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ClipboardCheck,
  Workflow,
  Shield,
  UserCheck,
  Puzzle,
  Gauge,
  Rocket,
  Inbox,
  ListOrdered,
  GitBranch,
  Route,
  FileText,
  FileCode,
  Layers,
  Network,
  BookOpen,
  ShieldCheck,
  Lock,
  Users,
  Cog,
  CheckCircle,
  Scale,
  ShieldAlert,
  AlertTriangle,
  Search,
  Hammer,
  Activity,
  SlidersHorizontal,
  Link2,
  GitCompare,
  Cloud,
  KeyRound,
  UserCog,
  Settings2,
  Wrench,
  Wallet,
  Eye,
  ScrollText,
  BadgeCheck,
} from "lucide-react";
import { softwareFactoryContent as c } from "@/app/content/software-factory-content";
import { EASE_PREMIUM } from "../v2/motion";
import SoftwareFactoryHero from "./SoftwareFactoryHero";
import "../mvp-studio/mvp-studio.css";
import "../it-services/it-services.css";
import "./software-factory.css";

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

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const SECTION_ICONS: LucideIcon[][] = [
  [ClipboardCheck, Workflow, Shield, UserCheck, Puzzle, Gauge, Rocket],
  [
    Inbox,
    ListOrdered,
    GitBranch,
    Route,
    FileText,
    FileCode,
    Layers,
    Network,
    BookOpen,
    ShieldCheck,
    Lock,
  ],
  [
    Users,
    Cog,
    CheckCircle,
    Scale,
    ShieldAlert,
    AlertTriangle,
    Search,
    Hammer,
    Activity,
    SlidersHorizontal,
    Link2,
    GitCompare,
  ],
  [
    Cloud,
    KeyRound,
    UserCog,
    Settings2,
    Wrench,
    Wallet,
    Eye,
    ShieldAlert,
    ScrollText,
    BadgeCheck,
  ],
];

function Canvas({ children }: { children: ReactNode }) {
  return (
    <div className="mvp-canvas asf-page">
      <div className="mvp-ambient" aria-hidden />
      {children}
    </div>
  );
}

function FeatureTile({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}) {
  const variants = index % 2 === 0 ? fadeLeft : fadeRight;
  return (
    <motion.article className="mvp-glass it-tile" custom={index} variants={variants}>
      <div className="mvp-icon it-tile-icon">
        <Icon size={18} aria-hidden />
      </div>
      <h3>{title}</h3>
      <p>
        <FormattedText text={description} />
      </p>
    </motion.article>
  );
}

export default function SoftwareFactoryPageClient() {
  return (
    <Canvas>
      <SoftwareFactoryHero />

      {c.sections.map((section, sectionIndex) => (
        <section
          key={section.number}
          id={`asf-section-${section.number}`}
          className="mvp-inner mvp-section"
          aria-labelledby={`asf-section-${section.number}-title`}
        >
          <div className="mvp-section-header">
            <h2 id={`asf-section-${section.number}-title`} className="mvp-section-title">
              {section.title}
            </h2>
          </div>
          <motion.div
            className="it-offer-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {section.items.map((item, i) => (
              <FeatureTile
                key={item.title}
                title={item.title}
                description={item.description}
                icon={SECTION_ICONS[sectionIndex][i] ?? Layers}
                index={i}
              />
            ))}
          </motion.div>
        </section>
      ))}

      {"closingImage" in c && c.closingImage ? (
        <section className="mvp-inner mvp-section asf-closing" aria-label={c.closingImageAlt}>
          <figure className="asf-closing-figure">
            <img
              src={c.closingImage}
              alt={c.closingImageAlt}
              className="asf-closing-image"
            />
          </figure>
        </section>
      ) : null}

      <section className="mvp-inner mvp-section" aria-labelledby="asf-cta-title">
        <div className="mvp-glass mvp-cta it-cta">
          <h2 id="asf-cta-title">{c.cta.headline}</h2>
          <div className="mvp-cta-buttons">
            <Link href={c.cta.primaryHref} className="mvp-btn-primary">
              {c.cta.primaryCta}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </Canvas>
  );
}
