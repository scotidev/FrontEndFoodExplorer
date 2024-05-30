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

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {

    }

    >.banner {
        position: relative;
        display: flex;
        align-self: center;
        width: 88%;
        height: 10rem;
        margin: 13rem 0 6.2rem 1rem;
        border-radius: 3px;

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            justify-content: center;
            
            height: 26rem;
            margin: 26rem 0 6.2rem 1rem;
        }   

        >img {  
            opacity: calc(0.8);
            position: sticky;
            z-index: 1;
            top: 0;

            width: 191px;
            height: 149px;

            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                width: 50vw;
                height: 50vh;
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

        >.opacityAndLeftButtonContainer, .opacityAndRightButtonContainer {
            display: none;

            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                position: absolute;
                z-index: 1;
                width: 31rem;
                height: 48.5rem;
                margin-top: 6.5rem;

                display: flex;

                >.leftButton, .rightButton {
                    background-color: transparent;
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};
                    font-size: 4rem;
                    height: fit-content;
                    align-self: center;
                }
            }
        }

        >.opacityAndLeftButtonContainer {
            margin-left: 2rem;
            transform: scaleX(1);

            >.leftButton {
                
            }
        }

        .opacityAndRightButtonContainer {
            margin-left: 100rem;
            margin-top: -50.7rem;

            >.rightButton {
            
            }
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