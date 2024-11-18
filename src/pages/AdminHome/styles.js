import styled from 'styled-components'
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
        max-width: 125rem;
        height: 10rem;
        margin: 13rem 0 6.2rem 1rem;
        border-radius: 3px;

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            height: 18rem;
            margin-top: 18rem;
        }

        @media (min-width: ${DEVICE_BREAKPOINTS.Desktop}) {
            justify-content: center;
            
            height: 26rem;
            margin-top: 26rem;
        } 

        >img {  
            position: relative;
            top: -36px;
            right: 25px;
            opacity: calc(0.8);
            z-index: 1;

            width: 191px;
            height: 149px;

            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                width: 320px;
                height: 245px;
                top: -45px;
            }

            @media (min-width: ${DEVICE_BREAKPOINTS.Desktop}) {
                background-color: transparent;
                position: relative;
                top: -145px;
                left: -75px;
                width: 632px;
                height: 406px;
            }
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

                @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                    font-size: 4rem;
                    font-size: 500;
                }
            }
            
            >p {
                font-size: 1.2rem;
                font-weight: 400;
                line-height: 140%;

                @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                    font-size: 1.6rem;
                    font-size: 400;
                    line-height: 100%;
                }
            }
        }     
    }

    >section {
        align-self: flex-start;

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            align-self: flex-start;
        }

        >h2 {
            font-size: 1.8rem;
            font-weight: 500;

            margin: 0 0 2.4rem 2.4rem; 

            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                font-size: 3.2rem;
                line-height: 140%;
            }
        }

        >.cardsWrapper {
            display: flex;
            gap: 1.6rem;
            margin: 0 0 2.4rem 2.4rem;

            cursor: grab;
        }
    }

    >footer {
        position: relative;
    }
`