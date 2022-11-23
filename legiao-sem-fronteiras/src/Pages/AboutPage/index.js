// Import utilites
import React from "react";

// Importando Estilos
import { Global } from "../../components/GlobalStyles";
import legiaoBg from "./images/legiao-title-bg.png"

// Importando seções
import Navigation from "../../components/HomeSection/Navigation"
import Button from "../../components/themeChange/Button";
import TitleSection from "../../components/TitleSections/TitleSections";
import About from "../../components/AboutSection/About";
import History from "./History";

const AboutPage = () => {

    return (
        <>
            <Global />
            <Button />
            <Navigation />
            <TitleSection titulo="Sobre o motogrupo" paragrafo="Um pouco da história do Legião sem Fronteiras e sobre a organização." fundo={legiaoBg} />
            <About/>
            <History />
        </>
    )

}

export default AboutPage 