import "./AboutCouple.css";

import groomImg from "../../assets/images/couple.png";
import brideImg from "../../assets/images/couple.png";

import ringGif from "../../assets/gif/wedding7gifgif.gif";
import flowerGif from "../../assets/gif/wedding7gif.gif";

import { motion } from "framer-motion";

export default function AboutCouple() {
  return (
    <section className="about">
      <h2 className="about-title">About us</h2>

      {/* GROOM */}
      <div className="about-row">
        <motion.div
          className="about-img"
          initial={{ x: -80, opacity: 0, filter: "blur(8px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={groomImg} alt="groom" />
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ x: -80, opacity: 0, filter: "blur(8px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="role">Chú Rể</span>
          <h3 className="name">Đức Hải</h3>
          <p>
            Khoảnh khắc gặp được em, anh đã quyết định sẽ cùng em đi đến hết
            cuộc đời.
          </p>

          <img src={ringGif} className="ring-gif" alt="ring" />
        </motion.div>
      </div>

      {/* BRIDE */}
      <div className="about-row reverse">
        <motion.div
          className="about-card"
          initial={{ x: -80, opacity: 0, filter: "blur(8px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="role">Cô Dâu</span>
          <h3 className="name">Minh Ánh</h3>
          <p>Giữa thế gian huyền náo, anh là lý do để em mỉm cười mỗi ngày.</p>

          <img src={flowerGif} className="flower-gif" alt="flower" />
        </motion.div>

        <motion.div
          className="about-img"
          initial={{ x: -80, opacity: 0, filter: "blur(8px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src={brideImg} alt="bride" />
        </motion.div>
      </div>
    </section>
  );
}
