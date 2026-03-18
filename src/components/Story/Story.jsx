import "./Story.css";
import { motion } from "framer-motion";
import WordReveal from "./WordReveal";
import TimelineModal from "./TimelineModal";
import { useState } from "react";

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
  },
  {
    year: "2021",
    text: "Bắt đầu hẹn hò",
    icon: "💑",
    images: [story3, story4],
  },
  {
    year: "2025",
    text: "Quyết định về chung một nhà",
    icon: "💍",
    images: [story5, story1],
  },
];

export default function Story() {
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
        Nhớ bấm vào từng khoảnh khắc để xem hình ảnh của chúng mình nhé!
      </motion.p>

      <div className="timeline">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="timeline-dot">{item.icon}</div>

            <motion.div
              className="timeline-card"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(item)}
              style={{ cursor: "pointer" }}
            >
              <h3 className="timeline-year">{item.year}</h3>
              <p className="timeline-text">{item.text}</p>
            </motion.div>
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
