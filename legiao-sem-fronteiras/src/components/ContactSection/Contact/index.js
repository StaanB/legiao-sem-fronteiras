// import React
import React from "react";

// Import Styles
import { ContactStyled } from "./style";
import legiaoLogo from "./images/legiao.png";

// Import icons
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <ContactStyled
      id="contact"
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration="1000"
    >
      {/* Seção das redes sociais */}
      <div className="contact-social-medias">
        <img src={legiaoLogo} alt="legião logo"></img>
        <p>
          Qualquer dúvida pode entrar em contato através de nossas redes sociais abaixo.
        </p>

        <div className="social-medias-icons">
          <a
            href="https://chat.whatsapp.com/EP5hDjIY8j16tMiwJgSIj1"
            target="_blank"
          >
            <IoLogoWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/legiaosemfronteirasmc/"
            target="_blank"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://m.facebook.com/legiaosemfronteirasmc/"
            target="_blank"
          >
            <AiFillFacebook />
          </a>
        </div>
      </div>

      {/* Seção de contato e localização */}
      <div className="contact-consult-area">
        <div className="number-icon">
          <BsFillTelephoneFill />
          <span><a href="https://wa.me/+5571982604849" target="_blank">(71) 9 8260-4849</a></span>
        </div>

        <div className="contact-information-card">
          <MdEmail />
          <p>legiaosemfronteirasmc@gmail.com</p>
        </div>

        <div className="contact-information-card">
          <HiLocationMarker />
          <p>Endereço em breve.</p>
        </div>
      </div>

      {/* Seção de copyright */}
      <div className="copyright-section">
        <p>Legião sem Fronteiras site por Stanley Brenner</p>
        <p>Copyright © 2022. All rights reserved.</p>
      </div>
    </ContactStyled>
  );
};

export default Contact;
