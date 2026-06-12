import { useState } from "react";
import StepOne from "../components/report/StepOne";
import StepTwo from "../components/report/StepTwo";
import StepThree from "../components/report/StepThree";

const STEPS = [
  { number: 1, label: "Issue Details", icon: "📋" },
  { number: 2, label: "Location & Photos", icon: "📍" },
  { number: 3, label: "Review & Submit", icon: "✅" },
];

export default function ReportIssue() {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState([]);
  const [position, setPosition] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    county: "",
    description: "",
    urgency: "",
  });

  const validateStepOne = () => {
    if (!formData.title.trim()) { alert("Please enter issue title"); return false; }
    if (!formData.category) { alert("Please select a category"); return false; }
    if (!formData.county) { alert("Please select a county"); return false; }
    if (!formData.description.trim()) { alert("Please describe the issue"); return false; }
    return true;
  };

  const nextStep = () => {
    if (step === 1 && !validateStepOne()) return;
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const submitReport = async () => {
    try {
      const payload = {
        ...formData,
        images: files.filter((f) => f.url).map((f) => f.url),
        location: position ? { lat: position[0], lng: position[1] } : null,
        createdAt: new Date().toISOString(),
      };
      console.log("ISSUE SUBMITTED:", payload);
      setSubmitted(true);
    } catch (error) {
      console.error("Submit error:", error);
      alert("Failed to submit report");
    }
  };

  if (submitted) {
    return (
      <section className="section">
        <div className="container" style={{ maxWidth: "600px", textAlign: "center" }}>
          <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🎉</div>
          <h1 className="page-title">Report Submitted!</h1>
          <p style={{ color: "#666", fontSize: "1.1rem", marginBottom: "30px" }}>
            Thank you for helping improve your community. Your report has been received and will be reviewed shortly.
          </p>
          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/" className="btn-primary">Back to Home</a>
            <button className="btn-secondary" onClick={() => {
              setSubmitted(false);
              setStep(1);
              setFormData({ title: "", category: "", county: "", description: "", urgency: "" });
              setFiles([]);
              setPosition(null);
            }}>
              Report Another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "780px" }}>

        {/* PAGE HEADER */}
        <div style={{ marginBottom: "40px" }}>
          <span style={{ background: "#BB0000", color: "white", padding: "6px 16px", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 600 }}>
            Citizen Report
          </span>
          <h1 className="page-title" style={{ marginTop: "15px" }}>
            Report a Community Issue
          </h1>
          <p style={{ color: "#666", fontSize: "1.05rem" }}>
            Help bring attention to issues affecting your community across Kenya.
          </p>
        </div>

        {/* STEP INDICATOR */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
          {STEPS.map((s, i) => (
            <div key={s.number} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: "42px", height: "42px", borderRadius: "50%",
                  background: step >= s.number ? "#006600" : "#f2f2f2",
                  color: step >= s.number ? "white" : "#999",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: "1rem",
                  border: step === s.number ? "3px solid #004400" : "none",
                  flexShrink: 0,
                }}>
                  {step > s.number ? "✓" : s.number}
                </div>
                <div style={{ display: window.innerWidth > 600 ? "block" : "none" }}>
                  <div style={{ fontSize: "0.75rem", color: "#999", lineHeight: 1 }}>Step {s.number}</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, color: step >= s.number ? "#111" : "#999" }}>{s.label}</div>
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div style={{ flex: 1, height: "2px", background: step > s.number ? "#006600" : "#e0e0e0", margin: "0 15px" }} />
              )}
            </div>
          ))}
        </div>

        {/* FORM CARD */}
        <div className="card" style={{ padding: "40px" }}>
          {step === 1 && <StepOne formData={formData} setFormData={setFormData} />}
          {step === 2 && <StepTwo position={position} setPosition={setPosition} files={files} setFiles={setFiles} />}
          {step === 3 && <StepThree formData={formData} position={position} files={files} />}

          {/* NAV BUTTONS */}
          <div style={{ display: "flex", justifyContent: step > 1 ? "space-between" : "flex-end", marginTop: "35px", paddingTop: "25px", borderTop: "1px solid #f0f0f0" }}>
            {step > 1 && (
              <button type="button" className="btn-secondary" onClick={prevStep}>
                ← Previous
              </button>
            )}
            {step < 3 ? (
              <button type="button" className="btn-primary" onClick={nextStep}>
                Next Step →
              </button>
            ) : (
              <button type="button" className="btn-primary" onClick={submitReport} style={{ background: "#006600", padding: "14px 32px" }}>
                Submit Report ✓
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}