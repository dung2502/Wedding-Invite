import "./Story.css";
import { motion } from "framer-motion";
import WordReveal from "./WordReveal";
import TimelineModal from "./TimelineModal";
import { useMemo, useState } from "react";
import { useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { useTransform } from "framer-motion";

import story1 from "../../assets/images/optimized/story1.webp";
import story2 from "../../assets/images/optimized/story2.webp";
import story3 from "../../assets/images/optimized/story3.webp";
import letterGif from "../../assets/gif/Email.gif";

const data = [
  {
    year: "08/08/2025",
    text: "Chúng mình gặp nhau lần đầu",
    icon: "💘",
    images: [story1],
    imageWedding: story1,
  },
  {
    year: "14/02/2026",
    text: "Bắt đầu hẹn hò",
    icon: "💑",
    images: [story2],
    imageWedding: story2,
  },
  {
    year: "05/03/2026",
    text: "Anh cầu hôn em",
    icon: "💍",
    images: [story3],
    imageWedding: story3,
  },
];

export default function Story() {
  const ref = useRef();
  const [selected, setSelected] = useState(null);
  const moments = useMemo(
    () => data.map((item, index) => ({ ...item, side: index % 2 === 0 ? "left" : "right" })),
    []
  );

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const wind = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const rotateWind = useTransform(wind, (v) => {
    return Math.sin(v * 10) * 4;
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  return (
    <section id="story" className="story">
      <motion.h2
        className="story__title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Chuyện Tình Yêu
      </motion.h2>

      <motion.div
        className="story__subtitle"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <WordReveal text=" Một vài cột mốc nhỏ," delay={0.8} />
        <br />
        <WordReveal text="để kể lại hành trình của chúng mình." delay={1.5} />
      </motion.div>

      <motion.p
        className="story__note"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Chạm vào từng khoảnh khắc để xem thêm ảnh.
      </motion.p>

      <div className="story-decor decor-left">
        <img src={letterGif} alt="love letter" />
      </div>

      <div className="story-decor decor-right">
        <img src={letterGif} alt="love letter" />
      </div>

      <div className="story-decor decor-right-upper">
        <img src={letterGif} alt="love letter" />
      </div>

      <div className="story-decor decor-left-lower">
        <img src={letterGif} alt="love letter" />
      </div>

      <div className="timeline" ref={ref}>
        <motion.div className="timeline-line-animated" style={{ scaleY }} />
        {moments.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${item.side}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              type="button"
              className="timeline-card"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelected(item)}
              aria-label={`Xem ảnh: ${item.text}, ${item.year}`}
            >
              <span className="timeline-year">{item.year}</span>
              <span className="timeline-text">{item.text}</span>
              <span className="timeline-more">Xem ảnh</span>
            </motion.button>

            <div className="timeline-dot">{item.icon}</div>

            {item.imageWedding && (
              <motion.div
                className="timeline-wedding-image"
                style={{ rotate: rotateWind }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
              >
                <img src={item.imageWedding} alt="" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <TimelineModal
        isOpen={!!selected}
        title={selected?.text}
        date={selected?.year}
        images={selected?.images || []}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
