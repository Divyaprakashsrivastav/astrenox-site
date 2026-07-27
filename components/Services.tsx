"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Plane,
  Rocket,
  Bot,
  Navigation,
  Code2,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const services = [
  {
    icon: Brain,
    title: "AI Systems",
    description:
      "Advanced machine learning and neural architectures for real-time decision making and predictive intelligence.",
  },
  {
    icon: Plane,
    title: "Drone Technology",
    description:
      "Next-generation UAV platforms with autonomous flight, swarm coordination, and mission-critical reliability.",
  },
  {
    icon: Rocket,
    title: "Aerospace Research",
    description:
      "Cutting-edge research in propulsion, avionics, and space systems for the next frontier of exploration.",
  },
  {
    icon: Bot,
    title: "Robotics Solutions",
    description:
      "Intelligent robotic systems designed for precision, adaptability, and seamless human-machine collaboration.",
  },
  {
    icon: Navigation,
    title: "Autonomous Navigation",
    description:
      "SLAM, path planning, and sensor fusion for fully autonomous operation in complex environments.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Enterprise-grade software platforms built for scale, security, and mission-critical performance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <SectionHeader
          label="What We Do"
          title="Intelligent solutions for complex challenges"
          description="From concept to deployment, we engineer autonomous systems that push the boundaries of what's possible."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 transition-all duration-300 group cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300"
              >
                <service.icon
                  size={22}
                  className="text-primary"
                  strokeWidth={1.75}
                />
              </motion.div>
              <h3 className="font-heading text-xl font-semibold text-text mb-3">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
