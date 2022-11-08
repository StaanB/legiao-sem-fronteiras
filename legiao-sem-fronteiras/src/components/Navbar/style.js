// Import utilites
import styled from "styled-components";
import { Colors } from "../GlobalStyles";

export const NavbarStyledMobile = styled.nav`

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

        z-index: 1;
    }

    .hamburguer-menu{
        
        color: ${Colors.mainColor};

        margin: 1rem;
        font-size: 2rem;
    }
`

export const NavBarStyledDesktop = styled.nav`

    height: 5rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    img{
        position: relative;
        z-index: 1;

        top: 35%;

        border-radius: 10rem;
        border: 2px solid ${Colors.mainColor};
        width: 8rem;
    }

    .navbar-links{
        display: flex;
        gap: 12rem;

       text-transform:  uppercase;

       a{
        color: ${Colors.whiteColor};
        transition: all .5s ease;
       }

       a:hover{
        color: ${Colors.mainColor};
       }
    }
`