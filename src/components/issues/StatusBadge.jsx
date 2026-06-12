const labels = {
  pending: "Pending",
  in_progress: "In Progress",
  resolved: "Resolved",
  rejected: "Rejected",
};

const colors = {
  pending: { background: "#fff3cd", color: "#856404" },
  in_progress: { background: "#cce5ff", color: "#004085" },
  resolved: { background: "#e8f5e8", color: "#006600" },
  rejected: { background: "#fdecea", color: "#BB0000" },
};

export default function StatusBadge({ status }) {
  const style = colors[status] || { background: "#f2f2f2", color: "#444" };
  return (
    <span style={{ ...style, padding: "6px 14px", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 600 }}>
      {labels[status] || status}
    </span>
  );
}