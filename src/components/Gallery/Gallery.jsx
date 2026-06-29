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

import gallery1 from "../../assets/images/wedding/web/gallery1.webp";
import gallery2 from "../../assets/images/wedding/web/gallery2.webp";
import gallery3 from "../../assets/images/wedding/web/gallery3.webp";
import gallery4 from "../../assets/images/wedding/web/gallery4.webp";
import gallery5 from "../../assets/images/wedding/web/gallery5.webp";
import gallery6 from "../../assets/images/wedding/web/gallery6.webp";
import gallery7 from "../../assets/images/wedding/web/gallery7.webp";
import gallery8 from "../../assets/images/wedding/web/gallery8.webp";
import galleryThumb1 from "../../assets/images/wedding/thumbs/gallery1.webp";
import galleryThumb2 from "../../assets/images/wedding/thumbs/gallery2.webp";
import galleryThumb3 from "../../assets/images/wedding/thumbs/gallery3.webp";
import galleryThumb4 from "../../assets/images/wedding/thumbs/gallery4.webp";
import galleryThumb5 from "../../assets/images/wedding/thumbs/gallery5.webp";
import galleryThumb6 from "../../assets/images/wedding/thumbs/gallery6.webp";
import galleryThumb7 from "../../assets/images/wedding/thumbs/gallery7.webp";
import galleryThumb8 from "../../assets/images/wedding/thumbs/gallery8.webp";
import decoGif from "../../assets/gif/wedding6gif.gif";

const images = [
  { src: gallery1, thumb: galleryThumb1, category: "love" },
  { src: gallery2, thumb: galleryThumb2, category: "ceremony" },
  { src: gallery3, thumb: galleryThumb3, category: "party" },
  { src: gallery4, thumb: galleryThumb4, category: "love" },
  { src: gallery5, thumb: galleryThumb5, category: "ceremony" },
  { src: gallery6, thumb: galleryThumb6, category: "party" },
  { src: gallery7, thumb: galleryThumb7, category: "love" },
  { src: gallery8, thumb: galleryThumb8, category: "ceremony" },
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
      <div
        className="bg-blur"
        style={{
          backgroundImage: `url(${filtered[index]?.thumb})`,
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
            loading="eager"
            decoding="async"
          />
        </AnimatePresence>
      </div>

      {/* THUMB */}
      <div className="thumb-row">
        {filtered.map((img, i) => (
          <button
            key={i}
            className={`thumb ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            type="button"
          >
            <img src={img.thumb} alt="" loading="lazy" decoding="async" />
          </button>
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
