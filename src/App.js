import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoveLetter from "./components/LoveLetter/LoveLetter";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Countdown from "./components/Countdown/Countdown";
import Story from "./components/Story/Story";
import Gallery from "./components/Gallery/Gallery";
import Event from "./components/Event/Event";
import Gift from "./components/Gift/Gift";
import RSVP from "./components/RSVP/RSVP";
import Footer from "./components/Footer/Footer";
import "./styles/global.css";
import "./styles/animation.css";

// 👉 Tách riêng HomePage cho gọn
function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Countdown />
      <Story />
      <Gallery />
      <Event />
      <Gift />
      <RSVP />
      <Footer />

      <audio autoPlay loop>
        <source src="/music/wedding.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* 💌 Trang mở thư */}
        <Route path="/" element={<LoveLetter />} />

        {/* 🎉 Trang thiệp cưới */}
        <Route path="/minhanh&duchai08082026" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;