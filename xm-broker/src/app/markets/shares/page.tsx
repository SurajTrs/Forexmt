"use client";

import { useState } from "react";
import SharesHero from "@/components/markets/shares/SharesHero";
import TradingViewChart from "@/components/markets/forex/TradingViewChart";
import SharesPairsTable from "@/components/markets/shares/SharesPairsTable";
import ForexCTA from "@/components/markets/forex/ForexCTA";

const SHARES_SYMBOLS = [
  { label: "AAPL", tv: "NASDAQ:AAPL" },
  { label: "TSLA", tv: "NASDAQ:TSLA" },
  { label: "MSFT", tv: "NASDAQ:MSFT" },
  { label: "AMZN", tv: "NASDAQ:AMZN" },
  { label: "GOOGL", tv: "NASDAQ:GOOGL" },
  { label: "META", tv: "NASDAQ:META" },
  { label: "NVDA", tv: "NASDAQ:NVDA" },
];

export default function SharesTradingPage() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | undefined>(undefined);
  return (
    <>
      <SharesHero />
      <TradingViewChart symbols={SHARES_SYMBOLS} selectedSymbol={selectedSymbol} />
      <SharesPairsTable onTradeSymbol={(s) => setSelectedSymbol(s)} />
      <ForexCTA />
    </>
  );
}
