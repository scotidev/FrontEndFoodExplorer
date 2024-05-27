import { createGlobalStyle } from "styled-components"
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints"

export default createGlobalStyle`
    :root {
        font-size: 62.5%;

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {

        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK_400}
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
        border: none;
    }
`