import { useEffect, useRef, useState } from "react";
import {
  FaArrowUp,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaMusic,
  FaPause,
} from "react-icons/fa";
import confetti from "canvas-confetti";
import "./Footer.css";

import couple from "../../assets/images/optimized/footer.webp";

export default function Footer({ audioRef, isPlaying, setIsPlaying }) {
  const footerRef = useRef(null);

  const [showTop, setShowTop] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);

  const toggleMusic = () => {
    if (!audioRef?.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const updateCountdown = () => {
      const weddingDate = new Date("2026-08-08T00:00:00+07:00");
      const today = new Date();
      const diff = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));
      setDaysLeft(Math.max(diff, 0));
    };

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1000 * 60 * 60);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    let fired = false;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handleScroll = () => {
      setShowTop(window.scrollY > 300);

      const rect = footerRef.current?.getBoundingClientRect();
      if (!reduceMotion && !fired && rect && rect.top < window.innerHeight) {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.78 },
          colors: ["#ff6f91", "#ffd3df", "#ffffff", "#c64b66"],
        });
        fired = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer__overlay"></div>

      <div className="footer__content">
        <div className="footer__photo-wrap">
          <img src={couple} alt="Đức Hải và Minh Ánh" className="footer__photo" />
        </div>

        <div className="footer__details">
          <p className="footer__eyebrow">Save the date</p>

          <h2 className="footer__title">
            <span>Đức Hải</span>
            <FaHeart className="footer__heart" aria-hidden="true" />
            <span>Minh Ánh</span>
          </h2>

          <p className="footer__date">08.08.2026</p>

          <div className="footer__countdown" aria-label={`Còn ${daysLeft} ngày nữa`}>
            <span className="footer__countdown-number">{daysLeft}</span>
            <span className="footer__countdown-label">ngày nữa</span>
          </div>

          <p className="footer__thanks">
            Cảm ơn bạn đã dành thời gian tham dự và lưu giữ cùng chúng tôi ngày đặc biệt này.
          </p>

          <div className="footer__actions" aria-label="Liên kết mạng xã hội">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          <p className="footer__copyright">© 2026 Đức Hải & Minh Ánh</p>
        </div>
      </div>

      <button
        type="button"
        className={`music-disc ${isPlaying ? "playing" : ""}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"}
        aria-pressed={isPlaying}
      >
        <span className="disc-inner">
          {isPlaying ? <FaPause /> : <FaMusic />}
        </span>
      </button>

      {showTop && (
        <button
          type="button"
          className="footer__top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Cuộn lên đầu trang"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
