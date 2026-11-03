import { WhatsApp } from "./Icons.jsx";

export default function FloatingBooking({ onBook }) {
  return (
    <button
      type="button"
      className="fab"
      onClick={() => onBook()}
      aria-label="Book your massage on WhatsApp"
    >
      <span className="fab__icon">
        <WhatsApp />
      </span>
      <span className="fab__label">
        Book
        <em>on WhatsApp</em>
      </span>
    </button>
  );
}
