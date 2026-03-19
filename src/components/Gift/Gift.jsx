import { useState } from "react";
import "./Gift.css";

export default function Gift() {
  const [open, setOpen] = useState(false);
  const [fade, setFade] = useState(false);

  const handleClick = () => {
    setOpen(true);

    // ⏳ delay cho animation tim
    setTimeout(() => {
      setFade(true);
    }, 1800);

    // 🚀 chuyển trang
    setTimeout(() => {
      window.location.href = "https://facebook.com";
    }, 2600);
  };

  return (
    <section className="gift-simple">
      <h2 className="gift-title">Hộp Quà Cưới</h2>

      <div className="gift-box-wrapper" onClick={handleClick}>
        {/* 🎁 BOX */}
        <div className={`gift-box ${open ? "open" : ""}`}>
          <div className="lid left" />
          <div className="lid right" />
          <div className="box-body" />
        </div>

        {/* 💖 HEARTS */}
        {open && (
          <div className="hearts">
            {[...Array(12)].map((_, i) => (
              <span key={i} style={{ "--i": i }}>💖</span>
            ))}
          </div>
        )}

        {/* ↘️ ARROW */}
        {!open && (
          <div className="gift-arrow">
            <span>
              Click để gửi quà cho cô dâu chú rể
            </span>
          </div>
        )}
      </div>

      {/* 🌫 FADE OUT */}
      {fade && <div className="fade-screen" />}
    </section>
  );
}