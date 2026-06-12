import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import IssueCard from "../components/issues/IssueCard";
import MapOverview from "../components/home/MapOverview";
import FlagBar from "../components/layout/FlagBar";

export default function CountyPage() {
  const { county } = useParams();

  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountyIssues = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/issues?county=${county}`);
        const data = await res.json();

        setIssues(data?.issues || data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountyIssues();
  }, [county]);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontFamily: "Playfair Display" }}>
        {county} County Issues
      </h1>

      <FlagBar />

      <div style={{ margin: "20px 0" }}>
        <MapOverview />
      </div>

      {loading ? (
        <p>Loading issues...</p>
      ) : issues.length === 0 ? (
        <p>No issues reported in this county.</p>
      ) : (
        issues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))
      )}
    </div>
  );
}