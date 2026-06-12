import { useState } from "react";

export default function StepTwo({ position, setPosition, files, setFiles }) {
  const [locating, setLocating] = useState(false);

  const useMyLocation = () => {
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
        setLocating(false);
      },
      () => {
        alert("Could not get location. Please enable location access.");
        setLocating(false);
      }
    );
  };

  const handleFiles = (e) => {
    const selected = Array.from(e.target.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      url: null,
    }));
    setFiles((prev) => [...prev, ...selected]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 style={{ marginBottom: "8px", fontSize: "1.5rem" }}>Location & Evidence</h2>
      <p style={{ color: "#777", marginBottom: "30px" }}>Help authorities locate the issue and see the evidence.</p>

      {/* LOCATION */}
      <div style={{ marginBottom: "30px" }}>
        <label style={{ fontWeight: 600, fontSize: "0.9rem", color: "#333", display: "block", marginBottom: "12px" }}>
          📍 Location
        </label>

        <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={useMyLocation}
            disabled={locating}
            className="btn-primary"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            {locating ? "Locating..." : "📡 Use My Location"}
          </button>

          {position && (
            <div style={{ background: "#e8f5e8", border: "1px solid #c3e6c3", borderRadius: "10px", padding: "10px 16px", fontSize: "0.9rem", color: "#006600" }}>
              ✓ {position[0].toFixed(4)}, {position[1].toFixed(4)}
              <button
                onClick={() => setPosition(null)}
                style={{ background: "none", border: "none", color: "#BB0000", cursor: "pointer", marginLeft: "10px", fontWeight: 700 }}
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {!position && (
          <p style={{ color: "#999", fontSize: "0.85rem", marginTop: "10px" }}>
            Location is optional but helps authorities find the issue faster.
          </p>
        )}
      </div>

      {/* IMAGE UPLOAD */}
      <div>
        <label style={{ fontWeight: 600, fontSize: "0.9rem", color: "#333", display: "block", marginBottom: "12px" }}>
          📸 Photos & Evidence
        </label>

        <label style={{
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          border: "2px dashed #006600", borderRadius: "16px", padding: "40px 20px",
          cursor: "pointer", background: "#f9fdf9", marginBottom: "20px",
        }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>📁</div>
          <div style={{ fontWeight: 600, color: "#333", marginBottom: "5px" }}>Click to upload photos</div>
          <div style={{ fontSize: "0.85rem", color: "#999" }}>PNG, JPG up to 10MB each</div>
          <input type="file" accept="image/*" multiple onChange={handleFiles} style={{ display: "none" }} />
        </label>

        {files.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "15px" }}>
            {files.map((f, i) => (
              <div key={i} style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #eee", position: "relative" }}>
                <img src={f.preview} alt="" style={{ width: "100%", height: "130px", objectFit: "cover", display: "block" }} />
                <button
                  onClick={() => removeFile(i)}
                  style={{
                    position: "absolute", top: "6px", right: "6px",
                    background: "#BB0000", color: "white", border: "none",
                    borderRadius: "50%", width: "24px", height: "24px",
                    cursor: "pointer", fontWeight: 700, fontSize: "0.8rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}