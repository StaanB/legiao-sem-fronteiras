// Import utilities
import React from "react";


// Import styles
import { AboutStyled } from "./style";
import {BiMedal} from "react-icons/bi"
import {BsPlus} from "react-icons/bs"
import {GiFullMotorcycleHelmet} from "react-icons/gi"
import {RiGroupFill} from "react-icons/ri"
import {FaHandsHelping} from "react-icons/fa"
import lucio from "./images/lucio.jpg"

const About = () => {
    return (

        <AboutStyled>
            <div className="about-image-container">
                <img src={lucio} alt="foto presidente"></img>
                <div className="medal-square">
                    <BiMedal/>
                    <p>2<BsPlus/></p>
                    <span>Anos de experiência</span>
                </div>
            </div>

            <div className="about-title-container">
                <h3 className="about-title">Sobre o motogrupo</h3>

                <h2>Estamos em atividade desde 2021</h2>

                <p className="about-title-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud tempor dolore adispa</p>

                <div className="cards-section">
                    <div className="card">
                        <GiFullMotorcycleHelmet/>
                        <div className="card-text">
                            <h3>Viaje com a gente</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                    </div>

                    <div className="card">
                        <RiGroupFill/>
                        <div className="card-text">
                            <h3>Comunidade ativa</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                    </div>

                    <div className="card">
                        <FaHandsHelping/>
                        <div className="card-text">
                            <h3>Ajuda aos membros</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                    </div>
                </div>

            </div>


        </AboutStyled>

    )
}

export default About