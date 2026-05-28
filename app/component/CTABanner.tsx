"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden border border-border bg-surface"
        >
          <div className="absolute inset-0 grid-background opacity-60 pointer-events-none" />
          <motion.div
            animate={{ opacity: [0.4, 0.65, 0.4], x: [0, 12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3], x: [0, -10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/8 blur-3xl pointer-events-none"
          />

          <div className="relative px-8 py-14 sm:px-14 sm:py-16 lg:px-20 lg:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08, duration: 0.5 }}
                className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4"
              >
                Start your project
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.14, duration: 0.55 }}
                className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-text tracking-tight leading-[1.15]"
              >
                Ready to ship{" "}
                <span className="font-editorial text-primary">intelligent</span>{" "}
                systems at enterprise scale?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.55 }}
                className="mt-4 text-base text-muted leading-relaxed"
              >
                Partner with our engineering team to move from strategy to
                production — with clarity, velocity, and long-term autonomy.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.26, duration: 0.55 }}
              className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 shrink-0"
            >
              <a href="#contact" className="btn-dark group justify-center">
                <Calendar size={16} strokeWidth={1.5} />
                Book a Call
              </a>
              <a href="#projects" className="btn-outline group justify-center">
                Explore Projects
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
