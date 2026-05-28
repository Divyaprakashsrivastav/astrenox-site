"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Plane,
  Bot,
  BarChart3,
  Rocket,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { staggerContainer, staggerItem } from "./ui/FadeIn";
import {
  NetworkVisual,
  AutonomousVisual,
  DroneVisual,
  RoboticsVisual,
  AnalyticsVisual,
  AerospaceVisual,
  DashboardVisual,
} from "./features/FeatureVisuals";

const features = [
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Intelligent orchestration layers that automate complex enterprise workflows with precision and scale.",
    icon: Brain,
    visual: NetworkVisual,
    className: "md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-2 min-h-[280px] lg:min-h-[320px]",
    large: true,
  },
  {
    id: "autonomous-systems",
    title: "Autonomous Systems",
    description:
      "Self-governing platforms engineered for real-time decision-making in mission-critical environments.",
    icon: Cpu,
    visual: AutonomousVisual,
    className: "lg:col-span-2 min-h-[200px]",
    large: false,
  },
  {
    id: "drone-intelligence",
    title: "Drone Intelligence",
    description:
      "Advanced UAV intelligence with swarm coordination and aerial data fusion.",
    icon: Plane,
    visual: DroneVisual,
    className: "lg:col-span-2 min-h-[200px]",
    large: false,
  },
  {
    id: "robotics-workflow",
    title: "Robotics Workflow",
    description:
      "End-to-end robotic process pipelines built for precision manufacturing and field operations.",
    icon: Bot,
    visual: RoboticsVisual,
    className: "lg:col-span-2 min-h-[200px]",
    large: false,
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    description:
      "Forecasting engines powered by deep learning for operational intelligence.",
    icon: BarChart3,
    visual: AnalyticsVisual,
    className: "lg:col-span-2 min-h-[200px]",
    large: false,
  },
  {
    id: "aerospace-research",
    title: "Aerospace Research",
    description:
      "Frontier R&D in propulsion, avionics, and next-generation space systems for enterprise and defense partners.",
    icon: Rocket,
    visual: AerospaceVisual,
    className: "md:col-span-2 lg:col-span-6 min-h-[180px]",
    large: true,
    wide: true,
  },
];

function FeatureCard({
  feature,
}: {
  feature: (typeof features)[number];
}) {
  const Visual = feature.visual;
  const Icon = feature.icon;

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -4, scale: 1.005 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`premium-card group relative flex flex-col overflow-hidden p-6 lg:p-8 ${feature.className}`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/8 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 rounded-xl border border-border flex items-center justify-center bg-background group-hover:border-primary/40 transition-colors duration-400"
          >
            <Icon size={18} className="text-primary" strokeWidth={1.5} />
          </motion.div>
          <h3 className="font-heading text-lg lg:text-xl font-semibold text-text tracking-tight">
            {feature.title}
          </h3>
        </div>
        {feature.large && !feature.wide && (
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:block opacity-60"
          >
            <DashboardVisual />
          </motion.div>
        )}
      </div>

      <p className="relative z-10 text-sm text-muted leading-relaxed max-w-md mb-6">
        {feature.description}
      </p>

      <div
        className={`relative z-10 mt-auto flex items-center justify-center ${
          feature.large && !feature.wide ? "min-h-[140px]" : "min-h-[80px]"
        } ${feature.wide ? "min-h-[60px]" : ""}`}
      >
        <div className="w-full max-w-full opacity-80 group-hover:opacity-100 transition-opacity duration-400">
          <Visual />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.article>
  );
}

export default function Features() {
  return (
    <section id="services" className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Platform Capabilities"
          title={
            <>
              Enterprise intelligence,{" "}
              <span className="font-editorial text-primary">engineered</span> for
              scale
            </>
          }
          description="A unified platform spanning automation, autonomy, and aerospace — designed for teams building mission-critical AI systems."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-5"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
