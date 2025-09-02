"use client";

import { useState } from "react";
import TurboStocksHero from "@/components/markets/turbo-stocks/TurboStocksHero";
import TradingViewChart from "@/components/markets/forex/TradingViewChart";
import TurboStocksPairsTable from "@/components/markets/turbo-stocks/TurboStocksPairsTable";
import ForexCTA from "@/components/markets/forex/ForexCTA";

const TURBO_STOCK_SYMBOLS = [
  { label: "AAPL", tv: "NASDAQ:AAPL" },
  { label: "TSLA", tv: "NASDAQ:TSLA" },
  { label: "MSFT", tv: "NASDAQ:MSFT" },
  { label: "AMZN", tv: "NASDAQ:AMZN" },
  { label: "GOOGL", tv: "NASDAQ:GOOGL" },
  { label: "META", tv: "NASDAQ:META" },
  { label: "NVDA", tv: "NASDAQ:NVDA" },
];

export default function TurboStocksTradingPage() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | undefined>(undefined);
  return (
    <>
      <TurboStocksHero />
      <TradingViewChart symbols={TURBO_STOCK_SYMBOLS} selectedSymbol={selectedSymbol} />
      <TurboStocksPairsTable onTradeSymbol={(s) => setSelectedSymbol(s)} />
      <ForexCTA />
    </>
  );
}
