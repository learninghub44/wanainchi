import CategoryBadge from "./CategoryBadge";
import StatusBadge from "./StatusBadge";

export default function IssueHeader({ issue }) {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
        {issue?.category && <CategoryBadge category={issue.category} />}
        {issue?.status && <StatusBadge status={issue.status} />}
      </div>

      <h1 className="page-title">{issue?.title}</h1>

      <div style={{ display: "flex", gap: "20px", color: "#777", fontSize: "0.95rem", flexWrap: "wrap" }}>
        {issue?.county && <span>📍 {issue.county}</span>}
        {issue?.created_at && (
          <span>🗓 {new Date(issue.created_at).toLocaleDateString("en-KE", { dateStyle: "medium" })}</span>
        )}
        {issue?.support_count !== undefined && (
          <span>👍 {issue.support_count} supporters</span>
        )}
      </div>
    </div>
  );
}