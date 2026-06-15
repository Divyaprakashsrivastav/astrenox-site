import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
              "connect-src 'self' blob: https://prod.spline.design https://my.spline.design https://unpkg.com https://cdn.jsdelivr.net",
              "frame-src 'self' https://my.spline.design https://prod.spline.design",
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
      { source: "/products", destination: "/projects", permanent: true },
      { source: "/ai-engineering", destination: "/services/ai-engineering", permanent: true },
      { source: "/ai-transformation", destination: "/services/ai-transformation", permanent: true },
      { source: "/intelligent-automations", destination: "/services/intelligent-automations", permanent: true },
      { source: "/mvp-studio", destination: "/services/mvp-studio", permanent: true },
      { source: "/industries", destination: "/services/industries", permanent: true },
      { source: "/digital-it-consulting", destination: "/services/digital-it-consulting", permanent: true },
    ];
  },
};

export default nextConfig;
