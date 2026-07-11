"use client";

import "./projects-showcase.css";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import NexusCoreVisual from "../projects/visuals/NexusCoreVisual";
import SynapseVisual from "../projects/visuals/SynapseVisual";
import CodeForgeVisual from "../projects/visuals/CodeForgeVisual";
import SovereignVisual from "../projects/visuals/SovereignVisual";
import ClinicalVisual from "../projects/visuals/ClinicalVisual";
import AnimatedCounter from "../ui/AnimatedCounter";
import { useReducedMotion } from "../features/useReducedMotion";
import { homeFlagshipProjects } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";
import { ExpandableBlock, ParagraphExpand } from "./disclosure/HomeDisclosure";

type ProjectItem = (typeof homeFlagshipProjects.items)[number];

const EASE = EASE_PREMIUM;

function parseMetric(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return null;
  return {
    num: parseFloat(match[1]),
    suffix: match[2],
    decimals: match[1].includes(".") ? 1 : 0,
  };
}

function ProjectVisual({
  id,
  active,
  dark = true,
  hideChrome = true,
}: {
  id: string;
  active: boolean;
  dark?: boolean;
  hideChrome?: boolean;
}) {
  const props = { active, dark, hideChrome };
  switch (id) {
    case "synapse":
      return <SynapseVisual {...props} />;
    case "codeforge":
      return <CodeForgeVisual {...props} />;
    case "sovereign":
      return <SovereignVisual {...props} />;
    case "clinical":
      return <ClinicalVisual {...props} />;
    default:
      return <NexusCoreVisual {...props} />;
  }
}

function statusClass(status: string) {
  if (status === "Beta") return "projects-status-chip--beta";
  if (status === "Enterprise") return "projects-status-chip--enterprise";
  return "";
}

function StatusChip({ status }: { status: string }) {
  return (
    <span className={`projects-status-chip ${statusClass(status)}`}>
      <span className="projects-status-dot" aria-hidden />
      {status}
    </span>
  );
}

function KpiPills({
  metrics,
  animate,
  reduced,
}: {
  metrics: ProjectItem["metrics"];
  animate: boolean;
  reduced: boolean;
}) {
  return (
    <div className="projects-kpi-row">
      {metrics.map((m) => {
        const parsed = parseMetric(m.value);
        return (
          <div key={m.label} className="projects-kpi-pill">
            <span className="projects-kpi-value">
              {parsed && animate && !reduced ? (
                <AnimatedCounter
                  value={parsed.num}
                  suffix={parsed.suffix}
                  decimals={parsed.decimals}
                  duration={1.2}
                  immediate
                />
              ) : (
                m.value
              )}
            </span>
            <span className="projects-kpi-label">{m.label}</span>
          </div>
        );
      })}
    </div>
  );
}

function TechStack({ stack }: { stack: readonly string[] }) {
  return (
    <div className="projects-tech-row" aria-label="Technology stack">
      {stack.map((tech) => (
        <span key={tech} className="projects-tech-chip">
          {tech}
        </span>
      ))}
    </div>
  );
}

function CaseStudyLink({ href }: { href: string }) {
  return (
    <Link href={href} className="projects-case-link group" data-cursor-hover>
      <span>View case study</span>
      <ArrowRight size={15} className="projects-case-link-arrow" aria-hidden />
    </Link>
  );
}

function ShowcasePreview({
  id,
  active,
  featured = false,
}: {
  id: string;
  active: boolean;
  featured?: boolean;
}) {
  return (
    <div
      className={`projects-showcase-preview${featured ? " projects-showcase-preview--featured" : ""}`}
    >
      <ProjectVisual id={id} active={active} />
    </div>
  );
}

function FeaturedProjectCard({
  project,
  reduced,
}: {
  project: ProjectItem;
  reduced: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [active, setActive] = useState(false);

  return (
    <motion.article
      ref={ref}
      className={`projects-featured${active ? " is-active" : ""}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.85, delay: 0.12, ease: EASE }}
      whileHover={reduced ? undefined : { y: -6 }}
      data-cursor-hover
    >
      <div className="projects-featured-preview">
        <StatusChip status={project.status} />
        <ShowcasePreview id={project.id} active={active && !reduced} featured />
      </div>
      <div className="projects-featured-body">
        <p className="projects-featured-category">{project.category}</p>
        <h3 className="projects-featured-title">{project.title}</h3>
        <ExpandableBlock
          expandLabel="View project details"
          collapseLabel="Hide project details"
        >
          <p className="projects-featured-desc">{project.description}</p>
          <p className="projects-featured-outcome">
            <strong>Result.</strong> {project.outcome}
          </p>
          <KpiPills
            metrics={project.metrics}
            animate={inView}
            reduced={reduced}
          />
          <TechStack stack={project.techStack} />
          <CaseStudyLink href={project.href} />
        </ExpandableBlock>
      </div>
    </motion.article>
  );
}

function CompactProjectCard({
  project,
  index,
  reduced,
}: {
  project: ProjectItem;
  index: number;
  reduced: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6%" });
  const [active, setActive] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? 14 : -10, index % 2 === 0 ? -14 : 10]
  );

  return (
    <motion.article
      ref={ref}
      className={`projects-compact-card${active ? " is-active" : ""}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      style={reduced ? undefined : { y: parallaxY }}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, delay: 0.28 + index * 0.1, ease: EASE }}
      whileHover={
        reduced
          ? undefined
          : { y: -10, scale: 1.02, transition: { duration: 0.4, ease: EASE } }
      }
      data-cursor-hover
    >
      <div className="projects-compact-preview">
        <StatusChip status={project.status} />
        <ShowcasePreview id={project.id} active={active && !reduced} />
      </div>
      <div className="projects-compact-body">
        <p className="projects-compact-category">{project.category}</p>
        <h3 className="projects-compact-title">{project.title}</h3>
        <ExpandableBlock
          expandLabel="View project details"
          collapseLabel="Hide project details"
        >
          <p className="projects-compact-desc">{project.description}</p>
          <div className="projects-compact-footer">
            <KpiPills metrics={project.metrics} animate={inView} reduced={reduced} />
            <TechStack stack={project.techStack} />
            <CaseStudyLink href={project.href} />
          </div>
        </ExpandableBlock>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-10%" });
  const reduced = useReducedMotion();

  const [featured, ...rest] = homeFlagshipProjects.items;

  return (
    <section id="projects" className="projects-showcase flow-section scroll-mt-28">
      <div className="projects-showcase-inner">
        <motion.header
          ref={headerRef}
          className="projects-showcase-header"
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="projects-showcase-eyebrow">{homeFlagshipProjects.label}</p>
          <h2 className="projects-showcase-title">{homeFlagshipProjects.title}</h2>
          <div className="projects-showcase-description">
            <ParagraphExpand
              paragraphs={homeFlagshipProjects.description.split("\n\n").filter(Boolean)}
              visibleCount={1}
              paragraphClassName="projects-showcase-description-p"
            />
          </div>
        </motion.header>

        <FeaturedProjectCard project={featured} reduced={reduced} />

        <div className="projects-showcase-grid">
          {rest.map((project, index) => (
            <CompactProjectCard
              key={project.id}
              project={project}
              index={index}
              reduced={reduced}
            />
          ))}
        </div>

        <motion.div
          ref={ctaRef}
          className="projects-showcase-cta-wrap"
          initial={{ opacity: 0, y: 24 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
        >
          <Link href="/projects" className="projects-showcase-cta-btn" data-cursor-hover>
            Explore All Enterprise Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
