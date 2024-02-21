import styled from "styled-components"

export const Container = styled.div`

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    width: 10rem;
    height: 3.2rem;
    padding: 0.4rem 0.8rem;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    
    font-family: 'Poppins', sans-serif;
    line-height: 3.2rem;

    cursor: default;
`
