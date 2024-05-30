import styled from "styled-components"

export const Container = styled.div`
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    width: 10rem;
    height: 3.2rem;
    padding: 0.4rem 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: 500;

    >svg {
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
       
        font-size: 2.5rem;
        
        cursor: pointer;
    }
`
