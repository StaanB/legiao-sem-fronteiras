// Import utilities
import React from "react";

// Import Style
import HerobannerStyled from "./style";

// Import Images
import mainImage from "./images/example.png"

const Herobanner = () => {
    return(
        <>
        <HerobannerStyled mainImage={mainImage}>
        <div className="title-container">

            <span className="background-title-text background-effect">Irmandade</span>

            <span className="welcome">Bem vindo a irmandade</span>

            <h1 className="main-title">WE'R NOT ONLY RIDING CLUB, WE'ARE TEAM OF ADVENTURE LIFE</h1>

            <p className="main-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor</p>

            <a href="#contact"><button className="btn title-btn">Contate-nos</button></a>

        </div>

        </HerobannerStyled>
        </>
    )
}

export default Herobanner