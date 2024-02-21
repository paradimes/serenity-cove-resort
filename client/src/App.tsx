import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Accommodations from "./pages/Accommodations";
import Events from "./pages/Events";
import { useEffect, useState } from "react";
import NavBar from "./components/common/NavBar";
import { ScrollToTop } from "./utils/ScrollToTop";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="flex w-full h-full">
        <div
          className={`fixed left-0 right-0 z-50 flex justify-center duration-700  ${
            isScrolled ? "bg-yellow-800 bg-opacity-90 py-8 top-0" : "top-[60px]"
          }`}
        >
          <NavBar />
        </div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="accommodations" element={<Accommodations />} />
          <Route path="events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}
