import AdvantagesHero from "@/components/advantages/AdvantagesHero";
import AdvantagesStats from "@/components/advantages/AdvantagesStats";
import AdvantagesGrid from "@/components/advantages/AdvantagesGrid";
import AdvantagesCta from "@/components/advantages/AdvantagesCta";
import SafetySecurity from "@/components/advantages/SafetySecurity";
import SupportBanner from "@/components/advantages/SupportBanner";

export default function AdvantagesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <AdvantagesHero />
      <AdvantagesStats />
      <AdvantagesGrid />
      <SafetySecurity />
      <SupportBanner />
      <AdvantagesCta />
    </main>
  );
}
