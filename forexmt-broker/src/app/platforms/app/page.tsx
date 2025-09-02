import AppHero from "@/components/platforms/app/AppHero";
import AppZigzagSection from "@/components/platforms/app/AppZigzagSection";
import AppCTA from "@/components/platforms/app/AppCTA";
import AppFeatures from "@/components/platforms/app/AppFeatures";

export default function AppPage() {
  return (
    <>
      <AppHero />
      <AppZigzagSection
        title="Download a Powerhouse"
        subtitle="Tap into your full potential with the all‑in‑one, award‑winning ForexMT app. All ForexMT accounts, products, and services are just a few taps away."
        imageSrc="/mobile.png"
        imageAlt="ForexMT App mobile preview"
      />
      <AppZigzagSection
        title="Start Trading"
        subtitle="Open a ForexMT account from the app within minutes."
        imageSrc="/shares.png"
        imageAlt="Trading preview"
        reverse
      />
      <AppFeatures />
      <AppCTA />
    </>
  );
}
