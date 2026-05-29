"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const testimonials = [
  {
    quote:
      "Astrenox delivered autonomous systems that exceeded our mission requirements. Their engineering depth is unmatched.",
    author: "Dr. Sarah Chen",
    role: "CTO, AeroDefense Corp",
    delay: 0,
  },
  {
    quote:
      "The computer vision pipeline they built transformed our surveillance capabilities. Truly frontier technology.",
    author: "Marcus Webb",
    role: "Director of Innovation, Nexus Aerospace",
    delay: 0.15,
  },
  {
    quote:
      "From concept to production in record time. Their team operates at the intersection of research and enterprise scale.",
    author: "Elena Vasquez",
    role: "VP Engineering, Orbital Systems",
    delay: 0.3,
  },
];

function FloatingCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: testimonial.delay,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.article
        animate={{
          y: [0, index % 2 === 0 ? -10 : 10, 0],
        }}
        transition={{
          duration: 5 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="glass-card p-8 lg:p-10 max-w-md h-full"
      >
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="w-1 h-1 rounded-full bg-primary/80" />
        ))}
      </div>
      <blockquote className="text-base lg:text-lg text-text/90 leading-relaxed font-light italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <footer className="mt-8 pt-6 border-t border-border/50">
        <p className="font-medium text-text text-sm">{testimonial.author}</p>
        <p className="text-xs text-muted mt-1 tracking-wide">{testimonial.role}</p>
      </footer>
      </motion.article>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-deep-purple/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title={
            <>
              Trusted by leaders shaping the{" "}
              <span className="font-editorial text-primary">future</span>
            </>
          }
          description="Partners who demand excellence in autonomous intelligence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <FloatingCard key={t.author} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
