// Import Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas
import MainPage from "./Pages/MainPage/MainPage";
import EventSecondPage from "./Pages/EventSecondPage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/eventos" element={<EventSecondPage />} />
          <Route path="/sobre" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
