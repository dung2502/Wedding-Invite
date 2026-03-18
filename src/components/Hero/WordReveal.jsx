import { motion } from "framer-motion";

export default function WordReveal({ text, delay = 0 }) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      style={{ display: "inline-block" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ marginRight: "6px", display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
