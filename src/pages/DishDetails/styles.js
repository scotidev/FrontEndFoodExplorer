import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > button {
    align-self: start;
    margin: 0 0 1rem 5rem;
  }

  > .content {
    width: 75%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    > img {
      height: 26.4rem;
      width: 26.4rem;
      object-fit: cover;
      border-radius: 50%;
    }

    > .informationContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 100%;

      > h1,
      p {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: "Poppins", sans-serif;
        line-height: 140%;
      }

      > h1 {
        font-size: 2.7rem;
        font-weight: 500;
        white-space: nowrap;

        margin-bottom: 2.4rem;
      }

      > p {
        font-size: 1.6rem;
        font-weight: 400;
        text-align: center;

        margin-bottom: 2.4rem;
      }

      > .ingredientsWrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.2rem;

        margin-bottom: 3rem;
        width: 100%;
      }

      > a,
      > .stepperAndButtonWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      > a .editButton {
        width: 28rem;
      }

      > .stepperAndButtonWrapper {
        margin-top: 2rem;
        gap: 1.6rem;

        > button {
          width: 100%;
          max-width: 28rem;
          height: 5rem;
          padding: 1.2rem 2.4rem;
        }
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    > button {
      margin-left: 12rem;
    }

    > .content {
      flex-direction: row;
      gap: 10rem;
      padding: 3rem 5rem 0;

      > img {
        height: 45rem;
        width: auto;
      }

      > .informationContainer {
        justify-content: start;
        align-items: flex-start;
        text-align: left;

        > h1 {
          font-size: 4rem;
          white-space: normal;
        }

        > p {
          font-size: 2.4rem;
          text-align: start;
        }

        .ingredientsWrapper {
          justify-content: flex-start;
        }

        > a .editButton {
          max-width: 20rem;
        }

        > .stepperAndButtonWrapper {
          flex-direction: row;
          justify-content: flex-start;
        }
      }
    }
  }
`;
