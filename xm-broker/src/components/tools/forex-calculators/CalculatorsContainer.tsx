"use client";

import { useState } from "react";
import CalculatorForm, { CalculatorInputs } from "./CalculatorForm";
import ResultsPanel, { CalculatorResults } from "./ResultsPanel";
import HowTo from "./HowTo";
import CurrencyCalculator from "./CurrencyCalculator";

function computePipValue(symbol: string, price: number | undefined, lots: number) {
  // Basic FX pip value approximation
  const perLot = symbol.endsWith("JPY") ? 1000 : 10; // $ per lot when quote currency is USD, rough
  if (!price) return (perLot * lots).toFixed(2) + " (approx)";
  const pip = symbol.endsWith("JPY") ? 0.01 : 0.0001;
  const valueQuote = (pip / price) * 100000 * lots; // quote currency
  return valueQuote.toFixed(2) + " (approx)";
}

function computeMargin(price: number | undefined, leverage: number, lots: number) {
  // Approximate margin in quote currency terms; if no price, assume 1.0
  const px = price ?? 1.0;
  const notional = 100000 * lots * px; // quote currency
  const margin = notional / leverage;
  return margin.toFixed(2) + " (approx)";
}

export default function CalculatorsContainer() {
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "currency">("all");

  const onCalculate = (inp: CalculatorInputs) => {
    const pipValue = computePipValue(inp.symbol, inp.price, inp.volumeLots);
    const requiredMargin = computeMargin(inp.price, inp.leverage, inp.volumeLots);

    const notes: string[] = [
      "Approximations are used; conversions to your account currency may differ.",
      "Pip value assumes standard FX contract size of 100,000 per lot.",
      "Swaps are broker- and instrument-specific; values are placeholders.",
    ];

    setResults({
      swapLong: "-",
      swapShort: "-",
      minPriceFluctuation: inp.symbol.endsWith("JPY") ? "0.01" : "0.0001",
      requiredMargin,
      pipValue,
      notes,
    });
  };

  return (
    <section className="py-6 sm:py-10 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Outer rounded card */}
        <div className="rounded-[28px] sm:rounded-[32px] ring-1 ring-slate-200 bg-white shadow-sm overflow-hidden">
          {/* Tabs */}
          <div className="px-4 sm:px-6 pt-5 sm:pt-6 border-b border-slate-200">
            <nav className="flex items-center gap-6 text-sm font-semibold">
              <button
                onClick={() => setActiveTab("all")}
                className={`relative transition-colors ${activeTab === "all" ? "text-slate-900" : "text-slate-500 hover:text-slate-800"}`}
              >
                All-in-One Calculator
                {activeTab === "all" && (
                  <span className="absolute -bottom-[13px] left-0 right-0 h-[2px] bg-sky-600" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("currency")}
                className={`relative transition-colors ${activeTab === "currency" ? "text-slate-900" : "text-slate-500 hover:text-slate-800"}`}
              >
                Currency Calculator
                {activeTab === "currency" && (
                  <span className="absolute -bottom-[13px] left-0 right-0 h-[2px] bg-sky-600" />
                )}
              </button>
            </nav>
          </div>

          {activeTab === "all" ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-4 sm:p-6 lg:p-8">
                <HowTo />
                <CalculatorForm onCalculate={onCalculate} embedded />
              </div>
              <div className="p-4 sm:p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-slate-200">
                <ResultsPanel results={results} embedded />
              </div>
            </div>
          ) : (
            <div className="p-4 sm:p-6 lg:p-8">
              <CurrencyCalculator />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
