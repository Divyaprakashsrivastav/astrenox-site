export type ServiceIconName =
  | "Zap"
  | "Users"
  | "ShieldCheck"
  | "Layers"
  | "Palette"
  | "Monitor"
  | "Server"
  | "Cloud"
  | "Brain"
  | "Target"
  | "Lock"
  | "GitBranch"
  | "TestTube2"
  | "Blocks"
  | "Building2"
  | "Network"
  | "Code"
  | "Database"
  | "Workflow"
  | "BarChart3"
  | "FileCheck"
  | "BookOpen"
  | "Scale"
  | "Cpu"
  | "LineChart"
  | "Rocket"
  | "Globe"
  | "Briefcase"
  | "HeartPulse"
  | "Factory"
  | "Landmark"
  | "Truck"
  | "Gauge";

export type ServicePageContent = {
  metadata: { title: string; description: string };
  hero: {
    label: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
  overview: {
    title: string;
    paragraphs: string[];
  };
  capabilities: {
    label: string;
    title: string;
    items: Array<{ title: string; description: string; icon: ServiceIconName }>;
  };
  workflow: {
    id: string;
    label: string;
    title: string;
    steps: Array<{ name: string; description: string }>;
  };
  stack: { label: string; title: string; items: string[] };
  outcomes: {
    label: string;
    title: string;
    items: Array<{ value: number; suffix: string; label: string }>;
  };
  projects: {
    label: string;
    title: string;
    items: Array<{
      name: string;
      industry: string;
      timeline: string;
      stack: string[];
      outcome: string;
    }>;
  };
  industries: {
    label: string;
    title: string;
    items: Array<{ name: string; icon: ServiceIconName }>;
  };
  testimonials: {
    label: string;
    title: string;
    items: Array<{ quote: string; author: string; role: string }>;
  };
  faq: {
    label: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
};
