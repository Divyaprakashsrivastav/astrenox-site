import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Astrenox | AI-First Digital Transformation",
  description:
    "Astrenox diagnoses bottlenecks, designs the right AI, and scales execution—from intelligent automations to enterprise platforms and elite engineering talent.",
  keywords: [
    "AI transformation",
    "AI engineering",
    "intelligent automations",
    "agentic AI",
    "enterprise AI platforms",
    "digital transformation",
  ],
  openGraph: {
    title: "Astrenox | AI-First Digital Transformation",
    description:
      "Strategy and hands-on engineering for measurable AI outcomes—Solvoris, Orzo, and production rollouts at enterprise scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body selection:bg-primary/15 selection:text-text">
        {children}
      </body>
    </html>
  );
}
