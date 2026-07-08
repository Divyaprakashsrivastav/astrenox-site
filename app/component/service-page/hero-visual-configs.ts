import {
  UserCircle,
  Users,
  Code2,
  Brain,
  Wrench,
  Network,
  FileCode2,
  Link2,
  Cloud,
  Server,
  Plug,
  Activity,
  Layers,
  GitBranch,
  Palette,
  Rocket,
  Shield,
  Container,
  Lock,
  LineChart,
  Bug,
  Gauge,
  ClipboardCheck,
  BookOpen,
  Scale,
  Grid3x3,
} from "lucide-react";
import type { HeroVisualCard } from "./HeroVisual";

const CONNECTIONS = [
  "M 120 80 L 280 120",
  "M 280 120 L 340 200",
  "M 120 80 L 80 220",
  "M 80 220 L 200 300",
  "M 340 200 L 300 340",
  "M 200 300 L 300 340",
  "M 280 120 L 80 220",
];

export const heroVisualConfigs = {
  talent: {
    cards: [
      { label: "Tech Lead", icon: UserCircle, className: "mvp-dashboard-card--task", delay: 0 },
      { label: "Frontend", icon: Code2, className: "mvp-dashboard-card--api", delay: 0.15 },
      { label: "Backend", icon: Server, className: "mvp-dashboard-card--analytics", delay: 0.3 },
      { label: "ML Engineer", icon: Brain, className: "mvp-dashboard-card--deploy", delay: 0.45 },
      { label: "DevOps", icon: Wrench, className: "mvp-dashboard-card--db", delay: 0.6 },
      { label: "Skill Graph", icon: Network, className: "mvp-dashboard-card--timeline", delay: 0.75 },
    ] satisfies HeroVisualCard[],
    connections: CONNECTIONS,
  },
  blockchain: {
    cards: [
      { label: "Node A", icon: Network, className: "mvp-dashboard-card--task", delay: 0 },
      { label: "Node B", icon: Network, className: "mvp-dashboard-card--api", delay: 0.15 },
      { label: "Smart Contract", icon: FileCode2, className: "mvp-dashboard-card--analytics", delay: 0.3 },
      { label: "Ledger", icon: Layers, className: "mvp-dashboard-card--deploy", delay: 0.45 },
      { label: "Consensus", icon: Link2, className: "mvp-dashboard-card--db", delay: 0.6 },
      { label: "Chain Sync", icon: GitBranch, className: "mvp-dashboard-card--timeline", delay: 0.75 },
    ] satisfies HeroVisualCard[],
    connections: CONNECTIONS,
  },
  it: {
    cards: [
      { label: "Cloud", icon: Cloud, className: "mvp-dashboard-card--task", delay: 0 },
      { label: "Servers", icon: Server, className: "mvp-dashboard-card--api", delay: 0.15 },
      { label: "API Gateway", icon: Plug, className: "mvp-dashboard-card--analytics", delay: 0.3 },
      { label: "Monitoring", icon: Activity, className: "mvp-dashboard-card--deploy", delay: 0.45 },
      { label: "Database", icon: Layers, className: "mvp-dashboard-card--db", delay: 0.6 },
      { label: "Dashboard", icon: LineChart, className: "mvp-dashboard-card--timeline", delay: 0.75 },
    ] satisfies HeroVisualCard[],
    connections: CONNECTIONS,
  },
  aiProduct: {
    cards: [
      { label: "Architecture", icon: Layers, className: "mvp-dashboard-card--task", delay: 0 },
      { label: "AI Pipeline", icon: Brain, className: "mvp-dashboard-card--api", delay: 0.15 },
      { label: "Design System", icon: Palette, className: "mvp-dashboard-card--analytics", delay: 0.3 },
      { label: "CI/CD", icon: GitBranch, className: "mvp-dashboard-card--deploy", delay: 0.45 },
      { label: "API Layer", icon: Plug, className: "mvp-dashboard-card--db", delay: 0.6 },
      { label: "Deploy", icon: Rocket, className: "mvp-dashboard-card--timeline", delay: 0.75 },
    ] satisfies HeroVisualCard[],
    connections: CONNECTIONS,
  },
  devops: {
    cards: [
      { label: "CI/CD", icon: GitBranch, className: "mvp-dashboard-card--task", delay: 0 },
      { label: "Kubernetes", icon: Container, className: "mvp-dashboard-card--api", delay: 0.15 },
      { label: "Security", icon: Shield, className: "mvp-dashboard-card--analytics", delay: 0.3 },
      { label: "IAM", icon: Lock, className: "mvp-dashboard-card--deploy", delay: 0.45 },
      { label: "Metrics", icon: LineChart, className: "mvp-dashboard-card--db", delay: 0.6 },
      { label: "Alerts", icon: Activity, className: "mvp-dashboard-card--timeline", delay: 0.75 },
    ] satisfies HeroVisualCard[],
    connections: CONNECTIONS,
  },
  quality: {
    cards: [
      { label: "Test Suite", icon: ClipboardCheck, className: "mvp-dashboard-card--task", delay: 0 },
      { label: "Automation", icon: Code2, className: "mvp-dashboard-card--api", delay: 0.15 },
      { label: "Bug Tracker", icon: Bug, className: "mvp-dashboard-card--analytics", delay: 0.3 },
      { label: "Performance", icon: Gauge, className: "mvp-dashboard-card--deploy", delay: 0.45 },
      { label: "Coverage", icon: LineChart, className: "mvp-dashboard-card--db", delay: 0.6 },
      { label: "Release Gate", icon: Shield, className: "mvp-dashboard-card--timeline", delay: 0.75 },
    ] satisfies HeroVisualCard[],
    connections: CONNECTIONS,
  },
  coe: {
    cards: [
      { label: "Knowledge Hub", icon: BookOpen, className: "mvp-dashboard-card--task", delay: 0 },
      { label: "AI Governance", icon: Scale, className: "mvp-dashboard-card--api", delay: 0.15 },
      { label: "Capability Matrix", icon: Grid3x3, className: "mvp-dashboard-card--analytics", delay: 0.3 },
      { label: "Standards", icon: Shield, className: "mvp-dashboard-card--deploy", delay: 0.45 },
      { label: "Enablement", icon: Users, className: "mvp-dashboard-card--db", delay: 0.6 },
      { label: "Framework", icon: Layers, className: "mvp-dashboard-card--timeline", delay: 0.75 },
    ] satisfies HeroVisualCard[],
    connections: CONNECTIONS,
  },
} as const;

export type HeroVisualVariant = keyof typeof heroVisualConfigs;
