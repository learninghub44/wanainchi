export default function Authorities() {
  const AUTHORITIES = [
    { name: "Kenya National Highways Authority", abbr: "KeNHA", county: "National", category: "Roads" },
    { name: "Nairobi City Water & Sewerage", abbr: "NCWSC", county: "Nairobi", category: "Water" },
    { name: "Kenya Power", abbr: "KPLC", county: "National", category: "Electricity" },
    { name: "National Environment Management Authority", abbr: "NEMA", county: "National", category: "Environment" },
    { name: "Kisii County Government", abbr: "KCG", county: "Kisii", category: "County Services" },
    { name: "National Police Service", abbr: "NPS", county: "National", category: "Security" },
  ];

  return (
    <section style={{ padding: "80px 0", background: "#f8f8f8", minHeight: "60vh" }}>
      <div className="container">
        <span style={{ color: "#BB0000", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Directory</span>
        <h1 style={{ fontFamily: "'Merriweather', serif", fontSize: "2.5rem", margin: "10px 0 10px", color: "#111" }}>Relevant Authorities</h1>
        <p style={{ color: "#666", marginBottom: "40px", maxWidth: "580px", lineHeight: 1.7 }}>
          These are the government bodies and agencies responsible for resolving issues reported on Wananchi.ke.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {AUTHORITIES.map((a) => (
            <div key={a.abbr} style={{ background: "white", borderRadius: "12px", padding: "28px", boxShadow: "0 4px 16px rgba(0,0,0,.06)", borderTop: "4px solid #006600" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <div style={{ background: "#006600", color: "white", padding: "6px 12px", borderRadius: "6px", fontWeight: 800, fontSize: "0.9rem" }}>{a.abbr}</div>
                <span style={{ background: "#f0f0f0", color: "#555", padding: "4px 10px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 600 }}>{a.category}</span>
              </div>
              <h3 style={{ fontFamily: "'Merriweather', serif", fontSize: "1rem", color: "#111", lineHeight: 1.4, marginBottom: "10px" }}>{a.name}</h3>
              <p style={{ fontSize: "0.82rem", color: "#888" }}>📍 {a.county}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}