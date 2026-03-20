import "./Gallery.css";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import story1 from "../../assets/images/bg.jpg";
import story2 from "../../assets/images/bg.jpg";
import story3 from "../../assets/images/bg.jpg";
import story4 from "../../assets/images/bg.jpg";
import story5 from "../../assets/images/bg.jpg";
import decoGif from "../../assets/gif/wedding6gif.gif";

const images = [
  { src: story1, category: "love" },
  { src: story2, category: "ceremony" },
  { src: story3, category: "party" },
  { src: story4, category: "love" },
  { src: story5, category: "ceremony" },
];

const filters = ["all", "love", "ceremony", "party"];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const filtered =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % filtered.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [filtered]);

  // 🔥 SWIPE
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-5, 5]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -100) {
      setIndex((prev) => (prev + 1) % filtered.length);
    } else if (info.offset.x > 100) {
      setIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
    }
  };

  return (
    <section className="gallery">
      <h2 className="gallery-title">
        <img src={decoGif} alt="decor" className="title-gif left" />
        Album
        <img src={decoGif} alt="decor" className="title-gif right" />
      </h2>

      {/* PARALLAX BACKGROUND */}
      <div
        className="bg-blur"
        style={{
          backgroundImage: `url(${filtered[index]?.src})`,
        }}
      />

      {/* FILTER */}
      <div className="gallery-filter">
        {filters.map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => {
              setFilter(f);
              setIndex(0);
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* HERO */}
      <div className="hero-wrapper">
        <AnimatePresence mode="wait">
          <motion.img
            key={filtered[index]?.src}
            src={filtered[index]?.src}
            className="hero-image"
            drag="x"
            style={{ x, rotate }}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setOpen(true)}
          />
        </AnimatePresence>
      </div>

      {/* THUMB */}
      <div className="thumb-row">
        {filtered.map((img, i) => (
          <div
            key={i}
            className={`thumb ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          >
            <img src={img.src} alt="" />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={filtered.map((img) => ({ src: img.src }))}
      />
    </section>
  );
}
