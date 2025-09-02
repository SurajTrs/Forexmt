import type { Metadata } from "next";
import DepositBonus from "@/components/promotions/DepositBonus";

export const metadata: Metadata = {
  title: "100% Deposit Bonus | ForexMT",
  description: "Get a 100% bonus on your deposit up to $10,000. Double your trading power with our special promotion.",
  openGraph: {
    title: "100% Deposit Bonus | ForexMT",
    description: "Get a 100% bonus on your deposit up to $10,000. Double your trading power with our special promotion.",
    type: "website",
  },
};

export default function BonusPage() {
  return <DepositBonus />;
}