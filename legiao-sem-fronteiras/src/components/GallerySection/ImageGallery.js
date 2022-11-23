import React from "react";

const ImageGallery = ({classe, foto, alt, textoSpan}) => {
    return (
        <div className={classe} data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000">

            <img src={foto} alt={alt}></img>
            <span className="image-text-gallery">{textoSpan}</span>
        </div>
    )
}

export default ImageGallery