import { useRef, useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Countdown from "../components/Countdown/Countdown";
import AboutCouple from "../components/AboutCouple/AboutCouple";
import Story from "../components/Story/Story";
import Gallery from "../components/Gallery/Gallery";
import Event from "../components/Event/Event";
import Gift from "../components/Gift/Gift"; 
import Footer from "../components/Footer/Footer";
import weddingMusic from "../assets/music/wedding.mp3";
import WeddingCalendar from "../components/WeddingCalendar/WeddingCalendar";
import Intro from "../components/Intro/Intro";
import ThankYou from "../components/ThankYou/ThankYou";

function HomePage() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;

      audioRef.current.play().catch(() => {
        // browser chặn autoplay → fallback
        setIsPlaying(false);
      });
    }
  }, []);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <Navbar />
      <Hero />
      <Countdown />
      <AboutCouple />
      <Story />
      <Gallery />
      <WeddingCalendar />
      <Event />
      <Gift />
      <Intro/>
      <ThankYou />
      {/* 👉 truyền xuống Footer */}
      <Footer
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

      {/* 👉 audio global */}
      <audio ref={audioRef} loop>
        <source src={weddingMusic} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default HomePage;
