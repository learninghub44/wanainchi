export default function SupportButton({ count = 0, onSupport }) {
  return (
    <button
      onClick={onSupport}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      👍 Support ({count})
    </button>
  );
}