"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { HiChevronRight } from "react-icons/hi2";

type SimpleItem = { label: string; href: string };
type Group = { title: string; items: SimpleItem[] };

function NavItem({ label, items, groups, activeLabel, setActive, current }: {
  label: string;
  items?: SimpleItem[];
  groups?: Group[];
  activeLabel: string | null;
  setActive: (v: string | null) => void;
  current?: boolean;
}) {
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isOpen = activeLabel === label;
  const hasMultiple = (groups?.length ?? 0) > 1;
  const menuClasses = groups
    ? "absolute top-full left-0 mt-5 w-fit max-w-[95vw] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-gradient-to-b from-slate-950/100 to-slate-900/90 backdrop-blur-md shadow-2xl p-2"
    : "absolute top-full left-0 mt-4 w-56 overflow-hidden rounded-xl ring-1 ring-white/10 bg-gradient-to-b from-slate-950/100 to-slate-900/90 backdrop-blur-md shadow-2xl p-2";

  const handleEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setActive(label);
  };

  const handleLeave = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => setActive(null), 150);
  };

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className={`relative group px-3 py-2 text-sm flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-md transition-colors ${
          isOpen || current ? "text-white" : "text-gray-300 hover:text-white hover:bg-white/5"
        }`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setActive(isOpen ? null : label)}
        onFocus={handleEnter}
        onBlur={handleLeave}
      >
        {label}
        <svg className={`size-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'} group-hover:translate-y-px`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 11.127l3.71-3.896a.75.75 0 111.08 1.04l-4.24 4.46a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"/></svg>
        <span className="pointer-events-none absolute left-2 right-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
      {isOpen && (
        <div
          className={`${menuClasses} border border-white/10`}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {/* per-item hover handles its own bg; no global glow */}
          {groups ? (
            <div
              className="grid gap-1.5 w-fit"
              style={{ gridTemplateColumns: `repeat(${Math.min(groups.length, 4)}, minmax(12rem, max-content))` }}
            >
              {groups.map((g) => (
                <div key={g.title} className="rounded-lg p-1.5">
                  <div className="px-1.5 py-1 text-[11px] font-semibold tracking-[0.18em] text-gray-300 uppercase">{g.title}</div>
                  <div className="mt-0.5">
                    {g.items.map((it) => (
                      <Link
                        key={it.label}
                        href={it.href}
                        className="group/item flex items-center justify-between px-2 py-1.5 text-sm rounded-md text-gray-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition-colors"
                      >
                        <span className="tracking-wide">{it.label}</span>
                        <HiChevronRight className="opacity-40 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:opacity-70" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-56">
              {(items || []).map((it) => (
                <Link key={it.label} href={it.href} className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 transition-colors text-gray-200">
                  {it.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const isTrading = pathname?.startsWith("/advantages") || pathname?.startsWith("/execution-policy") || pathname?.startsWith("/margin-leverage") || pathname?.startsWith("/account") || pathname?.startsWith("/platforms");
  const isDiscover = pathname?.startsWith("/markets") || pathname?.startsWith("/tools");
  const isEducation = pathname?.startsWith("/tools/education");
  const isCompany = pathname?.startsWith("/about") || pathname?.startsWith("/awards") || pathname?.startsWith("/contact");
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group" aria-label="ForexMT Home">
            <Image
              src="/logo.png"
              alt="ForexMT Logo"
              width={200}
              height={190}
              className="h-25 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            <NavItem
              label="Trading"
              groups={[
                { title: "WHY TRADE WITH US", items: [
                  { label: "Our Key Advantages", href: "/advantages" },
                  { label: "Execution Policy", href: "/execution-policy" },
                  { label: "Margin and Leverage", href: "/margin-leverage" },
                ]},
                { title: "ACCOUNTS", items: [
                  { label: "Account Types", href: "/account-types" },
                ]},
       
                { title: "PLATFORMS", items: [
                  { label: "MT4 Platform", href: "/platforms/mt4" },
                  { label: "MT5 Platform", href: "/platforms/mt5" },
                  { label: "Forexmt App", href: "/platforms/app" },
                  { label: "APK", href: "/platforms/apk" },
                ]},
              ]}
              activeLabel={activeMenu}
              setActive={setActiveMenu}
              current={!!isTrading}
            />
            <NavItem
              label="Discover"
              groups={[
                { title: "MARKETS", items: [
                  { label: "Forex Trading", href: "/markets/forex" },
                  { label: "Cryptocurrencies", href: "/markets/crypto" },
                  { label: "Stock Derivatives", href: "/markets/stocks" },
                  { label: "Turbo Stocks", href: "/markets/turbo-stocks" },
                  { label: "Commodities", href: "/markets/commodities" },
                  { label: "Equity Indices", href: "/markets/indices" },
                  { label: "Precious Metals", href: "/markets/metals" },
                  { label: "Energies", href: "/markets/energies" },
                  { label: "Shares", href: "/markets/shares" },
                  { label: "Thematic Indices", href: "/markets/thematic-indices" },
                ]},
                { title: "TRADING TOOLS", items: [
                  { label: "News and Analysis", href: "/tools/news-and-analysis" },
                  { label: "Analytical Tools", href: "/tools/analytical-tools" },
                  { label: "Economic Calendar", href: "/tools/economic-calendar" },
                  { label: "Forex Calculators", href: "/tools/forex-calculators" },
                ]},
              ]}
              activeLabel={activeMenu}
              setActive={setActiveMenu}
              current={!!isDiscover}
            />
            <NavItem
              label="Education"
              groups={[
                { title: "EDUCATION", items: [
                  { label: "Education", href: "/tools/education" },
                ]},
              ]}
              activeLabel={activeMenu}
              setActive={setActiveMenu}
              current={!!isEducation}
            />
            <NavItem label="Company" items={[{label:"About",href:"/company/about/"},{label:"Awards",href:"/company/awards/"},{label:"Contact",href:"/company/contact/"}]} activeLabel={activeMenu} setActive={setActiveMenu} current={!!isCompany} />
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="text-sm text-gray-300">🇬🇧 English</div>
            <Link href="/login" className="text-sm px-3 py-1.5 rounded border border-white/20 text-white hover:bg-white/10">Login</Link>
            <Link href="/register" className="text-sm px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white">Get Started</Link>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <svg className="size-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>

        {mobileOpen && (
          <div id="mobile-menu" className="lg:hidden pb-4 space-y-2" role="dialog" aria-modal="true">
            {/* Trading */}
            <details className="border border-white/10 rounded-lg">
              <summary className="cursor-pointer select-none px-3 py-2 text-sm text-gray-200">Trading</summary>
              <div className="px-3 pb-3 space-y-2">
                <div className="text-[10px] tracking-widest text-gray-400">WHY TRADE WITH US</div>
                <div className="flex flex-wrap gap-2">
                  <Link href="/advantages" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Our Key Advantages</Link>
                  <Link href="/execution-policy" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Execution Policy</Link>
                  <Link href="/margin-leverage" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Margin & Leverage</Link>
                </div>
                <div className="text-[10px] tracking-widest text-gray-400 mt-2">ACCOUNTS</div>
                <div className="flex flex-wrap gap-2">
                  <Link href="/account-types" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Account Types</Link>
                </div>
                <div className="text-[10px] tracking-widest text-gray-400 mt-2">PLATFORMS</div>
                <div className="flex flex-wrap gap-2">
                  <Link href="/platforms/mt4" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>MT4 Platform</Link>
                  <Link href="/platforms/mt5" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>MT5 Platform</Link>
                  <Link href="/platforms/app" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Forexmt App</Link>
                  <Link href="/platforms/apk" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>APK</Link>
                </div>
              </div>
            </details>

            {/* Discover */}
            <details className="border border-white/10 rounded-lg">
              <summary className="cursor-pointer select-none px-3 py-2 text-sm text-gray-200">Discover</summary>
              <div className="px-3 pb-3 space-y-2">
                <div className="text-[10px] tracking-widest text-gray-400">MARKETS</div>
                <div className="flex flex-wrap gap-2">
                  <Link href="/markets/forex" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Forex Trading</Link>
                  <Link href="/markets/crypto" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Cryptocurrencies</Link>
                  <Link href="/markets/stocks" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Stock Derivatives</Link>
                  <Link href="/markets/turbo-stocks" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Turbo Stocks</Link>
                  <Link href="/markets/commodities" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Commodities</Link>
                  <Link href="/markets/indices" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Equity Indices</Link>
                  <Link href="/markets/metals" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Precious Metals</Link>
                  <Link href="/markets/energies" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Energies</Link>
                  <Link href="/markets/shares" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Shares</Link>
                  <Link href="/markets/thematic-indices" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Thematic Indices</Link>
                </div>
                <div className="text-[10px] tracking-widest text-gray-400 mt-2">TRADING TOOLS</div>
                <div className="flex flex-wrap gap-2">
                  <Link href="/tools/news-and-analysis" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>News and Analysis</Link>
                  <Link href="/tools/analytical-tools" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Analytical Tools</Link>
                  <Link href="/tools/economic-calendar" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Economic Calendar</Link>
                  <Link href="/tools/forex-calculators" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Forex Calculators</Link>
                </div>
              </div>
            </details>

            {/* Education */}
            <details className="border border-white/10 rounded-lg">
              <summary className="cursor-pointer select-none px-3 py-2 text-sm text-gray-200">Education</summary>
              <div className="px-3 pb-3">
                <Link href="/tools/education" className="inline-block text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Education</Link>
              </div>
            </details>

            {/* Company */}
            <details className="border border-white/10 rounded-lg">
              <summary className="cursor-pointer select-none px-3 py-2 text-sm text-gray-200">Company</summary>
              <div className="px-3 pb-3 flex flex-wrap gap-2">
                <Link href="/company/about/" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>About</Link>
                <Link href="/company/awards/" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Awards</Link>
                <Link href="/company/contact/" className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded bg-white/5" onClick={() => setMobileOpen(false)}>Contact</Link>
              </div>
            </details>

            <div className="flex items-center gap-3 pt-1">
                            <div className="text-sm text-gray-300">🇬🇧 English</div>
              <Link href="/login" className="text-sm px-3 py-1.5 rounded border border-white/20 text-white hover:bg-white/10" onClick={() => setMobileOpen(false)}>Login</Link>
              <Link href="/register" className="text-sm px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white" onClick={() => setMobileOpen(false)}>Get Started</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
