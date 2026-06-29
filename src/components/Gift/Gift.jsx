import { useState } from "react";
import { FaExternalLinkAlt, FaGift, FaHeart } from "react-icons/fa";
import "./Gift.css";

const FACEBOOK_POST_URL = "https://facebook.com";

export default function Gift() {
  const [open, setOpen] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const handleClick = () => {
    if (open) return;

    setOpen(true);
    window.setTimeout(() => setLeaving(true), 900);

    window.setTimeout(() => {
      window.location.href = FACEBOOK_POST_URL;
    }, 1500);
  };

  return (
    <section id="gift" className={`gift ${leaving ? "is-leaving" : ""}`}>
      <div className="gift-container">
        <div className="gift-copy">
          <p className="gift-eyebrow">
            <FaGift aria-hidden="true" />
            Mừng cưới
          </p>
          <h2 className="gift-title">Hộp Quà Cưới</h2>
          <p className="gift-subtitle">
            Sự hiện diện của bạn đã là món quà quý giá nhất. Nếu muốn gửi thêm
            lời chúc mừng, hãy mở hộp quà để đến bài viết chính thức của cô dâu
            và chú rể.
          </p>

          <button
            type="button"
            className={`gift-wrapper ${open ? "is-open" : ""}`}
            onClick={handleClick}
            aria-expanded={open}
            aria-label="Mở hộp quà cưới và chuyển đến bài viết Facebook"
          >
            <span className={`gift-box ${open ? "open" : ""}`}>
              <span className="gift-ribbon vertical" />
              <span className="gift-ribbon horizontal" />
              <span className="lid left" />
              <span className="lid right" />
              <span className="box-body" />
            </span>

            {open && (
              <span className="gift-hearts" aria-hidden="true">
                {[...Array(12)].map((_, i) => (
                  <span key={i} style={{ "--i": i }}>
                    <FaHeart />
                  </span>
                ))}
              </span>
            )}

            <span className="gift-pointer-text">
              {open ? (
                <>
                  Đang mở bài viết <FaExternalLinkAlt aria-hidden="true" />
                </>
              ) : (
                "Chạm để mở quà"
              )}
            </span>
          </button>
        </div>
      </div>

      {leaving && <div className="gift-fade" />}
    </section>
  );
}
