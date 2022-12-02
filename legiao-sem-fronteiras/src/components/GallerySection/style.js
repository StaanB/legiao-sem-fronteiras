import styled from "styled-components";
import { Colors, Media } from "../GlobalStyles";

export const GalleryStyled = styled.section`
  /* Responsividade para desktop */
  @media ${Media.desktop} {
    width: 95vw !important;

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
      width: 95%;
      height: 90%;
      margin: auto;

      display: grid !important;
      gap: none !important;
      grid-template-columns: repeat(6, 1fr);
      grid-auto-rows: 300px;


      .image-gallery-1{
        grid-row: span 1;
        grid-column: span 3;
      }

      .image-gallery-2{
        grid-row: span 1;
        grid-column: span 3;
      }

      .image-gallery-3{
        grid-row: span 1;
        grid-column: span 2;
      }

      .image-gallery-6{
        grid-row: span 1;
        grid-column: span 2;
      }

      .image-gallery {
        display: flex;
        flex-direction: column;
        img {
          width: 90%;
          height: 90%;
          object-fit: cover !important;
        }
        span {
          width: 70%;
          left: 10%;
        }
      }
    }

    .gallery-btn {
      width: 10% !important;
      font-size: 0.9rem;
    }
  }

  /* Responsividade para MobileS */
  width: 90vw;
  height: auto;

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
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .image-gallery {
      img {
        width: 90%;
        height: 90%;

        transition: all 0.5s;
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
      }

      img:hover {
        transform: scale(1.05);
      }

      span {
        position: relative;
        white-space: nowrap;

        bottom: 2rem;

        text-shadow: 2px 2px 2px black;

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
