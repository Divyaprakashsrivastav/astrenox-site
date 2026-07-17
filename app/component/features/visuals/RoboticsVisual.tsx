"use client";

import { motion } from "framer-motion";
import type { VisualProps } from "../FeatureCardVisual";
import { COLORS, loop } from "./motion";
import { VisualSvgFrame } from "./VisualSvgFrame";

const BASE_X = 100;
const BASE_Y = 132;

export function RoboticsVisual({ active, reducedMotion }: VisualProps) {
  const speed = active ? 0.7 : 1;

  return (
    <VisualSvgFrame viewBox="0 0 320 160">
      <rect x={12} y={138} width={296} height={5} rx={2} fill={COLORS.lineMuted} />
      <line x1={12} y1={143} x2={308} y2={143} stroke={COLORS.line} strokeWidth={0.75} />

      {/* Conveyor belt marks */}
      {[40, 80, 120, 160, 200, 240, 280].map((x) => (
        <motion.line
          key={x}
          x1={x}
          y1={140}
          x2={x}
          y2={146}
          stroke={COLORS.line}
          strokeWidth={0.75}
          strokeOpacity={0.5}
          animate={reducedMotion ? {} : { y1: [140, 138, 140] }}
          transition={loop(reducedMotion, {
            duration: 1.8 * speed,
            delay: x * 0.004,
            ease: "easeInOut",
          })}
        />
      ))}

      {/* Moving object on belt */}
      <motion.g
        animate={
          reducedMotion
            ? { x: 200 }
            : { x: [200, 130, 200, 260, 200] }
        }
        transition={loop(reducedMotion, {
          duration: 5 * speed,
          ease: "easeInOut",
        })}
      >
        <rect
          x={-12}
          y={118}
          width={24}
          height={18}
          rx={2}
          fill={COLORS.fill}
          stroke={COLORS.primary}
          strokeWidth={1}
        />
        <motion.rect
          x={-8}
          y={122}
          width={16}
          height={10}
          rx={1}
          fill={COLORS.secondary}
          fillOpacity={0.25}
          animate={reducedMotion ? {} : { fillOpacity: [0.15, 0.35, 0.15] }}
          transition={loop(reducedMotion, { duration: 2 * speed })}
        />
      </motion.g>

      {/* Robotic arm, pick and place */}
      <g transform={`translate(${BASE_X}, ${BASE_Y})`}>
        <rect
          x={-14}
          y={-8}
          width={28}
          height={8}
          rx={2}
          fill={COLORS.lineMuted}
          stroke={COLORS.line}
          strokeWidth={0.75}
        />
        <motion.g
          style={{ transformOrigin: "0px 0px" }}
          animate={
            reducedMotion
              ? { rotate: -25 }
              : { rotate: active ? [-42, -8, -42] : [-35, -18, -35] }
          }
          transition={loop(reducedMotion, {
            duration: 3.4 * speed,
            ease: "easeInOut",
          })}
        >
          <line
            x1={0}
            y1={0}
            x2={52}
            y2={-46}
            stroke={COLORS.primary}
            strokeWidth={2.75}
            strokeLinecap="round"
          />
          <circle cx={0} cy={0} r={4.5} fill={COLORS.fill} stroke={COLORS.primary} strokeWidth={1.25} />
          <motion.g
            transform="translate(52, -46)"
            style={{ transformOrigin: "0px 0px" }}
            animate={
              reducedMotion
                ? { rotate: 38 }
                : { rotate: active ? [18, 52, 18] : [28, 42, 28] }
            }
            transition={loop(reducedMotion, {
              duration: 2.8 * speed,
              delay: 0.1,
              ease: "easeInOut",
            })}
          >
            <line
              x1={0}
              y1={0}
              x2={42}
              y2={-8}
              stroke={COLORS.primary}
              strokeWidth={2.25}
              strokeLinecap="round"
            />
            <circle cx={0} cy={0} r={3.5} fill={COLORS.secondary} stroke={COLORS.primary} strokeWidth={1} />
            <motion.g
              transform="translate(42, -8)"
              style={{ transformOrigin: "0px 0px" }}
              animate={
                reducedMotion
                  ? { rotate: -8 }
                  : { rotate: active ? [-22, 12, -22] : [-15, 0, -15] }
              }
              transition={loop(reducedMotion, {
                duration: 2.2 * speed,
                delay: 0.2,
                ease: "easeInOut",
              })}
            >
              <line x1={0} y1={0} x2={18} y2={4} stroke={COLORS.primary} strokeWidth={1.5} strokeLinecap="round" />
              <path
                d="M 12 2 L 22 6 L 12 10 Z"
                fill={COLORS.fill}
                stroke={COLORS.primary}
                strokeWidth={0.85}
              />
              {/* Gripper object */}
              <motion.rect
                x={14}
                y={-4}
                width={10}
                height={10}
                rx={1}
                fill={COLORS.fill}
                stroke={COLORS.secondary}
                strokeWidth={0.85}
                animate={
                  reducedMotion
                    ? {}
                    : {
                        y: [-4, -18, -4],
                        opacity: [1, 1, 0.4, 1],
                      }
                }
                transition={loop(reducedMotion, {
                  duration: 3.4 * speed,
                  ease: "easeInOut",
                })}
              />
            </motion.g>
          </motion.g>
        </motion.g>
      </g>

      {/* Secondary arm silhouette */}
      <g transform="translate(228, 132)" opacity={0.45}>
        <motion.g
          style={{ transformOrigin: "0px 0px" }}
          animate={reducedMotion ? { rotate: 12 } : { rotate: [8, 20, 8] }}
          transition={loop(reducedMotion, { duration: 4.5 * speed, ease: "easeInOut" })}
        >
          <line x1={0} y1={0} x2={36} y2={-32} stroke={COLORS.line} strokeWidth={1.75} strokeLinecap="round" />
          <line x1={36} y1={-32} x2={58} y2={-26} stroke={COLORS.line} strokeWidth={1.25} strokeLinecap="round" />
        </motion.g>
      </g>
    </VisualSvgFrame>
  );
}
