import styled from "styled-components";
import { Colors, Media } from "../GlobalStyles";

export const GalleryStyled = styled.section`
  /* Responsividade para mobileL */
  @media ${Media.mobileL} {
    margin-top: 1rem !important;
    height: 140vh !important;

    .image-gallery {
      img {
        width: 85%;
      }
    }
  }

  /* Responsividade para tablet */
  @media ${Media.tablet} {
    height: 200vh !important;
    

    .image-gallery {
      display: flex !important;
      flex-direction: column !important;

      img {
        width: 80% !important;
      }

      span {
        width: 30%;
        margin: auto;
      }
    }
  }

  /* Responsividade para desktop */
  @media ${Media.desktop} {
    width: 95vw !important;
    height: 85vh !important;

    .gallery-title-section {
      h2 {
        font-size: 2rem !important;
      }

      p {
        width: 60% !important;
        font-size: 0.9rem !important;
      }
    }
    .gallery {
      height: 50%;
      grid-template-columns: 60% 20% 20% !important;
      grid-template-rows: 60% 40% !important;

      .image-gallery {
        display: flex;
        flex-direction: column;
        img {
          width: 80%;
          height: 90%;
        }
        span {
          width: 30%;
          margin: auto;
          bottom: 20% !important;
        }
      }
    }

    .gallery-btn {
      width: 10% !important;
    }
  }

  /* Responsividade para MobileS */
  width: 90vw;
  height: 170vh;

  margin-top: 7rem !important;
  margin: auto;

  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  background-color: ${Colors.bgColor};

  .image-gallery-6,
  .image-gallery-5 {
    display: none;
  }

  .gallery-title-section {
    margin: auto;
    display: flex;
    flex-direction: column;

    h3 {
      color: ${Colors.mainColor};
      text-transform: uppercase;
      font-size: 0.8rem;

      margin-bottom: 0.8rem;
    }

    h2 {
      text-transform: uppercase;
      font-size: 1.5rem;
      margin-bottom: 3rem;
    }

    p {
      margin-bottom: 2rem !important;
      margin: auto;
      width: 85%;
      font-size: 0.8rem;
      font-weight: 300;
      color: ${Colors.bgColor2};
    }
  }

  .gallery {
    display: grid;
    grid-template-columns: 1fr;

    gap: 0.5rem;

    .image-gallery {
      img {
        max-width: 90%;
        height: 80%;

        object-fit: cover;

        transition: all 0.5s;
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;

        margin: auto;
      }

      img:hover {
        transform: scale(1.05);
      }

      span {
        position: relative;
        bottom: 20%;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 0.2rem;
      }
    }
  }

  .gallery-btn {
    width: 50%;
    margin: auto;
    margin-bottom: 1rem;
    transition: all 0.5s ease;

    cursor: pointer;
  }
`;
