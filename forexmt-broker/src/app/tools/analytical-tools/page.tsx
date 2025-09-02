"use client";

import TradingCentralHero from "@/components/tools/analytical/TradingCentralHero";
import TradingCentralProducts from "@/components/tools/analytical/TradingCentralProducts";
import WhyTradingCentral from "@/components/tools/analytical/WhyTradingCentral";
import AdvantagesGrid from "@/components/advantages/AdvantagesGrid";
import SecurityBanner from "@/components/SecurityBanner";
import SupportBanner from "@/components/SupportBanner";

export default function AnalyticalToolsPage() {
  return (
    <main className="bg-white">
      <TradingCentralHero />
      <TradingCentralProducts />
      <WhyTradingCentral />
      <AdvantagesGrid />
      <SecurityBanner />
      <SupportBanner />
    </main>
  );
}
