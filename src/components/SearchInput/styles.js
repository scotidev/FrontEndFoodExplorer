import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
        
    width: 100%;
    border-radius: 5px;
        
    > input {
        flex: 1;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        display: flex;
        justify-content: center;
        padding: .8rem;
        padding-left: 1.6rem;

        width: 100%;
        height: 4.8rem;

        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%;
        text-align: start;

        border: none;
        border-radius: 5px;
        outline: none;

        &:focus {
            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
        }
    }
`

export const SearchResults = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: 'Roboto', sans-serif;

    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    overflow-y: auto;

    border: 1px solid #ccc;
    border-radius: 4px;
    max-height: fit-content;

    .searchResultItem {
        padding: .8rem;
        cursor: pointer;

        &:hover {
            background-color: ${({ theme }) => theme.COLORS.CAKE_100};
        }

        strong {
            font-size: 2rem;
            text-decoration: underline;
        }

        ul {
            display: flex;
            gap: .8rem;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        li {
            font-size: 1.5rem;

            padding: .4rem 0;
        }
    }
`