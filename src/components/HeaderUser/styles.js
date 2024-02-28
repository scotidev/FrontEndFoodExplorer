import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.nav`
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    width: 100%;
    height: 9rem;
    padding: 2.4rem 0 0 0;

    display: flex;
    align-items: center;
    justify-content: space-around;

    >div{
        padding-bottom: .8rem;
        
        cursor: default;
    }

    >div:last-child {
        background-color: transparent;
        padding: 0;
        position: relative;

        >span {
            background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            font-weight: 500;

            width: 2rem;
            height: 2rem;
            border-radius: 99px;

            display: flex;
            align-items: center;
            justify-content: center;

            position: absolute;
            top: -5px;
            right: -5px;

            cursor: pointer;

            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                display: none;
            }
        }
    }

    >#OrdersBtn {
            display: none;
            
            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            display: block;
            width: 22rem;
            margin-bottom: 2rem ;
        }
    }
`

export const Menu = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-size: 3rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        display: none;
}
`

export const Orders = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-size: 3rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        display: none;
}
`
export const SignOut = styled.button`
    display: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            display: block;

            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            font-size: 3.2rem;

            margin-right: 8rem;
            margin-bottom: 1.5rem ;
}
`

export const Searchbar = styled.div`
       display: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};;

        width: 70%;
        height: 4.8rem;
        margin-bottom: 2rem ;
        border-radius: 5px;
}
`