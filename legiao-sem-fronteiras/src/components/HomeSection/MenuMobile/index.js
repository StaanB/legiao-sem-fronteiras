// Import utilites
import React, { useEffect } from "react";

// Import Components
import Container from "./style";
import { Link } from "react-router-dom";

// Import Icons
import { VscChromeClose } from "react-icons/vsc";

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  // Efeito para deixar menu mobile invisivel
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);
  return (
    <>
      <Container isVisible={menuIsVisible}>
        <VscChromeClose size={45} onClick={() => setMenuIsVisible(false)} />
        {/* Navbar do mobile após aberto */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/eventos">Eventos</Link>
          <Link to="/sobre">Sobre nós</Link>
          <Link to="/galeria">Galeria</Link>
          <a href="#contact">Contato</a>
        </nav>
      </Container>
    </>
  );
};

export default MenuMobile;
