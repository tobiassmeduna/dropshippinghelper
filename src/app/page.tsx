import Link from "next/link";

const nav = [
  ["Dashboard", "/"],
  ["Products", "/products"],
  ["Ads", "/ads"],
  ["AI Analyzer", "/ai-analyzer"],
  ["AI Optimizer", "/ai-optimizer"],
  ["Audience", "/audience-optimizer"],
  ["Budget Planner", "/budget-planner"],
  ["Launch Simulator", "/launch-simulator"],
  ["Winners", "/winners"],
  ["Losers", "/losers"],
  ["Saturation", "/saturation"],
  ["Scaling", "/scaling-advisor"],
];

export default function Home() {
  return (
    <main style={{ display: "flex", minHeight: "100vh", background: "#0b1020", color: "white", fontFamily: "Arial" }}>
      <aside style={{ width: 260, padding: 24, background: "#070b16", borderRight: "1px solid #1f2937" }}>
        <h2 style={{ fontSize: 24, marginBottom: 24 }}>AdOracle AI</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {nav.map(([name, href]) => (
            <Link key={name} href={href} style={{ color: "#cbd5e1", textDecoration: "none", padding: "12px 14px", borderRadius: 12, background: href === "/" ? "#2563eb" : "transparent" }}>
              {name}
            </Link>
          ))}
        </nav>
      </aside>

      <section style={{ flex: 1, padding: 40 }}>
        <h1 style={{ fontSize: 44, marginBottom: 8 }}>Dashboard</h1>
        <p style={{ color: "#94a3b8", marginBottom: 32 }}>Overview of your ad performance and AI insights.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
          {[
            ["Total Ads", "128"],
            ["Avg Score", "84/100"],
            ["Best Audience", "Women 25–44"],
            ["Recommended Budget", "€25/day"],
          ].map(([label, value]) => (
            <div key={label} style={{ padding: 24, borderRadius: 20, background: "#111827", border: "1px solid #263244" }}>
              <p style={{ color: "#94a3b8" }}>{label}</p>
              <h2 style={{ fontSize: 30 }}>{value}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}