import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 2.4rem;
    border-radius: 5px;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    transition: .3s;

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
        
        cursor: default;
    }
`