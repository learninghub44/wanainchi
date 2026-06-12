import { useState } from "react";
import { supportIssue } from "../../api/support";

export default function SupportButton({ issueId }) {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSupport = async () => {
    try {
      setLoading(true);

      const data = await supportIssue(issueId);

      setCount(data.supports);

    } catch (err) {
      console.error(err);
      alert("Support failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="btn-primary"
      onClick={handleSupport}
      disabled={loading}
      style={{ width: "100%" }}
    >
      👍 Support ({count})
    </button>
  );
}