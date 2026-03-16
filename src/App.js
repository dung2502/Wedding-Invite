import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Countdown from "./components/Countdown/Countdown"
import Story from "./components/Story/Story"
import Gallery from "./components/Gallery/Gallery"
import Event from "./components/Event/Event"
import Gift from "./components/Gift/Gift"
import RSVP from "./components/RSVP/RSVP"
import Guestbook from "./components/Guestbook/Guestbook"
import Footer from "./components/Footer/Footer"

import "./styles/global.css"
import "./styles/animation.css"
function App(){

return(

<div>

<Navbar/>

<Hero/>

<Countdown/>

<Story/>

<Gallery/>

<Event/>

<Gift/>

<RSVP/>

{/* <Guestbook/> */}

<Footer/>

<audio autoPlay loop>

<source src="/music/wedding.mp3" type="audio/mp3"/>

</audio>

</div>


)

}

export default App