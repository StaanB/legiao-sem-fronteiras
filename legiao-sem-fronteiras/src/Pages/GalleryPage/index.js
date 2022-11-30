import React from "react";

// Import Components
import { Global } from "../../components/GlobalStyles";
import Button from "../../components/themeChange/Button";
import Navigation from "../../components/HomeSection/Navigation";
import TitleSection from "../../components/TitleSections/TitleSections";
import Contact from "../../components/ContactSection/Contact";

// Import Styles
import legiaoBg from "./images/legiao-title-bg.png";
import GridSection from "./GridSection";

// Import Fotos
import foto1 from "./images/legiao-title-bg.png";
import foto2 from "./images/legiao-title-bg.png";
import foto3 from "./images/legiao-title-bg.png";
import foto4 from "./images/legiao-title-bg.png";
import foto5 from "./images/legiao-title-bg.png";

const GalleryPage = () => {
  return (
    <>
      <Global />
      <Button />
      <Navigation />
      <TitleSection
        titulo="Galeria de fotos do Motogrupo"
        paragrafo="Galeria de fotos dos eventos do Legião sem fronteiras"
        fundo={legiaoBg}
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="1000"
      />
      <GridSection
        tituloEvento="Evento exemplo"
        paragrafoEvento="Evento que ocorreu em lugar x com y pessoas."
        foto1={foto1}
        foto2={foto2}
        foto3={foto3}
        foto4={foto4}
        foto5={foto5}
      />
      <Contact />
    </>
  );
};

export default GalleryPage;
