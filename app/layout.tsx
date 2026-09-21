import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivashishniranjan.github.io/portfolio/"),
  title: "Shiv Ashish | Staff SDET & Engineering Leader",
  description: "Staff Software Engineer and engineering leader building automation frameworks, internal developer tools, performance validation systems, and AI-assisted workflows.",
  keywords: ["Shiv Ashish", "Staff SDET", "Engineering Leadership", "Quality Engineering", "Performance Engineering", "Test Automation", "Developer Productivity"],
  authors: [{ name: "Shiv Ashish", url: "https://www.linkedin.com/in/shiv-ashish/" }],
  openGraph: {
    title: "Shiv Ashish | Staff SDET & Engineering Leader",
    description: "Building the frameworks, tools, and performance systems behind reliable software.",
    type: "website",
    url: "https://shivashishniranjan.github.io/portfolio/",
    images: [
      {
        url: "https://shivashishniranjan.github.io/portfolio/og.png",
        width: 1200,
        height: 630,
        alt: "Shiv Ashish — Staff SDET",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiv Ashish | Staff SDET & Engineering Leader",
    description: "Building the frameworks, tools, and performance systems behind reliable software.",
    images: ["https://shivashishniranjan.github.io/portfolio/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
