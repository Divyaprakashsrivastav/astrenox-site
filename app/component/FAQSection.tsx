"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import FAQAccordion, { type FAQItem } from "./faq/FAQAccordion";

const faqItems: FAQItem[] = [
  {
    question: "What tech stack do you support?",
    answer:
      "We work across modern enterprise stacks — Next.js, React, Node.js, Python, cloud-native infrastructure on AWS/GCP/Azure, and AI/ML pipelines with PyTorch, TensorFlow, and custom model serving. Every engagement is tailored to your existing architecture.",
  },
  {
    question: "How does payment work?",
    answer:
      "We offer flexible engagement models: fixed-scope milestones, monthly retainers, or hybrid sprint-based billing. Invoices are issued per delivery phase with transparent reporting — no hidden fees or scope creep without approval.",
  },
  {
    question: "How is your company different from a traditional agency?",
    answer:
      "We are an AI-native engineering partner, not a body shop. Our teams ship production-grade autonomous systems weekly, with deep expertise in aerospace, robotics, and enterprise AI — backed by research-grade engineering and ISO-certified processes.",
  },
  {
    question: "Can you integrate with enterprise systems securely?",
    answer:
      "Yes. We design for SOC 2, ISO 27001, and enterprise SSO/SAML requirements. All integrations follow zero-trust principles with encrypted data flows, audit logging, and compliance-ready deployment pipelines.",
  },
  {
    question: "How long does delivery usually take?",
    answer:
      "Most clients see their first production deployment within 4–6 weeks. Full platform rollouts typically span 3–6 months depending on complexity, with continuous weekly delivery throughout the engagement.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-28 lg:py-40 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 xl:gap-24 items-start">
          {/* Left — editorial CTA column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block text-xs font-medium text-primary tracking-[0.2em] uppercase mb-6">
              FAQ
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-semibold text-text tracking-tight leading-[1.12]">
              Welcome to the{" "}
              <span className="font-editorial text-primary">AI powered</span> era
              of software delivery.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-md">
              Everything you need to know about partnering with Astreanox — from
              tech stacks and security to delivery timelines and engagement models.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="btn-dark mt-10 inline-flex"
            >
              <Calendar size={16} strokeWidth={1.5} />
              Book a Call
            </motion.a>
          </motion.div>

          {/* Right — accordion */}
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
