// Import React
import React from "react";
import { Link } from "react-router-dom";

// Import Style and Images
import { GalleryStyled } from "./style";

import galeria1 from "./images/galeria-legiao-1.jpg"
import galeria2 from "./images/galeria-legiao-2.jpg"
import galeria3 from "./images/galeria-legiao-3.jpg"
import galeria4 from "./images/galeria-legiao-4.jpg"
import galeria5 from "./images/galeria-legiao-5.jpg"
import galeria6 from "./images/galeria-legiao-6.jpg"

// Import Components
import ImageGallery from "./ImageGallery";

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
          Os membros do Legião sempre estão presentes nos eventos, veja alguns que participamos.
        </p>
      </div>

      <div className="gallery">
        <ImageGallery
          classe="image-gallery image-gallery-1"
          foto={galeria1}
          alt="primeira imagem"
          textoSpan="Barra de Itariri"
        />

        <ImageGallery
          classe="image-gallery image-gallery-2"
          foto={galeria2}
          alt="segunda imagem"
          textoSpan="Barra de Itariri"
        />

        <ImageGallery
          classe="image-gallery image-gallery-3"
          foto={galeria3}
          alt="terceira imagem"
          textoSpan=""
        />

        <ImageGallery
          classe="image-gallery image-gallery-4"
          foto={galeria4}
          alt="quarta imagem"
          textoSpan="Ação social"
        />

        <ImageGallery
          classe="image-gallery image-gallery-5"
          foto={galeria5}
          alt="quinta imagem"
          textoSpan="Apoio aos irmãos"
        />

        <ImageGallery
          classe="image-gallery image-gallery-6"
          foto={galeria6}
          alt="sexta imagem"
          textoSpan="Sede Legião & Wolf"
        />
      </div>

      <Link to="/galeria" className="btn gallery-btn">
        Veja mais
      </Link>
    </GalleryStyled>
  );
};

export default Gallery;
