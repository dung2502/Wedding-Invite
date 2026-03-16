import { useEffect, useState } from "react"
import "./Countdown.css"

export default function Countdown(){

const weddingDate = new Date("Nov 22 2025").getTime()

const [time,setTime] = useState({
days:0,
hours:0,
minutes:0,
seconds:0
})

useEffect(()=>{

const timer = setInterval(()=>{

const now = new Date().getTime()

const distance = weddingDate - now

if(distance <= 0){
clearInterval(timer)
return
}

setTime({

days:Math.floor(distance/(1000*60*60*24)),

hours:Math.floor((distance%(1000*60*60*24))/(1000*60*60)),

minutes:Math.floor((distance%(1000*60*60))/(1000*60)),

seconds:Math.floor((distance%(1000*60))/1000)

})

},1000)

return()=>clearInterval(timer)

},[])

return(

<section className="countdown fade-up">

<h2 className="count-title">Counting Down</h2>

<div className="count-grid">

<div className="count-item">
<div className="count-number">{time.days}</div>
<span className="count-label">Days</span>
</div>

<div className="count-item">
<div className="count-number">{time.hours}</div>
<span className="count-label">Hours</span>
</div>

<div className="count-item">
<div className="count-number">{time.minutes}</div>
<span className="count-label">Minutes</span>
</div>

<div className="count-item">
<div className="count-number">{time.seconds}</div>
<span className="count-label">Seconds</span>
</div>

</div>

</section>

)

}