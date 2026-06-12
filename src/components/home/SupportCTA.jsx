export default function SupportCTA() {
  return (
    <section style={{ background: "#111", color: "white", padding: "100px 0" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>

        <div>
          <span style={{ color: "#90ee90", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Support the Mission</span>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.8rem", margin: "16px 0", lineHeight: 1.2 }}>
            Help Keep This Platform Running
          </h2>
          <p style={{ color: "#aaa", lineHeight: 1.8, fontSize: "1.02rem", marginBottom: "30px" }}>
            Sauti ya Wananchi is built and maintained by citizens, for citizens.
            We have no government funding and no advertisers — only the support of people who believe in community accountability.
          </p>
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <a href="/support" style={{ background: "#006600", color: "white", padding: "14px 28px", borderRadius: "6px", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
              Support the Platform →
            </a>
            <a href="/about" style={{ border: "1px solid #555", color: "white", padding: "14px 28px", borderRadius: "6px", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem" }}>
              Learn More
            </a>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {[
            { icon: "🏘️", title: "47 Counties", desc: "Issues tracked across all of Kenya" },
            { icon: "👥", title: "Citizen-Led", desc: "Built by and for Kenyan communities" },
            { icon: "📢", title: "Independent", desc: "No political or government affiliation" },
            { icon: "🔓", title: "Open Platform", desc: "Transparent and publicly accessible" },
          ].map((item) => (
            <div key={item.title} style={{ background: "#1a1a1a", borderRadius: "10px", padding: "20px", border: "1px solid #333" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "10px" }}>{item.icon}</div>
              <div style={{ fontWeight: 700, marginBottom: "6px", fontSize: "0.95rem" }}>{item.title}</div>
              <div style={{ color: "#888", fontSize: "0.82rem", lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}