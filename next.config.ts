import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/hire-talent", destination: "/careers", permanent: true },
      { source: "/products", destination: "/projects", permanent: true },
      { source: "/ai-engineering", destination: "/services/ai-engineering", permanent: true },
      {
        source: "/ai-transformation",
        destination: "/services/ai-transformation",
        permanent: true,
      },
      {
        source: "/intelligent-automations",
        destination: "/services/intelligent-automations",
        permanent: true,
      },
      { source: "/mvp-studio", destination: "/services/mvp-studio", permanent: true },
      { source: "/industries", destination: "/services/industries", permanent: true },
      {
        source: "/digital-it-consulting",
        destination: "/services/digital-it-consulting",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
