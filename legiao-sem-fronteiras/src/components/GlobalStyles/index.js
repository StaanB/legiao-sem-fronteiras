// Import styles
import { createGlobalStyle } from "styled-components";

export const Media = {
    desktop: '(min-width: 1000px)',
    mobile: '(min-width: 300px)'
}

export const Colors = {
    bgColor: "#111",
    bgColor2: '#332E33',
    mainColor: '#E3C63B',
    mainColor2: '#F0AA32',
    whiteColor: '#E2F2DA'
}


export const Global = createGlobalStyle`
    *{
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        transition: all .5s ease;
    }
    
    .dark{
        background-color: black;
        color: #E2F2DA;
    }

    .light{
        background-color: #E2F2DA;
        color: black;
    }

    .background-effect{
        position: relative;
        text-align: center;

        letter-spacing: .25rem;
        text-transform: uppercase;

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
        color: ${Colors.mainColor};
        background-color: ${Colors.bgColor};
        transform: translateY(5px);
    }
`


