import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  width: 100%;
  height: 11rem;
  padding: 0 2.4rem;

  display: grid;
  grid-template-columns: 8rem 1fr 8rem;
  grid-template-areas: "menu logo desktop";
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 2;

  > .menuButton {
    grid-area: menu;
  }

  > .logoWrapper {
    grid-area: logo;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    min-width: 0;

    > span {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-family: Roboto;
      font-size: 1rem;
    }
  }

  .desktopWrapper {
    grid-area: desktop;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.6rem;
    padding: 0;
    margin: 0;

    > .newDishButton {
      display: none;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.2rem;

    > .logoWrapper {
      flex-direction: column;
      flex-shrink: 0;
      gap: 0;

      > span {
        align-self: end;
      }
    }

    > .desktopWrapper {
      width: 100%;
      gap: 3.2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      > .newDishButton {
        display: flex;
        white-space: nowrap;
      }
    }
  }
`;

export const Menu = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 3rem;

  > svg {
    vertical-align: middle;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    display: none;
  }
`;

export const Searchbar = styled.div`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    display: flex;
    width: 100%;
  }
`;

export const Orders = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 3rem;
  position: relative;

  > svg {
    vertical-align: middle;
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -3px;
    right: -5px;

    width: 2rem;
    height: 2rem;
    border-radius: 99px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    display: none;
  }
`;

export const SignOut = styled.button`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    display: flex;
    flex-shrink: 0;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    min-width: 0;
    width: 5rem;

    font-size: 3.2rem;

    &:hover {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      transition: 0.3s;
    }
  }
`;
