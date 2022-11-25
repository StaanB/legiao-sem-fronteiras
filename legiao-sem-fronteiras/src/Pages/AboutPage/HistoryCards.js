import React from "react";

const HistoryCards = (props) => {
  return (
    <div
      className="history-card"
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration="1000"
    >
      <img src={props.imagem} alt="foto"></img>
      <span className="history-year-span">{props.ano}</span>
      <p className="history-year-paragraph">{props.paragrafo}</p>
    </div>
  );
};

export default HistoryCards;
