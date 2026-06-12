import { useEffect, useState } from "react";
import { getComments } from "../../api/comments";

export default function CommentList({ issueId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getComments(issueId);
        setComments(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [issueId]);

  if (loading) return <p>Loading comments...</p>;

  return (
    <div className="card" style={{ padding: "20px" }}>
      <h3>Comments</h3>

      {comments.length === 0 && (
        <p>No comments yet</p>
      )}

      {comments.map((c) => (
        <div key={c.id} style={{ marginTop: "15px" }}>
          <strong>{c.user?.name || "Citizen"}</strong>
          <p>{c.body}</p>
        </div>
      ))}
    </div>
  );
}