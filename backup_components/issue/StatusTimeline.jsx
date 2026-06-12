import { useEffect, useState } from "react";
import { getTimeline } from "../../api/timeline";

export default function StatusTimeline({ issueId }) {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await getTimeline(issueId);
        setSteps(data);
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, [issueId]);

  return (
    <div className="card" style={{ padding: "20px" }}>
      <h3>Status Timeline</h3>

      {steps.length === 0 && <p>No updates yet</p>}

      <ul>
        {steps.map((s, i) => (
          <li key={i}>
            ✔ {s.status} — {s.note}
          </li>
        ))}
      </ul>
    </div>
  );
}