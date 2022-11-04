// Import utilities
import styled from 'styled-components'

// Import components
import { Global, Media } from './components/GlobalStyles';
import Home from './components/Home';

const AppDiv = styled.div`
  
  @media ${Media.mobile}  {
    width: 100%;
    height: 100%;
  }

  @media ${Media.desktop}  {
    width: 100%;
    height: 100%;

    .hamburguer-menu{
      display: none;
    }
  }
  

`

function App() {
  return (
    <>
      <AppDiv className="App">
        <Global />
        <Home />
      </AppDiv>
    </>
  );
}

export default App;
