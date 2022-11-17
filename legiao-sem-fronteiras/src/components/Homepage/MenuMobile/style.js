import styled, { css } from 'styled-components'
import { Colors } from '../../GlobalStyles'

const Container = styled.section`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;

    width: 100%;
    height: 100%;
    
    font-size: 1.5rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${Colors.mainColor};
    backdrop-filter: blur(3px);
    background: rgb(227,198,59);
    background: linear-gradient(34deg, rgba(227,198,59,.1) 0%, rgba(17,17,17,.5) 30%);
    
    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);

    svg{
        position: absolute;
        top: .5rem;
        right: .5rem;
        transform: rotate(45deg);
    }

    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 3rem;

        transform: scale(.7);

        a{
            color: ${Colors.mainColor};
            font-weight: 400;
        }

        a:hover{
            border-bottom: 1px solid ${Colors.mainColor};
        }
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);

        svg {
            transform: rotate(0deg);
        }

        nav{
            transform: scale(1);
        }

    `}
`

export default Container