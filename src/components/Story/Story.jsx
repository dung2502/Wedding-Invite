import "./Story.css";
import { motion } from "framer-motion";
import WordReveal from "./WordReveal";
import TimelineModal from "./TimelineModal";
import { useState } from "react";
import { useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { useTransform } from "framer-motion";

import story1 from "../../assets/images/bg.jpg";
import story2 from "../../assets/images/bg.jpg";
import story3 from "../../assets/images/bg.jpg";
import story4 from "../../assets/images/bg.jpg";
import story5 from "../../assets/images/bg.jpg";

const data = [
  {
    year: "2019",
    text: "Chúng mình gặp nhau lần đầu",
    icon: "💘",
    images: [story1, story2],
    imageWedding: story1,
  },
  {
    year: "2021",
    text: "Bắt đầu hẹn hò",
    icon: "💑",
    images: [story3, story4],
    imageWedding: story1,
  },
  {
    year: "2025",
    text: "Quyết định về chung một nhà",
    icon: "💍",
    images: [story5, story1],
    imageWedding: story1,
  },
];

export default function Story() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const wind = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const rotateWind = useTransform(wind, (v) => {
    return Math.sin(v * 10) * 4; // 👈 dao động
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });
  const [selected, setSelected] = useState(null);

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

      <motion.p
        className="story__subtitle"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <WordReveal text=" Một vài cột mốc nhỏ," delay={0.8} />
        <br />
        <WordReveal text="để kể lại hành trình của chúng mình." delay={1.5} />
      </motion.p>

      <motion.p
        className="story__note"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Nhớ bấm vào từng khoảnh khắc để xem hình ảnh của tụi mình nhé!
      </motion.p>

      <div className="timeline" ref={ref}>
        <motion.div className="timeline-line-animated" style={{ scaleY }} />
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="timeline-card"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelected(item)}
            >
              <h3 className="timeline-year">{item.year}</h3>
              <p className="timeline-text">{item.text}</p>
            </motion.div>

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
        images={selected?.images || []}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
