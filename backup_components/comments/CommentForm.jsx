import { useState } from "react";
import { addComment } from "../../api/comments";

export default function CommentForm({ issueId }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!text.trim()) return;

    try {
      setLoading(true);

      await addComment(issueId, text);

      setText("");

      alert("Comment posted");

    } catch (err) {
      console.error(err);
      alert("Failed to post comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card" style={{ padding: "20px" }}>
      <h3>Add Comment</h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
        style={{ width: "100%" }}
        placeholder="Write your comment..."
      />

      <button
        className="btn-primary"
        onClick={submit}
        disabled={loading}
        style={{ marginTop: "10px" }}
      >
        {loading ? "Posting..." : "Post Comment"}
      </button>
    </div>
  );
}