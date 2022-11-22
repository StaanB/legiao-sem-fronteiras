import React from "react";

// Import components
import Button from '../../components/themeChange/Button';
import { Global } from '../../components/GlobalStyles';
import Navigation from '../../components/HomeSection/Navigation'
import Herobanner from "../../components/HomeSection/Herobanner";
import Event from '../../components/EventSection/Event';
import About from '../../components/AboutSection/About';
import Gallery from "../../components/GallerySection";
import Contact from '../../components/ContactSection/Contact';


const MainPage = () => {
    return (
        <>
            <Global />
            <Button />
            <Navigation />
            <Herobanner />
            <Event />
            <About />
            <Gallery/>
            <Contact />
        </>
    )
}

export default MainPage