export default function Toast({ message }) {
  return (
    <div style={{ position: "fixed", bottom: 20, right: 20 }}>
      {message}
    </div>
  );
}