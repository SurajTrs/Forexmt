import ExecutionHero from "@/components/execution/ExecutionHero";
import ExecutionHighlights from "@/components/execution/ExecutionHighlights";
import ExecutionQuote from "@/components/execution/ExecutionQuote";
import ExecutionFeatures from "@/components/execution/ExecutionFeatures";
import ExecutionCta from "@/components/execution/ExecutionCta";

export default function ExecutionPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ExecutionHero />
      <ExecutionHighlights />
      <ExecutionQuote />
      <ExecutionFeatures />
      <ExecutionCta />
    </main>
  );
}
