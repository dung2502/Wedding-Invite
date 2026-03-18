import { useEffect, useState } from "react";

export default function FlipNumber({ value }) {
  const [display, setDisplay] = useState(value);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let timeout;

    if (value !== display) {
      setAnimate(true);
      timeout = setTimeout(() => {
        setDisplay(value);
        setAnimate(false);
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [value, display]); // ✅ FIX

  return (
    <div className={`flip-number ${animate ? "flip" : ""}`}>
      {String(display).padStart(2, "0")}
    </div>
  );
}