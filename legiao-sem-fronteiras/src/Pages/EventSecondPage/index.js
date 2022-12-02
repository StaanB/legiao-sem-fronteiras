// Import React
import React from "react";

// Importando styles
import { Global, GoToTop } from "../../components/GlobalStyles";
import teste from "./images/teste.jpg";
import fundoTitulo from "./images/event-banner-image.png";

// Importando Components
import Navigation from "../../components/HomeSection/Navigation";
import Button from "../../components/themeChange/Button";
import TitleSection from "../../components/TitleSections/TitleSections";
import Card from "./Card";
import Contact from "../../components/ContactSection/Contact";

const EventSecondPage = () => {
  return (
    <>
      <Global />
      <Button />
      <Navigation />

      <TitleSection
        titulo="Eventos com Legião Sem Fronteiras"
        paragrafo="Fique por dentro de todos os eventos que o Legião estará presente esse ano!"
        fundo={fundoTitulo}
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="1000"
      />

      <Card
        titulo="Moto capital em Salvador"
        local="Salvador-BA ponto de encontro no posto"
        data="02/12/2022"
        hora="08:00 da manhã"
        imagem={teste}
        descricao="Moto capital que irá ocorrer em Salvador reunindo vários motogrupos em todos os lugares."
      />
      <Contact />
      <GoToTop />
    </>
  );
};

export default EventSecondPage;
