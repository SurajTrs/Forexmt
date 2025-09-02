import EducationHero from "@/components/tools/education/EducationHero";
import EducationCards from "@/components/tools/education/EducationCards";
import WebinarsSection from "@/components/tools/education/WebinarsSection";
import LiveEducationFeatures from "@/components/tools/education/LiveEducationFeatures";
import SecurityBanner from "@/components/SecurityBanner";
import SupportBanner from "@/components/SupportBanner";

export default function EducationPage() {
  return (
    <main className="bg-white">
      <EducationHero />
      <EducationCards />
      <WebinarsSection />
      <LiveEducationFeatures />
      <div className="border-t border-slate-200">
        <SecurityBanner />
        <SupportBanner />
      </div>
    </main>
  );
}
