import EconomicCalendarHero from "@/components/tools/economic-calendar/EconomicCalendarHero";
import EconomicCalendarEmbed from "@/components/tools/economic-calendar/EconomicCalendarEmbed";
import MarketNewsEmbed from "@/components/tools/economic-calendar/MarketNewsEmbed";
import EconomicCalendarDisclaimer from "@/components/tools/economic-calendar/EconomicCalendarDisclaimer";
import AdvantagesGrid from "@/components/advantages/AdvantagesGrid";
import SecurityBanner from "@/components/SecurityBanner";
import SupportBanner from "@/components/SupportBanner";

export default function EconomicCalendarPage() {
  return (
    <main className="bg-white">
      <EconomicCalendarHero />
      <EconomicCalendarEmbed />
      <MarketNewsEmbed />
      <EconomicCalendarDisclaimer />
      <AdvantagesGrid />
      <SecurityBanner />
      <SupportBanner />
    </main>
  );
}
