"use client";

import NewsHero from "@/components/tools/news/NewsHero";
import NewsOverviewPanel from "@/components/tools/news/NewsOverviewPanel";
import NewsCTA from "@/components/tools/news/NewsCTA";
import AdvantagesGrid from "@/components/advantages/AdvantagesGrid";
import SecurityBanner from "@/components/SecurityBanner";
import SupportBanner from "@/components/SupportBanner";

export default function NewsAndAnalysisPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <NewsHero />

      {/* Overview: Reuters + Daily Market Analysis */}
      <NewsOverviewPanel />

      {/* Combine News with Analytical Tools */}
      <NewsCTA />

      {/* Discover The XM Advantage */}
      <AdvantagesGrid />

      {/* Safety and Security */}
      <SecurityBanner />

      {/* 24/7 Customer Support */}
      <SupportBanner />

    </main>
  );
}
