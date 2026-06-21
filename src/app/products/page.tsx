import Link from "next/link";

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#0b1020", color: "white", padding: 40, fontFamily: "Arial" }}>
      <Link href="/" style={{ color: "#60a5fa", textDecoration: "none" }}>Back to Dashboard</Link>
      <h1 style={{ fontSize: 44, marginTop: 32 }}>Products</h1>
      <p style={{ color: "#94a3b8", fontSize: 18 }}>
        This is the Products module for AdOracle AI.
      </p>
    </main>
  );
}