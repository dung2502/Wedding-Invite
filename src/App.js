import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoveLetter from "./components/LoveLetter/LoveLetter";
import "./styles/global.css";
import "./styles/animation.css";
import HomePage from './Page/HomePage';
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