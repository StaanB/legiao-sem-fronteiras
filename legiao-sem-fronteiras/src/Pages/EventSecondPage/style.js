// Import Styles
import styled from "styled-components";
import { Colors, Media } from "../../components/GlobalStyles";

export const CardEventStyled = styled.div`
  /* Estilização para mobile */
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: auto;

  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;

  align-items: center;
  justify-content: center;

  background-color: ${Colors.bgColor};

  .left-card-event-section {
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1.5rem;

    h1 {
      text-transform: uppercase;
      font-size: 1.6rem;
    }

    .spans-card-section {
      width: 100%;
      height: 3rem;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      color: ${Colors.whiteColor};

      gap: 1rem;
      font-size: 0.8rem;

      margin-bottom: 3rem;

      svg {
        color: ${Colors.mainColor};
      }
    }
  }

  .right-card-event-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    img {
      width: 15rem;
    }

    p {
      width: 80%;

      margin-top: 1rem;
      font-size: 0.8rem;
      font-weight: 300;

      color: ${Colors.bgColor2};
    }
  }

  /* Desktop responsive */
  @media ${Media.desktop} {
    width: 80vw;
    height: 50vh;

    flex-direction: row !important;
    align-items: flex-start;

    margin-top: 5rem !important;

    .left-card-event-section {
      width: 55% !important;
      align-items: flex-start;

      h1 {
        font-size: 2rem !important;
        margin-top: 2rem;
      }

      .spans-card-section {
        flex-direction: column;
        align-self: flex-start;

        margin-top: 2rem;

        gap: 3rem;

        width: 80%;
        font-size: 1.2rem;
      }
    }

    .right-card-event-section {
      width: 40%;
      flex-direction: column;
      align-items: flex-end;

      img {
        width: 25rem;
        margin-top: 1rem;
      }

      p {
        font-size: 1rem;
        align-self: flex-end;
        margin-right: 1rem;
      }
    }
  }
`;
