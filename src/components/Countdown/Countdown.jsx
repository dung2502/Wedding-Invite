import { useEffect } from "react";
import "./Countdown.css";
import useCountdown from "./useCountdown";
import FlipNumber from "./FlipNumber";
import confetti from "canvas-confetti";

export default function Countdown() {
  const weddingDate = new Date("Aug 08 2026 00:00:00").getTime();
  const time = useCountdown(weddingDate);

  useEffect(() => {
    if (time?.progress >= 100) {
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
      });
    }
  }, [time]);

  return (
    <section className="countdown">
      <h2 className="count-title">Đếm ngược ngày cưới 💍</h2>

      <p className="count-date-full">08 • 08 • 2026</p>

      {time ? (
        <>
          <div className="count-grid">
            <div className="count-item">
              <FlipNumber value={time.days} />
              <span>Ngày</span>
            </div>

            <div className="count-item">
              <FlipNumber value={time.hours} />
              <span>Giờ</span>
            </div>

            <div className="count-item">
              <FlipNumber value={time.minutes} />
              <span>Phút</span>
            </div>

            <div className="count-item">
              <FlipNumber value={time.seconds} />
              <span>Giây</span>
            </div>
          </div>

          {/* PROGRESS BAR */}
          <div className="progress-container">
            <div className="progress-track">
              {/* Bride */}
              <div className={`bride ${time?.progress >= 95 ? "love" : ""}`}>
                👰
              </div>

              {/* Groom */}
              <div
                className={`groom ${time?.progress >= 95 ? "love" : ""}`}
                style={{ left: `${time?.progress || 0}%` }}
              >
                🤵‍♂️
              </div>

              {/* Progress */}
              <div
                className="progress-bar"
                style={{ width: `${time?.progress || 0}%` }}
              ></div>

              {/* Hearts */}
              {time?.progress >= 85 && <div className="hearts">💖 💕 💗</div>}
            </div>

            <p className="progress-text">
              Hành trình tình yêu: {Math.floor(time?.progress || 0)}%
            </p>

            {/* 🎉 Khi hoàn thành */}
            {time?.progress >= 100 && (
              <div className="wedding-done">🎉 Happy Wedding 🎉</div>
            )}
          </div>
        </>
      ) : (
        <div className="count-done">🎉 Hôm nay là ngày cưới! 🎉</div>
      )}
    </section>
  );
}
