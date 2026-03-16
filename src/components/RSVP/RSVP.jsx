import { useState } from "react"
import "./RSVP.css"

export default function RSVP(){

const [name,setName] = useState("")
const [attend,setAttend] = useState("yes")
const [guest,setGuest] = useState(1)
const [message,setMessage] = useState("")

const submit=(e)=>{

e.preventDefault()

if(!name){
alert("Vui lòng nhập tên của bạn!")
return
}

alert(
`Cảm ơn ${name}!\n
Tham dự: ${attend === "yes" ? "Có" : "Không"}\n
Số khách: ${guest}`
)

setName("")
setGuest(1)
setMessage("")
}

return(

<section id="rsvp" className="rsvp rsvp--reveal">

<h2 className="rsvp__title">Xác nhận tham dự</h2>

<p className="rsvp__subtitle">
Vui lòng phản hồi trước ngày cưới để tụi mình chuẩn bị chu đáo hơn.
</p>

<form className="rsvp__form" onSubmit={submit}>

<input
className="rsvp__input rsvp__field rsvp__field--reveal"
placeholder="Tên của bạn"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<div className="rsvp__radio rsvp__field rsvp__field--reveal">

<label>

<input
type="radio"
value="yes"
checked={attend==="yes"}
onChange={(e)=>setAttend(e.target.value)}
/>

Sẽ tham dự

</label>

<label>

<input
type="radio"
value="no"
checked={attend==="no"}
onChange={(e)=>setAttend(e.target.value)}
/>

Không tham dự

</label>

</div>

<textarea
className="rsvp__textarea rsvp__field rsvp__field--reveal"
placeholder="Gửi lời chúc cho cô dâu chú rể ❤️"
value={message}
onChange={(e)=>setMessage(e.target.value)}
/>

<button className="rsvp__button">
Gửi xác nhận
</button>

</form>

</section>

)

}