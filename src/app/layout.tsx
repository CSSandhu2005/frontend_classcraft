import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Define Inter font with a CSS variable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ClassCraft AI",
  description:
    "A Landing Page Created For The 24Hrs Hackathon [HackeRing] 2025, Bangalore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
