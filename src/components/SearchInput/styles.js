import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;
  border-radius: 5px;

  height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding: 0 1.6rem;

  > .icon {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-right: 1.4rem;
  }

  > input {
    flex: 1;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: transparent;

    border: none;
    outline: none;

    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    text-align: start;
  }
`;

export const SearchResults = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-family: "Roboto", sans-serif;

  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 5;
  overflow-y: auto;

  max-height: 30rem;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
  }

  .searchResultItem {
    cursor: pointer;
    padding: 1rem 1.6rem;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_800};

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.CAKE_100};
    }

    strong {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 1.8rem;
      font-weight: 700;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      margin-top: 0.5rem;

      list-style: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    li {
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      white-space: nowrap;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;

      font-size: 1.4rem;
    }
  }
`;
