import { Link } from "react-router-dom";

const CARDS = [
  {
    number: "01",
    title: "Report Community Issues",
    desc: "Citizens report roads, water, electricity, security and environmental problems directly from their phones or computers — no middlemen.",
    link: "/report",
    linkLabel: "Report Now →",
    bg: "linear-gradient(160deg, #003300 0%, #001a00 100%)",
  },
  {
    number: "02",
    title: "Track Government Response",
    desc: "Follow the status of every issue in real time. See when authorities acknowledge, act on, or resolve reported problems in your county.",
    link: "/",
    linkLabel: "Browse Issues →",
    bg: "linear-gradient(160deg, #1a0000 0%, #330000 100%)",
  },
  {
    number: "03",
    title: "Hold Leaders Accountable",
    desc: "Our county dashboards and issue maps expose patterns of neglect. Share reports, rally community support, and demand real action.",
    link: "/about",
    linkLabel: "Learn More →",
    bg: "linear-gradient(160deg, #111 0%, #222 100%)",
  },
];

export default function WhatWeDo() {
  return (
    <section style={{ background: "#f8f8f8", padding: "80px 0" }}>
      <div className="container">
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span style={{ color: "#BB0000", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Our Mission
          </span>
          <h2 style={{ fontFamily: "'Merriweather', serif", fontSize: "2.2rem", color: "#111", margin: "10px 0 16px" }}>
            What We Do
          </h2>
          <p style={{ color: "#666", maxWidth: "560px", margin: "0 auto", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Wananchi.ke connects Kenyan citizens directly with accountability. We make civic engagement simple, visible, and effective.
          </p>
        </div>

        {/* CARDS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {CARDS.map((card) => (
            <div
              key={card.number}
              style={{ background: card.bg, color: "white", borderRadius: "12px", padding: "40px 32px", display: "flex", flexDirection: "column", minHeight: "320px" }}
            >
              <div style={{ fontSize: "3rem", fontWeight: 800, fontFamily: "'Merriweather', serif", opacity: 0.25, lineHeight: 1, marginBottom: "20px" }}>
                {card.number}
              </div>
              <h3 style={{ fontFamily: "'Merriweather', serif", fontSize: "1.25rem", marginBottom: "14px", lineHeight: 1.3 }}>
                {card.title}
              </h3>
              <p style={{ color: "#ccc", fontSize: "0.88rem", lineHeight: 1.7, flex: 1 }}>
                {card.desc}
              </p>
              <Link
                to={card.link}
                style={{ color: "#90ee90", fontWeight: 700, fontSize: "0.88rem", textDecoration: "none", marginTop: "24px", display: "inline-block" }}
              >
                {card.linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}