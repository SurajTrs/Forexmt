"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import type { IconType } from "react-icons";

export default function Footer() {
  const year = new Date().getFullYear();

  const cols = [
    {
      title: "Why Trade With Us",
      links: [
        { label: "Our Key Advantages", href: "/advantages" },
        { label: "Execution Policy", href: "/execution-policy" },
        { label: "Margin and Leverage", href: "/margin-leverage" },
      ],
    },
    {
      title: "Accounts",
      links: [{ label: "Account Types", href: "/account-types" }],
    },
    {
      title: "Our Offering",
      links: [
        { label: "Copy Trading", href: "/copy-trading" },
        { label: "Trading Competitions", href: "/competitions" },
        { label: "100% Deposit Bonus", href: "/promotions/100-bonus" },
        { label: "Traders Club", href: "/traders-club" },
      ],
    },
    {
      title: "Platforms",
      links: [
        { label: "MT4 Platform", href: "/platforms/mt4" },
        { label: "MT5 Platform", href: "/platforms/mt5" },
        { label: "Forexmt App", href: "/platforms/app" },
        { label: "APK", href: "/platforms/apk" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/company/about" },
        { label: "Awards", href: "/company/awards" },
        { label: "Contact", href: "/company/contact" },
      ],
    },
  ];

  const policies = [
    { label: "Privacy Policy", href: "/" },
    { label: "Cookie Policy", href: "/" },
    { label: "Risk Disclosure", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Legal Documents", href: "/" },
  ];

  const socials: { label: string; href: string; Icon: IconType }[] = [
    { label: "Twitter", href: "https://x.com/FOREXMT166091", Icon: FaTwitter },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61579959541051", Icon: FaFacebook },
    { label: "Instagram", href: "https://www.instagram.com/forex__mt/", Icon: FaInstagram },
  ];

  return (
<footer className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)] rounded-t-2xl md:rounded-t-3xl lg:rounded-t-[48px] shadow-[0_-12px_40px_rgba(0,0,0,0.35)]">
 {/* subtle decorative glow, tinted by theme primary */}
 <div aria-hidden="true" className="pointer-events-none absolute inset-0">
   <div
     className="absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full blur-3xl"
     style={{ background: 'var(--primary)', opacity: 0.06 }}
   />
 </div>
{/* Top Row: Logo + Socials */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Forexmt Home">
              <Image src="/logo.png" alt="Forexmt Logo" width={128} height={40} className="opacity-90 h-10 w-auto" />
            </Link>
            <div className="flex items-center gap-4 sm:gap-6">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-400 hover:text-[var(--foreground)] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  aria-label={`Follow us on ${social.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.Icon className="opacity-80 transition-opacity duration-300 group-hover:opacity-100" size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links: compact, uppercase */}
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {cols.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]/90">
                {col.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[var(--foreground)] text-[12px] tracking-wide uppercase transition-colors duration-200 break-words focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </nav>

      {/* Decorative separator handled by borders */}
      <div className="hidden" />

      {/* Legal lines */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 space-y-2.5 text-[11px] leading-relaxed tracking-wide text-gray-300">
          <p className="uppercase">A PART OF FOREXMT</p>
          <p className="uppercase">WE MAY EARN COMMISSION FROM LINKS ON THIS PAGE, BUT WE ONLY RECOMMEND PRODUCTS WE BACK.</p>
          <p className="uppercase"> {year} FOREXMT. ALL RIGHTS RESERVED.</p>
        </div>
      </div>

      {/* Policies row */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-[11px] tracking-wide">
          {policies.map((policy, index) => (
            <div key={policy.label} className="flex items-center">
              <Link
                href={policy.href}
                className="text-gray-300 hover:text-[var(--foreground)] transition-colors duration-200 uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded"
              >
                {policy.label}
              </Link>
              {index !== policies.length - 1 && (
                <span className="mx-3 h-3.5 w-px bg-white/20" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Cookies Choices */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-2">
          <button className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] tracking-wider uppercase text-[var(--foreground)] transition hover:border-white/25 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
            Cookies Choices
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/60">
          <span>© {year} Forexmt</span>
          <span>v2.0</span>
        </div>
      </div>
    </footer>
  );
}
