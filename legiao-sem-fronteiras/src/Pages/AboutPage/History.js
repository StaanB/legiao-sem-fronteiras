// Import Utilites
import React from "react";

// Import Components
import HistoryCards from "./HistoryCards";

// Import Styles
import { HistoryStyled } from "./style";
import historyPic1 from "./images/about-page-banner.png";
import historyPic2 from "./images/about-page-banner.png";
import historyPic3 from "./images/about-page-banner.png";


const History = () => {
  return (
    <HistoryStyled
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration="1000"
      className="history-styled"
    >
      <div className="title-history-section">
        <h3>História</h3>
        <h2>História do Legião sem fronteiras</h2>
        <p>
          Legião sem Fronteiras foi marcado por muitas coisas desde a sua fundação, veja algumas delas em retrospectiva.
        </p>
      </div>

      <HistoryCards
        imagem={historyPic1}
        ano="2021"
        paragrafo="Acontecimento importante em 2021 onde fizemos coisa x e coisa y que foi muito importante para fundação do grupo"
      />

      <HistoryCards
        imagem={historyPic2}
        ano="2021"
        paragrafo="Acontecimento importante em 2021 onde fizemos coisa x e coisa y que foi muito importante para fundação do grupo"
      />

      <HistoryCards
        imagem={historyPic3}
        ano="2021"
        paragrafo="Acontecimento importante em 2021 onde fizemos coisa x e coisa y que foi muito importante para fundação do grupo"
      />
    </HistoryStyled>
  );
};

export default History;
