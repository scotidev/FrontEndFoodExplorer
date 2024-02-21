import styled from "styled-components"

export const Container = styled.button`

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    width: fit-content;
    height: 3.2rem;
    padding: 0.4rem 0.8rem;
    border-radius: 5px;
    
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    cursor: default;
`
