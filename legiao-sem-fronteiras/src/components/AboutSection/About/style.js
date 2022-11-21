// import styles
import styled from "styled-components";

// Import components
import { Colors, Media } from "../../GlobalStyles";

export const AboutStyled = styled.section`

@media ${Media.desktop} {
        /* Responsividade para desktop */
        display: flex;
        flex-direction: row;
        
        gap: 9rem;
        height: 100vh !important;
        margin-top: 1rem;

        .about-image-container{
            img{
                width: 85% !important;
                margin-left: 11rem !important;
            }

            .medal-square{
                width: 40% !important;
                right: 1rem;
            }
        }

        .about-title-container{
            width: 75% !important;

            margin-top: 6rem !important;
            
            h2{
                font-size: 2rem !important;
                width: 80% !important;
            }

            .about-title-paragraph{
                width: 70% !important;
            }

            .cards-section{
                display: grid !important;

                grid-template-columns: 1fr 1fr !important;
                width: 85% !important;
            }
        }
    
}
/* Responsividade para Mobile */
width: 100vw;
height: 170vh;

.about-image-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{width: 90%;
    margin: 1rem;}

    .medal-square{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;
        z-index: 0;

        width: 70%;
        bottom: 5rem;
        margin-bottom: -1.5rem;
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
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: start;

    width: 90%;
    gap: 1rem;

    .about-title{
        text-transform: uppercase;
        color: ${Colors.mainColor};
        
        font-size: .8rem;
    }

    h2{
        text-transform: uppercase;

        font-size: 1.4rem;
        line-height: 2rem;
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

            color: ${Colors.bgColor};
            background-color: ${Colors.mainColor}; 
        }

        .card-text{
            display: flex;
            flex-direction: column;

            gap: .7rem;

            h3{
                font-size: 1rem;
            }

            p{
                width: 90%;

                line-height: 1.3rem;
                font-size: .9rem;
                
                font-weight: 300;
                color: gray;
            }
        }
    }
}

`