import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    width: 21.6rem;
    height: 5.6rem;
    padding: 1.6rem 3.3rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    transition: .3s;

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    }

    >svg {
        font-size: 3.5rem;
    }
`