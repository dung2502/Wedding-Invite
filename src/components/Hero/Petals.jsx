import { useEffect, useRef } from "react";
import petal1 from "../../assets/images/petal1.png"
import petal2 from "../../assets/images/petal2.png" 

const petalsImages = [petal1, petal2];

export default function Petals() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const createPetal = () => {
      const petal = document.createElement("img");
      petal.src = petalsImages[Math.floor(Math.random() * petalsImages.length)];

      petal.className = "petal-real";

      // random vị trí
      petal.style.left = Math.random() * 100 + "vw";

      // random size
      const size = 40;
      petal.style.width = size + "px";

      // random speed + duration
      const duration = Math.random() * 5 + 8;

      // random drift (gió)
      const drift = Math.random() * 100 - 50;

      petal.animate(
        [
          {
            transform: `translate(0px, -50px) rotate(0deg)`,
          },
          {
            transform: `translate(${drift}px, 110vh) rotate(360deg)`,
          },
        ],
        {
          duration: duration * 1000,
          easing: "ease-in-out",
        },
      );

      container.appendChild(petal);

      // remove sau khi rơi xong
      setTimeout(() => {
        petal.remove();
      }, duration * 1000);
    };

    const interval = setInterval(createPetal, 400);

    return () => clearInterval(interval);
  }, []);

  return <div className="petals-real" ref={containerRef}></div>;
}
