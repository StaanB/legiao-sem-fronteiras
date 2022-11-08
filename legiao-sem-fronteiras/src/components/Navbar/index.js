// Components Import
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavbarStyledMobile, NavBarStyledDesktop } from "./style";

// Import images
import logo from "../../images/legiao.png"


// Import Utilities
import React from "react";


const Navbar = ({ setMenuIsVisible }) => {
    return (
        <>
            <NavBarStyledDesktop id='navbar-desktop'>
                <div className='navbar-links'>
                    <a href="#home">Home</a>
                    <a href="#about">Sobre nós</a>
                </div>

                <img src={logo} alt="Legião Logo"></img>

                <div className='navbar-links'>
                    <a href="#event">Eventos</a>
                    <a href="#contact">Contato</a>
                </div>
            </NavBarStyledDesktop>


            <NavbarStyledMobile id='navbar-mobile'>
                <img src={logo} alt="Legião Logo"></img>
                <GiHamburgerMenu className="hamburguer-menu" onClick={() => setMenuIsVisible(true)} />
            </NavbarStyledMobile>
        </>
    )
}

export default Navbar