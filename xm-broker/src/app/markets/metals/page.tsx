"use client";

import { useState } from "react";
import MetalsHero from "@/components/markets/metals/MetalsHero";
import TradingViewChart from "@/components/markets/forex/TradingViewChart";
import MetalsPairsTable from "@/components/markets/metals/MetalsPairsTable";
import ForexCTA from "@/components/markets/forex/ForexCTA";

const METALS_SYMBOLS = [
  { label: "XAUUSD", tv: "OANDA:XAUUSD" },
  { label: "XAGUSD", tv: "OANDA:XAGUSD" },
  { label: "XPTUSD", tv: "OANDA:XPTUSD" },
  { label: "XPDUSD", tv: "OANDA:XPDUSD" },
];

export default function MetalsTradingPage() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | undefined>(undefined);
  return (
    <>
      <MetalsHero />
      <TradingViewChart symbols={METALS_SYMBOLS} selectedSymbol={selectedSymbol} />
      <MetalsPairsTable onTradeSymbol={(s) => setSelectedSymbol(s)} />
      <ForexCTA />
    </>
  );
}
