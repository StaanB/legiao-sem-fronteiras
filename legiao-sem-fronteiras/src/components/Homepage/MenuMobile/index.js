// Import utilites
import React, { useEffect } from "react";

// Import Components
import Container from "./style";
import { VscChromeClose } from 'react-icons/vsc'

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
    }, [menuIsVisible])
    return (
        <>
            <Container isVisible={menuIsVisible}>
                <VscChromeClose size={45} onClick={() => setMenuIsVisible(false)} />
                <nav>
                    <a href="#home">Home</a>
                    <a href="#event">Eventos</a>

                    <a href="#about">Sobre nós</a>
                    <a href="#contact">Contato</a>
                </nav>

            </Container>
        </>
    )
}


export default MenuMobile