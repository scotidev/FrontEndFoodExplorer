import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.form`
    height: 100vh;
    padding: 16rem 6rem;

    display: flex;
    flex-direction: column;

    overflow-y: auto;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {

    }

    >div {
        margin-bottom: 7rem;
        font-size: 1.7rem;
        
        white-space: nowrap;

        >svg {
            min-height: 4rem;
            min-width: 4rem;
        }
    }

    >button {
        min-width: 22rem;
    }

    >.inputWrapper {
        width: 100%;
        min-width: 22rem;
        margin-bottom: 3.2rem;

        >label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        
        display: inline-block;
        margin-bottom: 1rem;

        font-family: 'Roboto', sans-serif;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 100%;
        }
    }

    >a {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 1.44rem;
        font-weight: 500;
        line-height: 2.4rem; 

        width: fit-content;
        margin: 3.2rem auto;

        white-space: nowrap;
    }
`
