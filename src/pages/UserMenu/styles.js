import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {

}

    >.header {
        background-color: ${({ theme }) => theme.COLORS.DARK_700};

        width: 100%;
        height: 11rem;

        display: flex;
        align-items: end;

        padding: 0 0 3rem 3rem;

        >button {
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            font-size: 2.4rem;
            height: 2.4rem;
            margin-right: 1rem;
        }

        >span {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            
            font-family: 'Roboto', sans-serif;
            font-size: 1.8rem;
            font-weight: 400;
        }
    }

        >.content {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 2rem;
        align-items: flex-start;
        gap: 1rem;
        
        
        >.bottomBorder {
            border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000}; 
            width: 100%;
            
                >button {
                background-color: transparent;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};

                font-family: 'Poppins', sans-serif;
                font-size: 24px;

                font-weight: 300;
                line-height: 140%;           
                margin-top: 2.6rem;
                }
            }
        }   
`