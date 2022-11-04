// Import Utilities
import { createGlobalStyle } from "styled-components";


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
`

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

