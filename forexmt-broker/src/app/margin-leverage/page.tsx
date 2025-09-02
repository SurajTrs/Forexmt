import TradeHero from "@/components/trade-bigger/TradeHero";
import TradeGrid from "@/components/trade-bigger/TradeGrid";
import TradeAssetsCta from "@/components/trade-bigger/TradeAssetsCta";

export default function TradeBiggerPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <TradeHero />
      <TradeGrid />
      <TradeAssetsCta />
    </main>
  );
}
