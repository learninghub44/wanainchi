import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getIssueById } from "../api/issues";

import IssueHeader from "../components/issues/IssueHeader";
import StatusTimeline from "../components/issues/StatusTimeline";
import CommentList from "../components/comments/CommentList";
import CommentForm from "../components/comments/CommentForm";
import SupportButton from "../components/issues/SupportButton";
import ShareButtons from "../components/issues/ShareButtons";

export default function IssueDetail() {
  const { id } = useParams();

  const [issue, setIssue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        setLoading(true);
        const data = await getIssueById(id);
        setIssue(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIssue();
  }, [id]);

  if (loading) {
    return (
      <div className="container section">
        <p>Loading issue...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container section">
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  if (!issue) {
    return (
      <div className="container section">
        <p>Issue not found</p>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="container">

        <IssueHeader issue={issue} />

        <div style={{ margin: "20px 0" }}>
          <p>{issue.description}</p>
        </div>

        <SupportButton issueId={id} />

        <div style={{ marginTop: "20px" }}>
          <StatusTimeline issueId={id} />
        </div>

        <div style={{ marginTop: "20px" }}>
          <CommentList issueId={id} />
        </div>

        <div style={{ marginTop: "20px" }}>
          <CommentForm issueId={id} />
        </div>

        <div style={{ marginTop: "20px" }}>
          <ShareButtons issue={issue} />
        </div>

      </div>
    </section>
  );
}