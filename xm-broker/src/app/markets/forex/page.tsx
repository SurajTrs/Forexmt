"use client";

import { useState } from "react";
import ForexHero from "@/components/markets/forex/ForexHero";
import TradingViewChart from "@/components/markets/forex/TradingViewChart";
import ForexPairsTable from "@/components/markets/forex/ForexPairsTable";
import ForexCTA from "@/components/markets/forex/ForexCTA";

export default function ForexTradingPage() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | undefined>(undefined);
  return (
    <>
      <ForexHero />
      <TradingViewChart selectedSymbol={selectedSymbol} />
      <ForexPairsTable onTradeSymbol={(s) => setSelectedSymbol(s)} />
      <ForexCTA />
    </>
  );
}
