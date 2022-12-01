import styled from "styled-components";
import { Colors, Media } from "../../components/GlobalStyles";

export const GridStyled = styled.div`
  /* Responsividade para Desktop */
  @media ${Media.desktop} {
    height: 100vh !important;

    h2 {
      font-size: 2rem;
    }

    .grid-template {
      grid-template-columns: repeat(6, 1fr);
      grid-auto-rows: 100%;
    }

    .h1 {
      grid-row: span 1;
    }

    .h2 {
      grid-row: span 2;
    }

    .w-1 {
      grid-column: span 1;
    }

    .w-2 {
      grid-column: span 2;
    }
  }

  /* Responsividade para mobileS */
  width: 90vw;
  height: auto;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    width: 100%;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  p {
    width: 80%;
    font-weight: 300;
    color: ${Colors.bgColor2};
    margin-bottom: 3rem;
  }

  .grid-template {
    display: grid;
    margin: auto;
    grid-template-rows: repeat(6, 1fr);
    grid-auto-columns: 100%;
    grid-gap: 1rem;
    margin-bottom: 2rem;

    .grid-image {
      width: 100%;
      height: 100%;
      align-self: center;
      object-fit: cover;
    }
  }
`;
