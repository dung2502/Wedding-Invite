import { useEffect, useState } from "react";

export default function FlipNumber({ value }) {
  const [display, setDisplay] = useState(value);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (value !== display) {
      setAnimate(true);
      setTimeout(() => {
        setDisplay(value);
        setAnimate(false);
      }, 200);
    }
  }, [value]);

  return (
    <div className={`flip-number ${animate ? "flip" : ""}`}>
      {String(display).padStart(2, "0")}
    </div>
  );
}
