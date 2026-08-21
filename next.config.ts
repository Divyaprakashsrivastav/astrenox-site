import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "three",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-tabs",
      "@radix-ui/react-tooltip",
      "@radix-ui/react-hover-card",
    ],
  },

  async headers() {
    return [
      {
        // Allow Spline to be framed on every page
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: https://unpkg.com https://prod.spline.design https://cdn.jsdelivr.net",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data: https:",
              "connect-src 'self' blob: https://prod.spline.design https://my.spline.design https://unpkg.com https://cdn.jsdelivr.net https://calendly.com https://*.calendly.com",
              "frame-src 'self' https://my.spline.design https://prod.spline.design https://calendly.com https://*.calendly.com",
              "worker-src 'self' blob:",
              "media-src 'self' blob:",
            ].join("; "),
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/hire-talent", destination: "/careers", permanent: true },
      { source: "/ai-engineering", destination: "/services/ai-engineering", permanent: true },
      { source: "/ai-transformation", destination: "/services/ai-transformation", permanent: true },
      { source: "/intelligent-automations", destination: "/services/intelligent-automations", permanent: true },
      { source: "/mvp-studio", destination: "/services/mvp-studio", permanent: true },
      { source: "/industries", destination: "/services/industries", permanent: true },
      { source: "/digital-it-consulting", destination: "/services/digital-it-consulting", permanent: true },
      // Generic /services hub was removed — send traffic to consulting
      { source: "/services", destination: "/services/ai-consulting-advisory", permanent: false },
      // Placeholder hub — send traffic to first real infrastructure solution
      {
        source: "/infrastructure-solutions",
        destination: "/infrastructure-solutions/cloud-network-gcc",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
