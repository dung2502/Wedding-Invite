import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./Modal.css";

export default function TimelineModal({ isOpen, onClose, images }) {

  const [selectedImg, setSelectedImg] = useState(null);

  // ESC để đóng
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setSelectedImg(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

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
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >

            <button className="close-btn" onClick={onClose}>
              ✖
            </button>

            <div className="gallery1">
              {images.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImg(img)}
                  style={{ cursor: "zoom-in" }}
                />
              ))}
            </div>

          </motion.div>

          {/* LIGHTBOX FULLSCREEN */}
          <AnimatePresence>
            {selectedImg && (
              <motion.div
                className="lightbox"
                onClick={() => setSelectedImg(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
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