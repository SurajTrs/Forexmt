import Favourites from "@/components/Favourites";
import Hero from "@/components/Hero";
import SecurityBanner from "@/components/SecurityBanner";
import TradersIntro from "@/components/TradersIntro";
import Results from "@/components/Results";
import SupportBanner from "../components/SupportBanner";

export default function Home() {
  return (
    <main className="relative min-h-screen pb-16 bg-white">
      <Hero />
      {/* RiskBanner is now global in layout */}
      <Favourites/>
      
      <Results />

      <SecurityBanner />
      <TradersIntro />
      <SupportBanner/>
    </main>
  );
}
