"use client";

import { useEffect, useId, useMemo, useState } from "react";

const DEFAULT_SYMBOLS = [
  { label: "EURUSD", tv: "FX:EURUSD" },
  { label: "USDJPY", tv: "FX:USDJPY" },
  { label: "GBPUSD", tv: "FX:GBPUSD" },
  { label: "AUDUSD", tv: "FX:AUDUSD" },
  { label: "EURJPY", tv: "FX:EURJPY" },
  { label: "USDCHF", tv: "FX:USDCHF" },
  { label: "NZDUSD", tv: "FX:NZDUSD" },
  { label: "EURGBP", tv: "FX:EURGBP" },
  { label: "GBPJPY", tv: "FX:GBPJPY" },
  { label: "EURCHF", tv: "FX:EURCHF" },
];

type SymbolItem = { label: string; tv: string };

function parseFxSymbol(label: string): { base: string; quote: string } | null {
  // Expect labels like EURUSD, USDJPY, etc.
  if (!/^[A-Z]{6}$/.test(label)) return null;
  return { base: label.slice(0, 3), quote: label.slice(3, 6) };
}

// Minimal crypto mapping for CoinGecko simple price endpoint
const CRYPTO_ID_MAP: Record<string, string> = {
  BTCUSD: "bitcoin",
  ETHUSD: "ethereum",
  XRPUSD: "ripple",
  LTCUSD: "litecoin",
  ADAUSD: "cardano",
  SOLUSD: "solana",
  DOGEUSD: "dogecoin",
};

function getCryptoId(label: string): string | null {
  return CRYPTO_ID_MAP[label] ?? null;
}

function pricePrecision(label: string, price: number | null): number {
  if (price == null) return 5;
  // Low-priced assets get more decimals
  if (price < 0.1) return 6;
  if (price < 1) return 5;
  // Common FX pairs 4-5 decimals; crypto majors 2
  if (/^[A-Z]{6}$/.test(label)) return 5;
  return 2;
}

