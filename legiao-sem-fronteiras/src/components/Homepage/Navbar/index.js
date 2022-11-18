// Import Utilities
import React from "react";

// Import Icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavbarStyledMobile, NavBarStyledDesktop } from "./style";

// Import images
import logo from "./images/legiao.png"


const Navbar = ({ setMenuIsVisible }) => {
    return (
        <>
            <NavBarStyledDesktop id='navbar-desktop'>
                {/* Parte Esquerda da Navbar */}
                <div className='navbar-links'>
                    <a href="#home">Home</a>
                    <a href="#event">Eventos</a>
                </div>
                {/* Imagem do Logo no centro */}
                <img src={logo} alt="Legião Logo"></img>

                {/* Parte Esquerda da Navbar */}
                <div className='navbar-links'>
                    <a href="#about">Sobre nós</a>
                    <a href="#contact">Contato</a>
                </div>
            </NavBarStyledDesktop>

            {/* Menu hamburguer mobile */}
            <NavbarStyledMobile id='navbar-mobile'>
                <img src={logo} alt="Legião Logo"></img>
                <GiHamburgerMenu className="hamburguer-menu" onClick={() => setMenuIsVisible(true)} />
            </NavbarStyledMobile>
        </>
    )
}

export default Navbar