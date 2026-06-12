import { useEffect, useState } from "react";
import { getIssues } from "../../api/issues";

export default function StatsSection() {
  const [stats, setStats] = useState({ total: 0, resolved: 0, counties: 0, pending: 0 });

  useEffect(() => {
    getIssues()
      .then((issues) => {
        const counties = new Set(issues.map((i) => i.county)).size;
        setStats({
          total: issues.length,
          resolved: issues.filter((i) => i.status === "resolved").length,
          pending: issues.filter((i) => i.status === "pending").length,
          counties,
        });
      })
      .catch(console.error);
  }, []);

  const cards = [
    { label: "Issues Reported", value: stats.total },
    { label: "Resolved", value: stats.resolved },
    { label: "Pending Review", value: stats.pending },
    { label: "Counties Covered", value: stats.counties },
  ];

  return (
    <section className="section" style={{ paddingBottom: "0" }}>
      <div className="container">
        <div className="stats-grid">
          {cards.map((c) => (
            <div key={c.label} className="stat-card">
              <h2>{c.value}</h2>
              <p>{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}