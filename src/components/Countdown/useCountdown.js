import { useEffect, useState } from "react";

export default function useCountdown(targetDate) {
  const startDate = new Date("Jan 01 2025").getTime();

  const calculate = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) return null;

    const total = targetDate - startDate;
    const passed = now - startDate;

    let progress = 0;

    if (total > 0) {
      progress = Math.min(Math.max((passed / total) * 100, 0), 100);
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
      progress,
    };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return time;
}
