"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Bot,
  Users,
  Monitor,
  Box,
  Cloud,
  Code2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import { Stagger, StaggerItem } from "../design/FadeUp";
import { homeServices } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";

const icons: LucideIcon[] = [Sparkles, Bot, Users, Monitor, Box, Cloud, Code2];

export default function HomeServices() {
  return (
    <DesignSection id="services">
      <DesignHeader
        label={homeServices.label}
        title={homeServices.title}
        description={homeServices.description}
      />

      <Stagger className="svc-arch-grid">
        {homeServices.items.map((service, i) => {
          const Icon = icons[i] ?? Sparkles;
          return (
            <StaggerItem key={service.id}>
              <motion.article
                className="svc-arch-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                data-cursor-hover
              >
                <Link href={service.href} className="svc-arch-link">
                  <span className="svc-arch-border" aria-hidden />
                  <div className="svc-arch-icon">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="svc-arch-title">{service.title}</h3>
                  <p className="svc-arch-desc">{service.description}</p>
                  <p className="svc-arch-metric">{service.metric}</p>
                  <span className="svc-arch-cta">
                    Explore capability <ArrowRight size={13} />
                  </span>
                </Link>
              </motion.article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </DesignSection>
  );
}
