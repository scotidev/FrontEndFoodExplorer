import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
        
    width: 100%;
    border-radius: 5px;
        
    >input{
        flex: 1;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        background-color: transparent;

        display: flex;
        justify-content: center;
        padding: 8px;
        padding-left: 16px;

        width: 100%;
        height: 4.8rem;

        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%;
        text-align: star;

        border: 1px solid #ccc;
        border-radius: 4px;
    }

    >input:focus {
        outline: none;
    }

    >button {
        display: none;
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
`;

export const SearchResults = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;

    .searchResultItem {
        padding: 8px;
        cursor: pointer;

        &:hover {
            background: #f0f0f0;
        }
    }
`;