import { counties } from "../../data/counties";

const field = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "22px",
};

const label = {
  fontWeight: 600,
  fontSize: "0.9rem",
  color: "#333",
};

const input = {
  padding: "13px 16px",
  border: "1.5px solid #ddd",
  borderRadius: "10px",
  fontSize: "1rem",
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color 0.2s",
  width: "100%",
  boxSizing: "border-box",
};

const CATEGORIES = ["Roads & Infrastructure", "Water Supply", "Electricity", "Drainage", "Waste Management", "Security", "Health Facilities", "Education", "Environment"];
const URGENCY = ["Low", "Medium", "High", "Critical"];

export default function StepOne({ formData, setFormData }) {
  const update = (field, value) => setFormData({ ...formData, [field]: value });

  return (
    <div>
      <h2 style={{ marginBottom: "8px", fontSize: "1.5rem" }}>Issue Details</h2>
      <p style={{ color: "#777", marginBottom: "30px" }}>Tell us what's happening in your community.</p>

      <div style={field}>
        <label style={label}>Issue Title *</label>
        <input
          type="text"
          placeholder="e.g. Blocked drainage near Nyanchwa Market"
          value={formData.title}
          onChange={(e) => update("title", e.target.value)}
          style={input}
          maxLength={120}
        />
        <span style={{ fontSize: "0.8rem", color: "#999" }}>{formData.title.length}/120</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "22px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={label}>Category *</label>
          <select value={formData.category} onChange={(e) => update("category", e.target.value)} style={input}>
            <option value="">Select category...</option>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={label}>County *</label>
          <select value={formData.county} onChange={(e) => update("county", e.target.value)} style={input}>
            <option value="">Select county...</option>
            {counties.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div style={field}>
        <label style={label}>Description *</label>
        <textarea
          rows={6}
          maxLength={2000}
          placeholder="Describe the issue in detail. Include when it started, how it affects people, and any relevant context..."
          value={formData.description}
          onChange={(e) => update("description", e.target.value)}
          style={{ ...input, resize: "vertical", lineHeight: 1.6 }}
        />
        <span style={{ fontSize: "0.8rem", color: formData.description.length > 1800 ? "#BB0000" : "#999" }}>
          {formData.description.length}/2000 characters
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label style={label}>Urgency Level</label>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {URGENCY.map((u) => {
            const colors = { Low: "#006600", Medium: "#f59e0b", High: "#f97316", Critical: "#BB0000" };
            const selected = formData.urgency === u;
            return (
              <button
                key={u}
                type="button"
                onClick={() => update("urgency", u)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: `2px solid ${selected ? colors[u] : "#ddd"}`,
                  background: selected ? colors[u] : "white",
                  color: selected ? "white" : "#555",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {u}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}