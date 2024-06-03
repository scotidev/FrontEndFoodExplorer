import styled from "styled-components"

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    display: flex;
    align-items: center;
    justify-content: center;
        
    width: 100%;
    border-radius: 5px;
        
    >input{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        background-color: transparent;

        display: flex;
        justify-content: center;
        padding-left: 16px;

        width: 100%;
        height: 4.8rem;

        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%;
        text-align: star;

        border: none;
    }

    >input:focus {
        outline: none;
    }

    >button {
        background-color: transparent;
        
        >svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        font-size: 2.4rem;

        margin-right: 15px;
        transition: .5s;
        }

        >svg:hover {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }    
`