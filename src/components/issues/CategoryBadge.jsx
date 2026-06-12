const colors = {
  roads: "#e3f2fd",
  water: "#e0f7fa",
  health: "#fce4ec",
  education: "#f3e5f5",
  security: "#fff3e0",
  environment: "#e8f5e8",
  electricity: "#fffde7",
};

export default function CategoryBadge({ category }) {
  const bg = colors[category?.toLowerCase()] || "#f2f2f2";
  return (
    <span style={{ background: bg, padding: "6px 14px", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 600, color: "#333" }}>
      {category}
    </span>
  );
}