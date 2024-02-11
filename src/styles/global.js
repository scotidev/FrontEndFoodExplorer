import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
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

// font-family: 'Poppins', sans-serif;
// font-family: 'Roboto', sans-serif;