"use client";

import { motion } from "framer-motion";

export default function GradientBlobs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        animate={{
          x: [0, 24, 0],
          y: [0, -16, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-primary/12 via-primary/5 to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -left-40 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-primary/8 to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-primary/6 blur-3xl"
      />
    </motion.div>
  );
}
