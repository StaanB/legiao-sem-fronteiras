// Import React
import React from "react";

// Import Style
import { BannerStyled } from "./style";

// Import Icons
import { IoIosPin } from "react-icons/io";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";

// Import Components
import { timer } from "./timer.js";

timer();

const Banner = () => {
  return (
    <>
      <BannerStyled
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="1000"
        className="banner-event-container"
      >
        {/* Lado esquerdo do banner com informações do evento */}
        <div className="banner-title" id="event">
          <h2>Moto capital em Salvador</h2>

          <h3 className="background-banner-text background-effect">Evento</h3>

          <ul className="banner-icons">
            <li>
              <IoIosPin /> Praia de Piatã
            </li>

            <li>
              <BsFillCalendarCheckFill />
              01 de dezembro de 2022 
            </li>

            <li>
              <MdAccessTime />
              08:00
            </li>
          </ul>

          <p className="event-main-paragraph">
            Moto capital com bandas e muitas atrações com participação do Legião e amigos.
          </p>
        </div>

        {/* Lado direito com timer para o evento */}
        <div className="banner-timer">
          <ul className="timer">
            <li id="timer-dias">
              0 <span>dias</span>
            </li>
            <li id="timer-horas">
              0 <span>horas</span>
            </li>
            <li id="timer-minutos">
              0 <span>minutos</span>
            </li>
            <li id="timer-segundos">
              0 <span>segundos</span>
            </li>
          </ul>
        </div>
      </BannerStyled>
    </>
  );
};

export default Banner;
