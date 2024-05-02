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
        background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
        
        display: flex;

        margin-top: 13rem;
        border-radius: 3px;
        
        >img {
            opacity: calc(0.8);
        }
        
        >.titleAndTextWrapper {
            >h1 {
                font-size: 1.8rem;
                font-weight: 600;

                white-space: nowrap;
            }

            >p {
                font-size: 1.2rem;
                font-weight: 400;
            }
        }     
    }

    >section {
        position: relative;

        >.cardsWrapper {
        display: flex;
        }

        >h2 {
            font-size: 1.8rem;
            font-weight: 500;
        }

        >svg {
            display: none;
            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            display: blo;
            }
        }
    }

    >footer {
        position: relative;
    }
`

 
//cursor: grab;