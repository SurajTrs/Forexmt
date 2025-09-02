import AboutHero from "@/components/company/about/AboutHero";
import MetricsBanner from "@/components/company/about/MetricsBanner";
import ExperienceSection from "@/components/company/about/ExperienceSection";
import JoinUsSection from "@/components/company/about/JoinUsSection";
import AwardsTeaser from "@/components/company/about/AwardsTeaser";
import SecurityBanner from "@/components/SecurityBanner";
import SupportBanner from "@/components/SupportBanner";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <MetricsBanner />
      <ExperienceSection />
      <JoinUsSection />
      <AwardsTeaser />
      <SecurityBanner />
      <SupportBanner />
    </main>
  );
}
