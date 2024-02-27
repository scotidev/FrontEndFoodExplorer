import styled from "styled-components";

export const Container = styled.div`
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    
    gap: .8rem;

    display: flex;
    align-items: center;
    justify-content: center;
`