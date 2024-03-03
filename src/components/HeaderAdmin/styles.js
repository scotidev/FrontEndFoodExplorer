import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.nav`
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    width: 100%;
    height: 9rem;
    padding: 2.4rem 0 0 0;

    display: flex;
    justify-content: center;

    position: fixed;
    top: 0;
    z-index: 1;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            background-color: ${({ theme }) => theme.COLORS.DARK_700};

            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 3.2rem; 
}       
    
    >div {
            display: flex;
        
        >.LogoWrap {
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.CAKE_200};

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 0 0 .8rem .8rem;
            gap: 1rem;

            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 1.2rem;

                 @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                    display: block;

                    width: 16rem;
                    height: 4rem;
                    margin-left: 8rem;
                    box-sizing: content-box;

                    text-align: end;
                }   
            }
        }

        >#NewDishBtn {
            display: none;
            
            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                display: inline-block;

                width: 22rem;
                margin-bottom: 2rem ;
                font-size: 1.4rem;
                white-space: nowrap;
}
        }
`

export const Menu = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-size: 3rem;

    position: absolute;
    left: 2.5rem;
    top: 3.9rem;

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

    > div {
        display: none;

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        display: flex;
}
    }
`