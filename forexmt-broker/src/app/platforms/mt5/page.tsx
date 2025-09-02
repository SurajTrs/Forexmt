"use client";
import { useState } from "react";
import Mt5Hero from "@/components/platforms/mt5/Mt5Hero";
import Mt5Tabs from "@/components/platforms/mt5/Mt5Tabs";
import Mt5Showcase from "@/components/platforms/mt5/Mt5Showcase";
import Mt5FeatureCards from "@/components/platforms/mt5/Mt5FeatureCards";
import Mt5Devices from "@/components/platforms/mt5/Mt5Devices";

export default function Mt5Page() {
  const [active, setActive] = useState<"app" | "ios" | "android" | "webtrader">("app");
  return (
    <main className="min-h-screen bg-white">
      <Mt5Hero />
      <Mt5Tabs active={active} onChange={setActive} />
      <Mt5Showcase active={active} />
      <Mt5FeatureCards />
      <Mt5Devices />
    </main>
  );
}