export default function TradingViewChart({ symbols = DEFAULT_SYMBOLS, selectedSymbol }: { symbols?: SymbolItem[]; selectedSymbol?: string }) {
  const [active, setActive] = useState<SymbolItem>(symbols[0]);
  const containerId = useId().replace(/:/g, "");
  const [price, setPrice] = useState<number | null>(null);
  const [priceChange, setPriceChange] = useState<number | null>(null);
  const [qty, setQty] = useState<string>("1000");

  const fxPair = useMemo(() => parseFxSymbol(active.label), [active]);
  const cryptoId = useMemo(() => getCryptoId(active.label), [active]);
  const isFiat = (c: string) => new Set(["USD","EUR","JPY","GBP","AUD","NZD","CHF","CAD"]).has(c);
  const isFx = fxPair ? isFiat(fxPair.base) && isFiat(fxPair.quote) : false;

  // Sync active with external selectedSymbol
  useEffect(() => {
    if (!selectedSymbol) return;
    const found = symbols.find((s) => s.label === selectedSymbol);
    if (found && found.label !== active.label) setActive(found);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSymbol, symbols]);

  useEffect(() => {
    const scriptId = "tradingview-widget-script";
    const ensureScript = () =>
      new Promise<void>((resolve) => {
        if (document.getElementById(scriptId)) return resolve();
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://s3.tradingview.com/tv.js";
        script.async = true;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });

    const createWidget = () => {
      // @ts-ignore
      if (!(window as any).TradingView || !(window as any).TradingView.widget) return;
      // Clear existing iframes
      const el = document.getElementById(containerId);
      if (!el) return;
      el.innerHTML = "";
      // @ts-ignore
      new (window as any).TradingView.widget({
        autosize: true,
        symbol: active.tv,
        interval: "60",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        hide_top_toolbar: false,
        hide_legend: false,
        allow_symbol_change: false,
        container_id: containerId,
      });
    };

    ensureScript().then(() => {
      createWidget();
    });

    // Recreate on symbol change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, containerId]);

  // Poll FX price (every 10s) from exchangerate.host (no API key). Only when not a crypto symbol.
  useEffect(() => {
    if (!isFx || cryptoId) return; // skip if not fiat FX or if crypto
    let timer: any;
    const fetchPrice = async () => {
      try {
        const url = `https://api.exchangerate.host/latest?base=${fxPair!.base}&symbols=${fxPair!.quote}`;
        const res = await fetch(url);
        if (!res.ok) return;
        const data = await res.json();
        const p = data?.rates?.[fxPair!.quote];
        if (typeof p === "number") {
          setPriceChange((prev) => (prev != null ? p - prev : 0));
          setPrice(p);
        }
      } catch (_) {
        // ignore network errors
      }
    };
    fetchPrice();
    timer = setInterval(fetchPrice, 10000);
    return () => clearInterval(timer);
  }, [isFx, fxPair, cryptoId]);

  // Poll Crypto price (every 10s) from CoinGecko simple price. Only when cryptoId is known.
  useEffect(() => {
    if (!cryptoId) return;
    let timer: any;
    const fetchCrypto = async () => {
      try {
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(cryptoId)}&vs_currencies=usd`;
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        const p = data?.[cryptoId]?.usd;
        if (typeof p === "number") {
          setPriceChange((prev) => (prev != null ? p - prev : 0));
          setPrice(p);
        }
      } catch (_) {
        // ignore
      }
    };
    fetchCrypto();
    timer = setInterval(fetchCrypto, 10000);
    return () => clearInterval(timer);
  }, [cryptoId]);

  const priceColor = priceChange == null ? "text-gray-200" : priceChange >= 0 ? "text-emerald-400" : "text-red-400";
  const changeIcon = priceChange == null ? null : priceChange >= 0 ? (
    <svg className="size-3" viewBox="0 0 20 20" fill="currentColor"><path d="M10 3l5.5 6h-4v8h-3v-8h-4L10 3z"/></svg>
  ) : (
    <svg className="size-3" viewBox="0 0 20 20" fill="currentColor"><path d="M10 17l-5.5-6h4V3h3v8h4L10 17z"/></svg>
  );
  const showPrice = isFx || !!cryptoId;

  const onTrade = (side: "BUY" | "SELL") => {
    const amount = parseFloat(qty || "0");
    if (!amount || !price) return;
    // Placeholder action; integrate with your backend or redirect
    console.log(`[ORDER] ${side} ${amount} ${active.label} @ ${price.toFixed(5)}`);
    alert(`${side} order placed for ${amount} ${active.label} at ${price.toFixed(5)} (demo)`);
  };

  return (
    <section id="tv-chart" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-3 sm:px-4 py-3 sm:py-4">
          {/* Top bar: symbol selector + live price + controls */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {symbols.map((s) => (
                <button
                  key={s.label}
                  onClick={() => setActive(s)}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors ring-1 ${
                    s.label === active.label
                      ? "bg-white text-slate-900 ring-white/10"
                      : "bg-white/5 text-gray-200 hover:bg-white/10 ring-white/10"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {showPrice && (
                <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 ring-1 ring-white/10 text-gray-200">
                  <span className="text-xs opacity-70">Price</span>
                  <span className={`text-sm font-semibold ${priceColor}`}>
                    {price != null ? price.toFixed(pricePrecision(active.label, price)) : "—"}
                  </span>
                  <span className={`ml-1 flex items-center ${priceColor}`}>{changeIcon}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <input
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="w-28 rounded-lg bg-white/5 px-3 py-1.5 text-sm text-white placeholder-gray-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Qty"
                  inputMode="decimal"
                />
                <button onClick={() => onTrade("BUY")} className="rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold text-sm px-3 py-1.5">
                  Buy
                </button>
                <button onClick={() => onTrade("SELL")} className="rounded-lg bg-red-500 hover:bg-red-400 text-white font-semibold text-sm px-3 py-1.5">
                  Sell
                </button>
              </div>
            </div>
          </div>
          <div className="mt-3 h-[420px] sm:h-[520px] rounded-xl overflow-hidden ring-1 ring-white/10">
            <div id={containerId} className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
