// import utilites
import styled from "styled-components";
import { Colors, Media } from "../../GlobalStyles";


export const BannerStyled = styled.div`
    /* Desktop responsivity */
    @media ${Media.desktop} {
        width: 80% !important;
        height: 35% !important;
        flex-direction: row !important;

        margin-top: 5rem !important;

        .banner-title{
            width: 50%;
            margin: 2rem !important;

            h2{
                font-size: 2rem !important;
            }

            .background-banner-text{
            font-size: 3rem !important;
            top: 20% !important;
        }

        .banner-icons{
            flex-direction: row !important;
            gap: 1rem;
        }

        p{
            font-size: 1rem;
            width: 70%;
        }
        }

        .banner-timer{
                position: relative !important;
                right: 3% !important;

            .timer{
                grid-template-columns: 1fr 1fr 1fr 1fr !important;

                margin: 1.8rem !important;

                li{
                    font-size: 2rem !important;
                }
            }

            
        }

       
    }

    /* Mobile styles responsive */
    display: flex;
    flex-direction: column;

    text-align: start;

    width: 90%;
    height: 90%;

    margin: auto;
    margin-top: 2rem;
    margin-bottom: 4rem;
    padding: .5rem;

    background-color: ${Colors.bgColor};

    .banner-title{
      margin: 1.3rem;

      h2{
        text-transform: uppercase;
        text-align: start;

        font-size: 1.5rem;
      }

      .background-banner-text{
        font-size: 3rem;
        letter-spacing: .7rem;

        top: 73%;
      }

      .banner-icons{
        display: flex;
        flex-direction: column;

        margin-top: -2rem;
        margin-bottom: 1rem;

        li{
            margin-bottom: 0.5rem;
            svg{
                font-size: 1.2rem;
                margin-right: .5rem;
                color: ${Colors.mainColor};
            }
            
        }
      }

      p{
           font-weight: 300;
           color: gray;
           margin-bottom: 1.3rem;
        } 
    }

    .banner-timer{
        margin: auto;
        background-color: black;

        .timer{
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin: .4rem;

            li{
                display: flex;
                flex-direction: column;
                align-items: center;

                margin: .8rem;

                span{
                    margin-top: 1rem;

                    text-transform: uppercase;
                    font-size: .9rem;
                    color: gray;
                }
            }
        }
    }
`