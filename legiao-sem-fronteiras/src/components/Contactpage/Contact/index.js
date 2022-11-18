// import utilities
import React from "react";

// Import Styles
import { ContactStyled } from "./style";
import legiaoLogo from "./images/legiao.png"

// Import icons
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import { IoLogoWhatsapp } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import { HiLocationMarker } from "react-icons/hi"

const Contact = () => {
    return (
        <ContactStyled id="contact" data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000">

            {/* Seção das redes sociais */}
            <div className="contact-social-medias">
                <img src={legiaoLogo} alt="legião logo"></img>
                <p>Sed ut perspiciatis unde omnis iste natus delavirot voluptatem accusantium doloremque.</p>

                <div className="social-medias-icons">
                    <a href="https://chat.whatsapp.com/FsKDGlm1EhHBQFLmQh15vU" target="_blank"><IoLogoWhatsapp /></a>
                    <a href="https://www.instagram.com/legiaosemfronteirasmc/" target="_blank"><AiFillInstagram /></a>
                    <a href="https://m.facebook.com/legiaosemfronteirasmc/" target="_blank"><AiFillFacebook /></a>
                </div>

            </div>

            {/* Seção de contato e localização */}
            <div className="contact-consult-area">
                <div className="number-icon">
                    <BsFillTelephoneFill />
                    <span>71 9 9999-9999</span>
                </div>

                <div className="contact-information-card">
                    <MdEmail />
                    <p>admin@admin.com</p>
                </div>

                <div className="contact-information-card">
                    <HiLocationMarker />
                    <p>Jln Raya Kuta No 25, Kuta bali</p>
                </div>
            </div>

            {/* Seção de copyright */}
            <div className="copyright-section">
                <p>Legião sem Fronteiras site por Stanley Brenner</p>
                <p>Copyright © 2022. All rights reserved.</p>
            </div>
        </ContactStyled>
    )
}

export default Contact