import "./Event.css";

const EventItem = ({
  title,
  time,
  dayLabel,
  day,
  monthYear,
  lunar,
  locationTitle,
  address,
}) => {
  return (
    <div className="event-card">
      <h3 className="event-card-title">{title}</h3>

      <p className="event-time">{time}</p>

      <div className="event-date-row">
        <span>{dayLabel}</span>
        <span className="event-day">{day}</span>
        <span>{monthYear}</span>
      </div>

      <p className="event-lunar">{lunar}</p>

      <div className="event-location-box">
        <p className="event-location-heading">ĐỊA ĐIỂM TỔ CHỨC</p>
        <h4 className="event-location-title">{locationTitle}</h4>
        <p className="event-location">{address}</p>
      </div>
    </div>
  );
};

export default function Event() {
  return (
    <section className="event">
      <div className="event-container">
        {/* ===== LỄ NẠP TÀI ===== */}
        <EventItem
          title="LỄ NẠP TÀI"
          time="Vào hồi 14:00"
          dayLabel="THỨ NĂM"
          day="|  05  |"
          monthYear="08 - 2026"
          lunar="(Tức ngày 23 tháng 06 năm Bính Ngọ)"
          locationTitle="TƯ GIA NHÀ GÁI"
          address={`Khu phố 4, Yên Cát, Thanh Hóa`}
        />

        <div className="divider dashed" />

        {/* ===== TIỆC ĂN ===== */}
        <EventItem
          title="TIỆC ĂN"
          time="Sáng : 10h00 - Chiều 16h00"
          dayLabel="THỨ SÁU"
          day="|  07  |"
          monthYear="08 - 2026"
          lunar="(Tức ngày 26 tháng 06 năm Bính Ngọ)"
          locationTitle="TƯ GIA NHÀ GÁI"
            address={`Khu phố 4, Yên Cát, Thanh Hóa`}
        />

        <div className="divider dashed" />

        {/* ===== TIỆC ĂN ===== */}
        <EventItem
          title="TIỆC ĂN"
          time="Sáng : 10h00 - Chiều 16h00"
          dayLabel="THỨ SÁU"
          day="|  07  |"
          monthYear="08 - 2026"
          lunar="(Tức ngày 26 tháng 06 năm Bính Ngọ)"
          locationTitle="TƯ GIA NHÀ TRAI"
          address={`Thôn Cầu, Xuân Bình, Thanh Hóa`}
        />

        <div className="divider dashed" />

         {/* ===== TIỆC ĂN ===== */}
        <EventItem
          title="LỄ THÀNH HÔN"
          time="Sáng : 10h00 - Chiều 16h00"
          dayLabel="THỨ SÁU"
          day="|  08  |"
          monthYear="08 - 2026"
          lunar="(Tức ngày 27 tháng 06 năm Bính Ngọ)"
          locationTitle="TƯ GIA NHÀ TRAI"
          address={`Thôn Cầu, Xuân Bình, Thanh Hóa`}
        />

        {/* ===== MAPS (GIỮ NGUYÊN) ===== */}
        <div className="event-maps">
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
