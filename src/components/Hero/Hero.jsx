import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import hero from "../../assets/images/bg.jpg";
import Petals from "./Petals";
import "./Hero.css";
import WordReveal from "./WordReveal";

export default function Hero() {
  const weddingDate = new Date("Aug 08 2026").getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <div className="overlay"></div>
      <Petals />
      <div className="petals">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} style={{ "--i": i }}></span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 3, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="hero-content"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.2 }}
        >
          Thư mời dự đám cưới
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1.4 }}
        >
          Đức Hải & Minh Ánh
        </motion.h1>

        <motion.p
          className="date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.6 }}
        >
          08 • 08 • 2026
        </motion.p>

        <motion.p className="subtitle">
          <WordReveal text="Hôn nhân là chuyện cả đời," delay={1.8} />
          <br />
          <WordReveal
            text="Yêu người vừa ý, cưới người mình thương..."
            delay={2.8}
          />
        </motion.p>

        {/* FAMILY INFO */}
        <motion.div
          className="family-info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <div className="family-column">
            <h4>Nhà gái</h4>
            <p>Ông: Phạm Văn A</p>
            <p>Bà: Nguyễn Thị B</p>
          </div>

          <div className="divider1"></div>

          <div className="family-column">
            <h4>Nhà trai</h4>
            <p>Ông: Lê Khắc A</p>
            <p>Bà: Nguyễn Thị B</p>
          </div>
        </motion.div>

        {/* COUNTDOWN MINI */}
        <motion.div
          className="countdown-mini"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.2 }}
        >
          {["Ngày", "Giờ", "Phút", "Giây"].map((label, i) => (
            <div className="time-box" key={i}>
              <span>{Object.values(time)[i]}</span>
              <small>{label}</small>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="scroll-down">↓</div>
    </section>
  );
}
