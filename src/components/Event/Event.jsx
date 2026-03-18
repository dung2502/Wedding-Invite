import "./Event.css";

export default function Event() {
  return (
    <section className="event">

      <div className="event-container">

        {/* ===== LỄ THÀNH HÔN ===== */}
        <div className="event-block">
          <h2 className="event-heading">LỄ THÀNH HÔN</h2>

          <p className="event-time">VÀO LÚC 10H30 | THỨ BA</p>

          <div className="event-date">2 5 . 1 1 . 2 0 2 5</div>

          <p className="event-lunar">(Tức ngày 06 Tháng 10 Năm Ất Tỵ)</p>

          <h3 className="event-location-title">TẠI TƯ GIA NHÀ TRAI</h3>

          <p className="event-location">
            Thôn Cầu - Bãi Trành<br />
            Thanh Hóa
          </p>
        </div>

        <div className="divider" />

        {/* ===== LỄ VU QUY ===== */}
        <div className="event-block">
          <h2 className="event-heading">LỄ VU QUY</h2>

          <p className="event-time">VÀO LÚC 09H00 | THỨ BẢY</p>

          <div className="event-date">2 2 . 1 1 . 2 0 2 5</div>

          <p className="event-lunar">(Tức ngày 03 Tháng 10 Năm Ất Tỵ)</p>

          <h3 className="event-location-title">TẠI TƯ GIA NHÀ GÁI</h3>

          <p className="event-location">
            Khu phố 4 - Yên Cát<br />
            Thanh Hóa
          </p>
        </div>

        <div className="divider" />

        {/* ===== TIỆC ===== */}
        <div className="event-block">
          <h2 className="event-heading">BUỔI TIỆC CHUNG VUI</h2>

          <p className="event-time">VÀO LÚC 17H00 | THỨ HAI</p>

          <div className="event-date-big">
            <span>Tháng 11</span>
            <span className="day"> | 24 |</span>
            <span>2025</span>
          </div>

          <p className="event-lunar">(Tức ngày 05 Tháng 10 Năm Ất Tỵ)</p>

          <h3 className="event-location-title">TẠI TƯ GIA NHÀ GÁI</h3>

          <p className="event-location">
            Thôn Hồ - Xuân Bình - Thanh Hóa
          </p>
        </div>

        {/* ===== MAPS ===== */}
        <div className="event-maps">

          {/* Nhà trai */}
          <div className="map-card">
            <h4>📍 Nhà trai</h4>

            <iframe
              src="https://maps.google.com/maps?q=Bãi Trành Thanh Hóa&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="map-nha-trai"
            />

            <a
              href="https://www.google.com/maps?q=Bãi Trành Thanh Hóa"
              target="_blank"
              rel="noreferrer"
            >
              Mở Google Maps
            </a>
          </div>

          {/* Nhà gái */}
          <div className="map-card">
            <h4>📍 Nhà gái</h4>

            <iframe
              src="https://maps.google.com/maps?q=Yên Cát Thanh Hóa&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="map-nha-gai"
            />

            <a
              href="https://www.google.com/maps?q=Yên Cát Thanh Hóa"
              target="_blank"
              rel="noreferrer"
            >
              Mở Google Maps
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}