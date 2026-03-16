import { motion } from "framer-motion"
import hero from "../../assets/images/bg.jpg"
import "./Hero.css"

export default function Hero(){

return(

<section
className="hero"
style={{backgroundImage:`url(${hero})`}}
>

<motion.div

initial={{opacity:0,y:80}}
animate={{opacity:1,y:0}}
transition={{duration:1.2}}

className="hero-content"

>

<h3>Wedding Invitation</h3>

<h1>Đức Hải & Minh Ánh</h1>

<p>22 • 11 • 2025</p>

</motion.div>

</section>

)

}