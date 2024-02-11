import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 2.4rem;
    border-radius: 5px;
    
    font-family: 'Poppins', sans-serif;

    transition: .3s;
`