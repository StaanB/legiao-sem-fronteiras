import React from "react";
import { GalleryStyled } from "./style";
import teste from "./images/teste.jpg";
import fundo from "../HomeSection/Herobanner/images/example.png";
import ImageGallery from "./ImageGallery";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <GalleryStyled
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration="1000"
      className="galery-styled"
    >
      <div className="gallery-title-section">
        <h3>Nossa galeria</h3>
        <h2>Fotos de nossos eventos</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,{" "}
        </p>
      </div>

      <div className="gallery" fundo={fundo}>
        <ImageGallery
          classe="image-gallery image-gallery-1"
          foto={teste}
          alt="primeira imagem"
          textoSpan="Imagem 1"
        />

        <ImageGallery
          classe="image-gallery image-gallery-2"
          foto={teste}
          alt="segunda imagem"
          textoSpan="Imagem 2"
        />

        <ImageGallery
          classe="image-gallery image-gallery-3"
          foto={teste}
          alt="terceira imagem"
          textoSpan="Imagem 3"
        />

        <ImageGallery
          classe="image-gallery image-gallery-4"
          foto={teste}
          alt="quarta imagem"
          textoSpan="Imagem 4"
        />

        <ImageGallery
          classe="image-gallery image-gallery-5"
          foto={teste}
          alt="quinta imagem"
          textoSpan="Imagem 5"
        />

        <ImageGallery
          classe="image-gallery image-gallery-6"
          foto={teste}
          alt="sexta imagem"
          textoSpan="Imagem 6"
        />
      </div>

      <Link to="/galeria" className="btn gallery-btn">Veja mais</Link>
    </GalleryStyled>
  );
};

export default Gallery;
