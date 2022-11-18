// Import Styles
import styled from "styled-components";

// Import Utilities
import { Colors } from "../../GlobalStyles";

export const NavbarStyledMobile = styled.nav`
    /* Estilização da Navbar Mobile */
    height: 4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img{
        margin-top:  2rem;
        margin-left: 1rem;

        border-radius: 10rem;
        border: 2px solid ${Colors.mainColor};
        width: 5rem;

        z-index: 0;
    }

    .hamburguer-menu{
        color: ${Colors.mainColor};

        margin: 1rem;
        font-size: 2rem;
    }
`

export const NavBarStyledDesktop = styled.nav`
    /*Estilização da Navbar Desktop  */
    width: 95vw;
    height: 4rem;
     
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    align-self: center;

    img{
        position: relative;
        z-index: 1;

        top: 50%;

        border-radius: 10rem;
        border: 2px solid ${Colors.mainColor};
        width: 8rem;
    }

    .navbar-links{
        display: flex;
        text-transform:  uppercase;

        gap: 12rem;
        margin-top: 1rem;
        
       a{
        color: ${Colors.whiteColor};
        transition: all .5s ease;
       }

       a:hover{
        color: ${Colors.mainColor};
       }
    }
`