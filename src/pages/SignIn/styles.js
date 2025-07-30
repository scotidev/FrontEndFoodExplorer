import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.form`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    flex-direction: row;
    justify-content: space-around;
  }

  > div {
    margin-bottom: 7rem;
    font-size: 1.7rem;

    white-space: nowrap;
  }

  > .loginBox {
    width: 70%;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
      background-color: ${({ theme }) => theme.COLORS.DARK_700};

      padding: 6.4rem;
      border-radius: 16px;
      width: 55rem;
    }

    > h2 {
      display: none;

      @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
        display: block;
        margin-bottom: 3.2rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        font-family: "Poppins", sans-serif;
        font-size: 3.2rem;
        font-weight: 500;
        text-align: center;
        line-height: 140%;
      }
    }

    > .inputWrapper {
      width: 100%;
      min-width: 22rem;
      margin-bottom: 3.2rem;

      > label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        display: inline-block;
        margin-bottom: 1rem;

        font-family: "Roboto", sans-serif;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 100%;
      }
    }

    > button {
      min-width: 22rem;
    }

    > a {
      display: block;

      width: fit-content;
      margin: 3.2rem auto 0;
      transition: 0.5s;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      font-family: "Poppins", sans-serif;
      font-size: 1.44rem;
      font-weight: 500;
      text-align: center;
      line-height: 2.4rem;
    }

    > a:hover {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
