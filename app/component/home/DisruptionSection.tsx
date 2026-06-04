"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { disruptionHome } from "@/app/content/astrenox-content";

export default function DisruptionSection() {
  return (
    <section className="section-shell relative bg-background">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="premium-card card-pad lg:card-pad-lg text-center"
        >
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-text tracking-tight max-w-3xl mx-auto">
            {disruptionHome.title}
          </h2>
          <p className="mt-5 text-muted leading-relaxed max-w-2xl mx-auto">
            {disruptionHome.description}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            Request a consult
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
