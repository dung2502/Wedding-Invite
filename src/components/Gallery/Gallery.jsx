import { useState } from "react"
import Masonry from "react-masonry-css"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

import g1 from "../../assets/images/bg.jpg"
import g2 from "../../assets/images/bg.jpg"
import g3 from "../../assets/images/bg.jpg"
import g4 from "../../assets/images/bg.jpg"
import g5 from "../../assets/images/bg.jpg"
import g6 from "../../assets/images/bg.jpg"

import "./Gallery.css"

export default function Gallery(){

const images=[g1,g2,g3,g4,g5,g6]

const [open,setOpen]=useState(false)
const [index,setIndex]=useState(0)

const breakpoints={
default:3,
900:2,
500:1
}

return(

<section id="gallery" className="gallery">

<h2 className="gallery-title">Khoảnh Khắc</h2>

<p className="gallery-subtitle">
Những kỷ niệm đẹp của tụi mình
</p>

<Masonry
breakpointCols={breakpoints}
className="gallery-masonry"
columnClassName="gallery-column"
>

{images.map((img,i)=>(

<div
key={i}
className="gallery-item"
onClick={()=>{

setIndex(i)
setOpen(true)

}}
>

<img src={img} alt="wedding"/>

<div className="gallery-overlay">
<span>Xem ảnh</span>
</div>

</div>

))}

</Masonry>

<Lightbox
open={open}
close={()=>setOpen(false)}
index={index}
slides={images.map(src=>({src}))}
/>

</section>

)

}







