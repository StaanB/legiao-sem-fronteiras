import React from "react";

// Import Styles
import { CardEventStyled } from "./style";

// Import Icons
import { IoIosPin } from "react-icons/io";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";

const Card = (props) => {
  return (
    <CardEventStyled
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration="1000"
      className="banner-event-container"
    >
      <div className="left-card-event-section">
        <h1>{props.titulo}</h1>

        <div className="spans-card-section">
          <span>
            <IoIosPin /> {props.local}
          </span>
          <span>
            <BsFillCalendarCheckFill /> {props.data}
          </span>
          <span>
            <MdAccessTime /> {props.hora}
          </span>
        </div>
      </div>

      <div className="right-card-event-section">
        <img src={props.imagem} alt="foto"></img>

        <p>{props.descricao}</p>
      </div>
    </CardEventStyled>
  );
};

export default Card;
