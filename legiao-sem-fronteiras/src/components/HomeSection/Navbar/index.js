// Import React
import React from "react";

// Import Router
import { Link } from "react-router-dom";

// Import Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { NavbarStyledMobile, NavBarStyledDesktop } from "./style";

// Import images
import logo from "./images/legiao.png";

const Navbar = ({ setMenuIsVisible }) => {
  return (
    <>
      <NavBarStyledDesktop id="navbar-desktop">
        {/* Parte Esquerda da Navbar */}
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/eventos">Eventos</Link>
        </div>
        {/* Imagem do Logo no centro */}
        <img src={logo} alt="Legião Logo"></img>

        {/* Parte Esquerda da Navbar */}
        <div className="navbar-links">
          <Link to="/sobre">Sobre nós</Link>
          <Link to="/galeria">Galeria</Link>
          <Link to="/contato">Contato</Link>
        </div>
      </NavBarStyledDesktop>

      {/* Menu hamburguer mobile */}
      <NavbarStyledMobile id="navbar-mobile">
        <img src={logo} alt="Legião Logo"></img>
        <GiHamburgerMenu
          className="hamburguer-menu"
          onClick={() => setMenuIsVisible(true)}
        />
      </NavbarStyledMobile>
    </>
  );
};

export default Navbar;
