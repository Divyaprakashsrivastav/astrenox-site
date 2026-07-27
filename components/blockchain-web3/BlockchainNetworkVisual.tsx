"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  Network,
  FileCode2,
  ShieldCheck,
  Wallet,
  Blocks,
  Link2,
  Coins,
  KeyRound,
} from "lucide-react";
import { EASE_PREMIUM } from "../v2/motion";

const NODES = [
  { label: "Validator", icon: ShieldCheck, x: "48%", y: "8%", delay: 0 },
  { label: "Smart Contract", icon: FileCode2, x: "12%", y: "28%", delay: 0.1 },
  { label: "Wallet", icon: Wallet, x: "78%", y: "26%", delay: 0.2 },
  { label: "Token", icon: Coins, x: "18%", y: "58%", delay: 0.3 },
  { label: "DID", icon: KeyRound, x: "72%", y: "56%", delay: 0.4 },
  { label: "Ledger", icon: Blocks, x: "45%", y: "42%", delay: 0.5 },
  { label: "Oracle", icon: Link2, x: "8%", y: "82%", delay: 0.6 },
  { label: "DApp", icon: Network, x: "68%", y: "80%", delay: 0.7 },
] as const;

const EDGES = [
  "M 210 40 L 80 110",
  "M 210 40 L 320 105",
  "M 80 110 L 190 165",
  "M 320 105 L 190 165",
  "M 190 165 L 90 220",
  "M 190 165 L 300 215",
  "M 90 220 L 60 310",
  "M 300 215 L 290 305",
  "M 190 165 L 60 310",
  "M 190 165 L 290 305",
];

function BlockchainNetworkVisual() {
  return (
    <div className="bc-visual" aria-hidden>
      <div className="bc-visual-glow" />
      <div className="bc-visual-ring bc-visual-ring--a" />
      <div className="bc-visual-ring bc-visual-ring--b" />

      <svg className="bc-visual-lines" viewBox="0 0 400 360" fill="none">
        {EDGES.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke="rgba(52, 211, 153, 0.28)"
            strokeWidth="1.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.35,
              delay: 0.25 + i * 0.06,
              ease: EASE_PREMIUM,
            }}
          />
        ))}
        <motion.circle
          cx="190"
          cy="165"
          r="18"
          fill="rgba(124, 58, 237, 0.2)"
          stroke="rgba(167, 139, 250, 0.55)"
          strokeWidth="1.2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE_PREMIUM }}
        />
      </svg>

      {NODES.map((node) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            className="bc-node mvp-glass"
            style={{ left: node.x, top: node.y }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + node.delay,
              ease: EASE_PREMIUM,
            }}
          >
            <span className="bc-node-icon">
              <Icon size={13} />
            </span>
            <span>{node.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default memo(BlockchainNetworkVisual);
