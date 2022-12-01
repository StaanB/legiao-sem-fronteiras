// Import React
import React from "react";

// Import Style
import HerobannerStyled from "./style";

// Import Images
import heroBannerImage from "./images/legiao-herobanner-photo.png";

// React Router
import { Link } from "react-router-dom";

const Herobanner = () => {
  return (
    <>
      <HerobannerStyled
        id="home"
        mainImage={heroBannerImage}
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="1000"
      >
        {/* Titulo e parte principal da página */}
        <div className="title-container">
          <span className="background-title-text background-effect">
            Irmandade
          </span>

          <span className="welcome">Bem vindo a irmandade</span>

          <h1 className="main-title">
            Moto Clube Legião Sem Fronteiras, venha fazer parte
          </h1>

          <p className="main-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat Duis aute irure dolor
          </p>
          {/* Botão para seção de contato */}
          <Link to="/contato">
            <button className="btn title-btn">Fale conosco</button>
          </Link>
        </div>
      </HerobannerStyled>
    </>
  );
};

export default Herobanner;
