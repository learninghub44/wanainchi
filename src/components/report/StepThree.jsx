const urgencyColors = {
  Low: { bg: "#e8f5e8", color: "#006600" },
  Medium: { bg: "#fffbeb", color: "#d97706" },
  High: { bg: "#fff4ed", color: "#ea580c" },
  Critical: { bg: "#fdecea", color: "#BB0000" },
};

export default function StepThree({ formData, position, files }) {
  const urgency = urgencyColors[formData.urgency] || { bg: "#f2f2f2", color: "#666" };

  const Row = ({ label, value }) => (
    <div style={{ display: "flex", gap: "15px", padding: "14px 0", borderBottom: "1px solid #f5f5f5" }}>
      <span style={{ color: "#999", fontSize: "0.9rem", minWidth: "120px", flexShrink: 0 }}>{label}</span>
      <span style={{ fontWeight: 500, color: "#111" }}>{value || <span style={{ color: "#ccc" }}>Not provided</span>}</span>
    </div>
  );

  return (
    <div>
      <h2 style={{ marginBottom: "8px", fontSize: "1.5rem" }}>Review Your Report</h2>
      <p style={{ color: "#777", marginBottom: "30px" }}>Please confirm all details are correct before submitting.</p>

      {/* SUMMARY CARD */}
      <div style={{ background: "#f9f9f9", borderRadius: "14px", padding: "25px", marginBottom: "25px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
          <h3 style={{ fontSize: "1.2rem", margin: 0 }}>{formData.title}</h3>
          {formData.urgency && (
            <span style={{ ...urgency, padding: "6px 14px", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 600 }}>
              {formData.urgency} Urgency
            </span>
          )}
        </div>

        <Row label="Category" value={formData.category} />
        <Row label="County" value={formData.county} />
        <Row label="Location" value={position ? `${position[0].toFixed(4)}, ${position[1].toFixed(4)}` : "Not selected"} />
        <Row label="Photos" value={files.length > 0 ? `${files.length} photo${files.length > 1 ? "s" : ""} attached` : "No photos"} />

        <div style={{ paddingTop: "14px" }}>
          <div style={{ color: "#999", fontSize: "0.9rem", marginBottom: "8px" }}>Description</div>
          <p style={{ color: "#333", lineHeight: 1.6 }}>{formData.description}</p>
        </div>
      </div>

      {/* PHOTO THUMBNAILS */}
      {files.length > 0 && (
        <div style={{ marginBottom: "25px" }}>
          <label style={{ fontWeight: 600, fontSize: "0.9rem", color: "#333", display: "block", marginBottom: "12px" }}>
            Attached Photos
          </label>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {files.map((f, i) => (
              <img key={i} src={f.preview} alt="" style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "10px", border: "1px solid #eee" }} />
            ))}
          </div>
        </div>
      )}

      {/* CONFIRMATION */}
      <div style={{ background: "#e8f5e8", border: "1px solid #c3e6c3", borderRadius: "12px", padding: "18px 20px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
        <span style={{ fontSize: "1.2rem" }}>ℹ️</span>
        <p style={{ color: "#444", fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}>
          By submitting this report, you confirm the information is accurate to the best of your knowledge.
          False reports may be removed. Your report helps improve communities across Kenya.
        </p>
      </div>
    </div>
  );
}