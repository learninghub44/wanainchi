import { useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  {
    label: "Issues",
    children: [
      { label: "Browse All Issues", href: "/" },
      { label: "Report an Issue", href: "/report" },
      { label: "County Reports", href: "/county/Nairobi" },
    ],
  },
  {
    label: "Tools",
    children: [
      { label: "Issue Map", href: "/#map" },
      { label: "County Dashboard", href: "/county/Nairobi" },
      { label: "Statistics", href: "/#stats" },
    ],
  },
  { label: "Authorities", href: "/authorities" },
  { label: "Support Us", href: "/support" },
  { label: "Contact", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header>
      {/* TOP BAR */}
      <div style={{ background: "#006600", color: "white", fontSize: "0.8rem", padding: "6px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>🇰🇪 Wananchi.ke — Voice of the People</span>
          <div style={{ display: "flex", gap: "15px" }}>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: "white", opacity: 0.9 }}>Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: "white", opacity: 0.9 }}>Facebook</a>
            <a href="https://wa.me/254701059192" target="_blank" rel="noreferrer" style={{ color: "white", opacity: 0.9 }}>WhatsApp</a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav style={{ background: "white", borderBottom: "3px solid #006600", position: "sticky", top: 0, zIndex: 1000, boxShadow: "0 2px 10px rgba(0,0,0,.08)" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>

          {/* LOGO */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg,#006600,#111)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: "1.1rem" }}>W</div>
            <div>
              <div style={{ fontFamily: "'Merriweather',serif", fontWeight: 700, fontSize: "1.2rem", color: "#111", lineHeight: 1.1 }}>Wananchi.ke</div>
              <div style={{ fontSize: "0.68rem", color: "#006600", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" }}>Citizen Issue Reporting Platform</div>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                style={{ position: "relative" }}
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.children ? (
                  <>
                    <button style={{ background: "none", border: "none", padding: "10px 14px", cursor: "pointer", fontWeight: 600, fontSize: "0.88rem", color: "#333", display: "flex", alignItems: "center", gap: "5px", fontFamily: "inherit" }}>
                      {link.label} <span style={{ fontSize: "0.55rem", marginTop: "1px" }}>▼</span>
                    </button>
                    {activeDropdown === link.label && (
                      <div style={{ position: "absolute", top: "100%", left: 0, background: "white", border: "1px solid #eee", borderTop: "3px solid #006600", borderRadius: "0 0 8px 8px", minWidth: "200px", boxShadow: "0 8px 24px rgba(0,0,0,.12)", zIndex: 999 }}>
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            style={{ display: "block", padding: "12px 18px", color: "#333", textDecoration: "none", fontSize: "0.88rem", borderBottom: "1px solid #f5f5f5", fontWeight: 500 }}
                            onMouseEnter={e => e.currentTarget.style.background = "#f0f8f0"}
                            onMouseLeave={e => e.currentTarget.style.background = "white"}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={link.href} style={{ padding: "10px 14px", fontWeight: 600, fontSize: "0.88rem", color: "#333", textDecoration: "none", display: "block" }}>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/report" style={{ background: "#BB0000", color: "white", padding: "10px 20px", borderRadius: "6px", fontWeight: 700, fontSize: "0.88rem", textDecoration: "none", marginLeft: "8px", whiteSpace: "nowrap" }}>
              + Report Issue
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", fontSize: "1.6rem", color: "#111" }}
            className="menu-btn"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div style={{ background: "white", borderTop: "1px solid #eee", padding: "10px 0" }}>
            <div className="container">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <div style={{ padding: "10px 0", fontWeight: 700, color: "#006600", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>{link.label}</div>
                      {link.children.map((child) => (
                        <Link key={child.label} to={child.href} onClick={() => setOpen(false)} style={{ display: "block", padding: "9px 16px", color: "#444", textDecoration: "none", fontSize: "0.9rem", borderLeft: "3px solid #006600" }}>
                          {child.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link to={link.href} onClick={() => setOpen(false)} style={{ display: "block", padding: "10px 0", color: "#333", textDecoration: "none", fontWeight: 600, borderBottom: "1px solid #f5f5f5" }}>
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/report" onClick={() => setOpen(false)} style={{ display: "block", background: "#BB0000", color: "white", padding: "12px 20px", borderRadius: "6px", fontWeight: 700, textAlign: "center", textDecoration: "none", margin: "12px 0" }}>
                + Report an Issue
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}