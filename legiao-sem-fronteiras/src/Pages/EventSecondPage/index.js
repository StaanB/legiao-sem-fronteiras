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
        titulo="Bate e volta Paraguaçú"
        local="Salvador-BA ponto encontro no posto X"
        data="Janeiro"
        hora="A definir"
        descricao="Bate e volta com amigos em Paraguaçú"
      />
      <Contact />
      <GoToTop />
    </>
  );
};

export default EventSecondPage;
