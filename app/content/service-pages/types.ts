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

export type ServicePageChapterCta = {
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  primaryCta: string;
  secondaryCta?: string;
  tertiaryCta?: string;
  primaryHref: string;
  secondaryHref?: string;
  tertiaryHref?: string;
};

export type ServicePageChapter = {
  id: string;
  label?: string;
  title: string;
  subtitle?: string;
  heroCtas?: Array<{ label: string; href: string }>;
  overview?: {
    title?: string;
    paragraphs: string[];
  };
  contentSections?: Array<{
    title?: string;
    paragraphs?: string[];
    tags?: string[];
  }>;
  methodology?: {
    title: string;
    intro?: string;
    items: Array<{ title: string; description: string }>;
  };
  featureItems?: {
    label?: string;
    title: string;
    intro?: string;
    items: Array<{ title: string; description: string }>;
  };
  capabilities?: {
    id?: string;
    label?: string;
    title: string;
    intro?: string;
    items: Array<{
      title: string;
      description?: string;
      paragraphs?: string[];
      enables?: string[];
      icon: ServiceIconName;
    }>;
  };
  tags?: string[];
  integrations?: {
    label?: string;
    title: string;
    intro?: string;
    items: Array<{
      title: string;
      paragraphs?: string[];
      bullets?: string[];
      afterBullets?: string[];
    }>;
  };
  workflow?: {
    id?: string;
    label?: string;
    title: string;
    intro?: string;
    steps: Array<{ name: string; description: string }>;
  };
  impact?: {
    label?: string;
    title: string;
    intro?: string;
    items: Array<{ title: string; description: string }>;
  };
  cta?: ServicePageChapterCta;
};

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
    trustLine?: string;
  };
  intro?: {
    paragraphs: string[];
  };
  overview?: {
    title?: string;
    paragraphs: string[];
  };
  engineeringCapabilities?: {
    label: string;
    title: string;
    intro?: string;
    items: Array<{
      capability: string;
      technicalFocus: string;
      businessOutcome: string;
    }>;
  };
  capabilities?: {
    id?: string;
    label: string;
    title: string;
    intro?: string;
    items: Array<{
      title: string;
      description?: string;
      paragraphs?: string[];
      enables?: string[];
      icon: ServiceIconName;
    }>;
  };
  chapters?: ServicePageChapter[];
  workflow?: {
    id: string;
    label: string;
    title: string;
    intro?: string;
    steps: Array<{ name: string; description: string }>;
  };
  stack?: {
    label: string;
    title: string;
    intro?: string;
    items: Array<string | { title: string; description: string; icon?: ServiceIconName }>;
  };
  serviceOfferings?: {
    label: string;
    title: string;
    intro?: string;
    items: Array<{ service: string; outcome: string }>;
  };
  interventions?: {
    label: string;
    title: string;
    intro?: string;
    items: Array<{ title: string; description: string; icon: ServiceIconName }>;
  };
  deliverables?: {
    label: string;
    title: string;
    intro?: string;
    items: Array<{ title: string; description: string; icon?: ServiceIconName }>;
  };
  impact?: {
    label?: string;
    title: string;
    intro?: string;
    items: Array<{ title: string; description: string }>;
  };
  outcomes?: {
    label: string;
    title: string;
    items: Array<{ value: number; suffix: string; label: string }>;
  };
  projects?: {
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
  industries?: {
    label: string;
    title: string;
    items: Array<{ name: string; icon: ServiceIconName }>;
  };
  testimonials?: {
    label: string;
    title: string;
    items: Array<{ quote: string; author: string; role: string }>;
  };
  faq?: {
    label: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  cta?: {
    title: string;
    subtitle?: string;
    paragraphs?: string[];
    primaryCta: string;
    secondaryCta?: string;
    primaryHref: string;
    secondaryHref?: string;
  };
};
