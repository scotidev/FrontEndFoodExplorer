import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.form`
    height: 100vh;
    padding: 16rem 6rem;

    display: flex;
    flex-direction: column;

    overflow-y: auto;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 6rem;

        overflow: hidden;
    }

    >div {
        margin-bottom: 7rem;
        font-size: 1.7rem;
        
        white-space: nowrap;

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            width: 50%;
        }

        >svg {
            min-height: 4rem;
            min-width: 4rem;
        }
    }

    >.loginBox {

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            background-color: ${({ theme }) => theme.COLORS.DARK_700};
            justify-content: center;
            align-items: center;

            padding: 4rem;
            margin: 14rem auto;
            border-radius: 16px;
        }

        >h2 {
            display: none;

            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                display: block;
                margin-bottom: 3.2rem;

                color: ${({ theme }) => theme.COLORS.LIGHT_100};

                text-align: center;
                font-family: 'Poppins', sans-serif;
                font-size: 3.2rem;
                font-weight: 500;
                line-height: 140%;
            }
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

        >button {
            min-width: 22rem;
        }

        >a {
            display: block;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-size: 1.44rem;
            font-weight: 500;
            line-height: 2.4rem; 

            width: fit-content;
            margin: 3.2rem auto 0;

            white-space: nowrap;
            transition: .5s;
        }

        >a:hover {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`
