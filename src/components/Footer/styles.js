import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
    background-color: ${({theme}) => theme.COLORS.DARK_600};

    width: 100%;
    height: 6rem;
    padding: 2.4rem 6rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    font-family: 'Roboto', sans-serif;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        justify-content: space-around;

        padding: 4rem 0;
        gap: 30rem;
}

    >div {
        color: ${({theme}) => theme.COLORS.LIGHT_700};

        font-size: clamp(0.75rem, 0.1696rem + 2.9018vw, 1.5625rem);
        font-weight: 700;

        display: flex;
        align-items: center;
        gap: .8rem;

        white-space: nowrap;

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        font-size: 2rem;
}

        >svg {
        width: clamp(1.5625rem, 0.8036rem + 3.7946vw, 2.625rem);
        }
    }

    >p {
        color: ${({theme}) => theme.COLORS.LIGHT_200};

        font-size: clamp(0.5rem, 0.1429rem + 1.7857vw, 1rem);
        font-weight: 400;

        white-space: nowrap;
        
        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        font-size: 1.4rem;
}
    }
`