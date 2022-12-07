import React from "react";

// Import styles
import { GridStyled } from "./style";

const GridSection = ({
  tituloEvento,
  paragrafoEvento,
  foto1 = "",
  foto2 = "",
  foto3 = "",
  foto4 = "",
  foto5 = "",
}) => {
  return (
    <GridStyled className="grid-container">
      <h2>{tituloEvento}</h2>
      <p>{paragrafoEvento}</p>
      <div className="grid-template">
        <img src={foto1} alt="1° grid" className="grid-image h2 w-1" />

        <img src={foto2} alt="2° grid" className="grid-image h2 w-2" />

        <img src={foto3} alt="3° grid" className="grid-image" />
        
        <img src={foto4} alt="4° grid" className="grid-image h2 w-2" />

        <img src={foto5} alt="5° grid" className="grid-image" />
      </div>
    </GridStyled>
  );
};

export default GridSection;
