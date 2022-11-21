import React from "react";

// Import components
import { Global } from '../../components/GlobalStyles';
import Navigation from '../../components/HomeSection/Navigation'
import Event from '../../components/EventSection/Event';
import About from '../../components/AboutSection/About';
import Contact from '../../components/ContactSection/Contact';
import Button from '../../components/themeChange/Button';
import Herobanner from "../../components/HomeSection/Herobanner";

const MainPage = () => {
    return (
        <>
            <Global />
            <Button />
            <Navigation />
            <Herobanner />
            <Event />
            <About />
            <Contact />
        </>
    )
}

export default MainPage