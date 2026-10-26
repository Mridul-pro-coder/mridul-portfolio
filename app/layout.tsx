import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorAurora from "@/components/layout/CursorAurora";
import Watermark from "@/components/layout/Watermark";
import Nav from "@/components/layout/Nav";
import PageShell from "@/components/layout/PageShell";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mridul Gupta — AI Engineer",
  description: "Minimal portfolio of Mridul Gupta, AI engineer at Toukoun — LLM products, data pipelines, and evals.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} style={inter.style}>
      <body className="min-h-screen overflow-x-hidden bg-bg text-ink antialiased">
        <CursorAurora />
        <Watermark />
        <Nav />
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
