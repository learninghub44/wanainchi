import { useEffect, useState } from "react";
import { apiGet } from "../../api/base";

const steps = ["pending", "in_progress", "resolved"];

const labels = {
  pending: "Reported",
  in_progress: "In Progress",
  resolved: "Resolved",
};

const colors = {
  pending: "#ffc107",
  in_progress: "#007bff",
  resolved: "#006600",
};

export default function StatusTimeline({ issueId }) {
  const [currentStatus, setCurrentStatus] = useState("pending");

  useEffect(() => {
    apiGet(`/issues/${issueId}`)
      .then((data) => setCurrentStatus(data.status))
      .catch(console.error);
  }, [issueId]);

  const currentIndex = steps.indexOf(currentStatus);

  return (
    <div className="card" style={{ padding: "25px" }}>
      <h3 style={{ marginBottom: "20px" }}>Issue Status</h3>

      <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
        {steps.map((step, i) => (
          <div key={step} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : "none" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: i <= currentIndex ? colors[step] : "#ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                margin: "0 auto 8px",
              }}>
                {i <= currentIndex ? "✓" : i + 1}
              </div>
              <span style={{ fontSize: "0.8rem", color: i <= currentIndex ? "#333" : "#aaa" }}>
                {labels[step]}
              </span>
            </div>

            {i < steps.length - 1 && (
              <div style={{
                flex: 1,
                height: "3px",
                background: i < currentIndex ? colors[steps[i + 1]] : "#ddd",
                margin: "0 8px",
                marginBottom: "20px",
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}