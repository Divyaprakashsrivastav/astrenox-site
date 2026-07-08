"use client";

import { memo } from "react";
import { motion } from "framer-motion";

type NavMegaBackdropProps = {
  onClose: () => void;
  onHover: () => void;
};

function NavMegaBackdrop({ onClose, onHover }: NavMegaBackdropProps) {
  return (
    <motion.div
      className="dock-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClose}
      onMouseEnter={onHover}
      aria-hidden
    />
  );
}

export default memo(NavMegaBackdrop);
