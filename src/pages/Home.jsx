import Hero from "../components/home/Hero";
import WhatWeDo from "../components/home/WhatWeDo";
import IssueFeed from "../components/home/IssueFeed";
import TopCounties from "../components/home/TopCounties";
import MapOverview from "../components/home/MapOverview";
import SupportCTA from "../components/home/SupportCTA";
import FilterBar from "../components/home/FilterBar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />

      {/* LATEST ISSUES + SIDEBAR */}
      <section style={{ padding: "80px 0", background: "white" }}>
        <div className="container">

          {/* FILTER */}
          <FilterBar />

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px", alignItems: "start", marginTop: "40px" }}>

            {/* MAIN — ISSUES FEED */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
                <div>
                  <span style={{ color: "#BB0000", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Latest Reports</span>
                  <h2 style={{ fontFamily: "'Merriweather', serif", fontSize: "1.9rem", margin: "6px 0 0", color: "#111" }}>Recent Community Issues</h2>
                </div>
                <Link to="/report" style={{ background: "#006600", color: "white", padding: "10px 20px", borderRadius: "6px", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", whiteSpace: "nowrap" }}>
                  + Report Issue
                </Link>
              </div>
              <IssueFeed />
            </div>

            {/* SIDEBAR */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>

              {/* MAP */}
              <div>
                <span style={{ color: "#BB0000", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Issue Map</span>
                <h3 style={{ fontFamily: "'Merriweather', serif", fontSize: "1.2rem", margin: "6px 0 14px", color: "#111" }}>Kenya Overview</h3>
                <MapOverview />
              </div>

              {/* TOP COUNTIES */}
              <div>
                <span style={{ color: "#BB0000", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>By County</span>
                <h3 style={{ fontFamily: "'Merriweather', serif", fontSize: "1.2rem", margin: "6px 0 14px", color: "#111" }}>Most Active Counties</h3>
                <TopCounties />
              </div>

              {/* QUICK REPORT CTA */}
              <div style={{ background: "linear-gradient(135deg, #111, #003300)", color: "white", borderRadius: "12px", padding: "28px" }}>
                <h3 style={{ fontFamily: "'Merriweather', serif", fontSize: "1.15rem", marginBottom: "10px" }}>See a problem?</h3>
                <p style={{ color: "#bbb", fontSize: "0.86rem", lineHeight: 1.65, marginBottom: "18px" }}>
                  Help your community by reporting it. It takes less than 3 minutes.
                </p>
                <Link to="/report" style={{ display: "block", background: "#BB0000", color: "white", padding: "12px", borderRadius: "6px", fontWeight: 700, textAlign: "center", textDecoration: "none", fontSize: "0.88rem" }}>
                  Report Now →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      <SupportCTA />
    </div>
  );
}