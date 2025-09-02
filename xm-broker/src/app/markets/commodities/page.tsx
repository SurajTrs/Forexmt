"use client";

import { useState } from "react";
import CommoditiesHero from "@/components/markets/commodities/CommoditiesHero";
import TradingViewChart from "@/components/markets/forex/TradingViewChart";
import CommoditiesPairsTable from "@/components/markets/commodities/CommoditiesPairsTable";
import ForexCTA from "@/components/markets/forex/ForexCTA";

const COMMODITY_SYMBOLS = [
  { label: "XAUUSD", tv: "OANDA:XAUUSD" },
  { label: "XAGUSD", tv: "OANDA:XAGUSD" },
  { label: "USOIL", tv: "TVC:USOIL" },
  { label: "UKOIL", tv: "TVC:UKOIL" },
  { label: "XPTUSD", tv: "OANDA:XPTUSD" },
  { label: "XPDUSD", tv: "OANDA:XPDUSD" },
];

export default function CommoditiesTradingPage() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | undefined>(undefined);
  return (
    <>
      <CommoditiesHero />
      <TradingViewChart symbols={COMMODITY_SYMBOLS} selectedSymbol={selectedSymbol} />
      <CommoditiesPairsTable onTradeSymbol={(s) => setSelectedSymbol(s)} />
      <ForexCTA />
    </>
  );
}
