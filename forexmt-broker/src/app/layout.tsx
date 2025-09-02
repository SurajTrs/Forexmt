import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RiskBanner from "@/components/RiskBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://www.forexmt.com' 
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "ForexMT | Online Trading Platform",
  description: "Trade Forex, Stocks, Indices, Commodities, and Cryptocurrencies with ForexMT's award-winning trading platform. Start your trading journey today.",
  keywords: ["ForexMT", "Forex Trading", "Online Trading", "CFDs", "Stocks", "Commodities", "Cryptocurrencies"],
  authors: [{ name: "ForexMT" }],
  creator: "ForexMT",
  publisher: "ForexMT",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "ForexMT | Online Trading Platform",
    description: "Trade Forex, Stocks, Indices, Commodities, and Cryptocurrencies with ForexMT's award-winning trading platform.",
    url: "https://www.forexmt.com",
    siteName: "ForexMT",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ForexMT Trading Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ForexMT | Online Trading Platform",
    description: "Trade with confidence on ForexMT's award-winning platform",
    creator: "@forexmt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        style={{ zIndex: 0 }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <RiskBanner />
        <Footer />
      </body>
    </html>
  );
}
