import "./WeddingCalendar.css";
import heartGif from "../../assets/gif/heart.gif";
import coupleGif from "../../assets/gif/wedding5gif.gif";

export default function WeddingCalendar() {
  const weddingDate = new Date("2026-08-08");

  const year = weddingDate.getFullYear();
  const month = weddingDate.getMonth(); // 0-11
  const day = weddingDate.getDate();

  const firstDay = new Date(year, month, 1).getDay(); // CN = 0
  const startDay = firstDay === 0 ? 6 : firstDay - 1; // chuyển sang T2

  const totalDays = new Date(year, month + 1, 0).getDate();

  const days = [
    ...Array(startDay).fill(""),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];

  return (
    <section className="calendar">
      <div className="calendar-header-row">
        {/* TITLE */}
        <h2 className="calendar-title">
          <span>Together</span>
          <span>forever</span>
        </h2>

        {/* GIF */}
        <div className="calendar-decor">
          <img src={coupleGif} alt="couple" />
        </div>
      </div>

      <div className="calendar-box">
        {/* HEADER */}
        <div className="calendar-header">
          {String(month + 1).padStart(2, "0")}.{year}
        </div>

        {/* WEEK */}
        <div className="calendar-week">
          <span>T2</span>
          <span>T3</span>
          <span>T4</span>
          <span>T5</span>
          <span>T6</span>
          <span>T7</span>
          <span>CN</span>
        </div>

        {/* GRID */}
        <div className="calendar-grid">
          {days.map((d, i) => (
            <div key={i} className="calendar-day">
              {d === day ? (
                <img src={heartGif} className="heart-gif" alt="heart" />
              ) : (
                d
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
