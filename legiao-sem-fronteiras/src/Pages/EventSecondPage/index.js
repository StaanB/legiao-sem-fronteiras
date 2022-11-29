// Import utilites
import React from "react";

// Importando Estilos
import { Global } from "../../components/GlobalStyles";
import teste from "./images/teste.jpg";
import teste2 from "./images/teste2.png";

// Importando seções
import Navigation from "../../components/HomeSection/Navigation";
import Button from "../../components/themeChange/Button";
import TitleSection from "../../components/TitleSections/TitleSections";
import Card from "./Card";

const EventSecondPage = () => {
  return (
    <>
      <Global />
      <Button />
      <Navigation />

      <TitleSection
        titulo="Eventos do motogrupo"
        paragrafo="Eventos com participação do legião"
        fundo={teste2}
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="1000"
      />

      <Card
        titulo="Moto capital em Salvador"
        local="Salvador-Ba ponto de encontro no posto"
        data="07/08/2022"
        hora="08:00 da manhã"
        imagem={teste}
        descricao="Moto capital que ira ocorrer em Salvador reunindo vários motogrupos em todos os lugares."
      />
    </>
  );
};

export default EventSecondPage;
