import Link from "next/link";

const features = [
  ["AI Ad Analyzer", "/ai-analyzer"],
  ["Ad Optimizer", "/ai-optimizer"],
  ["Audience Optimizer", "/audience-optimizer"],
  ["Budget Planner", "/budget-planner"],
  ["Launch Simulator", "/launch-simulator"],
  ["Winner Database", "/winners"],
  ["Loser Database", "/losers"],
  ["Pattern Finder", "/pattern-finder"],
  ["Saturation Detector", "/saturation"],
  ["Scaling Advisor", "/scaling-advisor"],
];

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#080816,#111827,#1e1b4b)",
      color: "white",
      padding: "48px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ fontSize: 56, marginBottom: 12 }}>AdOracle AI</h1>
      <p style={{ fontSize: 20, color: "#cbd5e1", maxWidth: 760 }}>
        AI platform for dropshipping ad analysis, creative scoring, budget planning and launch simulation.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: 20,
        marginTop: 40
      }}>
        {features.map(([name, href]) => (
          <Link key={name} href={href} style={{
            padding: 24,
            borderRadius: 20,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.16)",
            color: "white",
            textDecoration: "none",
            fontSize: 18,
            fontWeight: 700
          }}>
            {name}
          </Link>
        ))}
      </div>
    </main>
  );
}
