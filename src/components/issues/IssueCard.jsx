import { useState } from "react";
import { upvoteIssue } from "../../api/issues";

export default function SupportButton({ issueId }) {
  const [supported, setSupported] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSupport = async () => {
    if (supported) return;
    try {
      setLoading(true);
      await upvoteIssue(issueId);
      setSupported(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={supported ? "btn-secondary" : "btn-primary"}
      onClick={handleSupport}
      disabled={loading || supported}
    >
      {supported ? "✅ You supported this" : loading ? "Supporting..." : "👍 Support this Issue"}
    </button>
  );
}