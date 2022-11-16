// import utilites
import styled from "styled-components";
import { Colors, Media } from "../../GlobalStyles";

export const AboutStyled = styled.section`

@media ${Media.desktop} {
    
}

width: 100vw;
height: 100vh;

.about-image-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{width: 90%;
    margin: 1rem;}

    .medal-square{
        width: 70%;

        position: relative;

        bottom: 5rem;
        margin-bottom: -1.5rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: .5rem;
        padding: 1.5rem;
        background-color: ${Colors.bgColor};

        svg{
            font-size: 4rem;
            color: ${Colors.mainColor};
        }

        p{
            font-size: 2rem;

            svg{
                font-size: 1.2rem;
            }
        }

        span{
            font-size: .9rem;
            color: gray;
        }
    }
}

.about-title-container{
    width: 90%;
    margin: auto;

    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;

    .about-title{
        text-transform: uppercase;
        color: ${Colors.mainColor};
        font-size: .8rem;
    }

    h2{
        font-size: 1.4rem;
        line-height: 2rem;
        text-transform: uppercase;
        width: 85%;
    }

    .about-title-paragraph{
        width: 85%;

        margin-top: 1rem;
        margin-bottom: 1rem;

        font-size:.9rem;
        line-height: 1.2rem;
        color: gray;
        font-weight: 300;
    }

    .cards-section{
        display: flex;
        flex-direction: column;
    }

    .card{
        display: flex;
        gap: 1rem;
        margin-bottom: 1.5rem;

        svg{
            width: 50%;
            padding: .7rem;
            font-size: 4rem;
            background-color: ${Colors.mainColor2};
            
        }

        .card-text{
            display: flex;
            flex-direction: column;
            gap: .7rem;

            h3{
                font-size: 1rem;
            }

            p{
                line-height: 1.3rem;
                font-size: .9rem;
                font-weight: 300;
                width: 90%;
                color: gray;
            }
        }
    }
}

`