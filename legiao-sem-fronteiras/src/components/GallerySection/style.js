import styled from "styled-components"
import { Colors, Media } from "../GlobalStyles"

export const GalleryStyled = styled.section`
/* Responsividade para desktop */
@media ${Media.desktop}{
    width: 90vw !important;
    height: 100vh;

    .gallery-title-section{
        h2{
            font-size: 2rem !important;
        }

        p{
            width: 60% !important;
            font-size: .9rem !important;
        }
    }
    .gallery{
        height: 50%;
        grid-template-columns: 60% 20% 20% !important;
        grid-template-rows: 60% 40% !important;
        

        .image-gallery{
            display: flex;
            flex-direction: column;
            img{
                width: 80%;
                height: 90%;
            }
            span{
                width: 30%;
                margin: auto;
                bottom: 20% !important;
            }
        }
    }

    .gallery-btn{
        width: 10% !important;
    }
}

/* Responsividade para Mobile */
width: 90vw;
height: 210vh;

margin: auto;

margin-top: 2rem;
margin-bottom: 2rem;
padding: 5px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
text-align: center;

background-color: ${Colors.bgColor};

.gallery-title-section{
    margin: auto;
    display: flex;
    flex-direction: column;

    h3{
        color: ${Colors.mainColor};
        text-transform: uppercase;
        font-size: .8rem;

        margin-bottom: .8rem;
    }

    h2{
        text-transform: uppercase;
        font-size: 1.5rem;
        margin-bottom: 3rem;
    }

    p{
        margin: auto;
        width: 85%;
        font-size: .8rem;
        font-weight: 300;
        color: ${Colors.bgColor2};
    }


    
}




.gallery{
    display: grid;
    grid-template-columns: 1fr;
    
    
    gap: .5rem;

    .image-gallery{
        img{
            max-width: 90%;
            height: 80%;

            object-fit: cover;

            transition: all .5s;
            -moz-transition: all .5s;
            -webkit-transition: all .5s;
            
            margin: auto;
        }

        img:hover{
            transform: scale(1.05);
        }

        span{
            position: relative;
            bottom: 20%;
            background-color: rgba(0, 0, 0, .5);
            padding: .2rem;
        }
        
    }

 
}

.gallery-btn{
        width: 50%;
        margin: auto;
        margin-bottom: 1rem;
        transition: all .5s ease;

        cursor: pointer;
    }

`