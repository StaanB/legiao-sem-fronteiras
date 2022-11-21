import React from "react";

import styled from "styled-components";
import { Colors } from "../../components/GlobalStyles";
import teste from "./images/teste2.png"


const EventBannerStyled = styled.div`

width: 80vw;
height: 55vh;
margin: auto;
margin-top: 5rem;

background-image: url("${props => props.fundo}");
background-position: center;
background-repeat: no-repeat;
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
gap: 4rem;

h1{
    text-transform: uppercase;
    width: 90%;
    font-size: 1.6rem;
}

span{
    width: 80%;

    font-size: 1rem;
    color: ${Colors.whiteColor};
    font-weight: 300;
}



`

const EventBanner = () => {
    return (
        <EventBannerStyled className="event-banner-section-title" fundo={teste} data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000">
            <h1>Nossos Eventos</h1>
            <span>Eventos com participação do Grupo</span>
        </EventBannerStyled>
    )
}

export default EventBanner