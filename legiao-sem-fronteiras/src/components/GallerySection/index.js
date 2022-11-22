import React from "react"
import { GalleryStyled } from "./style"
import teste from "./images/teste.jpg"
import fundo from "../HomeSection/Herobanner/images/example.png"

const Gallery = () => {

    return (
        <GalleryStyled>
            <div className="gallery-title-section">
                <h3>Nossa galeria</h3>
                <h2>Fotos de nossos eventos</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            </div>

            <div className="gallery" fundo={fundo}>
                <div className="image-gallery image-gallery-1">
                    <img src={teste} alt="primeira imagem"></img>
                    <span className="image-text-gallery">Imagem 1</span>
                </div>

                <div className="image-gallery image-gallery-2">
                    <img src={teste} alt="segunda imagem"></img>
                    <span className="image-text-gallery">Imagem 2</span>
                </div>

                <div className="image-gallery image-gallery-3">
                    <img src={teste} alt="terceira imagem"></img>
                    <span className="image-text-gallery">Imagem 3</span>
                </div>

                <div className="image-gallery image-gallery-4">
                    <img src={teste} alt="quarta imagem"></img>
                    <span className="image-text-gallery">Imagem 4</span>
                </div>

                <div className="image-gallery image-gallery-5">
                    <img src={teste} alt="quinta imagem"></img>
                    <span className="image-text-gallery">Imagem 5</span>
                </div>

                <div className="image-gallery image-gallery-6">
                    <img src={teste} alt="sexta imagem"></img>
                    <span className="image-text-gallery">Imagem 6</span>
                </div>
            </div>

            <button className="btn gallery-btn">Veja mais</button>

        </GalleryStyled>
    )
}

export default Gallery