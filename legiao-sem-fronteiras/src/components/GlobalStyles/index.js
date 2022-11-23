// Import styles
import { createGlobalStyle } from "styled-components";

// Responsividade
export const Media = {
    mobile: '(min-width: 300px)',
    desktop: '(min-width: 1000px)'
}

// Cores para o documento
export var Colors = {
    bgColor: "#111",
    bgColor2: 'gray',
    mainColor: '#E3C63B',
    mainColor2: '#F0AA32',
    whiteColor: 'white'
}

// Estilização global
export const Global = createGlobalStyle`
    /* Estilização do mobile globalmente */
    @media ${Media.mobile} {

    width: 100%;
    height: 100%;

    .invisible{
        display: none;
    }

    .visible{
        display: block;
    }

    #light-button, #dark-button{
        position: absolute;

        left: 50%;
        top: 3%;

        font-size: 1.5rem;

        cursor: pointer;
    }

    #light-button{
        color: ${Colors.whiteColor};
    }

    #dark-button{
        color: black !important;
     }

    #navbar-desktop{
        display: none;
     }
    }
    /* Estilização do Desktop globalmente */
    @media ${Media.desktop} {

        width: 100%;
        height: 100%;

    #light-button, #dark-button{
        position: absolute;

        left: 95%;
        top: 3.5%;

        font-size: 1.5rem;

        color: ${Colors.whiteColor};
        cursor: pointer;
    }

    #navbar-mobile{
        display: none;
    }
    #navbar-desktop{
        display: flex;
    }
    }

    
    /* Resets */
    *{
        font-family: 'Roboto', sans-serif;

        margin: 0;
        padding: 0;

        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        
        border-radius: 5px;
    }

    body{
        overflow-x: hidden;
    }
    /* Tema principal Dark */
    .dark{
        background-color: black;
        color: ${Colors.whiteColor};

        transition: all 1s ease;
    }

    
    /* Tema light com alterações nas classes */
    .light{
        background-color: white;
        color: black;

        transition: all 1s ease;
        /* Barra de navegação no tema claro */
        .navbar-links{
            a{
                color: black;
            }
        }
        /* Titulo do herobanner no tema claro */
        .main-title{color: ${Colors.whiteColor}}

        .main-paragraph{color: ${Colors.whiteColor}}
       
        /* Seção dos eventos no tema claro */
        .banner-event-container{
            background-color: gray;
            
            .banner-title{
                color: ${Colors.whiteColor};

                .event-main-paragraph{
                    color: ${Colors.whiteColor};
                }
            }

            .banner-timer{
                background-color: ${Colors.whiteColor};
            }
        }
        /* Seção sobre no tema claro */
        .about-image-container{
            .medal-square{
                background-color: ${Colors.bgColor};

                p, span{
                    color: white;
                }
            }
        }

        .about-title-container{
            .about-title-paragraph{
                color: black;
                font-weight: 500;
            }

            .card{
                .card-text{
                    p{
                        color: black;
                        font-weight: 500;
                    }
                }
                svg{
                        color: ${Colors.bgColor};
                    }
            }
        }

         /* Seção da Galeria no tema claro */

         .galery-styled{
            background-color: ${Colors.bgColor2};
        }

        .gallery-title-section{
            h2{
                color: ${Colors.whiteColor};
            }

            p{
                color: ${Colors.whiteColor};
            }
        }

        .gallery{
            .image-gallery{
                span{
                    color: ${Colors.whiteColor};
                }
            }
        }

        /* Seção de contato no tema claro */
        .contact-social-medias{
            p{color: black;
            font-weight: 500;}
        }

        .contact-consult-area{
            .number-icon{
                span{color: black;
                    font-weight: 500;}
            }

            .contact-information-card{
                p{color: black;
                font-weight: 500;}
            }
        }

        .copyright-section{
            p{color: black;
            font-weight: 500;}
        }

        /* Outras páginas no tema claro */

        .section-title{
            color: white;
        }

        /* Página de eventos no tema claro */

        .left-card-event-section{
            color: white;

            .spans-card-section{
                span{
                color: white;
                }
            }
        }

        .right-card-event-section{
            p{color: white;
             font-weight: 500;}
        }

       /* Página de sobre nós no tema claro */

        .history-styled{
            background-color: ${Colors.bgColor2};
        }

        .title-history-section{
            h2{color: white}
            p{color: white}
        }

        .history-card{
           .history-year-span{
            color: ${Colors.whiteColor};
           }

           .history-year-paragraph{
            color: ${Colors.whiteColor};
           }
        }

    }
    /* Textos no fundo */
    .background-effect{
        position: relative;
        text-align: center;
        text-transform: uppercase;

        letter-spacing: .25rem;
        
        opacity: 8%;
        
        color: rgba(0, 0, 0, 0);
        -webkit-text-stroke-color: white;
        -webkit-text-stroke-width: 1px;
        z-index: 0;
    }

    .btn{
        text-transform: uppercase;
        border: none;

        color: ${Colors.bgColor};
        background-color: ${Colors.mainColor};

        padding: 1rem;
        border-radius: .1rem;
    }

    .btn:hover{
        color: ${Colors.bgColor};
        background-color: ${Colors.mainColor2};
        transform: translateY(3px);
    }

    
`


