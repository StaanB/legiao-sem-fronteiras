import React from "react";

// Import Components
import { Global } from "../../components/GlobalStyles";
import Button from "../../components/themeChange/Button";
import Navigation from "../../components/HomeSection/Navigation";
import TitleSection from "../../components/TitleSections/TitleSections";
import Contact from "../../components/ContactSection/Contact";

// Import Styles
import galeriaBg from "./images/gallery-page-banner.png";
import GridSection from "./GridSection";

// Import Fotos
import foto1 from "./images/social-action-1.jpg";
import foto2 from "./images/social-action-2.jpg";
import foto3 from "./images/social-action-3.jpg";
import foto4 from "./images/social-action-4.jpg";
import foto5 from "./images/social-action-5.jpg";

const GalleryPage = () => {
  return (
    <>
      <Global />
      <Button />
      <Navigation />
      <TitleSection
        titulo="Galeria de fotos do Motogrupo"
        paragrafo="O Legião também já esteve em muitos eventos, veja alguns deles em nossa galeria de fotos."
        fundo={galeriaBg}
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="1000"
      />
      <GridSection
        tituloEvento="Ação social no lar vida"
        paragrafoEvento="Ação social do Legião em parceria com outros motogrupos no lar vida em ??/??/2022."
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
