"use client";

import { useState } from "react";
import EnergiesHero from "@/components/markets/energies/EnergiesHero";
import TradingViewChart from "@/components/markets/forex/TradingViewChart";
import EnergiesPairsTable from "@/components/markets/energies/EnergiesPairsTable";
import ForexCTA from "@/components/markets/forex/ForexCTA";

const ENERGIES_SYMBOLS = [
  { label: "USOIL", tv: "TVC:USOIL" },
  { label: "UKOIL", tv: "TVC:UKOIL" },
  { label: "NATGAS", tv: "OANDA:NATGASUSD" },
];

export default function EnergiesTradingPage() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | undefined>(undefined);
  return (
    <>
      <EnergiesHero />
      <TradingViewChart symbols={ENERGIES_SYMBOLS} selectedSymbol={selectedSymbol} />
      <EnergiesPairsTable onTradeSymbol={(s) => setSelectedSymbol(s)} />
      <ForexCTA />
    </>
  );
}
