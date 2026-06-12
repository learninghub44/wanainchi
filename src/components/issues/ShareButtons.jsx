export default function ShareButtons({ issue }) {
  const url = window.location.href;
  const text = `Check out this issue: ${issue?.title}`;

  const shareWhatsApp = () =>
    window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "_blank");

  const shareTwitter = () =>
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied!");
  };

  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <button className="btn-primary" onClick={shareWhatsApp}>
        📱 WhatsApp
      </button>
      <button className="btn-secondary" onClick={shareTwitter}>
        🐦 Twitter/X
      </button>
      <button className="btn-secondary" onClick={copyLink}>
        🔗 Copy Link
      </button>
    </div>
  );
}