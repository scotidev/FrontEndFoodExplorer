import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  padding: 0 2rem;

  font-family: "Poppins", sans-serif;

  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    margin: 2.4rem 0 1.6rem;

    font-size: 3rem;
    font-weight: 500;
    line-height: 140%;
    text-align: center;
  }

  .cartList {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    max-height: 50vh;
    padding: 1.2rem;

    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.LIGHT_300};
      border-radius: 4px;
    }

    > .cartItem {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};

      width: 100%;
      max-width: 39rem;
      padding: 1.5rem;
      border-radius: 8px;

      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 1.5rem;

      img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        object-fit: cover;
      }

      .details {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h3 {
          font-size: 1.6rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        span {
          font-family: "Roboto", sans-serif;

          font-size: 1.6rem;
          color: ${({ theme }) => theme.COLORS.CAKE_200};
          white-space: nowrap;
        }
      }

      .actions {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .stepper {
          gap: 0.8rem;
          padding: 0;
          height: fit-content;
        }

        .removeButton {
          color: ${({ theme }) => theme.COLORS.TOMATO_400};
          background: transparent;

          border: none;

          font-family: "Roboto", sans-serif;
          font-size: 1.6rem;
          font-weight: 500;
          text-align: center;

          cursor: pointer;
        }
      }
    }
  }

  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;

    margin-top: 3rem;

    h2 {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .buyButton {
      width: 70%;
      max-width: 30rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    .cartList {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
