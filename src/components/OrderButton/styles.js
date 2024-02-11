import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    width: 9.2rem;
    height: 4.8rem;
    padding: 1.2rem 2.4rem;
    border-radius: 5px;
    
    font-family: 'Poppins', sans-serif;

    transition: .3s;

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    }
`