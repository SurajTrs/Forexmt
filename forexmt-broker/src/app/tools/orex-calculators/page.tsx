import CalculatorsHero from "@/components/tools/forex-calculators/CalculatorsHero";
import CalculatorsContainer from "@/components/tools/forex-calculators/CalculatorsContainer";
import AdvantagesGrid from "@/components/advantages/AdvantagesGrid";
import SecurityBanner from "@/components/SecurityBanner";
import SupportBanner from "@/components/SupportBanner";

export default function OrexCalculatorsPage() {
  return (
    <main className="bg-white">
      <CalculatorsHero />
      <CalculatorsContainer />
      <AdvantagesGrid />
      <SecurityBanner />
      <SupportBanner />
    </main>
  );
}
