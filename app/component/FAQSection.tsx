"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FAQAccordion, { type FAQItem } from "./faq/FAQAccordion";
import LiquidButton from "./ui/LiquidButton";

const faqItems: FAQItem[] = [
  {
    question: "What tech stack do you support?",
    answer:
      "We work across modern enterprise stacks — Next.js, React, Python, cloud-native infrastructure on AWS/GCP/Azure, and AI/ML pipelines with PyTorch and custom model serving. Every engagement is tailored to your architecture.",
  },
  {
    question: "How does payment work?",
    answer:
      "We offer fixed-scope milestones, monthly retainers, or hybrid sprint-based billing. Invoices are issued per delivery phase with transparent reporting.",
  },
  {
    question: "How is Astrenox different from a traditional agency?",
    answer:
      "We are an AI-native engineering partner. Our teams ship production-grade autonomous systems weekly, with deep expertise in aerospace, robotics, and enterprise AI.",
  },
  {
    question: "Can you integrate with enterprise systems securely?",
    answer:
      "Yes. We design for SOC 2, ISO 27001, and enterprise SSO requirements with zero-trust principles and audit logging.",
  },
  {
    question: "How long does delivery usually take?",
    answer:
      "Most clients see their first production deployment within 4–6 weeks. Full platform rollouts typically span 3–6 months with continuous weekly delivery.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="section-shell relative bg-background">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted mb-5">
              FAQ
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-text tracking-tight leading-[1.12]">
              Answers for enterprise teams
            </h2>
            <p className="mt-5 text-muted leading-relaxed font-light max-w-md">
              Everything you need to know about partnering with Astrenox — from
              security and stacks to delivery timelines.
            </p>
            <div className="mt-10">
              <LiquidButton href="#contact" variant="primary">
                Book a call
                <ArrowRight size={16} strokeWidth={1.5} />
              </LiquidButton>
            </div>
          </motion.div>
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
