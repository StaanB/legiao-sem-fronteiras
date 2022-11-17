// Import utilities
import React from "react";
import { BannerStyled } from "./style";

// Import Components
import { IoIosPin } from "react-icons/io"
import { BsFillCalendarCheckFill } from "react-icons/bs"
import { MdAccessTime } from "react-icons/md"
import { timer } from "./timer.js";

timer()

const Banner = () => {
    return (
        <>
            <BannerStyled
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="1000"
            >
                <div className="banner-title" id="event">
                    <h2>independence day ride 2022</h2>

                    <h3 className="background-banner-text background-effect">Evento</h3>

                    <ul className="banner-icons">
                        <li><IoIosPin /> MT. Batur - Kintamoni</li>

                        <li><BsFillCalendarCheckFill />17 de Agosto de 2022</li>

                        <li><MdAccessTime />07:00</li>
                    </ul>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>

                </div>

                <div className="banner-timer">
                    <ul className="timer">
                        <li id="timer-dias">0 <span>dias</span></li>
                        <li id="timer-horas">0 <span>horas</span></li>
                        <li id="timer-minutos">0 <span>minutos</span></li>
                        <li id="timer-segundos">0 <span>segundos</span></li>
                    </ul>

                </div>

            </BannerStyled>
        </>
    )
}

export default Banner