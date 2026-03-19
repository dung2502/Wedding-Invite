import { useEffect, useRef, useState } from "react";
import { FaHeart, FaFacebook, FaInstagram, FaArrowUp } from "react-icons/fa";
import confetti from "canvas-confetti";
import "./Footer.css";

import couple from "../../assets/images/couple.png";

export default function Footer({ audioRef, isPlaying, setIsPlaying }) {
  const footerRef = useRef(null);

  const [showTop, setShowTop] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);

  // 🎯 Toggle music (dùng audio global)
  const toggleMusic = () => {
    if (!audioRef?.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  // 🎯 Countdown
  useEffect(() => {
    const weddingDate = new Date("2026-08-08");
    const today = new Date();
    const diff = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));
    setDaysLeft(diff);
  }, []);

  // 🎯 Scroll + confetti (1 lần)
  useEffect(() => {
    let fired = false;

    const handleScroll = () => {
      setShowTop(window.scrollY > 300);

      const rect = footerRef.current?.getBoundingClientRect();
      if (!fired && rect && rect.top < window.innerHeight) {
        confetti({ particleCount: 80, spread: 70 });
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
        {/* Avatar */}
        <img src={couple} alt="couple" className="footer__avatar" />

        <h2 className="footer__title">
          Đức Hải <FaHeart className="footer__heart" /> Minh Ánh
        </h2>

        <p className="footer__date">08.08.2026</p>

        {/* Countdown */}
        <p className="footer__countdown">
          ⏳ Còn {daysLeft > 0 ? daysLeft : 0} ngày nữa 💍
        </p>

        <p className="footer__thanks">
          Cảm ơn bạn đã dành thời gian tham dự ngày trọng đại của chúng tôi 💖
        </p>

        {/* Social */}
        <div className="footer__social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>

        <p className="footer__copyright">© 2026 Đức Hải & Minh Ánh</p>
      </div>

      {/* 🎵 Đĩa nhạc (SYNC với global audio) */}
      <div
        className={`music-disc ${isPlaying ? "playing" : ""}`}
        onClick={toggleMusic}
      >
        <div className="disc-inner"></div>
      </div>

      {/* ⬆️ Scroll to top */}
      {showTop && (
        <button
          className="footer__top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
