// Import utilities
import React from "react";

// Import styles
import { AboutStyled } from "./style";
import lucio from "./images/lucio.jpg";

// Import Icons
import { BiMedal } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { RiGroupFill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";

const About = () => {
  return (
    <AboutStyled
      id="about"
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration="1000"
    >
      {/* Imagem com medalha de anos de experiência */}
      <div className="about-image-container">
        <img src={lucio} alt="foto presidente"></img>
        <div className="medal-square">
          <BiMedal />
          <p>
            1<BsPlus />
          </p>
          <span>Anos de experiência</span>
        </div>
      </div>

      {/* Seção com informações do grupo */}
      <div
        className="about-title-container"
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="1000"
      >
        <h3 className="about-title">Sobre o motogrupo</h3>

        <h2>Estamos em atividade desde 2021</h2>

        <p className="about-title-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam quis nostrud tempor dolore adispa
        </p>

        <div className="cards-section">
          {/* Cards com informações de companheiros */}
          <div
            className="card"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
          >
            <GiFullMotorcycleHelmet />
            <div className="card-text">
              <h3>Viaje com a gente</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>

          <div
            className="card"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
          >
            <RiGroupFill />
            <div className="card-text">
              <h3>Comunidade ativa</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>

          <div
            className="card"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
          >
            <FaHandsHelping />
            <div className="card-text">
              <h3>Ajuda aos membros</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </div>
      </div>
    </AboutStyled>
  );
};

export default About;
