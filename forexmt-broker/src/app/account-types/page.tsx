import OpenAccountHero from "@/components/open-account/OpenAccountHero";
import AccountCards from "@/components/open-account/AccountCards";
import PracticeCta from "@/components/open-account/PracticeCta";
import RiskNote from "@/components/open-account/RiskNote";
import RiskBanner from "@/components/open-account/RiskBanner";

export default function OpenAccountPage() {
  return (
    <main className="relative min-h-screen pb-16 bg-white text-[15px] sm:text-[16px] md:text-[17px]">
      <OpenAccountHero />
      <section className="-mt-8">
        <AccountCards />
      </section>
      <PracticeCta />
      <RiskBanner />
    </main>
  );
}
