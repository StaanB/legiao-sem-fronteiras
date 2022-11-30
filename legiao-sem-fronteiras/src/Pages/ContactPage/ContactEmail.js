// Import utilities
import React from "react";
import { ContactEmailStyled } from "./style";
import { SendEmailFirebase } from "./FirebaseSubmit";

// Import icons
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactEmail = () => {
  return (
    <ContactEmailStyled>
      <div className="contact-social-medias">
        <h3>Contato</h3>
        <h2>Contate-nos</h2>
        <p>Entre em contato através de nossas redes sociais</p>

        <div className="social-media-contact-page">
          <a
            href="https://chat.whatsapp.com/FsKDGlm1EhHBQFLmQh15vU"
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

      <form onSubmit={SendEmailFirebase}>
        <p>
          Preencha seu nome, email e a mensagem e ela será entregue em nossos
          emails.
        </p>

        <input type="text" id="username" placeholder="Nome" autoComplete="on" />
        <input
          type="email"
          id="useremail"
          placeholder="Email"
          autoComplete="on"
          required
        />
        <textarea
          id="usermessage"
          placeholder="Mensagem"
          autoComplete="on"
          required
        ></textarea>
        <input type="submit" id="submit-button" />
      </form>
    </ContactEmailStyled>
  );
};

export default ContactEmail;
