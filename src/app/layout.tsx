import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Krishna | Portfolio",
  description: "A storytelling portfolio experience built with Next.js 15, GSAP, and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
    >
      <body className="min-h-full">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
