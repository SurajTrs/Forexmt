"use client";

import { useState } from "react";
import ThematicIndicesHero from "@/components/markets/thematic-indices/ThematicIndicesHero";
import TradingViewChart from "@/components/markets/forex/TradingViewChart";
import ThematicIndicesPairsTable from "@/components/markets/thematic-indices/ThematicIndicesPairsTable";
import ForexCTA from "@/components/markets/forex/ForexCTA";

const THEMATIC_SYMBOLS = [
  { label: "ICLN", tv: "AMEX:ICLN" },
  { label: "BOTZ", tv: "NASDAQ:BOTZ" },
  { label: "ARKK", tv: "AMEX:ARKK" },
  { label: "TAN", tv: "AMEX:TAN" },
  { label: "FINX", tv: "NASDAQ:FINX" },
];

export default function ThematicIndicesTradingPage() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | undefined>(undefined);
  return (
    <>
      <ThematicIndicesHero />
      <TradingViewChart symbols={THEMATIC_SYMBOLS} selectedSymbol={selectedSymbol} />
      <ThematicIndicesPairsTable onTradeSymbol={(s) => setSelectedSymbol(s)} />
      <ForexCTA />
    </>
  );
}
