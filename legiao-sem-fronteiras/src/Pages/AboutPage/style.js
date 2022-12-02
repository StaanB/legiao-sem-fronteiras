// Import styles
import styled from "styled-components";
import { Colors, Media } from "../../components/GlobalStyles";

export const HistoryStyled = styled.div`
  /* Responsividade para desktop */
  @media ${Media.desktop} {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;

    .title-history-section {
      grid-column-start: 1;
      grid-column-end: 3;

      h3 {
        font-size: 1rem;
      }

      h2 {
        font-size: 2rem;
      }

      p {
        width: 40% !important;
      }
    }

    .history-card {
      img {
        width: 60%;
        align-self: center;
      }

      .history-year-span {
        width: 10% !important;
        align-self: center;
      }

      .history-year-paragraph {
        width: 60% !important;
        align-self: center !important;
        text-align: center !important;
      }
    }
  }

  /* Responsividade para mobileS */
  width: 90vw;
  height: auto;

  margin: auto;

  margin-top: 8rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding: 1rem;

  background-color: ${Colors.bgColor};

  .title-history-section {
    display: flex;
    flex-direction: column;
    align-self: center;
    text-align: center;

    margin-top: 1rem;
    margin-bottom: 3rem;

    h2 {
      align-self: center;
      text-transform: uppercase;
      margin-bottom: 3rem;
    }

    h3 {
      font-size: 0.7rem;
      text-transform: uppercase;
      color: ${Colors.mainColor};
    }

    p {
      text-align: center;
      width: 95%;
      align-self: center;

      font-weight: 300;
      color: ${Colors.bgColor2};
    }
  }
  h2 {
    align-self: center;
  }

  h3 {
    align-self: center;
    font-size: 0.7rem;
    text-transform: uppercase;
    color: ${Colors.mainColor};
  }

  .history-card {
    display: flex;
    flex-direction: column;

    gap: 1rem;
    margin-bottom: 3rem;

    .history-year-span {
      text-align: center;
      width: 25%;

      padding: 0.4rem;

      border: 3px solid ${Colors.mainColor};
    }

    .history-year-paragraph {
      width: 85%;

      font-weight: 300;

      text-align: start;

      color: ${Colors.bgColor2};
    }
  }
`;
