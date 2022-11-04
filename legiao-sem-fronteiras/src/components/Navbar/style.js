// Import utilites
import styled from "styled-components";
import { Colors } from "../GlobalStyles";

const NavbarStyled = styled.nav`

    height: 4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .hamburguer-menu{
        
        color: ${Colors.mainColor};

        margin: 1rem;
        font-size: 2rem;
    }
`

export default NavbarStyled