"use client";

import { useState } from "react";
import IndicesHero from "@/components/markets/indices/IndicesHero";
import TradingViewChart from "@/components/markets/forex/TradingViewChart";
import IndicesPairsTable from "@/components/markets/indices/IndicesPairsTable";
import ForexCTA from "@/components/markets/forex/ForexCTA";

const INDICES_SYMBOLS = [
  { label: "US30", tv: "OANDA:US30USD" },
  { label: "NAS100", tv: "OANDA:NAS100USD" },
  { label: "SPX500", tv: "OANDA:SPX500USD" },
  { label: "GER40", tv: "OANDA:DE40EUR" },
  { label: "UK100", tv: "OANDA:UK100GBP" },
  { label: "JPN225", tv: "OANDA:JP225USD" },
];

export default function IndicesTradingPage() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | undefined>(undefined);
  return (
    <>
      <IndicesHero />
      <TradingViewChart symbols={INDICES_SYMBOLS} selectedSymbol={selectedSymbol} />
      <IndicesPairsTable onTradeSymbol={(s) => setSelectedSymbol(s)} />
      <ForexCTA />
    </>
  );
}
