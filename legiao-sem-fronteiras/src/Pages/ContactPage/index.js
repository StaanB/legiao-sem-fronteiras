// Import utilites
import React from "react";

// Importando Estilos
import { Global, GoToTop } from "../../components/GlobalStyles";
import contactBg from "./images/contact-page-banner.png";

// Importando seções
import Navigation from "../../components/HomeSection/Navigation";
import Button from "../../components/themeChange/Button";
import TitleSection from "../../components/TitleSections/TitleSections";
import ContactEmail from "./ContactEmail";
import Contact from "../../components/ContactSection/Contact";

const ContactPage = () => {
  return (
    <>
      <Global />
      <Button />
      <Navigation />
      <TitleSection
        titulo="Fale conosco"
        paragrafo="Se tiver alguma dúvida fale conosco através de nossas redes sociais ou nos mande um email."
        fundo={contactBg}
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="1000"
      />
      <ContactEmail />
      <Contact />
      <GoToTop />
    </>
  );
};

export default ContactPage;
