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
  title: "Astrenox | Intelligent Autonomous Systems",
  description:
    "AI-powered innovation in drones, aerospace, robotics, and intelligent software systems. Building future-ready autonomous solutions for enterprise.",
  keywords: [
    "AI systems",
    "drone technology",
    "aerospace",
    "robotics",
    "autonomous navigation",
    "software engineering",
  ],
  openGraph: {
    title: "Astrenox | Intelligent Autonomous Systems",
    description:
      "AI-powered innovation in drones, aerospace, robotics, and intelligent software systems.",
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
