import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoveLetter.css";
import couple from "../../assets/images/optimized/LoveLetter.webp";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;

    setIsOpen(true); 
    setTimeout(() => {
      setShowImage(true);
    }, 600);
    setTimeout(() => {
      setZoom(true);
    }, 1000);
    setTimeout(() => {
      document.body.classList.add("flash");

      setTimeout(() => {
        navigate("/minhanh&duchai08082026");
      }, 600);
    }, 2200);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("flash");
    };
  }, []);

  return (
    <div className={`letter-page ${zoom ? "zooming" : ""}`}>
      <div className="envlope-wrapper">
        <div
          id="envelope"
          className={isOpen ? "open" : "close"}
          onClick={handleOpen}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              handleOpen();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Open wedding invitation"
        >
          <div className="front flap"></div>
          <div className="front pocket"></div>

          <div className="letter">
            {!showImage ? (
              <div className="love-content">❤️ Forever & Always ❤️</div>
            ) : (
              <img src={couple} alt="couple" className="letter-image" />
            )}
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
