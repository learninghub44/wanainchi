import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FEATURED = [
  {
    tag: "Roads & Infrastructure",
    title: "Blocked drainage causing severe flooding near Nyanchwa Market",
    excerpt: "Residents of Nyanchwa have been battling floods every rainy season due to a blocked drainage system that authorities have ignored for over two years.",
    county: "Kisii",
    date: "June 10, 2026",
  },
  {
    tag: "Water Supply",
    title: "Mwiki households go 3 weeks without water as pipes burst",
    excerpt: "Over 400 households in Mwiki, Nairobi have been forced to buy water from vendors at inflated prices after the main supply pipe burst and was left unrepaired.",
    county: "Nairobi",
    date: "June 8, 2026",
  },
  {
    tag: "Electricity",
    title: "Street lights along Jogoo Road dark for 6 months — residents fear crime",
    excerpt: "Business owners and pedestrians along Jogoo Road say the persistent darkness has led to increased muggings and road accidents at night.",
    county: "Nairobi",
    date: "June 5, 2026",
  },
  {
    tag: "Environment",
    title: "Illegal dumping site near Kachok threatens public health",
    excerpt: "An illegal waste dumping site near Kachok in Kisumu has grown to alarming proportions, with residents reporting respiratory problems and contaminated water.",
    county: "Kisumu",
    date: "June 2, 2026",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % FEATURED.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const active = FEATURED[current];

  return (
    <div>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #003300 100%)", color: "white", padding: "90px 0 70px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>

            {/* LEFT — HEADLINE */}
            <div>
              <span style={{ background: "#BB0000", color: "white", padding: "5px 14px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Independent Citizen Platform
              </span>
              <h1 style={{ fontFamily: "'Merriweather', serif", fontSize: "2.8rem", lineHeight: 1.2, margin: "20px 0", fontWeight: 700 }}>
                Wananchi.ke — where{" "}
                <span style={{ color: "#90ee90" }}>every Kenyan voice</span>{" "}
                drives accountability.
              </h1>
              <p style={{ color: "#ccc", fontSize: "1rem", lineHeight: 1.7, marginBottom: "28px", maxWidth: "460px" }}>
                Report community issues, track government response, and demand action across all 47 counties. Built by citizens, for citizens.
              </p>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <Link to="/report" style={{ background: "#BB0000", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
                  Report an Issue →
                </Link>
                <Link to="/about" style={{ background: "rgba(255,255,255,0.1)", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem", border: "1px solid rgba(255,255,255,0.2)" }}>
                  How It Works
                </Link>
              </div>
            </div>

            {/* RIGHT — FEATURED ISSUE SLIDER */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "30px" }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", color: "#90ee90", marginBottom: "14px", textTransform: "uppercase" }}>
                Featured Report
              </div>
              <span style={{ background: "#BB0000", color: "white", padding: "4px 12px", borderRadius: "4px", fontSize: "0.76rem", fontWeight: 600 }}>
                {active.tag}
              </span>
              <h2 style={{ fontFamily: "'Merriweather', serif", fontSize: "1.3rem", margin: "14px 0 10px", lineHeight: 1.35, fontWeight: 700 }}>
                {active.title}
              </h2>
              <p style={{ color: "#bbb", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "18px" }}>
                {active.excerpt}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.8rem", color: "#888" }}>📍 {active.county} · {active.date}</span>
                <Link to="/" style={{ color: "#90ee90", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}>Read More →</Link>
              </div>

              {/* DOTS */}
              <div style={{ display: "flex", gap: "8px", marginTop: "22px" }}>
                {FEATURED.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    style={{ width: i === current ? "28px" : "10px", height: "10px", borderRadius: "5px", background: i === current ? "#90ee90" : "#444", border: "none", cursor: "pointer", transition: "all 0.3s" }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ background: "#006600", color: "white", padding: "20px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "15px", textAlign: "center" }}>
          {[
            { value: "1,240+", label: "Issues Reported" },
            { value: "47", label: "Counties Covered" },
            { value: "312", label: "Issues Resolved" },
            { value: "8,500+", label: "Citizens Engaged" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: "1.7rem", fontWeight: 800, fontFamily: "'Merriweather', serif" }}>{s.value}</div>
              <div style={{ fontSize: "0.78rem", opacity: 0.85, fontWeight: 500, marginTop: "2px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}