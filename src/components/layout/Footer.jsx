import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      {/* KENYAN FLAG BAR */}
      <div style={{ display: "flex", height: "8px" }}>
        <div style={{ flex: 1, background: "#111" }} />
        <div style={{ flex: 1, background: "#BB0000" }} />
        <div style={{ flex: 1, background: "white", borderTop: "1px solid #ddd", borderBottom: "1px solid #ddd" }} />
        <div style={{ flex: 1, background: "#006600" }} />
      </div>

      {/* NEWSLETTER BAND */}
      <div style={{ background: "#006600", color: "white", padding: "40px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <h3 style={{ fontFamily: "'Merriweather',serif", fontSize: "1.4rem", marginBottom: "6px" }}>Stay Informed</h3>
            <p style={{ opacity: 0.85, fontSize: "0.9rem" }}>Get updates on community issues and platform news in your county.</p>
          </div>
          <div style={{ display: "flex", gap: "0" }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{ padding: "13px 18px", border: "none", borderRadius: "6px 0 0 6px", fontSize: "0.9rem", width: "260px", outline: "none", color: "#111" }}
            />
            <button style={{ background: "#BB0000", color: "white", border: "none", padding: "13px 22px", borderRadius: "0 6px 6px 0", fontWeight: 700, cursor: "pointer", fontSize: "0.9rem" }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div style={{ background: "#111", color: "white", padding: "60px 0 30px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", marginBottom: "40px" }}>

            {/* BRAND */}
            <div>
              <div style={{ fontFamily: "'Merriweather',serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "12px" }}>Wananchi.ke</div>
              <p style={{ color: "#aaa", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "20px" }}>
                A Kenyan citizen-driven platform whose mission is to promote accountability, transparency and community-led action across all 47 counties.
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {[
                  { label: "Twitter", href: "https://twitter.com" },
                  { label: "Facebook", href: "https://facebook.com" },
                  { label: "WhatsApp", href: "https://wa.me/254701059192" },
                  { label: "YouTube", href: "https://youtube.com" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ background: "#222", color: "white", padding: "7px 13px", borderRadius: "6px", fontSize: "0.78rem", fontWeight: 600, textDecoration: "none" }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* KEY PAGES */}
            <div>
              <h4 style={{ color: "#90ee90", fontWeight: 700, marginBottom: "16px", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Key Pages</h4>
              {[
                { label: "Browse Issues", to: "/" },
                { label: "Report an Issue", to: "/report" },
                { label: "County Reports", to: "/county/Nairobi" },
                { label: "Issue Map", to: "/" },
                { label: "Statistics", to: "/" },
              ].map((l) => (
                <Link key={l.label} to={l.to} style={{ display: "block", color: "#bbb", textDecoration: "none", marginBottom: "10px", fontSize: "0.88rem" }}
                  onMouseEnter={e => e.currentTarget.style.color = "white"}
                  onMouseLeave={e => e.currentTarget.style.color = "#bbb"}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* PLATFORM */}
            <div>
              <h4 style={{ color: "#90ee90", fontWeight: 700, marginBottom: "16px", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Platform</h4>
              {[
                { label: "About Us", to: "/about" },
                { label: "How It Works", to: "/about" },
                { label: "Authorities", to: "/authorities" },
                { label: "Support Us", to: "/support" },
              ].map((l) => (
                <Link key={l.label} to={l.to} style={{ display: "block", color: "#bbb", textDecoration: "none", marginBottom: "10px", fontSize: "0.88rem" }}
                  onMouseEnter={e => e.currentTarget.style.color = "white"}
                  onMouseLeave={e => e.currentTarget.style.color = "#bbb"}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* CONTACT */}
            <div>
              <h4 style={{ color: "#90ee90", fontWeight: 700, marginBottom: "16px", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Contact Us</h4>
              <p style={{ color: "#bbb", fontSize: "0.88rem", lineHeight: 2 }}>
                PO Box 1234 - 40200<br />
                Kisii, Kenya<br />
                📞 +254 701 059 192<br />
                ✉️ info@wananchi.ke
              </p>
            </div>

          </div>

          {/* BOTTOM BAR */}
          <div style={{ borderTop: "1px solid #2a2a2a", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
            <p style={{ color: "#666", fontSize: "0.82rem" }}>© 2026 Wananchi.ke. All Rights Reserved. Built by citizens, for citizens.</p>
            <div style={{ display: "flex", gap: "20px" }}>
              {["Privacy Policy", "Terms of Service", "Data Policy"].map((l) => (
                <a key={l} href="#" style={{ color: "#666", fontSize: "0.8rem", textDecoration: "none" }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}