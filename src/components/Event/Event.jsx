import "./Event.css"
export default function Event(){

return(

<section id="event" className="event event--reveal">

<h2 className="event__title">Wedding Event</h2>
<p className="event__subtitle">
Rất mong được đón tiếp bạn trong ngày vui của chúng mình.
</p>

<div className="event-grid">

<div className="event-card event-card--reveal">

<h3>Lễ Vu Quy</h3>

<p className="event-meta">21/11/2025</p>

<p className="event-place">Hải Phòng</p>

</div>

<div className="event-card event-card--reveal">

<h3>Lễ Thành Hôn</h3>

<p className="event-meta">22/11/2025</p>

<p className="event-place">Bãi Trành, Như Xuân, Thanh Hóa</p>

</div>

</div>

<div className="event-map event-map--reveal">
<div className="event-address">
<div className="event-address__label">Địa chỉ</div>
<div className="event-address__value">Bãi Trành, Như Xuân, Thanh Hóa</div>
<a
className="event-address__link"
href="https://www.google.com/maps?q=B%C3%A3i+Tr%C3%A0nh,+Nh%C6%B0+Xu%C3%A2n,+Thanh+H%C3%B3a"
target="_blank"
rel="noreferrer"
>
Mở Google Maps
</a>
</div>

<iframe
src="https://maps.google.com/maps?q=B%C3%A3i%20Tr%C3%A0nh%2C%20Nh%C6%B0%20Xu%C3%A2n%2C%20Thanh%20H%C3%B3a&t=&z=13&ie=UTF8&iwloc=&output=embed"
title="map"
/>
</div>

</section>

)

}