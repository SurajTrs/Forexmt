"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { HiChevronRight } from "react-icons/hi2";

type SimpleItem = { label: string; href: string };
type Group = { title: string; items: SimpleItem[] };

function NavItem({ label, items, groups, activeLabel, setActive }: {
  label: string;
  items?: SimpleItem[];
  groups?: Group[];
  activeLabel: string | null;
  setActive: (v: string | null) => void;
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
        className="group px-3 py-2 text-sm text-gray-300 hover:text-white flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-md hover:bg-white/5 transition-colors"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setActive(isOpen ? null : label)}
        onFocus={handleEnter}
        onBlur={handleLeave}
      >
        {label}
        <svg className={`size-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'} group-hover:translate-y-px`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 11.127l3.71-3.896a.75.75 0 111.08 1.04l-4.24 4.46a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"/></svg>
      </button>
      {isOpen && (
        <div
          className={menuClasses}
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
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Forexmt home">
            <Image
              src="/logo.png"
              alt="Forexmt logo"
              width={260}
              height={78}
              priority
              className="h-[3.75rem] sm:h-[4.25rem] md:h-[4.75rem] w-auto"
              sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 288px"
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
                  { label: "MT4 Platform", href: "/mt4" },
                  { label: "MT5 Platform", href: "/mt5" },
                  { label: "Forexmt App", href: "/app" },
                  { label: "APK", href: "/apk" },
                ]},
              ]}
              activeLabel={activeMenu}
              setActive={setActiveMenu}
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
              
              ]}
              activeLabel={activeMenu}
              setActive={setActiveMenu}
            />
            <NavItem
              label="Education"
              groups={[
                { title: "EDUCATION", items: [
                  { label: "Education", href: "#" },
                ]},
              ]}
              activeLabel={activeMenu}
              setActive={setActiveMenu}
            />
            <NavItem label="Company" items={[{label:"About",href:"#"},{label:"Awards",href:"#"},{label:"Contact",href:"#"}]} activeLabel={activeMenu} setActive={setActiveMenu} />
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="#" className="text-sm text-gray-300 hover:text-white">Partnership</Link>
            <div className="text-sm text-gray-300">🇬🇧 English</div>
            <Link href="#" className="text-sm px-3 py-1.5 rounded border border-white/20 text-white hover:bg-white/10">Login</Link>
            <Link href="#" className="text-sm px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white">Get Started</Link>
          </div>

          <button className="lg:hidden text-white" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
            <svg className="size-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {[
              {label:"Trading", items:["Platforms","Account Types","Spreads & Conditions"]},
              {label:"Discover", items:["Markets","Education"]},
              {label:"Education", items:["Education"]},
              {label:"Company", items:["About","Awards","Contact"]},
            ].map((group) => (
              <div key={group.label} className="border border-white/10 rounded-lg p-3">
                <div className="text-gray-200 text-sm mb-2">{group.label}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((it) => (
                    <Link key={it} href="#" className="text-xs text-gray-400 hover:text-white px-2 py-1 rounded bg-white/5">{it}</Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3 pt-1">
              <Link href="#" className="text-sm text-gray-300 hover:text-white">Partnership</Link>
              <div className="text-sm text-gray-300">🇬🇧 English</div>
              <Link href="#" className="text-sm px-3 py-1.5 rounded border border-white/20 text-white hover:bg-white/10">Login</Link>
              <Link href="#" className="text-sm px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white">Get Started</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
