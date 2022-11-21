// Import Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Páginas
import EventSecondPage from './Pages/EventSecondPage/EventSecondPage';
import MainPage from './Pages/MainPage/MainPage';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/eventos' element={<EventSecondPage/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
