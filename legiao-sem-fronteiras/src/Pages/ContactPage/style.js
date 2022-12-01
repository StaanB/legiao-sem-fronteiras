import styled from "styled-components";
import { Colors, Media } from "../../components/GlobalStyles";

export const ContactEmailStyled = styled.div`
  /* Responsividade para desktop */
  @media ${Media.desktop} {
    width: 90vw;

    flex-direction: row;
    justify-content: space-around;

    margin-bottom: 6rem !important;

    .contact-social-medias {
      width: 50%;
      height: auto;

      h3 {
        font-size: 0.9rem !important;
      }

      h2 {
        font-size: 2rem !important;
      }

      .social-media-contact-page {
        height: 100%;
        justify-content: space-around !important;

        svg {
          font-size: 4rem !important;
        }
      }
    }

    form {
      width: 30%;
    }
  }

  /* Responsividade para MobileS */
  width: 90vw;
  height: auto;

  margin-bottom: 3rem !important;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .contact-social-medias {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 0.7rem;
      text-transform: uppercase;
      color: ${Colors.mainColor};
      margin-bottom: 0.1rem;
    }

    h2 {
      font-size: 1.5rem;
      text-transform: uppercase;
    }

    p {
      width: 80%;

      font-weight: 300;
      font-size: 0.9rem;

      margin-top: 0.3rem;
      margin-bottom: 1rem;

      text-align: center;

      color: ${Colors.bgColor2};
    }

    .social-media-contact-page {
      width: 90%;

      margin-bottom: 2rem;
      margin-top: 2rem;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      svg {
        font-size: 3rem;
        padding: 0.6rem;

        border: 1px solid ${Colors.mainColor};
        color: ${Colors.mainColor};

        transition: 0.3s;

        cursor: pointer;
      }

      svg:hover {
        color: ${Colors.bgColor};
        background-color: ${Colors.mainColor};

        transform: scale(0.9);

        transition: all 0.5s ease;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
    background-color: ${Colors.bgColor};
    padding: 1rem;

    p {
      align-self: center;
      text-align: center;

      margin-bottom: 1rem;

      font-size: 1rem;
      font-weight: 300;

      color: ${Colors.bgColor2};
    }

    #username,
    #useremail {
      width: 100%;
      height: 2.5rem;
      transition: all 0.5s ease;
    }

    #usermessage {
      width: 100%;
      height: 3.5rem;
      transition: all 0.5s ease;
      resize: none;
      font-family: "Roboto";
    }

    #submit-button {
      width: 50%;
      height: 2.5rem;

      background-color: ${Colors.mainColor};
      color: ${Colors.bgColor};
      text-transform: uppercase;
      border: none;
      transition: all 0.5s ease;
    }

    #username:hover {
      border: 2px solid ${Colors.mainColor};
    }

    #useremail:hover {
      border: 2px solid ${Colors.mainColor};
    }

    #usermessage:hover {
      border: 2px solid ${Colors.mainColor};
    }

    #submit-button:hover {
      background-color: ${Colors.mainColor2};
    }
  }
`;
