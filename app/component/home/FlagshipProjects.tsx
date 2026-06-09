"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { homeFlagshipProjects } from "@/app/content/homepage-content";

const SHOWCASE = homeFlagshipProjects.items.slice(0, 3);

export default function FlagshipProjects() {
  return (
    <section id="projects" className="section-shell-enterprise scroll-mt-28">
      <div className="enterprise-inner">
        <SectionHeader
          label={homeFlagshipProjects.label}
          title={homeFlagshipProjects.title}
          description={homeFlagshipProjects.description}
        />

        <div className="project-showcase">
          {SHOWCASE.map((project) => (
            <article key={project.id} className="project-showcase-item">
              <div className="project-showcase-meta">
                <span className="project-showcase-category">{project.category}</span>
                <span className="project-showcase-metric">{project.metrics[0]?.value}</span>
              </div>
              <h3 className="project-showcase-title">{project.title}</h3>
              <p className="project-showcase-outcome">{project.outcome}</p>
              <p className="project-showcase-detail">
                <strong>Challenge.</strong> {project.challenge}
              </p>
              <Link href={project.href} className="project-showcase-link group">
                Read case study
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
