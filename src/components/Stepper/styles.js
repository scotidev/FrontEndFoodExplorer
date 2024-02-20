import styled from "styled-components"

export const Container = styled.div`

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    width: fit-content;
    height: 3.2rem;
    padding: 0.4rem 0.8rem;
    border-radius: 5px;
    
    font-family: 'Poppins', sans-serif;

    cursor: default;
`
