export const productsHeroTrust = [
  {
    id: "uptime",
    display: "99.9%",
    label: "Uptime",
    animate: { from: 0, to: 99.9, decimals: 1, suffix: "%" },
  },
  {
    id: "deployments",
    display: "500+",
    label: "Deployments",
    animate: { from: 0, to: 500, decimals: 0, suffix: "+" },
  },
  {
    id: "integrations",
    display: "40+",
    label: "Integrations",
    animate: { from: 0, to: 40, decimals: 0, suffix: "+" },
  },
  {
    id: "monitoring",
    display: "24/7",
    label: "Monitoring",
    animate: null,
  },
] as const;
