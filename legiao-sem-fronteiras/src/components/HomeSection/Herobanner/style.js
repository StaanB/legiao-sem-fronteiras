// Import styles
import styled from "styled-components";
import { Colors, Media } from "../../GlobalStyles";

const HerobannerStyled = styled.div`
  /* Responsividade para Desktop */
  @media ${Media.desktop} {
    margin-top: 1rem;

    .title-container {
      width: 95% !important;
      height: 95% !important;

      background-repeat: no-repeat;
      background-size: cover;
      
      margin: auto !important;
    }

    .background-title-text {
      font-size: 10rem;

      position: relative !important;
      top: 10rem;
      display: inline !important;
    }

    .welcome {
      margin-top: 1rem !important;
    }

    .main-title {
      width: 80% !important;
      font-size: 4rem !important;
    }

    .main-paragraph {
      width: 50% !important;
    }
  }

  /* responsividade para mobile */
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: auto;


  .title-container {
    justify-content: center;

    background-image: url("${(props) => props.mainImage}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    margin: auto;

    width: 85%;
    height: 95%;
    gap: 1rem;

    align-items: center;
    text-align: center;

    .background-title-text {
      display: none;
    }

    .welcome {
      margin-top: 6rem;
      font-size: 0.9rem;
      font-weight: 600;

      color: ${Colors.mainColor};
      text-transform: uppercase;
    }

    .main-title {
      width: 90%;

      font-size: 1.5rem;
      font-weight: 700;

      text-transform: uppercase;
      justify-content: center;
    }

    .main-paragraph {
      width: 90%;

      font-size: 0.9rem;
      font-weight: 300;
      line-height: 1.3rem;
    }

    .title-btn {
      margin-bottom: 3rem;
      transition: all 0.5s ease;
      cursor: pointer;
    }
  }
`;

export default HerobannerStyled;
