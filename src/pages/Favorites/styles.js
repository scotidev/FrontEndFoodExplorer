import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  padding: 0 2rem;

  > a .backButton {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 140%;

    display: flex;
    align-items: center;
    width: fit-content;

    transition: 0.5s;

    &:hover {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > .favoritesContainer {
    width: 100%;

    > h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      margin: 2.4rem 0 1.6rem;

      font-family: "Poppins", sans-serif;
      font-size: 3rem;
      font-weight: 500;
      line-height: 140%;
      text-align: center;
    }

    > .favoritesList {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.6rem;
    }
  }

  > .noFavorites {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    height: 60vh;

    > svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_600};
      font-size: 4rem;
    }

    > p {
      color: ${({ theme }) => theme.COLORS.LIGHT_600};
      font-family: "Roboto", sans-serif;

      font-size: 1.8rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    > a .backButton {
      margin-left: 8rem;
      font-size: 2.4rem;
    }

    > .favoritesContainer {
      > h1 {
        font-size: 4rem;
        margin: 0.2rem 0 2.2rem;
      }

      > .favoritesList {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 3.2rem;
      }
    }
  }
`;
