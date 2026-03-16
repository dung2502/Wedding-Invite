import "./Story.css"   

export default function Story(){

return(

<section id="story" className="story story--reveal">

<h2 className="story__title">Chuyện Tình Yêu</h2>
<p className="story__subtitle">
Một vài cột mốc nhỏ, để kể lại hành trình của chúng mình.
</p>

<div className="timeline">

<div className="timeline-item timeline-item--reveal">
<div className="timeline-dot" aria-hidden="true" />
<div className="timeline-card">
<h3 className="timeline-year">2019</h3>
<p className="timeline-text">Chúng mình gặp nhau lần đầu</p>
</div>
</div>

<div className="timeline-item timeline-item--reveal">
<div className="timeline-dot" aria-hidden="true" />
<div className="timeline-card">
<h3 className="timeline-year">2021</h3>
<p className="timeline-text">Bắt đầu hẹn hò</p>
</div>
</div>

<div className="timeline-item timeline-item--reveal">
<div className="timeline-dot" aria-hidden="true" />
<div className="timeline-card">
<h3 className="timeline-year">2025</h3>
<p className="timeline-text">Quyết định về chung một nhà</p>
</div>
</div>

</div>

</section>

)

}