import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    height: 100vh;
    width: 100%;
    position: absolute;
        
    display: flex;
    flex-direction: column;

    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;

    >.banner {
        display: flex;
        align-self: center;
        width: 88%;
        height: 24%;
        margin: 13rem 0 6.2rem 1rem;
        border-radius: 3px;

        >img {  
            opacity: calc(0.8);
            position: relative;
            z-index: 0;
            left: -30px;
            top: -20px;

            width: 191px;
            height: 149px;
        }
        
        >.titleAndTextWrapper {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;

            position: relative;
            left: -35px;
            
            >h1 {
                font-size: 1.8rem;
                font-weight: 600;
                line-height: 140%;
            }
            
            >p {
                font-size: 1.2rem;
                font-weight: 400;
                line-height: 140%;
            }
        }     
    }

    >section {
        position: relative;

        cursor: grab;

        >h2 {
            font-size: 1.8rem;
            font-weight: 500;

            margin: 0 0 2.4rem 2.4rem; 
        }

        >.cardsWrapper {
            display: flex;
            gap: 1.6rem;
            margin: 0 0 2.4rem 2.4rem;
        }


        >svg {
            display: none;
            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            display: block;
            font-size: 100px;
            }
        }
    }

    >footer {
        position: relative;
    }
`