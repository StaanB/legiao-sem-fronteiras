// Importando estilizações
import styled from "styled-components"

import { Colors, Media } from './components/GlobalStyles';


export const AppDiv = styled.div`
/* Tamanho da tela para mobile e esconder nav */
@media ${Media.mobile}  {
  width: 100%;
  height: 100%;

  .invisible{
    display: none;
  }

  .visible{
    display: block;
  }

  #light-button, #dark-button{
    position: absolute;

    left: 50%;
    top: 3%;

    font-size: 1.5rem;

    cursor: pointer;
  }

  #light-button{
    color: ${Colors.whiteColor};
  }

  #dark-button{
    color: black !important;
  }

  #navbar-desktop{
    display: none;
  }
}

@media ${Media.desktop}  {
  width: 100%;
  height: 100%;

  #light-button, #dark-button{
    position: absolute;

    left: 95%;
    top: 3.5%;

    font-size: 1.5rem;

    color: ${Colors.whiteColor};
    cursor: pointer;
  }

  #navbar-mobile{
    display: none;
  }
  #navbar-desktop{
    display: flex;
  }
}
`