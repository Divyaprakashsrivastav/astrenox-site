"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "../ui/FadeIn";
import { researchLibrary } from "@/app/content/site-pages";

export default function ResearchLibraryGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {researchLibrary.map((item) => (
        <motion.article
          key={item.id}
          variants={staggerItem}
          className="premium-card p-6 flex flex-col h-full"
        >
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              {item.field}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wide text-muted px-2.5 py-1 rounded-full border border-border">
              {item.status}
            </span>
          </div>
          <h3 className="font-heading text-xl font-semibold text-text mb-3">
            {item.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed flex-1">{item.abstract}</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            {item.cta}
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
}
