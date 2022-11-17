// import styles
import styled from "styled-components";
import { Colors, Media } from "../../GlobalStyles";

export const ContactStyled = styled.section`

@media ${Media.desktop} {
    height: 55vh !important;
    display: grid !important;
    grid-template-columns: 70% 30% !important;
    gap: 1rem !important;

    .contact-social-medias{
       p{
        width: 40% !important;
       }
    }

    .social-medias-icons{
        width: 40% !important;
    }

    .contact-consult-area{
        gap: 4rem !important;

        .contact-information-card{
            p{
                font-size: 1rem !important;
            }
        }
    }

    .copyright-section{
        width: 100% !important;
        margin-left: 10rem;
        flex-direction: row !important;
        justify-content: space-around !important;
    }
}

/* Responsividade para mobile */
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 2rem;

.contact-social-medias{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    gap: 2rem;

    img{

        border-radius: 10rem;
        border: 4px solid ${Colors.mainColor};
        width: 10rem;

        z-index: 0;
    }

    p{
        width: 80%;
        text-align: center;
        font-size: .9rem;
        color: ${Colors.bgColor2};
        font-weight: 300;
    }
}

.social-medias-icons{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    gap: 1rem;
    justify-content: space-between;

    svg{
        font-size: 3rem;
        border: 1px solid ${Colors.bgColor2};
        padding: .6rem;
        color: ${Colors.mainColor};
        transition: .3s;
        cursor: pointer;
    }

    svg:hover{
        color: ${Colors.bgColor};
        background-color: ${Colors.mainColor};
        font-size: 2.8rem;
    }
}

.contact-consult-area{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    .number-icon{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        border: 2px solid ${Colors.mainColor};
        padding: 1rem;

        svg{
            width: 20%;
            height: 100%;
            font-size: 2rem;
            padding: 4px;
            background-color: ${Colors.mainColor};
            color: ${Colors.bgColor};
        }
    }

    .contact-information-card{
        display: flex;
        align-items: center;
        gap: 1rem;

        svg{
            color: ${Colors.mainColor};
        }

        p{
            font-size: .9rem;
            color: ${Colors.bgColor2};
            font-weight: 300;
        }
    }
}

.copyright-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    border-top: 1px solid ${Colors.bgColor};

    p{
        text-align: center;
        font-size: .8rem;
        font-weight: 300;
        color: ${Colors.bgColor2};
    }
}

`