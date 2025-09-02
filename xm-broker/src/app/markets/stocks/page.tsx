"use client";

import { useState } from "react";
import StocksHero from "@/components/markets/stocks/StocksHero";
import TradingViewChart from "@/components/markets/forex/TradingViewChart";
import StocksPairsTable from "@/components/markets/stocks/StocksPairsTable";
import ForexCTA from "@/components/markets/forex/ForexCTA";

const STOCK_SYMBOLS = [
  { label: "AAPL", tv: "NASDAQ:AAPL" },
  { label: "TSLA", tv: "NASDAQ:TSLA" },
  { label: "MSFT", tv: "NASDAQ:MSFT" },
  { label: "AMZN", tv: "NASDAQ:AMZN" },
  { label: "GOOGL", tv: "NASDAQ:GOOGL" },
  { label: "META", tv: "NASDAQ:META" },
  { label: "NVDA", tv: "NASDAQ:NVDA" },
];

export default function StocksTradingPage() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | undefined>(undefined);
  return (
    <>
      <StocksHero />
      <TradingViewChart symbols={STOCK_SYMBOLS} selectedSymbol={selectedSymbol} />
      <StocksPairsTable onTradeSymbol={(s) => setSelectedSymbol(s)} />
      <ForexCTA />
    </>
  );
}
