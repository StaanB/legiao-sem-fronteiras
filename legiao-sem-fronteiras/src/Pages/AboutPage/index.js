// Import utilites
import React from "react";

// Importando Estilos
import { Global, GoToTop } from "../../components/GlobalStyles";
import titleWallpaper from "./images/about-page-banner.png";

// Importando seções
import Navigation from "../../components/HomeSection/Navigation";
import Button from "../../components/themeChange/Button";
import TitleSection from "../../components/TitleSections/TitleSections";
import About from "../../components/AboutSection/About";
import History from "./History";
import Contact from "../../components/ContactSection/Contact";

const AboutPage = () => {
  return (
    <>
      <Global />
      <Button />
      <Navigation />
      <TitleSection
        titulo="Sobre o motogrupo"
        paragrafo="Um pouco da história do Legião sem Fronteiras e sobre a organização."
        fundo={titleWallpaper}
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="1000"
      />
      <About />
      <History />
      <Contact />
      <GoToTop />
    </>
  );
};

export default AboutPage;
