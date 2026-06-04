"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { site } from "@/app/content/astrenox-content";

export default function NewsTicker() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-center gap-2 text-[11px]">
        <span className="font-semibold uppercase tracking-[0.2em] text-primary">News</span>
        <span className="text-muted">{site.news}</span>
        <Link href="/contact" className="text-primary hover:underline font-medium ml-1">
          Request access →
        </Link>
      </div>
    </motion.div>
  );
}
