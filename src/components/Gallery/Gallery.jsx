import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

import "./Gallery.css";

const images = [
  { src: require("../../assets/images/bg.jpg"), category: "love" },
  { src: require("../../assets/images/bg.jpg"), category: "ceremony" },
  { src: require("../../assets/images/bg.jpg"), category: "party" },
  { src: require("../../assets/images/bg.jpg"), category: "love" },
  { src: require("../../assets/images/bg.jpg"), category: "ceremony" },
  { src: require("../../assets/images/bg.jpg"), category: "party" },
  { src: require("../../assets/images/bg.jpg"), category: "love" },
  { src: require("../../assets/images/bg.jpg"), category: "party" },
  { src: require("../../assets/images/bg.jpg"), category: "ceremony" },
  { src: require("../../assets/images/bg.jpg"), category: "love" },
  { src: require("../../assets/images/bg.jpg"), category: "ceremony" },
  { src: require("../../assets/images/bg.jpg"), category: "love" },
];

const filters = ["all", "love", "ceremony", "party"];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <section className="masonry-section">
      <h2 className="title">Album Hình Cưới</h2>

      {/* 🔥 FILTER */}
      <div className="filter-bar">
        {filters.map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* 🔥 MASONRY */}
      <div className="masonry">
        {filteredImages.map((img, i) => (
          <motion.div
            key={i}
            className="masonry-item"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <div className="img-wrapper">
              <img src={img.src} alt="" loading="lazy" />

              {/* overlay */}
              <div className="overlay">
                <span>Xem ảnh</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={filteredImages.map((img) => ({ src: img.src }))}
      />
    </section>
  );
}
