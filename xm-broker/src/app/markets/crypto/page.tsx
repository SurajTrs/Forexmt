"use client";

import { useState } from "react";
import CryptoHero from "@/components/markets/crypto/CryptoHero";
import TradingViewChart from "@/components/markets/forex/TradingViewChart";
import CryptoPairsTable from "@/components/markets/crypto/CryptoPairsTable";
import ForexCTA from "@/components/markets/forex/ForexCTA";

const CRYPTO_SYMBOLS = [
  { label: "BTCUSD", tv: "COINBASE:BTCUSD" },
  { label: "ETHUSD", tv: "COINBASE:ETHUSD" },
  { label: "XRPUSD", tv: "BITSTAMP:XRPUSD" },
  { label: "LTCUSD", tv: "COINBASE:LTCUSD" },
  { label: "ADAUSD", tv: "COINBASE:ADAUSD" },
  { label: "SOLUSD", tv: "COINBASE:SOLUSD" },
  { label: "DOGEUSD", tv: "COINBASE:DOGEUSD" },
];

export default function CryptoTradingPage() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | undefined>(undefined);
  return (
    <>
      <CryptoHero />
      <TradingViewChart symbols={CRYPTO_SYMBOLS} selectedSymbol={selectedSymbol} />
      <CryptoPairsTable onTradeSymbol={(s) => setSelectedSymbol(s)} />
      <ForexCTA />
    </>
  );
}
