// Import utilites
import React from "react";

// Importando Estilos
import { Global } from "../../components/GlobalStyles";
import legiaoBg from "./images/legiao-title-bg.png";

// Importando seções
import Navigation from "../../components/HomeSection/Navigation";
import Button from "../../components/themeChange/Button";
import TitleSection from "../../components/TitleSections/TitleSections";
import ContactEmail from "./ContactEmail";
import Contact from '../../components/ContactSection/Contact';

const ContactPage = () => {
  return (
    <>
      <Global />
      <Button />
      <Navigation />
      <TitleSection
        titulo="Fale conosco"
        paragrafo="Entre em contato com o Legião para tirar suas dúvidas."
        fundo={legiaoBg}
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="1000"
      />
      <ContactEmail />
      <Contact />
    </>
  );
};

export default ContactPage;