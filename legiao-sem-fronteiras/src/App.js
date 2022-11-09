// Import utilities
import styled from 'styled-components'

// Import components
import { Global, Media } from './components/GlobalStyles';
import Home from './components/Homepage/Home';
import Event from './components/Eventpage/Event';

const AppDiv = styled.div`
  
  @media ${Media.mobile}  {
    width: 100%;
    height: 100%;

    #navbar-desktop{
      display: none;
    }
  }

  @media ${Media.desktop}  {
    width: 100%;
    height: 100%;

    #navbar-mobile{
      display: none;
    }
    #navbar-desktop{
      display: flex;
    }
  }
  

`

function App() {
  return (
    <>
      <AppDiv className="App">
        <Global />
        <Home />
        <Event />
      </AppDiv>
    </>
  );
}

export default App;
