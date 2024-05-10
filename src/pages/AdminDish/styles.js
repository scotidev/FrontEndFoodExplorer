import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;

    >.content {
        width: 75%;
        margin-top: 12rem;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        >.back, h1, p {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-family: 'Poppins', sans-serif;
            line-height: 140%;
        }
        
        >.back {
            background-color: transparent;
            
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: start;
            align-self: flex-start;

            font-size: 2.4rem;
            font-weight: 500;
        }
        

        >h1 {
            font-size: 2.7rem;
            font-weight: 500;
            white-space: nowrap;
        }

        >p {
            font-size: 1.6rem;
            font-weight: 400;
            text-align: center;
        }

        >.ingredientsWrapper {
            float: left;
            text-align: center;

            >button{
                margin: 2rem 0 0 1.6rem;
                display: inline-block;
            }
        }

        >.editButton {
            margin-top: 3rem;
        }
    }
`