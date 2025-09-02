"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from 'react';

// Trading pair ticker component
function Ticker({ pair, price, change }: { pair: string; price: string; change: number }) {
  const isPositive = change >= 0;
  
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-lg">
      <span className="font-medium text-white">{pair}</span>
      <div className="flex items-center gap-2">
        <span className="text-white">{price}</span>
        <span className={`text-xs px-1.5 py-0.5 rounded ${isPositive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
          {isPositive ? '↑' : '↓'} {Math.abs(change).toFixed(2)}%
        </span>
      </div>
    </div>
  );
}

// Bonus calculator component
function BonusCalculator() {
  const [amount, setAmount] = useState(1000);
  const bonus = amount * 1; // 100% bonus
  
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-white/10">
      <h3 className="text-lg font-semibold text-white mb-4">Calculate Your Bonus</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Deposit Amount ($)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>$100</span>
              <span>${amount}</span>
              <span>$10,000</span>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-800/50 p-4 rounded-lg border border-white/5">
          <div className="flex justify-between mb-2">
            <span className="text-gray-300">Your Deposit:</span>
            <span className="font-medium text-white">${amount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-emerald-400 font-medium">
            <span>Your Bonus:</span>
            <span>+ ${bonus.toLocaleString()}</span>
          </div>
          <div className="h-px bg-white/10 my-3"></div>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-white">Total Trading Power:</span>
            <span className="text-emerald-400">${(amount + bonus).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DepositBonus() {
  const [currentStep, setCurrentStep] = useState(0);
  const [tickers, setTickers] = useState([
    { pair: 'EUR/USD', price: '1.0874', change: 0.12 },
    { pair: 'GBP/USD', price: '1.2718', change: -0.05 },
    { pair: 'USD/JPY', price: '157.42', change: 0.23 },
    { pair: 'XAU/USD', price: '2,319.45', change: -0.18 },
  ]);

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Flexible Deposits",
      description: "Deposit between $100 and $10,000 to qualify"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h3a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2h3m-1 4v6h6v-6h-6z" />
        </svg>
      ),
      title: "Instant Bonus",
      description: "100% bonus credited to your account immediately"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Enhanced Trading",
      description: "Double your positions and profit potential"
    }
  ];

  // Auto-rotate tickers
  useEffect(() => {
    const interval = setInterval(() => {
      setTickers(prev => {
        const newTickers = [...prev];
        const first = newTickers.shift();
        if (first) newTickers.push(first);
        return newTickers;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="text-center">
            <motion.span 
              className="inline-block px-4 py-1.5 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              LIMITED TIME OFFER
            </motion.span>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              100% Deposit Bonus
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Double your trading capital instantly with our exclusive 100% deposit bonus offer.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              >
                Claim 100% Bonus Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 rounded-xl hover:bg-white/20 transition-all border border-white/10"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
          
          {/* Market Ticker */}
          <motion.div 
            className="mt-16 max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center justify-between text-sm text-gray-400 mb-3 px-2">
              <span>Market Watch</span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-1.5"></span>
                Live Prices
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {tickers.map((ticker, i) => (
                <motion.div
                  key={ticker.pair}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Ticker {...ticker} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Calculate Your <span className="text-emerald-400">Bonus</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Use our calculator to see exactly how much bonus you can earn based on your deposit amount.
                The more you deposit, the more bonus you receive!
              </p>
              <div className="space-y-6">
                {[
                  { value: 100, label: 'Minimum Deposit' },
                  { value: 1000, label: 'Popular Choice' },
                  { value: 5000, label: 'Premium Bonus' },
                  { value: 10000, label: 'Maximum Bonus' },
                ].map((item) => (
                  <div key={item.value} className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mr-4">
                      ${item.value === 10000 ? '10K' : item.value}
                    </div>
                    <div>
                      <div className="font-medium text-white">${item.value.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <BonusCalculator />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started in just a few simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-white/10 hover:border-emerald-400/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(34, 197, 94, 0.1)' }}
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-900/30 to-emerald-800/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Boost Your Trading?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of traders who are already maximizing their potential with our 100% deposit bonus.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
            >
              Get Started Now
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 rounded-xl hover:bg-white/20 transition-all border border-white/10"
            >
              Sign In to Claim
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            New to ForexMT? <Link href="/register" className="text-emerald-400 hover:text-emerald-300 font-medium">Create an account</Link> in minutes.
          </p>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-12 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none text-gray-400">
            <h3 className="text-white text-lg font-medium mb-4">Terms & Conditions</h3>
            <ul className="text-sm space-y-2">
              <li>• The 100% deposit bonus is available for deposits between $100 and $10,000.</li>
              <li>• Bonus funds are subject to a 30x trading volume requirement before withdrawal.</li>
              <li>• Offer valid for new and existing clients.</li>
              <li>• One bonus per client, household, or IP address.</li>
              <li>• Full terms and conditions apply. <Link href="/terms" className="text-emerald-400 hover:underline">Read more</Link>.</li>
            </ul>
            <p className="mt-6 text-xs text-gray-500">
              Risk Warning: Trading Forex and CFDs carries a high level of risk to your capital.
              You should only trade with money you can afford to lose. Please ensure you fully understand the risks involved.
            </p>
          </div>
        </div>
      </section>

      {/* Animated gradient background elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-12 -left-12 w-[600px] h-[600px] bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-emerald-700/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-3000"></div>
      </div>
    </div>
  );
}
