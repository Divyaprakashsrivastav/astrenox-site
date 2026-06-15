import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./site-scale.css";

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
  title: "Astrenox | The AI Operating System for the Physical World",
  description:
    "Astrenox connects enterprise intelligence to autonomous systems—robotics, aerospace, logistics, and industrial operations through one production-grade control plane.",
  keywords: [
    "enterprise AI",
    "autonomous systems",
    "robotics orchestration",
    "aerospace AI",
    "physical world AI",
    "production engineering",
  ],
  openGraph: {
    title: "Astrenox | The AI Operating System for the Physical World",
    description:
      "Enterprise AI, autonomous systems, and production-grade engineering—unified under one operating system for the physical world.",
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
