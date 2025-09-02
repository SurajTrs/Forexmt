import ApkHero from "@/components/apk/ApkHero";
import ApkSteps from "@/components/apk/ApkSteps";
import ApkCTA from "@/components/apk/ApkCTA";
import AppFeatures from "@/components/platforms/app/AppFeatures";

export default function ApkPage() {
  return (
    <>
      <ApkHero />
            <AppFeatures />
      
      <ApkSteps />
      
      <ApkCTA />
    </>
  );
}
