"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { smartParkingPageContent as c } from "@/app/content/smart-parking-page-content";
import { EASE_PREMIUM } from "../v2/motion";
import SptpHeroBackdrop from "./SptpHeroBackdrop";

export default function SptpHero() {
  return (
    <section className="sptp-hero" aria-labelledby="sptp-hero-title">
      <SptpHeroBackdrop />
      <div className="sptp-inner sptp-hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_PREMIUM }}
        >
          <p className="sptp-label">Infrastructure Solutions</p>
          <h1 id="sptp-hero-title" className="sptp-hero-title">
            {c.pageTitle}
          </h1>
          <p className="sptp-hero-lead">{c.heroIntro}</p>
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
  );
}
