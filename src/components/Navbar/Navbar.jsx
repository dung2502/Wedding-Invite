import { Link } from "react-scroll"
import "./Navbar.css"

export default function Navbar(){

return(

<nav className="navbar">

<div className="logo">

H&A

</div>

<div className="menu">

<Link to="story" smooth>Story</Link>
<Link to="gallery" smooth>Gallery</Link>
<Link to="event" smooth>Event</Link>
<Link to="rsvp" smooth>RSVP</Link>

</div>

</nav>

)

}