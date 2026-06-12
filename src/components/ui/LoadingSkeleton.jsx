export default function LoadingSkeleton() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "25px" }}>
      {[1, 2, 3].map((i) => (
        <div key={i} className="card" style={{ padding: "25px" }}>
          <div style={{ background: "#f2f2f2", height: "20px", borderRadius: "8px", marginBottom: "12px" }} />
          <div style={{ background: "#f2f2f2", height: "14px", borderRadius: "8px", marginBottom: "8px" }} />
          <div style={{ background: "#f2f2f2", height: "14px", borderRadius: "8px", width: "60%" }} />
        </div>
      ))}
    </div>
  );
}