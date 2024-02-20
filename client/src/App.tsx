import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Accommodations from "./pages/Accommodations";
import Events from "./pages/Events";

export default function App() {
  return (
    <Router>
      <div className="flex w-full h-full">
        <Routes>
          {/* <LandingPage /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="accommodations" element={<Accommodations />} />
          <Route path="events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}
