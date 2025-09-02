"use client";
import { useState } from "react";
import Mt4Hero from "@/components/platforms/mt4/Mt4Hero";
import Mt4Tabs from "@/components/platforms/mt4/Mt4Tabs";
import Mt4Showcase from "@/components/platforms/mt4/Mt4Showcase";
import Mt4FeatureCards from "@/components/platforms/mt4/Mt4FeatureCards";
import Mt4Devices from "@/components/platforms/mt4/Mt4Devices";

export default function Mt4Page() {
  const [active, setActive] = useState<"app" | "ios" | "android" | "webtrader">("app");
  return (
    <main className="min-h-screen bg-white">
      <Mt4Hero />
      <Mt4Tabs active={active} onChange={setActive} />
      <Mt4Showcase active={active} />
      <Mt4FeatureCards />
      <Mt4Devices />
    </main>
  );
}
