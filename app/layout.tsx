import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivashishniranjan.github.io/shivashish-portfolio/"),
  title: "Shiv Ashish | Staff SDET",
  description: "Portfolio of Shiv Ashish, a Staff SDET specializing in quality architecture, performance engineering, developer productivity, and DevOps.",
  keywords: ["Shiv Ashish", "Staff SDET", "SDET", "Quality Engineering", "Performance Engineering", "Test Automation"],
  authors: [{ name: "Shiv Ashish", url: "https://www.linkedin.com/in/shiv-ashish/" }],
  openGraph: {
    title: "Shiv Ashish | Engineering quality at real-world scale",
    description: "Staff SDET building quality platforms, performance systems, and developer tools.",
    type: "website",
    url: "https://shivashishniranjan.github.io/shivashish-portfolio/",
    images: [
      {
        url: "https://shivashishniranjan.github.io/shivashish-portfolio/og.png",
        width: 1200,
        height: 630,
        alt: "Shiv Ashish — Staff SDET",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiv Ashish | Engineering quality at real-world scale",
    description: "Staff SDET building quality platforms, performance systems, and developer tools.",
    images: ["https://shivashishniranjan.github.io/shivashish-portfolio/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
