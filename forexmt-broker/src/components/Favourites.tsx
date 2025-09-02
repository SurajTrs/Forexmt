"use client";

import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiDownload, FiAward, FiUsers, FiCopy, FiTrendingUp, FiSmartphone, FiGift, FiCheck } from "react-icons/fi";
import { FaGooglePlay, FaApple, FaStar, FaRegStar, FaRegCheckCircle } from "react-icons/fa";

// Trading pair component
const TradingPair = ({ pair, price, change, isUp }: { pair: string; price: string; change: string; isUp: boolean }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg backdrop-blur-sm">
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${isUp ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
      <span className="font-medium text-white">{pair}</span>
    </div>
    <div className="flex flex-col items-end">
      <span className="text-white">{price}</span>
      <span className={`text-xs ${isUp ? 'text-emerald-500' : 'text-red-400'}`}>
        {isUp ? '↑' : '↓'} {change}%
      </span>
    </div>
  </div>
);

// Trading platform feature item
const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-200/50 flex items-center justify-center text-emerald-500">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-white">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </div>
);

export default function Favourites() {
  const [activeTab, setActiveTab] = useState('platform');
  const [tradingPairs] = useState([
    { pair: 'EUR/USD', price: '1.0874', change: '0.12', isUp: true },
    { pair: 'GBP/USD', price: '1.2718', change: '0.05', isUp: true },
    { pair: 'USD/JPY', price: '157.42', change: '0.23', isUp: true },
    { pair: 'XAU/USD', price: '2,319.45', change: '0.18', isUp: false },
  ]);

  const platformFeatures = [
    {
      icon: <FiTrendingUp className="w-4 h-4" />,
      title: "Advanced Charts",
      description: "Professional trading tools with 100+ indicators"
    },
    {
      icon: <FiCopy className="w-4 h-4" />,
      title: "One-Click Trading",
      description: "Execute trades instantly with minimal slippage"
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      title: "Social Trading",
      description: "Follow and copy top-performing traders"
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-gray-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/grid-light.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-emerald-600 bg-emerald-50 rounded-full mb-4">
            TRADING SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Trading <span className="text-emerald-600">Experience</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Access institutional-grade trading tools and exclusive features designed for modern traders.
          </p>
        </div>

        {/* Trading Platform Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 border border-white/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-emerald-200/50">
                  <FiSmartphone className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">ForexMT Pro Platform</h3>
              </div>
              
              <p className="text-gray-300 mb-8">
                Trade with confidence using our award-winning platform, featuring ultra-fast execution and advanced charting tools.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {tradingPairs.map((pair, i) => (
                  <TradingPair key={i} {...pair} />
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {platformFeatures.map((feature, i) => (
                  <div key={i} className="px-3 py-2 bg-white/5 rounded-lg text-sm">
                    {feature.title}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/platforms/app" className="flex-1">
                  <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-400 hover:bg-emerald-500 text-white rounded-lg transition-colors">
                    <FiDownload className="w-5 h-5" />
                    Download Platform
                  </button>
                </Link>
                <Link href="/traders-club" className="flex-1">
                  <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                    <FiAward className="w-5 h-5" />
                    Join Traders Club
                  </button>
                </Link>
              </div>
              
              <div className="flex items-center justify-center gap-1 mt-6 text-sm text-gray-400">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="w-4 h-4 text-amber-400" />
                  ))}
                </div>
                <span>4.9/5 from 12,500+ reviews</span>
              </div>
            </div>
          </motion.div>
          
          {/* Mobile App Card */}
          <motion.div 
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 border border-white/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <FiSmartphone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mobile Trading App</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Trade on the go with our powerful mobile app, featuring full account management and real-time alerts.
              </p>
              
              <div className="space-y-4 mb-8">
                {platformFeatures.map((feature, i) => (
                  <FeatureItem key={i} {...feature} />
                ))}
              </div>
              
              <div className="mt-auto space-y-4">
                <Link
                  href="/platforms/app"
                  className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white"
                >
                  <FaApple className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-medium">App Store</div>
                  </div>
                </Link>
                <a 
                  href="/platforms/apk" 
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <FaGooglePlay className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copy Trading Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 border border-white/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Copy Trading</h3>
              <p className="text-gray-300 mb-6">
                Automatically copy the trades of top-performing traders and earn when they profit.
              </p>
              
              <div className="space-y-4 mb-8">
                {["100,000+ Traders", "Verified Strategies", "Real-time Copying", "Risk Management"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-300/50 flex items-center justify-center">
                      <FiCheck className="w-3 h-3 text-emerald-500" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/copy-trading" className="w-full">
                <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Explore Strategies
                </button>
              </Link>
            </div>
          </motion.div>
          
          {/* Trading Competitions */}
          <motion.div 
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 border border-white/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Trading Competitions</h3>
              <p className="text-gray-300 mb-6">
                Compete with traders worldwide for a share of $100,000 in monthly prizes.
              </p>
              
              <div className="bg-black/20 rounded-xl p-5 mb-6">
                <div className="text-center mb-4">
                  <div className="text-sm text-gray-400">Current Prize Pool</div>
                  <div className="text-3xl font-bold text-emerald-500">$125,000</div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <div className="text-center">
                    <div className="text-gray-400">Participants</div>
                    <div className="font-medium text-white">2,458</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Days Remaining</div>
                    <div className="font-medium text-white">12</div>
                  </div>
                </div>
              </div>
              
              <Link href="/competitions" className="w-full">
                <button className="w-full px-6 py-3 bg-emerald-400 hover:bg-emerald-500 text-white rounded-lg transition-colors flex items-center justify-center gap-2">
                  Join Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Copy Trading */}
         
        </div>
      </div>
    </section>
  );
}