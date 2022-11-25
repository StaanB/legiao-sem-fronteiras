import React from "react";

import styled from "styled-components";
import { Colors, Media } from "../GlobalStyles";

const SectionBannerStyled = styled.div`
  /* Responsividade para desktop */
  @media ${Media.desktop} {
    width: 90vw;

    h1 {
      font-size: 2.5rem !important;
    }

    span {
      font-size: 1.2rem !important;
    }
  }

  /* Responsividade para mobile */
  width: 80vw;
  height: 55vh;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;

  background-image: url("${(props) => props.fundo}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 4rem;

  h1 {
    text-transform: uppercase;
    width: 90%;
    font-size: 1.6rem;
  }

  span {
    width: 80%;

    font-size: 1rem;
    color: ${Colors.whiteColor};
    font-weight: 300;
  }
`;

const TitleSection = (props) => {
  return (
    <SectionBannerStyled
      className="section-title"
      data-aos="fade-up"
      fundo={props.fundo}
      data-aos-easing="ease"
      data-aos-duration="1000"
    >
      <h1>{props.titulo}</h1>
      <span>{props.paragrafo}</span>
    </SectionBannerStyled>
  );
};

export default TitleSection;
