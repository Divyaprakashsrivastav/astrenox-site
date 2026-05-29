"use client";

import { motion } from "framer-motion";

interface FooterNavLinkProps {
  href: string;
  label: string;
  index: number;
}

export default function FooterNavLink({ href, label, index }: FooterNavLinkProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.12 + index * 0.04,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative px-1 py-1 text-sm font-medium text-[#a8b0c0] hover:text-white transition-colors duration-300"
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 right-0 h-px origin-left scale-x-0 bg-[#c97b84]/70 transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </motion.a>
  );
}
