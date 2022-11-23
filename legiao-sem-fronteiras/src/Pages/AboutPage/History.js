// Import Utilites
import React from "react";

// Import Components
import HistoryCards from "./HistoryCards";

// Import Styles
import { HistoryStyled } from "./style";
import example from "./images/legiao-title-bg.png"



const History = () => {
    return (
        <HistoryStyled data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000" className="history-styled">

            <div className="title-history-section">
                <h3>História</h3>
                <h2>Nossa História</h2>
                <p>Acontecimento importante em 2021 onde fizemos coisa x e coisa y que foi muito importante para fundação do grupo</p>
            </div>
            

            <HistoryCards imagem={example} ano="2021" paragrafo="Acontecimento importante em 2021 onde fizemos coisa x e coisa y que foi muito importante para fundação do grupo"  />

            <HistoryCards imagem={example} ano="2021" paragrafo="Acontecimento importante em 2021 onde fizemos coisa x e coisa y que foi muito importante para fundação do grupo" />

            <HistoryCards imagem={example} ano="2021" paragrafo="Acontecimento importante em 2021 onde fizemos coisa x e coisa y que foi muito importante para fundação do grupo" />
        </HistoryStyled>
    )
}

export default History