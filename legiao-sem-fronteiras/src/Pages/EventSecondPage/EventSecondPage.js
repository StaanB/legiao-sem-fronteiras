// Import utilites
import React from "react";

// Importando Estilos
import { Global } from "../../components/GlobalStyles";
import teste from "./images/teste.jpg"

// Importando seções
import Navigation from "../../components/HomeSection/Navigation"
import Button from "../../components/themeChange/Button";
import Card from "./Card";
import EventBanner from "./EventBanner";




const EventSecondPage = () => {
    return(
        <>
        <Global/>
        <Button/>
        <Navigation/>
        <EventBanner/>
        <Card titulo="Moto capital em Salvador" local="Salvador-Ba ponto de encontro no posto" data="07/08/2022" hora="08:00 da manhã" imagem={teste} descricao="Moto capital que ira ocorrer em Salvador reunindo vários motogrupos em todos os lugares."/>
        </>

    )
}

export default EventSecondPage