import { useEffect, useState } from "react";
import { getIssues } from "../../api/issues";
import { Link } from "react-router-dom";

export default function TopCounties() {
  const [counties, setCounties] = useState([]);

  useEffect(() => {
    getIssues()
      .then((issues) => {
        const counts = {};
        issues.forEach((i) => {
          if (i.county) counts[i.county] = (counts[i.county] || 0) + 1;
        });
        const sorted = Object.entries(counts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5);
        setCounties(sorted);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="card" style={{ padding: "25px", marginTop: "20px" }}>
      <h3 style={{ marginBottom: "15px" }}>Top Counties</h3>
      {counties.length === 0 && <p style={{ color: "#999" }}>No data yet</p>}
      {counties.map(([county, count]) => (
        <Link
          key={county}
          to={`/county/${county}`}
          style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f2f2f2", color: "#333" }}
        >
          <span>📍 {county}</span>
          <span style={{ color: "#006600", fontWeight: 600 }}>{count} issues</span>
        </Link>
      ))}
    </div>
  );
}