// Components Import
import { GiHamburgerMenu } from 'react-icons/gi'
import NavbarStyled from "./style";


// Import Utilities
import React from "react";


const Navbar = ({ setMenuIsVisible }) => {
    return (
        <>
            <NavbarStyled>
                <img src="#" alt="#"></img>
                <GiHamburgerMenu className="hamburguer-menu" onClick={() => setMenuIsVisible(true)} />
            </NavbarStyled>
        </>
    )
}

export default Navbar