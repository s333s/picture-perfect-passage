import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Basma بصمة — AI-audited carbon credits" },
      { name: "description", content: "From footprint to fingerprint: AI-audited, tamper-proof carbon credits on a hash-chained ledger." },
      { property: "og:title", content: "Basma بصمة — AI-audited carbon credits" },
      { property: "og:description", content: "Footprint parser, explainable credit auditor, smart-contract retirement and a tamper-evident ledger." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <iframe src="/basma.html" title="Basma" className="block h-screen w-full border-0" />;
}
