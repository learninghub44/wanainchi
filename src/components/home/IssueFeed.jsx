import { useEffect, useState } from "react";
import { getIssues } from "../../api/issues";
import IssueCard from "../issues/IssueCard";
import LoadingSkeleton from "../ui/LoadingSkeleton";

export default function IssueFeed({ filters = {} }) {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getIssues()
      .then(setIssues)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSkeleton />;

  if (issues.length === 0) {
    return (
      <div className="card" style={{ padding: "40px", textAlign: "center" }}>
        <p>No issues reported yet. <a href="/report" className="view-link">Be the first →</a></p>
      </div>
    );
  }

  return (
    <section className="section" id="issues">
      <div className="container">
        <h2 className="section-heading">Recent Reports</h2>
        <div className="issues-grid">
          {issues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      </div>
    </section>
  );
}