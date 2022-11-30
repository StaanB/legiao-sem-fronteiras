// Import Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas
import MainPage from "./Pages/MainPage";
import EventSecondPage from "./Pages/EventSecondPage";
import AboutPage from "./Pages/AboutPage";
import GalleryPage from "./Pages/GalleryPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/eventos" element={<EventSecondPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
