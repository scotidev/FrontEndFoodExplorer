import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    min-width: 21rem;
    min-height: 29rem;
    padding: 2.4rem;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 8px;

    position: relative;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        width: 30.4rem;
        height: 48rem;
        padding: 1rem 2.4rem;
        }

    >.card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            gap: 1.5rem;
            padding: 3.8rem 0 2.4rem 0;
            }


        >.stepperAndBtnWrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            gap: 1.2rem;

            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                flex-direction: row;
                }

        >#addDishBtn {
            height: 3.2rem;
            padding: 0;

            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                width: 9.2rem;
                height: 4.8rem;
                padding: 1.2rem 2.4rem;
                }
            }
        }
    }
`
export const Favorite = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    position: absolute;
    right: 16px;
    top: 16px;

    font-size: 2.4rem;
`
export const Image = styled.div`
    >img {
        border-radius: 99px;

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            width: 17.6rem;
            height: auto;
        }
    }
`

export const Title = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    text-align: center;

    white-space: nowrap;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        font-size: 2.4rem;
        font-weight: 700;

}
`

export const Description = styled.p`
    display: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        display: block;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        text-align: center;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
}
`

export const Price = styled.span`
    color: ${({ theme }) => theme.COLORS.CAKE_200};

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        height: 5.2rem;
        font-size: 3.2rem;
        line-height: 160%;
}
`