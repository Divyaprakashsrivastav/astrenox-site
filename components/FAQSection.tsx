"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FAQAccordion from "./faq/FAQAccordion";
import LiquidButton from "./ui/LiquidButton";
import { faqItems, faqSection } from "@/app/content/astrenox-content";

export default function FAQSection() {
  return (
    <section id="faq" className="section-shell relative bg-background">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted mb-5">
              {faqSection.label}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-text tracking-tight leading-[1.12]">
              {faqSection.title}
            </h2>
            <p className="mt-5 text-muted leading-relaxed font-light max-w-md">
              {faqSection.description}
            </p>
            <div className="mt-10 space-y-4">
              <LiquidButton
                href={`mailto:${faqSection.email}`}
                variant="primary"
              >
                {faqSection.cta}
                <ArrowRight size={16} strokeWidth={1.5} />
              </LiquidButton>
              <p className="text-sm text-muted">{faqSection.stillHaveQuestions}</p>
            </div>
          </motion.div>
          <FAQAccordion items={[...faqItems]} />
        </div>
      </div>
    </section>
  );
}
