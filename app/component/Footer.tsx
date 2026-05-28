"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SocialIcons from "./footer/SocialIcons";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const brandY = useTransform(scrollYProgress, [0, 1], [28, -12]);
  const brandDrift = useTransform(scrollYProgress, [0, 1], [0, -6]);

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-[#0c0c0c] text-white"
    >
      {/* Layered depth / lighting */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,rgba(111,163,184,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_45%_at_80%_100%,rgba(111,163,184,0.08),transparent_50%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_40%,rgba(111,163,184,0.06),transparent_45%)]"
        aria-hidden
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#15191e] via-[#0f1114] to-[#0a0a0a]" aria-hidden />

      {/* Ambient glow */}
      <motion.div
        animate={{
          opacity: [0.22, 0.38, 0.22],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[min(900px,110vw)] h-[380px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(111,163,184,0.18)_0%,transparent_68%)] blur-3xl pointer-events-none"
        aria-hidden
      />
      <motion.div
        animate={{ opacity: [0.12, 0.22, 0.12], x: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-[-20%] w-[55%] h-[45%] rounded-full bg-[radial-gradient(circle,rgba(111,163,184,0.12)_0%,transparent_62%)] blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.14] to-transparent" />

      {/* Giant cinematic brand — intentional crop, ~8% effective presence */}
      <motion.div
        style={{ y: brandY }}
        className="absolute inset-x-0 bottom-0 pointer-events-none select-none overflow-hidden z-0 min-h-[45%]"
        aria-hidden
      >
        <motion.div
          style={{ y: brandDrift }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex justify-center"
        >
          <p
            className="relative font-heading font-semibold leading-[0.82] tracking-[-0.04em] text-center whitespace-nowrap translate-y-[22%] sm:translate-y-[26%] text-[clamp(4.5rem,20vw,18rem)]"
            style={{
              opacity: 0.09,
              color: "transparent",
              backgroundImage:
                "linear-gradient(185deg, rgba(180,208,218,0.95) 0%, rgba(111,163,184,0.45) 38%, rgba(90,143,163,0.12) 72%, transparent 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              filter: "blur(0.6px)",
              WebkitTextStroke: "0.5px rgba(111,163,184,0.06)",
              maskImage:
                "linear-gradient(to bottom, black 0%, black 55%, transparent 92%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 55%, transparent 92%)",
            }}
          >
            ASTREANOX
          </p>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/85 to-transparent"
            aria-hidden
          />
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-20 sm:pt-24 pb-12 lg:pt-28 lg:pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,14rem)_1fr_minmax(0,12rem)] gap-12 lg:gap-10 xl:gap-14 items-start"
        >
          {/* Logo — premium lockup */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3 lg:pr-4">
            <a
              href="#"
              className="group inline-flex flex-col items-start gap-1 w-fit"
            >
              <span className="font-heading text-2xl sm:text-[1.65rem] font-semibold text-white tracking-[-0.02em] leading-none">
                Astreanox
              </span>
              <span className="h-px w-8 bg-gradient-to-r from-primary/70 to-transparent group-hover:w-12 transition-all duration-500 ease-out" />
            </a>
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase text-white/40 max-w-[11rem] leading-relaxed">
              Enterprise AI systems
            </p>
          </motion.div>

          {/* Navigation — centered column, cleaner rhythm */}
          <motion.nav
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3.5 sm:gap-x-8 sm:gap-y-4 lg:px-4"
            aria-label="Footer"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.12 + i * 0.035,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative text-[13px] font-medium tracking-[0.01em] text-white/52 hover:text-white/92 transition-colors duration-400 ease-out group py-0.5 px-0.5"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0.5 right-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              </motion.a>
            ))}
          </motion.nav>

          {/* Social */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-end pt-1">
            <SocialIcons />
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="relative my-14 lg:my-16 h-px origin-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent opacity-60 blur-[1px]" />
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-6"
        >
          <p className="text-[13px] text-white/42 leading-relaxed font-medium tracking-wide text-center sm:text-left order-2 sm:order-1">
            &copy; {new Date().getFullYear()} Astreanox. All rights reserved.
          </p>
          <p className="text-[11px] sm:text-xs text-white/32 tracking-[0.2em] uppercase text-center sm:text-right order-1 sm:order-2">
            Intelligent autonomous systems
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
