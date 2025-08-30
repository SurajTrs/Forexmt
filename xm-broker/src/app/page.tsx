import Favourites from "@/components/Favourites";
import Hero from "@/components/Hero";
import SecurityBanner from "@/components/SecurityBanner";
import TradersIntro from "@/components/TradersIntro";
import Results from "@/components/Results";
import RiskBanner from "@/components/RiskBanner";
import SupportBanner from "../components/SupportBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen pb-16 bg-white">
      <Hero />
 
      <RiskBanner />
      <Favourites/>
      
      <Results />

      <SecurityBanner />
      <TradersIntro />
      <SupportBanner/>
      <Footer />
    </main>
  );
}
