import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import "./Navbar.css"

export default function Navbar(){

  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 50){
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return(

    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="logo">
        💍 H&A
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={()=>setOpen(!open)}>
        ☰
      </div>

      <div className={`menu ${open ? "open" : ""}`}>

        <Link to="story" smooth spy activeClass="active" onClick={()=>setOpen(false)}>
          Story
        </Link>

        <Link to="gallery" smooth spy activeClass="active" onClick={()=>setOpen(false)}>
          Gallery
        </Link>

        <Link to="event" smooth spy activeClass="active" onClick={()=>setOpen(false)}>
          Event
        </Link>

        <Link to="gift" smooth spy activeClass="active" onClick={()=>setOpen(false)}>
          Gift
        </Link>

        <Link to="rsvp" smooth spy activeClass="active" className="rsvp-btn" onClick={()=>setOpen(false)}>
          RSVP
        </Link>

        <div className="music-btn">
          🎵
        </div>

      </div>

    </nav>

  )
}