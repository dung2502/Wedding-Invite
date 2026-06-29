import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./Modal.css";

export default function TimelineModal({ isOpen, onClose, images, title, date }) {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        if (selectedImg) {
          setSelectedImg(null);
          return;
        }

        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, selectedImg]);

  useEffect(() => {
    if (!isOpen) {
      setSelectedImg(null);
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="story-modal-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 24, scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ y: 24, scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="modal-header">
              <div>
                {date && <p className="modal-date">{date}</p>}
                <h3 id="story-modal-title">{title || "Khoảnh khắc của chúng mình"}</h3>
              </div>

              <button className="close-btn" type="button" onClick={onClose} aria-label="Đóng">
                ×
              </button>
            </div>

            <div className="gallery1">
              {images.map((img, index) => (
                <motion.button
                  type="button"
                  className="gallery1-item"
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedImg(img)}
                  aria-label={`Mở ảnh ${index + 1}`}
                >
                  <img src={img} alt="" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence>
            {selectedImg && (
              <motion.div
                className="lightbox"
                onClick={() => setSelectedImg(null)}
                role="dialog"
                aria-modal="true"
                aria-label="Xem ảnh lớn"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button
                  type="button"
                  className="lightbox-close"
                  onClick={() => setSelectedImg(null)}
                  aria-label="Đóng ảnh"
                >
                  ×
                </button>

                <motion.img
                  src={selectedImg}
                  alt=""
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
