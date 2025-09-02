import AwardsHero from "@/components/company/awards/AwardsHero";
import AwardsGrid from "@/components/company/awards/AwardsGrid";
import type { Award } from "@/components/company/awards/AwardCard";
import SecurityBanner from "@/components/SecurityBanner";
import SupportBanner from "@/components/SupportBanner";

const awards: Award[] = [
  { title: "Best Trading Platform", org: "Global Finance Review", year: "2024", category: "Platform", desc: "For reliability, performance and UX.", imageSrc: "/mobile.png", imageAlt: "Platform award" },
  { title: "Most Trusted Broker", org: "Finance Awards Europe", year: "2024", category: "Service", desc: "Client-first approach and transparency.", imageSrc: "/logo.png", imageAlt: "Trust award" },
  { title: "Best Education Program", org: "Traders Guild International", year: "2023", category: "Education", desc: "Comprehensive learning and live sessions.", imageSrc: "/news.png", imageAlt: "Education award" },
  { title: "Innovation in Trading Tools", org: "FinTech Excellence", year: "2023", category: "Innovation", desc: "Advanced analytics and risk controls.", imageSrc: "/window.svg", imageAlt: "Innovation award" },
  { title: "Outstanding Customer Support", org: "Service Quality Institute", year: "2024", category: "Service", desc: "24/7 multilingual support.", imageSrc: "/standard.png", imageAlt: "Support award" },
  { title: "Best Mobile Experience", org: "App Excellence Awards", year: "2024", category: "Platform", desc: "Fast, intuitive mobile trading.", imageSrc: "/mobile.png", imageAlt: "Mobile award" },
  { title: "Top Research & Insights", org: "Market Intelligence Assoc.", year: "2023", category: "Education", desc: "Daily analysis and actionable insights.", imageSrc: "/news.png", imageAlt: "Research award" },
  { title: "Innovation Leader", org: "Tech Innovators Summit", year: "2024", category: "Innovation", desc: "AI-driven execution enhancements.", imageSrc: "/next.svg", imageAlt: "Innovation leader" },
  { title: "Best Account Types", org: "Global Broker Ranking", year: "2023", category: "Other", desc: "Flexible accounts for every style.", imageSrc: "/ultra.png", imageAlt: "Account types award" },
  { title: "Top Multi-Asset Offering", org: "Securities Review Board", year: "2024", category: "Platform", desc: "Broad range across markets.", imageSrc: "/shares.png", imageAlt: "Multi-asset award" },
];

export default function AwardsPage() {
  return (
    <main className="bg-white">
      <AwardsHero />
      <AwardsGrid awards={awards} />
      <SecurityBanner />
      <SupportBanner />
    </main>
  );
}
