// Import styles
import styled from "styled-components";
import { Colors } from "../GlobalStyles";
import { Media } from "../GlobalStyles";

const HerobannerStyled = styled.div`

display: flex;
flex-direction: column;

width: 100vw;
height: 100vh;

background-color: black;

img{
    background:  no-repeat cover;
    width: 95%;
    height: 95%;
    opacity: 30%;

    margin: auto;

    z-index: 0;

}

.title-container{
    background-image: url("${props => props.mainImage}");
    background-position: center;
    

    display: flex;
    flex-direction: column;
    margin: auto;


    width: 85%;
    height: 95%;
    gap: 1rem;
    
    align-items: center;
    text-align: center;

    .background-title-text{
        top: 15%;
        font-size: 2.5rem;

        display: none;
    }

    .welcome{
        margin-top: 6rem;
        font-size: .9rem;
        font-weight: 600;

        color: ${Colors.mainColor};
        text-transform: uppercase;
        
    }

    .main-title{
        width: 90%;

        font-size: 1.5rem;
        font-weight: 700;

        text-transform: uppercase;
        justify-content: center;
    }

    .main-paragraph{
        width: 90%;

        font-size: .9rem;
        font-weight: 300;
        line-height: 1.3rem;
    }

    .title-btn{
        margin-top: 1rem;
    }
    /* Responsividade para Desktop */
    @media ${Media.desktop}  {
        .welcome{
            color: red;
        }

    }
}

`

export default HerobannerStyled