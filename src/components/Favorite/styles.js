import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  padding: 1rem;
  width: 100%;
  max-width: 38rem;

  > a {
    flex-shrink: 0;
    > img {
      width: 7.2rem;
      height: auto;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.DARK_100};
      object-fit: cover;
    }
  }

  > .details {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > a {
      > h2 {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        font-family: "Poppins", sans-serif;
        font-size: 2rem;
        font-weight: 500;
      }
    }

    > button {
      color: ${({ theme }) => theme.COLORS.TOMATO_400};
      background: transparent;

      border: none;

      font-family: "Roboto", sans-serif;
      font-size: 1.2rem;
      font-weight: 500;
      text-align: left;

      cursor: pointer;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    > a {
      > img {
        width: 12rem;
        height: 12rem;
      }
    }

    > .details {
      button {
        font-size: 1.6rem;
      }
    }
  }
`;
