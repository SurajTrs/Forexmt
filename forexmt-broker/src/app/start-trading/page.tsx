"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Script from "next/script";
import Link from "next/link";
import { FiArrowLeft, FiTrendingUp, FiRefreshCw, FiDollarSign, FiChevronDown } from "react-icons/fi";

function TradingViewChart({ symbol = "OANDA:EURUSD", theme = "dark" }: { symbol?: string; theme?: "light" | "dark" }) {
  const container = useRef<HTMLDivElement>(null);
  const inited = useRef(false);

  useEffect(() => {
    // allow re-init when deps change
    inited.current = false;
    const createWidget = () => {
      // @ts-ignore
      if (!container.current || typeof window === "undefined" || !window.TradingView) return false;
      // Clear any previous content (e.g., HMR)
      container.current.innerHTML = "";
      // @ts-ignore
      new window.TradingView.widget({
        autosize: true,
        symbol,
        interval: "60",
        timezone: "Etc/UTC",
        theme,
        style: "1",
        locale: "en",
        enable_publishing: false,
        withdateranges: true,
        allow_symbol_change: true,
        studies: ["RSI@tv-basicstudies", "MACD@tv-basicstudies"],
        container_id: "tradingview_widget_container",
      });
      inited.current = true;
      return true;
    };

    if (createWidget()) return;

    // Retry until TradingView is available (script loaded)
    const interval = setInterval(() => {
      if (createWidget()) {
        clearInterval(interval);
        clearTimeout(timeout);
      }
    }, 300);
    const timeout = setTimeout(() => clearInterval(interval), 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [symbol, theme]);

  return (
    <div className="relative h-full w-full">
      <div id="tradingview_widget_container" ref={container} className="h-[60vh] md:h-[78vh] w-full rounded-xl overflow-hidden" />
    </div>
  );
}

export default function StartTradingPage() {
  type Instrument = { tv: string; y: string; label: string };
  type Group = { title: string; items: Instrument[] };
  const groups: Group[] = [
    {
      title: "Forex Majors",
      items: [
        { tv: "OANDA:EURUSD", y: "EURUSD=X", label: "EUR/USD" },
        { tv: "OANDA:GBPUSD", y: "GBPUSD=X", label: "GBP/USD" },
        { tv: "OANDA:USDJPY", y: "USDJPY=X", label: "USD/JPY" },
        { tv: "OANDA:AUDUSD", y: "AUDUSD=X", label: "AUD/USD" },
        { tv: "OANDA:USDCHF", y: "USDCHF=X", label: "USD/CHF" },
        { tv: "OANDA:USDCAD", y: "USDCAD=X", label: "USD/CAD" },
        { tv: "OANDA:NZDUSD", y: "NZDUSD=X", label: "NZD/USD" },
      ],
    },
    {
      title: "Forex Minors",
      items: [
        { tv: "OANDA:EURGBP", y: "EURGBP=X", label: "EUR/GBP" },
        { tv: "OANDA:EURJPY", y: "EURJPY=X", label: "EUR/JPY" },
        { tv: "OANDA:GBPJPY", y: "GBPJPY=X", label: "GBP/JPY" },
        { tv: "OANDA:AUDJPY", y: "AUDJPY=X", label: "AUD/JPY" },
        { tv: "OANDA:CHFJPY", y: "CHFJPY=X", label: "CHF/JPY" },
        { tv: "OANDA:EURAUD", y: "EURAUD=X", label: "EUR/AUD" },
        { tv: "OANDA:EURNZD", y: "EURNZD=X", label: "EUR/NZD" },
      ],
    },
    {
      title: "Metals",
      items: [
        { tv: "OANDA:XAUUSD", y: "XAUUSD=X", label: "XAU/USD" },
        { tv: "OANDA:XAGUSD", y: "XAGUSD=X", label: "XAG/USD" },
        { tv: "OANDA:XPTUSD", y: "PL=F", label: "XPT/USD" },
      ],
    },
    {
      title: "Indices",
      items: [
        { tv: "OANDA:SPX500USD", y: "^GSPC", label: "US500" },
        { tv: "OANDA:NAS100USD", y: "^NDX", label: "NAS100" },
        { tv: "OANDA:US30USD", y: "^DJI", label: "US30" },
        { tv: "OANDA:DE30EUR", y: "^GDAXI", label: "GER30" },
        { tv: "OANDA:UK100GBP", y: "^FTSE", label: "UK100" },
        { tv: "OANDA:JPN225USD", y: "^N225", label: "JPN225" },
      ],
    },
    {
      title: "Commodities",
      items: [
        { tv: "OANDA:WTICOUSD", y: "CL=F", label: "USOIL" },
        { tv: "OANDA:BCOUSD", y: "BZ=F", label: "UKOIL" },
        { tv: "OANDA:NATGASUSD", y: "NG=F", label: "NATGAS" },
        { tv: "OANDA:COFFEEUSD", y: "KC=F", label: "COFFEE" },
      ],
    },
    {
      title: "Crypto",
      items: [
        { tv: "BINANCE:BTCUSDT", y: "BTC-USD", label: "BTC/USD" },
        { tv: "BINANCE:ETHUSDT", y: "ETH-USD", label: "ETH/USD" },
        { tv: "BINANCE:SOLUSDT", y: "SOL-USD", label: "SOL/USD" },
        { tv: "BINANCE:XRPUSDT", y: "XRP-USD", label: "XRP/USD" },
      ],
    },
    {
      title: "Forex Exotics",
      items: [
        { tv: "OANDA:USDTRY", y: "USDTRY=X", label: "USD/TRY" },
        { tv: "OANDA:USDZAR", y: "USDZAR=X", label: "USD/ZAR" },
        { tv: "OANDA:USDMXN", y: "USDMXN=X", label: "USD/MXN" },
        { tv: "OANDA:USDSEK", y: "USDSEK=X", label: "USD/SEK" },
        { tv: "OANDA:USDNOK", y: "USDNOK=X", label: "USD/NOK" },
        { tv: "OANDA:USDINR", y: "USDINR=X", label: "USD/INR" },
      ],
    },
    {
      title: "Bonds & Yields",
      items: [
        { tv: "TVC:US02Y", y: "^IRX", label: "US 2Y" },
        { tv: "TVC:US10Y", y: "^TNX", label: "US 10Y" },
        { tv: "TVC:US30Y", y: "^TYX", label: "US 30Y" },
      ],
    },
    {
      title: "Global Indices",
      items: [
        { tv: "TVC:HSI", y: "^HSI", label: "HK50" },
        { tv: "TVC:EU50", y: "^STOXX50E", label: "EUSTX50" },
        { tv: "TVC:FCHI", y: "^FCHI", label: "CAC40" },
        { tv: "TVC:AXJO", y: "^AXJO", label: "AUS200" },
        { tv: "TVC:NIFTY", y: "^NSEI", label: "NIFTY50" },
      ],
    },
    {
      title: "Energies",
      items: [
        { tv: "NYMEX:CL1!", y: "CL=F", label: "WTI Crude" },
        { tv: "NYMEX:BRN1!", y: "BZ=F", label: "Brent" },
        { tv: "NYMEX:NG1!", y: "NG=F", label: "Natural Gas" },
        { tv: "NYMEX:RB1!", y: "RB=F", label: "Gasoline" },
        { tv: "NYMEX:HO1!", y: "HO=F", label: "Heating Oil" },
      ],
    },
    {
      title: "Agriculture & Softs",
      items: [
        { tv: "CBOT:ZC1!", y: "ZC=F", label: "Corn" },
        { tv: "CBOT:ZW1!", y: "ZW=F", label: "Wheat" },
        { tv: "CBOT:ZS1!", y: "ZS=F", label: "Soybeans" },
        { tv: "ICEUS:SB1!", y: "SB=F", label: "Sugar" },
        { tv: "ICEUS:CC1!", y: "CC=F", label: "Cocoa" },
        { tv: "ICEUS:KC1!", y: "KC=F", label: "Coffee" },
      ],
    },
    {
      title: "Metals+",
      items: [
        { tv: "OANDA:XAUUSD", y: "XAUUSD=X", label: "Gold" },
        { tv: "OANDA:XAGUSD", y: "XAGUSD=X", label: "Silver" },
        { tv: "NYMEX:PL1!", y: "PL=F", label: "Platinum" },
        { tv: "NYMEX:PA1!", y: "PA=F", label: "Palladium" },
        { tv: "COMEX:HG1!", y: "HG=F", label: "Copper" },
      ],
    },
    {
      title: "Stocks (US)",
      items: [
        { tv: "NASDAQ:AAPL", y: "AAPL", label: "AAPL" },
        { tv: "NASDAQ:MSFT", y: "MSFT", label: "MSFT" },
        { tv: "NASDAQ:NVDA", y: "NVDA", label: "NVDA" },
        { tv: "NASDAQ:AMZN", y: "AMZN", label: "AMZN" },
        { tv: "NASDAQ:TSLA", y: "TSLA", label: "TSLA" },
      ],
    },
    {
      title: "ETFs",
      items: [
        { tv: "AMEX:SPY", y: "SPY", label: "SPY" },
        { tv: "AMEX:QQQ", y: "QQQ", label: "QQQ" },
        { tv: "AMEX:IWM", y: "IWM", label: "IWM" },
        { tv: "AMEX:GLD", y: "GLD", label: "GLD" },
        { tv: "AMEX:USO", y: "USO", label: "USO" },
      ],
    },
    {
      title: "Crypto Alts",
      items: [
        { tv: "BINANCE:ADAUSDT", y: "ADA-USD", label: "ADA/USD" },
        { tv: "BINANCE:DOGEUSDT", y: "DOGE-USD", label: "DOGE/USD" },
        { tv: "BINANCE:LTCUSDT", y: "LTC-USD", label: "LTC/USD" },
        { tv: "BINANCE:BNBUSDT", y: "BNB-USD", label: "BNB/USD" },
      ],
    },
  ];
  // Show all trade type categories with accordion submenus
  const groupsToShow = groups;
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const toggleGroup = (title: string) => setOpenGroups(prev => ({ ...prev, [title]: !prev[title] }));

  const [selected, setSelected] = useState<Instrument>(() => groupsToShow[0].items[0]);
  const [price, setPrice] = useState<number | null>(null);
  const [loadingPrice, setLoadingPrice] = useState<boolean>(false);

  // Fetch live price via Yahoo Finance for selected symbol
  useEffect(() => {
    let aborted = false;
    async function fetchPrice() {
      setLoadingPrice(true);
      try {
        const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(selected.y)}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Quote HTTP ${res.status}`);
        const data = await res.json();
        const q = data?.quoteResponse?.result?.[0];
        if (!aborted) setPrice(typeof q?.regularMarketPrice === 'number' ? q.regularMarketPrice : null);
      } catch (e) {
        if (!aborted) setPrice(null);
      } finally {
        if (!aborted) setLoadingPrice(false);
      }
    }
    fetchPrice();
    const id = setInterval(fetchPrice, 15000); // refresh every 15s
    return () => { aborted = true; clearInterval(id); };
  }, [selected]);

  // Derived metrics for 1 lot and 1:100 leverage (demo)
  const lotSize = 100000; // standard FX lot
  const leverage = 100;
  const pipInfo = useMemo(() => {
    const sym = selected.label.replace('/', '');
    if (!price) return { pipValue: null as number | null, margin: null as number | null };
    if (sym === 'EURUSD' || sym === 'GBPUSD') {
      const notionalUSD = lotSize * price; // base not USD
      const margin = notionalUSD / leverage;
      const pipValue = 10; // $10 per pip per lot
      return { pipValue, margin };
    }
    if (sym === 'USDJPY') {
      const notionalUSD = 100000; // base is USD
      const margin = notionalUSD / leverage;
      const pipValue = 1000 / price; // USD per pip per lot
      return { pipValue, margin };
    }
    // Non-FX fallback
    return { pipValue: null, margin: 1000 };
  }, [selected.label, price]);
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-8 md:pt-12">
      {/* TradingView script */}
      <Script src="https://s3.tradingview.com/tv.js" strategy="afterInteractive" />

      {/* Header */}
      <section className="border-b border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
              <FiArrowLeft className="h-5 w-5" />
              Back
            </Link>
            <div className="h-6 w-px bg-white/10" />
            <h1 className="text-lg sm:text-xl font-semibold tracking-tight">Start Trading</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/register" className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-semibold shadow-blue-600/30 shadow">
              Open Account
            </Link>
            <Link href="/platforms/app" className="px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-sm font-semibold text-slate-900">
              Download App
            </Link>
          </div>
        </div>
      </section>

      {/* Main grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Watchlist */}
          <aside className="lg:col-span-3 rounded-2xl border border-white/10 bg-slate-900/50 p-4 shadow-xl shadow-slate-900/30">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-semibold text-slate-200">Watchlist</div>
              <button className="inline-flex items-center gap-1 text-slate-400 hover:text-white text-xs">
                <FiRefreshCw className="h-4 w-4" /> Refresh
              </button>
            </div>

            <div className="space-y-2">
              {groupsToShow.map((g, gi) => (
                <div key={gi} className="rounded-lg border border-white/10">
                  <div className="flex w-full items-center justify-between px-3 py-2">
                    <button
                      className="text-left hover:bg-white/5 rounded px-1"
                      onClick={() => toggleGroup(g.title)}
                      aria-expanded={!!openGroups[g.title]}
                    >
                      <span className="text-[11px] uppercase tracking-wider text-slate-300">{g.title}</span>
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setOpenGroups(prev => ({ ...prev, [g.title]: true }))}
                        className="text-[11px] uppercase tracking-wide text-blue-400 hover:text-blue-300"
                      >
                        Add All
                      </button>
                      <button onClick={() => toggleGroup(g.title)} className="hover:bg-white/5 rounded p-1">
                        <FiChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${openGroups[g.title] ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>
                  {openGroups[g.title] && (
                    <div className="space-y-1 p-2 pt-0">
                      {g.items.map((i, idx) => (
                        <WatchRow key={`${gi}-${idx}`} instrument={i} active={selected.tv === i.tv} onSelect={() => setSelected(i)} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button className="w-full rounded-xl border border-dashed border-white/10 bg-transparent px-3 py-2 text-sm text-slate-400 hover:text-white">
                + Add Instrument
              </button>
            </div>
          </aside>

          {/* Center: Chart */}
          <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-slate-900/50 p-3 shadow-xl shadow-slate-900/30">
            {/* Chart toolbar */}
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <div className="inline-flex overflow-hidden rounded-lg border border-white/10">
                {[
                  { t: "1m" },
                  { t: "5m" },
                  { t: "15m" },
                  { t: "1H" },
                  { t: "4H" },
                  { t: "1D" },
                ].map((b) => (
                  <button key={b.t} className="px-3 py-1.5 text-xs text-slate-300 hover:bg-white/10">
                    {b.t}
                  </button>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">
                <FiTrendingUp className="h-4 w-4" /> Indicators
              </div>
            </div>

            <TradingViewChart symbol={selected.tv} />
          </div>

          {/* Right: Order Ticket */}
          <aside className="lg:col-span-3 rounded-2xl border border-white/10 bg-slate-900/50 p-4 shadow-xl shadow-slate-900/30">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-semibold text-slate-200">Order Ticket</div>
              <div className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">
                <FiDollarSign className="h-4 w-4" /> USD
                <FiChevronDown className="h-3 w-3 opacity-60" />
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="mb-1 block text-xs text-slate-400">Symbol</label>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <span className="text-slate-100 font-medium">{selected.label}</span>
                  <span className="text-xs text-slate-400">{selected.tv.replace(':', ' · ')}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs text-slate-400">Order Type</label>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">Market</div>
                </div>
                <div>
                  <label className="mb-1 block text-xs text-slate-400">Leverage</label>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">1:{leverage}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs text-slate-400">Volume (Lots)</label>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">1.00</div>
                </div>
                <div>
                  <label className="mb-1 block text-xs text-slate-400">Margin</label>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">{pipInfo.margin ? `$${pipInfo.margin.toFixed(2)}` : '—'}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs text-slate-400">Stop Loss</label>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">1.0820</div>
                </div>
                <div>
                  <label className="mb-1 block text-xs text-slate-400">Take Profit</label>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">1.0950</div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Est. Fees</span>
                  <span className="text-slate-200">$0.00</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-xs text-slate-400">
                  <span>Est. P/L (10 pips)</span>
                  <span className="text-emerald-400">{pipInfo.pipValue ? `+$${(pipInfo.pipValue * 10).toFixed(2)}` : '—'}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <button className="rounded-xl bg-rose-600 px-3 py-2 font-semibold text-white hover:bg-rose-500">Sell</button>
                <button className="rounded-xl bg-emerald-600 px-3 py-2 font-semibold text-white hover:bg-emerald-500">Buy</button>
              </div>

              <div className="text-[11px] text-slate-400">
                Trading via this demo interface is for illustrative purposes only and does not execute real orders.
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function WatchRow({ instrument, active, onSelect }: { instrument: { tv: string; y: string; label: string }; active: boolean; onSelect: () => void }) {
  const [p, setP] = useState<number | null>(null);
  const [chgPct, setChgPct] = useState<number | null>(null);
  const [bid, setBid] = useState<number | null>(null);
  const [ask, setAsk] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let aborted = false;
    async function fetchP() {
      setLoading(true);
      try {
        const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(instrument.y)}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Quote HTTP ${res.status}`);
        const data = await res.json();
        const q = data?.quoteResponse?.result?.[0];
        if (!aborted) {
          setP(typeof q?.regularMarketPrice === 'number' ? q.regularMarketPrice : null);
          setChgPct(typeof q?.regularMarketChangePercent === 'number' ? q.regularMarketChangePercent : null);
          setBid(typeof q?.bid === 'number' ? q.bid : null);
          setAsk(typeof q?.ask === 'number' ? q.ask : null);
        }
      } catch (e) {
        if (!aborted) {
          setP(null);
          setChgPct(null);
          setBid(null);
          setAsk(null);
        }
      } finally {
        if (!aborted) setLoading(false);
      }
    }
    fetchP();
    const id = setInterval(fetchP, 30000);
    return () => { aborted = true; clearInterval(id); };
  }, [instrument.y]);

  const trendClass = chgPct == null ? 'text-slate-300' : chgPct >= 0 ? 'text-emerald-400' : 'text-rose-400';
  return (
    <button
      onClick={onSelect}
      className={`group w-full rounded-xl border border-white/10 px-3 py-2 text-left hover:bg-white/10 ${active ? 'bg-white/10' : 'bg-white/5'}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`h-1.5 w-1.5 rounded-full ${active ? (chgPct == null ? 'bg-emerald-400' : chgPct >= 0 ? 'bg-emerald-400' : 'bg-rose-400') : 'bg-slate-500'}`} />
          <div className="font-medium text-slate-100">{instrument.label}</div>
        </div>
        <div className="text-right">
          <div className={`tabular-nums text-sm ${trendClass}`}>{loading ? '—' : (p ?? '—')} {chgPct == null ? '' : <span className="text-xs">({chgPct.toFixed(2)}%)</span>}</div>
          <div className="tabular-nums text-[11px] text-slate-400">{(bid ?? null) && (ask ?? null) ? `B ${bid?.toFixed(3)}  A ${ask?.toFixed(3)}` : 'live'}</div>
        </div>
      </div>
    </button>
  );
}
