// Import style
import { AppDiv } from './style';

// Import components
import { Global } from './components/GlobalStyles';
import Home from './components/Homepage/Home';
import Event from './components/Eventpage/Event';
import About from './components/Aboutpage/About';
import Contact from './components/Contactpage/Contact';
import Button from './components/themeChange/Button';

function App() {
  return (
    <>
      <AppDiv className="App">
        <Global />
        <Button />
        <Home />
        <Event />
        <About />
        <Contact />
      </AppDiv>
    </>
  );
}

export default App;
