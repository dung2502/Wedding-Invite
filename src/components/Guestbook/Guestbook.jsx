import { useState } from "react"
import "./Guestbook.css"

export default function Guestbook(){

const [messages,setMessages]=useState([])

const [text,setText]=useState("")

const send=()=>{

setMessages([...messages,text])
setText("")

}

return(

<section className="guestbook">

<h2>Lời chúc</h2>

{messages.map((m,i)=>(
<p key={i}>{m}</p>
))}

<input
value={text}
onChange={(e)=>setText(e.target.value)}
/>

<button onClick={send}>Send</button>

</section>

)

}