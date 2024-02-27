import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.nav`
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    width: 100%;
    height: 9rem;
    padding: 2.4rem 0 0 0;

    display: flex;
    >div {
        justify-self: flex-start;
        align-items: center;
        padding-bottom: .8rem;

            >span {
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.CAKE_200};

            padding-left: .8rem;

            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 1.2rem;
            }
        }

        >#NewDish {
            display: none;
            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            display: block;
}
        }

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            background-color: ${({ theme }) => theme.COLORS.DARK_700};

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
}       
`

export const Menu = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-size: 3rem;

    margin-left: 3rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            display: none;
}
`

export const Searchbar = styled.input`
    display: none;
    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            display: block;
            height: 3rem;
}
`

export const SignOut = styled.button`
    display: none;
    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            display: block;
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            width: 100%;
}
`