import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoveLetter.css";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(true);

    // ⏱ chờ mở nắp
    setTimeout(() => {
      setZoom(true); // 👉 bắt đầu zoom cinematic
    }, 800);

    // ⏱ sau zoom → chuyển trang
    setTimeout(() => {
      document.body.classList.add("flash");

      setTimeout(() => {
        navigate("/home");
      }, 600);
    }, 1800);
  };

  return (
    <div className={`letter-page ${zoom ? "zooming" : ""}`}>
      <div className="envlope-wrapper">
        <div
          id="envelope"
          className={isOpen ? "open" : "close"}
          onClick={handleOpen}
        >
          <div className="front flap"></div>
          <div className="front pocket"></div>

          <div className="letter">
            <div className="love-content">❤️ Forever & Always ❤️</div>
          </div>

          <div className="hearts">
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
